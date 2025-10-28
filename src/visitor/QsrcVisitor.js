import qsrcParserVisitor from "../antlr/qsrcParserVisitor.js";

export default class QsrcVisitor extends qsrcParserVisitor{

    jumpCounter = 0;

    visitActBlock(ctx,indent=0){
        var label = this.visitValue(ctx.value());
        const innerCode = this.visitBlock(ctx.block(), indent + 1);
        return [
            `{type: "A", l: async(_$args,_args,_QSP,_func)=>${label}, jumpOffset: ${innerCode.length+1}}`,
            ...innerCode,
        ];
    }

    visitAnyValue(ctx){
        if(ctx.value()) return this.visitValue(ctx.value());
        if(ctx.value()) return this.visitValue(ctx.value());
    }

    visitArrayIndex(ctx){
        if(ctx.value()) return `[${this.visitValue(ctx.value())}]`;
        return "[-1]";
    }

    visitAssignment(ctx){
        if(ctx.assignmentNumber()) return this.visitAssignmentNumber(ctx.assignmentNumber());
        if(ctx.assignmentString()) return this.visitAssignmentString(ctx.assignmentString());
    }

    visitAssignmentNumber(ctx){
        return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>${this.visitIdentifierNumber(ctx.identifierNumber())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${this.visitValue(ctx.value())}}`];
    }

    visitAssignmentString(ctx){
        if(ctx.value())
            return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>${this.visitIdentifierString(ctx.identifierString())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${this.visitValue(ctx.value())}}`];
        var assignmentValue = ctx.multilineBlock().getText().trim().slice(1,-1).replaceAll(/(\r? \n)|\n/gi,'###NL###');
        return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>${this.visitIdentifierString(ctx.identifierString())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${assignmentValue}}`];
    }

    visitAssignmentoperator(ctx){
        switch(ctx.getText()){
            case 'to':
            case '=': return '=';
            case '+=': return '+=';
            case '-=': return '-=';
            case '*=': return '*=';
            case '/=': return '/=';
        }
    }

    visitBlock(ctx,indent = 0){
        let result = [];
        for(let i = 0; ctx.statementLine(i) != null; i++){
            result.push(
                ...this.visitStatementLine(
                    ctx.statementLine(i),indent
                )
            );
        }

        return result;
    }

    visitCommand(ctx){
        try{
            if (ctx.actInline()){
                const innerCode = this.visitCommand(ctx.actInline().command());
                return [
                    `{ type: "A", l: async (_$args,_args,_QSP,_func)=>${this.visitValue(ctx.actInline().value())}, jumpOffset: ${innerCode.length + 1 }}`,
                    ...innerCode,
                ];
            }
            //if(ctx.comment()) return `<!-- ${ctx.comment().getText()} -->`;
            if(ctx.ifInline()) return this.visitIfInline(ctx.ifInline());

            var result = [];
            if(ctx.ParenthesisLeft()) result = `(${this.visitCommand(ctx.command(0))})`;
            else if (ctx.addobj()) result = [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.addobj(${this.visitValue(ctx.addobj().value())})}`];
            else if(ctx.assignment()) result = this.visitAssignment(ctx.assignment());
            else if (ctx.copyarr()) result = [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.copyarr(_QSP, ${this.visitFunctionArguments(ctx.copyarr().functionArguments())})}`];
            else if (ctx.delact()) result = [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.delact(${this.visitValue(ctx.delact().value())})}`];
            else if(ctx.dynamic()) result = this.visitDynamic(ctx.dynamic());
            else if (ctx.gosub()) result = [`{type: "GS", p:async (_$args,_args, _QSP,_func) => [${this.visitFunctionArguments(ctx.gosub().functionArguments())}]}`];
            else if (ctx.gt()) result = [`{ type: "GT", p:async (_$args,_args, _QSP,_func) => [${this.visitFunctionArguments(ctx.gt().functionArguments())}]}`];
            else if (ctx.xgt()) result = [`{ type: "GT",x:true, p:async (_$args,_args, _QSP,_func) => [${this.visitFunctionArguments(ctx.xgt().functionArguments())}]}`];
            else if(ctx.jump()) result = this.visitJump(ctx.jump());
            else if(ctx.jumpmarker()) result = this.visitJumpmarker(ctx.jumpmarker());
            else if(ctx.killvar()) result = this.visitKillvar(ctx.killvar());
            else if(ctx.msg()) result = this.visitMsg(ctx.msg());
            else if (ctx.play()) result = [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.play(${this.visitFunctionArguments(ctx.play().functionArguments())})}`];
            else if(ctx.print()) result = this.visitPrint(ctx.print());
            else if (ctx.savegame()) result = [`{type:"S", p: async (_$args,_args,_QSP,_func)=>${this.visitValue(ctx.savegame().value())}}`];
            else if(ctx.syscall()) result = this.visitSyscall(ctx.syscall());
            else if(ctx.syssetting()) result = this.visitSyssetting(ctx.syssetting());
            else if (ctx.view()) result = ctx.view().value() ? [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.view(${this.visitValue(ctx.view().value())})}`] : [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.view()}`];
            else if (ctx.wait()) result = [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.wait(${this.visitValue(ctx.wait().value())})}`];

            for(let i = 0; ctx.commandAppended(i) != null; i++)
                result.push(...this.visitCommand(ctx.commandAppended(i).command()));

            return result;
        }catch(e){
            return [`{ERROR: ${e}}`];
        }

    }

    visitCommandLine(ctx,indent=0){
        if(ctx.command())  return this.visitCommand(ctx.command());
    }

    visitCompareOperator(ctx){
        if(ctx.EqualOperator()) return "==";
        if(ctx.notEqual()) return "!=";
        if(ctx.GREAT_EQUAL_THAN()) return ">=";
        if(ctx.LOWER_EQUAL_THAN()) return "<=";
        return ctx.getText();
    }

    visitDynamic(ctx){
        return [`{type:"D",c: async (_$args,_args,_QSP,_func)=>[${this.visitFunctionArguments(ctx.functionArguments())}]}`];
    }

    visitEscapedString(ctx,{inPrintContext=false}={}){
        let result = "";

        var getAtom = (ctx,i)=>ctx.stringAtom(i);
        var getTemplateSuffix = (ctx,i)=>ctx.stringTemplateVarSuffix(i);
        var getTemplateSuffixValue = (ctx,i)=>ctx.stringTemplateVarSuffix(i).stringTemplateVar().value();
        var stringBoundaries = "'";

        if(ctx.doubleQuoteAtom(0) != null || ctx.stringDQTemplateVarSuffix(0) != null){
            getAtom = (ctx,i)=>ctx.doubleQuoteAtom(i);
            getTemplateSuffix = (ctx,i)=>ctx.stringDQTemplateVarSuffix(i);
            getTemplateSuffixValue = (ctx,i)=>ctx.stringDQTemplateVarSuffix(i).stringTemplateVarDQ().value();
            stringBoundaries = '"';
        }else if(ctx.TemplateDoubleSingleQuote(0) != null){
            getAtom = (ctx,i)=>ctx.InEscapedStringAtom(i);
            getTemplateSuffix = (ctx,i)=>null;
            getTemplateSuffixValue = (ctx,i)=>null;
        }

        if(getTemplateSuffix(ctx,0) != null)
            inPrintContext = false;

        var parseAtomText = (text) => {
            if(inPrintContext){
                switch (text) {
                    case "''":
                        return "\\'";
                    case '""':
                        return '"';
                }
            }else{
                switch (text) {
                    case "'":
                    case "''":
                    case '""':
                        return String.raw`\'`;
                    case '\\':
                        return '\\\\';
                }
            }
            return text;
        }


        for(let i = 0; getAtom(ctx,i) != null; i++){
            const atomText = getAtom(ctx,i).getText();
            result += parseAtomText(atomText);
        }

        for(let i = 0; getTemplateSuffix(ctx,i) != null; i++){
            const visitedValue = this.visitValue(getTemplateSuffixValue(ctx,i));
            if(inPrintContext)
                result += `<<=${visitedValue}>>`;
            else
                result += `${stringBoundaries}+(${visitedValue})+${stringBoundaries}`;
            for(let j = 0; getAtom(getTemplateSuffix(ctx,i),j) != null; j++){
                const atomText = getAtom(getTemplateSuffix(ctx,i),j).getText();
                result += parseAtomText(atomText);
            }
        }

        /*if(inPrintContext)
            return `''>>${result}<<=''`;*/

        return `${stringBoundaries}${result}${stringBoundaries}`;
    }

    visitFunctionArguments(ctx){
        var results = [];
        for(let i = 0; ctx.value(i) != null; i++)
            results.push(this.visitValue(ctx.value(i)));
        return results.join(' , ');
    }

    visitFunctionWithNumberReturn(ctx){
        return `${ctx.WORD().getText().toLowerCase()}(${this.visitFunctionArguments(ctx.functionArguments())})`;
    }

    visitFunctionWithStringReturn(ctx){
        return `${ctx.WORD().getText().toLowerCase()}(${this.visitFunctionArguments(ctx.functionArguments())})`;
    }



    visitIdentifierNumber(ctx){
        if(ctx.arrayIndex())
            return `_QSP.${ctx.WORD()}${this.visitArrayIndex(ctx.arrayIndex())}`;
        return `_QSP.${ctx.WORD()}[0]`;
    }

    visitIdentifierString(ctx){
        if(ctx.arrayIndex())
            return `_QSP.$${ctx.WORD()}${this.visitArrayIndex(ctx.arrayIndex())}`;
        return `_QSP.$${ctx.WORD()}[0]`;
    }

    visitIfBlock(ctx,indent = 0){
        var result = [];
        // [Condition, code][]
        const ifBlocks = [];


        const ifBlockCode = this.visitBlock(ctx.block());

        ifBlocks.push([this.visitValue(ctx.value()), ifBlockCode]);

        for (let i = 0; ctx.elseIfBlock(i) != null; i++) {
            const condition = this.visitValue(ctx.elseIfBlock(i).value());
            const elseIfCode = this.visitBlock(ctx.elseIfBlock(i).block(), indent + 2);
            ifBlocks.push([condition, elseIfCode]);
        }

        if (ctx.elseBlock()) {
            const elseCode = this.visitBlock(ctx.elseBlock().block(), indent + 2);
            result = [...elseCode];
        }

        for(let i = ifBlocks.length - 1; i>= 0; i--){
            const [condition, code] = ifBlocks[i];
            result = [
                `{type:"I",cond:async (_$args,_args,_QSP,_func)=>${condition}, jumpLine: -1, jumpOffset: ${code.length + 2}}`,
                ...code,
                `{type:"J", jumpLine: -1, jumpOffset: ${result.length + 1}}`,
                ...result,
            ];
        }

        return result;

        result += this.visitBlock(ctx.block(),indent+1);

        for(let i=0; ctx.elseIfBlock(i) != null; i++){
            condition = ctx.elseIfBlock(i).value();
            result += `\n${indentString}\t<ElseIf c={${this.visitValue(condition)}}>\n`;
            result += this.visitBlock(ctx.elseIfBlock(i).block(),indent+2);
            result += `\n${indentString}\t</ElseIf>\n`;
        }

        if(ctx.elseBlock()){
            result += `\n${indentString}\t<Else>\n` + 
                            this.visitBlock(ctx.elseBlock().block(), indent + 2) + 
                            `\n${indentString}\t</Else>\n`;

        }



        result += `\n${indentString}</If>\n`;

        if(ctx.commandAppended())
            result += this.visitCommand(ctx.commandAppended().command());

        return result;

    }

    visitIfInline(ctx){
        if (ctx.ELSE()){
            const ifCommands = this.visitCommand(ctx.command(0));
            const elseCommands = this.visitCommand(ctx.command(1));
            return [
                `{type:"I",cond:async (_$args,_args,_QSP,_func)=>${this.visitValue(ctx.value())}, jumpLine: -1, jumpOffset: ${ifCommands.length + 2}}`,
                ...ifCommands,
                `{type:"J", jumpLine: -1, jumpOffset: ${elseCommands.length + 1}}`,
                ...elseCommands,

            ]
        }
        const commandBlock = this.visitCommand(ctx.command(0));
        return [
            `{type:"I",cond:async (_$args,_args,_QSP,_func)=>${this.visitValue(ctx.value())}, jumpLine: -1, jumpOffset: ${commandBlock.length + 1}}`,
            ...commandBlock,
        ];
    }

    visitJump(ctx){
        return [`{type:"J", jumpLine:-1, marker:${this.visitValue(ctx.value()) }}`];
    }

    visitJumpmarker(ctx){
        return [`{type:"M", marker:"${ctx.WORD().getText()}"}`];
    }

    visitKillvar(ctx){
        if (ctx.value(1)) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.killvar(${this.visitValue(ctx.value(0))},${this.visitValue(ctx.value(1))})}`];
        if (ctx.value(0)) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.killvar(${this.visitValue(ctx.value(0))})}`];
        return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.killvar()}`];
    }

    visitMsg(ctx){
        return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.msg(${this.visitValue(ctx.value())})}`];
    }

    visitNumberLiteralWithOptionalSign(ctx){
        const numberText = ctx.NumberLiteral().getText();
        const number = Number(numberText); //Catch the edge cases where a number is prefixed with 0
        if(ctx.MINUS())
            return `-${number}`;
        return `${number}`;
    }


    visitNumberOperator(ctx){
        switch (ctx.getText().trim().toUpperCase()) {
            case '+': return '+';
            case '-': return '-';
            case '*': return '*';
            case '/': return '/';
            case 'MOD': return '%';
            case 'AND': return 'AND';
            case 'OR': return 'OR';
        }
    }


    visitPassage(ctx, returnPassageHeader=false, asCommandArray=false) {
        var result = "";

        try{

            const identifier = ctx.PassageIdentifier().getText().replaceAll('#', '').trim().toLowerCase();

            if(asCommandArray)
                return this.visitBlock(ctx.block(), 1).map((cl) => cl.trim());
            const innerCodeRaw = this.visitBlock(ctx.block(), 1).map((cl) => `\t${cl},`);

            const innerCode = innerCodeRaw.join("\n");
            //result = `export default function ${identifier}({_args}:{_args:string[]}){\n\treturn <div id="${identifier}">\n${innerCode}\n</div>;\n}`;

result = `
import { CodeExecute, type CodeLine } from "../code/code";
import { QSPStorageContext } from "../storage/QSP";
import { useContext, useEffect, useRef } from "react";

export const code:CodeLine[] = [
${innerCode}
];

export default function ${identifier}({_args}:{_args:(string | number)[]}){
	const QSP = useContext(QSPStorageContext)
	const mounted = useRef(false);

	useEffect(()=>{
		if (mounted.current) return;
		mounted.current = true;

		CodeExecute(_args, code, QSP);

	},[]);

	return <div id="${identifier}"></div>;
}

`;

            return result;

        }
        catch(e){
            return `ERROR: ${e}`;
        }


        /*

        function postProcess(code){

            function countOccurrences(t, s) {
                let count = 0;
                let pos = 0;

                while ((pos = t.indexOf(s, pos)) !== -1) {
                    count++;
                    pos += s.length;
                }

                return count;
            }

            function getJumpMarkerId(line){
                const regex = /<<JUMPMARKER '([^']+)'>>/;
                const match = line.match(regex);
                if (match)
                    return match[1];
                return null;
            }

            const codeLines = code.split('\n');
            outerLoop:for (let index = 0; index < codeLines.length; index++) {
                const codeLine = codeLines[index];
                const indentOfJumpMarker = codeLine.indexOf("<<JUMPMARKER");
                if(indentOfJumpMarker == -1) continue;

                //const jumpMarkerName = codeLine.trim().substring("<<JUMPMARKER ".length,codeLine.trim().length-2);
                const jumpMarkerName = getJumpMarkerId(codeLine);
                if(!jumpMarkerName) continue;
                const jumpCommand = `<<JUMP '${jumpMarkerName}'`;



                const c = countOccurrences(code,jumpCommand);

                if(c != 1) continue; //Either an orphan JUMPMARKER or a complex situation with several JUMPs

                for(let searchForJumpLineIndex = index + 1; searchForJumpLineIndex < codeLines.length; searchForJumpLineIndex++){


                    const searchForJumpLineCodeLine = codeLines[searchForJumpLineIndex];
                    const indentOfSeachForJumpLine = searchForJumpLineCodeLine.search(/\S/);

                    if(searchForJumpLineCodeLine.trim() == "")  continue;
                    if(indentOfSeachForJumpLine < indentOfJumpMarker) continue outerLoop;

                    if(searchForJumpLineCodeLine.indexOf(jumpCommand) == -1){
                        continue;
                    }

                    let jumpSuccess = false;
                    const varname = `_qspLoop_${jumpMarkerName}_continue`;

                    const indent = "\t".repeat(indentOfJumpMarker);
                    if(indentOfSeachForJumpLine == indentOfJumpMarker){
                        // We most likely have an inline-if here.
                        const regex = /^(<<if.*?)<<JUMP[^>]*>>(.*?<<\/if>>)$/;
                        const match = searchForJumpLineCodeLine.trim().match(regex);
                        if (match){
                            //It really is an inline-if
                            codeLines[searchForJumpLineIndex] =  `${indent}\t${match[1]}<<set ${varname} = true>>${match[2]}\n${indent}<</for>>`;
                            jumpSuccess = true;
                        }
                    }

                    if(indentOfSeachForJumpLine == indentOfJumpMarker + 1){
                        //Most likely a simple If
                        const regex = /^<<JUMP[^>]*>>$/;
                        const match = searchForJumpLineCodeLine.trim().match(regex);
                        if (match){
                            //It really is an inline-if
                            for(let searchIfIndex = searchForJumpLineIndex + 1; searchIfIndex < codeLines.length; searchIfIndex++){
                                const searchIfLine = codeLines[searchIfIndex];
                                const indentOfSearchIfIndex = searchIfLine.search(/\S/);
                                if(indentOfSearchIfIndex < indentOfJumpMarker){ //We jumped out of the block without findind /if
                                    continue outerLoop;
                                }
                                if(indentOfSearchIfIndex > indentOfJumpMarker) //We are in an inner block
                                    continue;
                                if(searchIfLine.trim() != "<</if>>"){
                                    codeLines[searchIfIndex] += "###";
                                    continue;
                                }

                                codeLines[searchIfIndex] += `\n${indent}<</for>>`;

                                for(let j = searchForJumpLineIndex + 1; j <= searchIfIndex; j++)
                                    codeLines[j] = "\t"+codeLines[j];
                                break;
                            }


                            codeLines[searchForJumpLineIndex] =  `${indent}\t\t<<set ${varname} = true>>`;
                            jumpSuccess = true;
                        }
                    }

                    if(jumpSuccess){
                        codeLines[index] =  `${indent}<<set ${varname} = true>>\n${indent}<<for ${varname}>>\n\t${indent}<<set ${varname} = false>>`;
                        for(let j = index+1; j < searchForJumpLineIndex; j++)
                            codeLines[j] = "\t"+codeLines[j];
                    }

                    //codeLines[searchForJumpLineIndex] = "\t".repeat(indentOfJumpMarker) + "<</for>>";

                    continue outerLoop;

                }
            }
            return codeLines.join("\n");
        }

        try{
            result = postProcess(result);
        }
        catch(e){
            console.error(e);
        }

        return result;*/
    }

    visitPrint(ctx){
        if(ctx.printMain()){
            if(ctx.printMain().value()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.print(${this.visitValue(ctx.printMain().value(),{inPrintContext: true})})}`];
        }
        if (ctx.printNewlineMain()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.print(${this.visitValue(ctx.printNewlineMain().value(), { inPrintContext: true })}+"<br/>")}`];
        if (ctx.printNewlinepreMain()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.print("<br/>"+${this.visitValue(ctx.printNewlinepreMain().value(),{inPrintContext: true})})}`];
        if (ctx.printEmptyLineMain()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.print("<br/>")}`];

        if (ctx.printSide()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.printSide(${this.visitValue(ctx.printSide().value(), { inPrintContext: true })})}`];
        if (ctx.printNewlineSide()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.printSide(${this.visitValue(ctx.printNewlineSide().value(), { inPrintContext: true })}+"<br/>")}`];
        if (ctx.printNewlinepreSide()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.printSide("<br/>"+${this.visitValue(ctx.printNewlinepreSide().value(), { inPrintContext: true })})}`];
        if (ctx.printEmptyLineSide()) return [`{type:"E", exec:async (_$args,_args,_QSP,_func)=>_func.printSide("<br/>")}`];
    }

    visitStatementLine(ctx,indent = 0){
        if(ctx.actBlock()) return this.visitActBlock(ctx.actBlock(),indent);
        if(ctx.commandLine()) return this.visitCommandLine(ctx.commandLine(),indent);
        if(ctx.ifBlock()) return this.visitIfBlock(ctx.ifBlock(),indent);
        return [];
    }


    visitSyscall(ctx){
        const cmd = ctx.getText().replace('*', 'STAR_').toUpperCase().replaceAll(" ", "_");
        if(cmd == "EXIT")
            return [`{type:"X"}`];
        return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.${cmd}(_QSP)}`];
    }

    visitSyssetting(ctx){
        return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>_func.${ctx.SYSSETTING().getText().toUpperCase()}(${this.visitValue(ctx.value())})}`];
    }

    visitLogicOp(ctx) {
        if (ctx.AND())
            return "&&";
        if (ctx.OR())
            return "||";
        return "visitLogicOp-ERR"
    }

    visitValue(ctx, { inPrintContext = false } = {}) {
        if (ctx.logicOp()) return `${this.visitValue(ctx.value())} ${this.visitLogicOp(ctx.logicOp())} ${this.visitComparee(ctx.comparee())}`;
        return this.visitComparee(ctx.comparee());
    }

    visitComparee(ctx, { inPrintContext = false } = {}) {
        if (ctx.compareOperator()){
            const compare = this.visitComparee(ctx.comparee());
            const sum = this.visitSum(ctx.sum());
            const op = this.visitCompareOperator(ctx.compareOperator());
            switch(op){
                case ">=": return `_func.lo_ge(${compare},${sum})`;
                case "<=": return `_func.lo_le(${compare},${sum})`;
                case ">": return `_func.lo_gt(${compare},${sum})`;
                case "<": return `_func.lo_lt(${compare},${sum})`;
                case "==": return `_func.lo_eq(${compare},${sum})`;
                case "!=": return `_func.lo_neq(${compare},${sum})`;                    
            }
            return `EQ_ERROR "${op}"`;
        }
        return this.visitSum(ctx.sum());
    }

    visitAddOp(ctx){
        if(ctx.PLUS())
            return "+";
        if (ctx.MINUS())
            return "-";
        return "visitAddOp-ERR"
    }

    visitSum(ctx){
        if (ctx.addOp()) return `${this.visitSum(ctx.sum())} ${this.visitAddOp(ctx.addOp())} ${this.visitTerm(ctx.term())}`;
        return this.visitTerm(ctx.term());
    }

    visitMulOp(ctx) {
        if (ctx.STAR())
            return "*";
        if (ctx.MOD())
            return "%";
        if (ctx.DIVIDE())
            return "/";
        return "visitMulOp-ERR"
    }

    visitTerm(ctx) {
        if (ctx.mulOp()){
            const op = this.visitMulOp(ctx.mulOp());
            if(op == "/")
                return `Math.trunc(${this.visitTerm(ctx.term())} ${op} ${this.visitFactor(ctx.factor())})`;
            return `${this.visitTerm(ctx.term())} ${op} ${this.visitFactor(ctx.factor())}`;
        }
        return this.visitFactor(ctx.factor());
    }

    visitFactor(ctx,{inPrintContext=false}={}){

        if(ctx.ParenthesisLeft()) return `(${this.visitValue(ctx.value(0))})`;
        if(ctx.numberLiteralWithOptionalSign()) return this.visitNumberLiteralWithOptionalSign(ctx.numberLiteralWithOptionalSign());
        if(ctx.identifierNumber()) return this.visitIdentifierNumber(ctx.identifierNumber());
        if(ctx.INPUT()) return `(prompt(${this.visitValue(ctx.value(0))}) ?? "")`
        if(ctx.invert()) return `_func.logic_not(${this.visitValue(ctx.value(0))})`;
        if(ctx.functionWithNumberReturn()) return this.visitFunctionWithNumberReturn(ctx.functionWithNumberReturn());
        //if(ctx.compareOperator()) return `${this.visitValue(ctx.value(0))} ${this.visitCompareOperator(ctx.compareOperator())} ${this.visitValue(ctx.value(1))}`;
        /*if(ctx.numberOperator()){
            const left = this.visitValue(ctx.value(0));
            const right= this.visitValue(ctx.value(1));
            const op = this.visitNumberOperator(ctx.numberOperator(0));
            if(op == "/")
                return `${left} ${op} ${right}`;
            else if(op == "AND")
                return `${left} && ${right}`;
                //return `(setup.logic_and(${left},${right}))`
            else if(op == "OR")
                return `${left} || ${right}`;
                //return `(setup.logic_or(${left},${right}))`
            else
                return `${left} ${op} ${right}`;
        }*/

        if(ctx.escapedString()) return this.visitEscapedString(ctx.escapedString(),{inPrintContext: inPrintContext});
        if(ctx.identifierString()) return this.visitIdentifierString(ctx.identifierString());

        if(ctx.functionWithStringReturn()) return this.visitFunctionWithStringReturn(ctx.functionWithStringReturn());
        if(ctx.multilineBlock()) return "`"+ctx.multilineBlock().getText().trim().slice(1,-1).replaceAll(/(\r? \n)|\n/gi,'###NL###').replace(/(\r\n|\n|\r)/gm, "")+"`";
        if(ctx.MINUS()) return `-${this.visitValue(ctx.value(0))}`;
    }
}
