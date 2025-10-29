import qsrc2tw from "./qsrc2tw.js";

export function postProcessCode(twineCode,checkLineEndings=true){
    //const headMatch = twineCode.match(/export\s+default\s+function\s+([A-Za-z_$][\w$]*)/);
    //const functionName = headMatch[1];

    twineCode = twineCode.replace(/QSP\.\$args(?!\w)/gi, "$args");
    twineCode = twineCode.replace(/QSP\.args(?!\w)/gi, "args");

    twineCode = twineCode.replaceAll("<br>", "<br/>");
    twineCode = twineCode.replaceAll("<font", "<span");
    twineCode = twineCode.replaceAll("</font", "</span");
    twineCode = twineCode.replaceAll("size=\"+", "style=\"font-size:");

    const inlineLinkRegexEmergency = /<a\s+href\s*="exec:(.*?)">(.*?)<\/a>/g;
    twineCode = twineCode.replace(inlineLinkRegexEmergency, '<a data-code="$1">$2</a>');

    //Default
    for (const funcName of ["iif","input", "instr", "isnum", "lcase", "len", "loc", "max", "mid", "min", "rand", "replace", "rgb", "str","strpos", "trim", "ucase", "val"]) {
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

    //Arrsizes for arguments
    twineCode = twineCode.replace(/_func\.arrsize\(_QSP,'\$args'\)/gi,"_$args.length");
    twineCode = twineCode.replace(/_func\.arrsize\(_QSP,'args'\)/gi, "_args.length");

    // Comparison from condition to int
    //twineCode = twineCode.replace(/(?<!\?\s*1\s*:\s*0\s*)==\s*0/g, "? 0 : 1");

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
                        codeLine = codeLine.trimEnd() + "\\n\\";
                } else {
                    if (codeLine.match(incompleteLineRegex)) {
                        inMultiline = true;
                        codeLine = codeLine.trimEnd() + "\\n\\";
                    }
                }


                codeLines[i] = codeLine;
            }
            twineCode = codeLines.join("\n");
        }
    }
    return twineCode;
}

export default function defaultProcess(code, existingFiles){

    
    var twineCode = qsrc2tw(code, true);
    //console.log(twineCode);
    

    twineCode = postProcessCode(twineCode);
    
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);


    const findTitleOfOwnPassageRegex = /return <div id="(.*?)"><\/div>;/g;
    
    try{
        const matches = [...twineCode.matchAll(findTitleOfOwnPassageRegex)];
        var title = matches[0][1];
    }
    catch(e){
        throw new Error("TITLE NOT FOUND");
    }


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

            const fileNameToLookUp = _title.slice(1, -1).toLowerCase();
            if (!existingFiles.includes(fileNameToLookUp))
                return `{ type: "E", exec: async(_$args, _args, _QSP, _func)=>console.warn("File does not exist: ${fileNameToLookUp} ${existingFiles.slice(0,3).join("###")}")},`; 

            imports.add(`import {code as ${codeName}} from "./${fname.replaceAll("$", "_")}"`);
            return `{ type: "C", c: async(_$args, _args, _QSP, _func)=>[${codeName},[${remainingArguments}]]},`;                
            
        }
    );



    const twineLines = twineCode.split("\n");
    twineLines.splice(1,0,...Array.from(imports).sort());
    twineCode = twineLines.join("\n");




    return twineCode;

}
