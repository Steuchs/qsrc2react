import qsrc2tw from "./qsrc2tw.js";

export function postProcessCode(twineCode,checkLineEndings=true){
    //const headMatch = twineCode.match(/export\s+default\s+function\s+([A-Za-z_$][\w$]*)/);
    //const functionName = headMatch[1];

    twineCode = twineCode.replaceAll("QSP.$ARGS", "$args");
    twineCode = twineCode.replaceAll("QSP.ARGS", "args")

    twineCode = twineCode.replaceAll("<br>", "<br/>");
    twineCode = twineCode.replaceAll("<font", "<span");
    twineCode = twineCode.replaceAll("</font", "</span");
    twineCode = twineCode.replaceAll("size=\"+", "style=\"font-size:");

    const inlineLinkRegexEmergency = /<a\s+href\s*="exec:(.*?)">(.*?)<\/a>/g;
    twineCode = twineCode.replace(inlineLinkRegexEmergency, '<a data-code="$1">$2</a>');

    //Default
    for (const funcName of ["iif", "instr", "isnum", "lcase", "len", "loc", "max", "mid", "min", "rand", "replace", "rgb", "str","strpos", "trim", "ucase", "val"]) {
        const regex = new RegExp(`(?<!_func\\.|\\w)(${funcName})\\(`, 'g');
        twineCode = twineCode.replace(regex, "_func.$1(");
    }
    //With QSP
    for (const funcName of ["arrcomp","arrpos", "arrsize"]) {
        const regex = new RegExp(`(?<!_func\\.|\\w)(${funcName})\\(`, 'g');
        twineCode = twineCode.replace(regex, "_func.$1(_QSP,");
    }
    //With QSP and async
    for (const funcName of ["dyneval", "func"]) {
        const regex = new RegExp(`(?<!_func\\.|\\w)(${funcName})\\(`, 'g');
        twineCode = twineCode.replace(regex, "await _func.$1(_QSP,");
    }

    // Comparison from condition to int
    twineCode = twineCode.replace(/(?<!\?\s*1\s*:\s*0\s*)==\s*0/g, "? 1 : 0 == 0");

    //Incomplete line endings (multi-line-strings), disabled for command-blocks-only because they don't have commas
    if (checkLineEndings){
        const incompleteLineRegex = /{type:"[^\n]+[^,]$/gm;
        if (twineCode.match(incompleteLineRegex)) {
            const codeLines = twineCode.split("\n");
            var inMultiline = false;
            for (let i = 0; i < codeLines.length; i++) {
                var codeLine = codeLines[i];
                if (inMultiline) {
                    if (codeLine.endsWith(`},`))
                        inMultiline = false;
                    else
                        codeLine = codeLine.trimEnd() + "\\";
                } else {
                    if (codeLine.match(incompleteLineRegex)) {
                        inMultiline = true;
                        codeLine = codeLine.trimEnd() + "\\";
                    }
                }


                codeLines[i] = codeLine;
            }
            twineCode = codeLines.join("\n");
        }
    }
    return twineCode;
}

export default function defaultProcess(code){
    let twineCode = qsrc2tw(code, true);

    twineCode = postProcessCode(twineCode);

    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);


    const findTitleOfOwnPassageRegex = /return <div id="(.*?)"><\/div>;/g;
    const matches = [...twineCode.matchAll(findTitleOfOwnPassageRegex)];

    if (matches.length === 0)
        throw new Error("TITLE NOT FOUND");

    const title = matches[0][1];


    const imports = new Set();
    twineCode = twineCode.replace(
        /{type: "GS", p:async \(_\$args,_args, _QSP,_func\) => \[([^\}\[]*?)((?:\s*,\s*[^\}]*)*)\]},/g,
        (_, _title, _arguments) => {
            /*const argumentsSplit = _arguments.split(",").map((a)=>{
                a = a.trim();
                return a;
            });*/
            const fname = _title.slice(1, -1).replaceAll("$", "_").toLowerCase();
            
            const remainingArguments = _arguments.split(",").map((arg)=>arg.trim()).filter((arg)=>!!arg);

            if(title == fname)
                return `{ type: "C", c: async(_$args, _args, _QSP, _func)=>["SELF",[${remainingArguments}]]},`;    


            const codeName = `code_${capitalize(fname)}`;

            imports.add(`import {code as ${codeName}} from "./${fname.replaceAll("$", "_")}"`);
            return `{ type: "C", c: async(_$args, _args, _QSP, _func)=>[${codeName},[${remainingArguments}]]},`;                
            
        }
    );

    const twineLines = twineCode.split("\n");
    twineLines.splice(1,0,...Array.from(imports).sort());
    twineCode = twineLines.join("\n");




    return twineCode;

}
