import qsrcParserVisitor from "../antlr/qsrcParserVisitor.js";

export default class QsrcVisitorFast extends qsrcParserVisitor{

    jumpCounter = 0;

    visitActBlock(ctx,indent=0){
        var label = this.visitValue(ctx.value());
        const innerCode = this.visitBlock(ctx.block(), indent + 1);
        return [
            `${"\t".repeat(indent)}_func.act(${label},_$args,_args,_QSP,_func,async(_$args: string[], _args: number[], _QSP: Record<string, any>, _func: CodeFunctions)=>{`,
            ...innerCode,
            `${"\t".repeat(indent) }});`
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
        return [`${this.visitIdentifierNumber(ctx.identifierNumber())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${this.visitValue(ctx.value())};`];
    }

    visitAssignmentString(ctx){
        if(ctx.value())
            return [`${this.visitIdentifierString(ctx.identifierString())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${this.visitValue(ctx.value())};`];
        //Below might not get executed because multiblock is a valid factor inside value
        //var assignmentValue = ctx.multilineBlock().getText().trim().slice(1,-1).replaceAll(/(\r? \n)|\n/gi,'###NL###');
        //return [`{type:"E",exec:async (_$args,_args,_QSP,_func)=>${this.visitIdentifierString(ctx.identifierString())} ${this.visitAssignmentoperator(ctx.assignmentoperator())} ${assignmentValue}}`];
        throw new Error("Multiblock error");
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
        /*let result = [];
        for(let i = 0; ctx.statementLine(i) != null; i++){
            result.push(
                ...this.visitStatementLine(
                    ctx.statementLine(i),indent
                )
            );
        }

        return result;*/

        /*


            // 1. Alle statementLines sammeln
            const stmts = [];
            for (let i = 0; ctx.statementLine(i) != null; i++) {
                stmts.push(ctx.statementLine(i));
            }

            // 2. Loop-Struktur erkennen und transformieren
            const transformed = this.detectLoops(stmts);

            // 3. Transformierte Statements emittieren
            let result = [];
            for (const item of transformed) {
                if (item.type === 'while_loop') {
                    result.push(...this.emitWhileLoop(item, indent));
                } else {
                    result.push(...this.visitStatementLine(item.ctx, indent));
                }
            }
            return result;*/

        const stmts = [];
        for (let i = 0; ctx.statementLine(i) != null; i++) {
            stmts.push(ctx.statementLine(i));
        }

        const transformed = this.detectLoops(stmts);
        return this.emitLoopBody(transformed, indent); 
        
    }

    detectLoops(stmts) {
        const result = [];
        const labelPositions = new Map();

        for (const stmt of stmts) {
            const cmdLine = stmt.commandLine?.();
            const cmd = cmdLine?.command?.();

            // jumpmarker: :label
            if (cmd?.jumpmarker?.()) {
                const name = cmd.jumpmarker().WORD().getText().toLowerCase();
                labelPositions.set(name, result.length);
                result.push({ type: 'stmt', ctx: stmt });
                continue;
            }

            // Fall A: if cond: [cmds &] jump 'label'  → do-while
            const ifInline = cmd?.ifInline?.();
            if (ifInline) {
                const jumpTarget = this.findJumpInIfInline(ifInline);
                if (jumpTarget && labelPositions.has(jumpTarget)) {
                    const labelIdx = labelPositions.get(jumpTarget);
                    const body = result.splice(labelIdx);
                    body.shift(); // Delete Jump-Markers
                
                    const preJumpCommands = this.extractPreJumpCommands(ifInline);
                    
                    result.push({
                        type: 'do_while_loop',
                        condition: ifInline.value(),
                        preJumpCommands: preJumpCommands,
                        body,
                    });
                    labelPositions.delete(jumpTarget);
                    continue;
                }
            }

            // Fall B: ifBlock dessen letztes Statement ein bedingungsloser jump ist → while
            const ifBlock = stmt.ifBlock?.();
            if (ifBlock && !ifBlock.elseBlock() && ifBlock.elseIfBlock(0) == null) {
                const jumpTarget = this.findUnconditionalJumpAtEnd(ifBlock.block());
                if (jumpTarget && labelPositions.has(jumpTarget)) {
                    const labelIdx = labelPositions.get(jumpTarget);
                    const body = result.splice(labelIdx);
                    body.shift();

                    // Body ohne den letzten jump
                    const innerStmts = this.collectStmts(ifBlock.block());
                    const bodyWithoutJump = innerStmts.slice(0, -1);

                    result.push({
                        type: 'while_loop',
                        condition: ifBlock.value(),
                        body: bodyWithoutJump.map(s => ({ type: 'stmt', ctx: s })),
                    });
                    labelPositions.delete(jumpTarget);
                    continue;
                }
            }

            result.push({ type: 'stmt', ctx: stmt });
        }

        return result;
    }

    extractJumpTarget(jumpCtx) {
        // value() ist ein escapedString → Text ohne Anführungszeichen
        const raw = jumpCtx.value().getText();
        return raw.replace(/^['"]|['"]$/g, '').toLowerCase();
    }

    emitWhileLoop({ condition, body }, indent) {
        const cond = this.visitValue(condition);
        const bodyLines = this.emitLoopBody(body, indent + 1);
        return [
            `${"\t".repeat(indent)}while (${cond}) {`,
            ...bodyLines,
            `${"\t".repeat(indent)}}`,
        ];
    }

    emitDoWhileLoop({ condition, body, preJumpCommands = [] }, indent) {
        const cond = this.visitValue(condition);
        const bodyLines = this.emitLoopBody(body, indent + 1);
        for (const cmd of preJumpCommands)
            bodyLines.push(...this.visitCommand(cmd, indent + 1));
        return [
            `${"\t".repeat(indent)}do {`,
            ...bodyLines,
            `${"\t".repeat(indent)}} while (${cond});`,
        ];
    }

    emitLoopBody(items, indent) {
        const lines = [];
        for (const item of items) {
            if (item.type === 'while_loop')
                lines.push(...this.emitWhileLoop(item, indent));
            else if (item.type === 'do_while_loop')
                lines.push(...this.emitDoWhileLoop(item, indent));
            else if (item.type === 'stmt' && item.ctx != null)
                lines.push(...this.visitStatementLine(item.ctx, indent));
            else
                console.warn('emitLoopBody: unbekanntes item', item);
        }
        return lines;
    }

    // Letztes Statement im Block: ist es ein bedingungsloser jump?
    findUnconditionalJumpAtEnd(blockCtx) {
        const stmts = this.collectStmts(blockCtx);
        if (stmts.length === 0) return null;

        const last = stmts[stmts.length - 1];
        const cmd = last.commandLine?.()?.command?.();
        if (cmd?.jump?.()) {
            return this.extractJumpTarget(cmd.jump());
        }
        return null;
    }

    // Alle statementLines eines Blocks als Array
    collectStmts(blockCtx) {
        const stmts = [];
        for (let i = 0; blockCtx.statementLine(i) != null; i++) {
            stmts.push(blockCtx.statementLine(i));
        }
        return stmts;
    }

    findJumpInIfInline(ifInline) {
        // Fall 1: if cond: jump 'label'
        if (ifInline.command(0)?.jump?.()) {
            return this.extractJumpTarget(ifInline.command(0).jump());
        }

        // Fall 2: if cond: something & jump 'label'
        const cmd = ifInline.command(0);
        if (cmd) {
            for (let i = 0; cmd.commandAppended(i) != null; i++) {
                const appended = cmd.commandAppended(i).command();
                if (appended?.jump?.()) {
                    return this.extractJumpTarget(appended.jump());
                }
            }
        }

        return null;
    }

    extractPreJumpCommands(ifInline) {
        // Gibt alle commands VOR dem jump zurück
        const cmd = ifInline.command(0);
        const pre = [];


        function removeLastJumpAppended(ctx) {
            const appended = ctx.commandAppended(); // alle commandAppended-Knoten
            if (!appended || appended.length === 0) return;

            const last = appended[appended.length - 1];

            // Prüfen ob der letzte commandAppended ein jump enthält
            const hasJump = last.command()?.jump() != null;
            if (!hasJump) return;

            // Aus children entfernen (für den Visitor/Listener)
            const childIdx = ctx.children.indexOf(last);
            if (childIdx !== -1) {
                ctx.children.splice(childIdx, 1);
            }

            // Den Knoten selbst aus dem internen Array entfernen,
            // damit ctx.commandAppended() ihn nicht mehr liefert
            last.parentCtx = null;
        }
        
        // command(0) selbst, wenn es kein jump ist
        if (cmd && !cmd.jump?.()) {
            removeLastJumpAppended(cmd);
            pre.push(cmd);
        }

        

        // commandAppended bis (exklusiv) dem jump
        /*if (cmd) {
            for (let i = 0; cmd.commandAppended(i) != null; i++) {
                const appended = cmd.commandAppended(i).command();
                if (appended?.jump?.()) break; // ab hier aufhören
                pre.push(appended);
            }
        }*/

        return pre;
    }



    visitCommand(ctx,indent=0){

            if (ctx.actInline()){
                const innerCode = this.visitCommand(ctx.actInline().command(), indent+1);
                return [
                    `${"\t".repeat(indent)}_func.act(${this.visitValue(ctx.actInline().value()) },_$args,_args,_QSP,_func,async(_$args: string[], _args: number[], _QSP: Record<string, any>, _func: CodeFunctions)=>{`,
                    ...innerCode,
                    `${"\t".repeat(indent)}});`
                ];
            }
            
            if (ctx.comment()) return [`${"\t".repeat(indent) }/*${ctx.comment().getText()} */`];
            if(ctx.ifInline()) return this.visitIfInline(ctx.ifInline(), indent);

            var result = [];
            if(ctx.ParenthesisLeft()) result = [`(${this.visitCommand(ctx.command(0))})`];
            else if (ctx.addobj()) result = [`_func.addobj(${this.visitValue(ctx.addobj().value())});`];
            else if(ctx.assignment()) result = this.visitAssignment(ctx.assignment());
            else if (ctx.copyarr()) result = [`_func.copyarr(_QSP, ${this.visitFunctionArguments(ctx.copyarr().functionArguments())});`];
            else if (ctx.delact()) result = [`_func.delact(${this.visitValue(ctx.delact().value())});`];
            else if(ctx.dynamic()) result = this.visitDynamic(ctx.dynamic());
            else if (ctx.gosub()){
                
                result = this.visitGoSub(ctx.gosub());
            }
            else if (ctx.gt()) result = [`return _func.gt(${this.visitFunctionArguments(ctx.gt().functionArguments())});`];
            else if (ctx.xgt()) result = [`return _func.xgt(${this.visitFunctionArguments(ctx.xgt().functionArguments())});`];
            //else if (ctx.inp()) result = [`{type: "E", exec:async (_$args,_args, _QSP,_func) => _func.input(${this.visitSum(ctx.inp().sum())})}`];
            else if (ctx.jump()) throw new Error("JUMP"); //result = this.visitJump(ctx.jump());
            else if (ctx.jumpmarker()) throw new Error("JUMP MARKER"); // result = this.visitJumpmarker(ctx.jumpmarker());
            else if(ctx.killvar()) result = this.visitKillvar(ctx.killvar());
            else if(ctx.msg()) result = this.visitMsg(ctx.msg());
            else if (ctx.play()) result = [`_func.play(${this.visitFunctionArguments(ctx.play().functionArguments())});`];
            else if(ctx.print()) result = this.visitPrint(ctx.print());
            else if (ctx.savegame()) result = [`await _func.save(${this.visitValue(ctx.savegame().value())});`];
            else if(ctx.syscall()) result = this.visitSyscall(ctx.syscall());
            else if(ctx.syssetting()) result = this.visitSyssetting(ctx.syssetting());
            else if (ctx.view()) result = ctx.view().value() ? [`_func.view(${this.visitValue(ctx.view().value())})`] : [`_func.view();`];
            else if (ctx.wait()) result = [`await _func.wait(${this.visitValue(ctx.wait().value())});`];

            
           for(let i = 0; ctx.commandAppended(i) != null; i++)
                result.push(...this.visitCommand(ctx.commandAppended(i).command()));

            for(let i = 0; i < result.length; i++)
                result[i] = "\t".repeat(indent)+result[i];

            return result;


    }

    visitCommandLine(ctx,indent=0){
        if (ctx.command()) return this.visitCommand(ctx.command(), indent);
        throw new Error("Unreckognized Command");
    }

    visitCompareOperator(ctx){
        if(ctx.EqualOperator()) return "==";
        if(ctx.notEqual()) return "!=";
        if(ctx.GREAT_EQUAL_THAN()) return ">=";
        if(ctx.LOWER_EQUAL_THAN()) return "<=";
        return ctx.getText();
    }

    visitDynamic(ctx) {
        const argumentsRaw = this.visitFunctionArguments(ctx.functionArguments()).split(","); //we need raw, because the commas could be inside the code
        //const code = argumentsRaw[0];
        //const args = argumentsRaw.slice(1);
        return [`await _func.dynamic(_QSP,${argumentsRaw});`];
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


        return `${stringBoundaries}${result}${stringBoundaries}`.split("\n").map(s=>s.trimEnd()).join("\\\\n");
    }

    visitFunctionArguments(ctx){
        var results = [];
        for(let i = 0; ctx.value(i) != null; i++)
            results.push(this.visitValue(ctx.value(i)));
        return results.join(' , ');
    }

    visitGoSub(ctx){
        
        function isSimplePassageId(passageId){
            const reg = /^["'\w]+$/g;
            return reg.test(passageId);
        }

        var functionArguments = [];
        const functionArgumentsCtx = ctx.functionArguments();
        for (let i = 0; functionArgumentsCtx.value(i) != null; i++)
            functionArguments.push(this.visitValue(functionArgumentsCtx.value(i)));

        
        if (isSimplePassageId(functionArguments[0].trim()))
            return [`_func.gs(${functionArguments.join(",")});`];  
        return [`await _func.gsd(_QSP,${functionArguments.join(",")});`];

    }

    visitFunctionWithNumberReturn(ctx){
        return `${ctx.WORD().getText().toLowerCase()}(${this.visitFunctionArguments(ctx.functionArguments())})`;
    }

    visitFunctionWithStringReturn(ctx){
        if(ctx.inp())
            return `_func.input(${ this.visitSum(ctx.inp().sum()) })`;
        return `${ctx.WORD().getText().toLowerCase()}(${this.visitFunctionArguments(ctx.functionArguments())})`;
    }



    visitIdentifierNumber(ctx){
        if(ctx.arrayIndex())
            return `_QSP.${ctx.WORD().toString().toLowerCase()}${this.visitArrayIndex(ctx.arrayIndex())}`;
        return `_QSP.${ctx.WORD().toString().toLowerCase() }[0]`;
    }

    visitIdentifierString(ctx){
        if(ctx.arrayIndex())
            return `_QSP.$${ctx.WORD().toString().toLowerCase() }${this.visitArrayIndex(ctx.arrayIndex())}`;
        return `_QSP.$${ctx.WORD().toString().toLowerCase() }[0]`;
    }

    visitIfBlock(ctx,indent = 0){
        const ifBlockCondition = this.visitValue(ctx.value());
        const ifBlockCode = this.visitBlock(ctx.block(),indent+1);
               

        const condistionReg = /_func\.lo_eq\(_QSP\.\$args\[0\],'([a-zA-Z]\w*)'\)/;


        const conditionMatch = ifBlockCondition.trim().match(condistionReg);
        
        if(conditionMatch !== null && !ctx.elseIfBlock(0) && !ctx.elseBlock()){
            const functionId = `localFunc_${conditionMatch[1]}`;
            let result = `
${"\t".repeat(indent)}async function ${functionId}(_$args:string[],_args:number[],_QSP:Record<string,any>,_func:CodeFunctions){
${ifBlockCode.join("\n")}
${"\t".repeat(indent)}}
${"\t".repeat(indent)}if(${ifBlockCondition})
${"\t".repeat(indent+1)}await ${functionId}(_$args,_args,_QSP,_func);

`
            return [result];
        }

        let result = `${"\t".repeat(indent)}if(${ifBlockCondition}){\n${ifBlockCode.join("\n")}\n${"\t".repeat(indent)}}\n`

        

        for (let i = 0; ctx.elseIfBlock(i) != null; i++) {
            const condition = this.visitValue(ctx.elseIfBlock(i).value());
            const elseIfCode = this.visitBlock(ctx.elseIfBlock(i).block(), indent + 2);
            result += `${"\t".repeat(indent)}else if(${condition}){\n${elseIfCode.join("\n")}\n${"\t".repeat(indent)}}\n`
        }

        if (ctx.elseBlock()) {
            const elseCode = this.visitBlock(ctx.elseBlock().block(), indent + 2);
            result += `${"\t".repeat(indent)}else{\n${elseCode.join("\n")}\n${"\t".repeat(indent)}}\n`
        }

        return [result];
    }

    visitIfInline(ctx, indent = 0){
        if (ctx.ELSE()){
            const ifCommands = this.visitCommand(ctx.command(0), indent+1);
            const elseCommands = this.visitCommand(ctx.command(1), indent + 1);
            return [
                `${"\t".repeat(indent) }if (${this.visitValue(ctx.value())}){`,
                ...ifCommands,
                `${"\t".repeat(indent) }}else{`,
                ...elseCommands,
                `${"\t".repeat(indent) }}`

            ]
        }
        const commandBlock = this.visitCommand(ctx.command(0), indent + 1);
        return [
            `${"\t".repeat(indent) }if (${this.visitValue(ctx.value())}){`,
            ...commandBlock,
            `${"\t".repeat(indent)}}`
        ];
    }

    visitJump(ctx){
        return [`{type:"J", jumpLine:-1, marker:${this.visitValue(ctx.value()) }}`];
    }

    visitJumpmarker(ctx){
        return [`{type:"M", marker:"${ctx.WORD().getText()}"}`];
    }

    visitKillvar(ctx){
        if (ctx.value(1)) return [`_func.killvar(${this.visitValue(ctx.value(0))},${this.visitValue(ctx.value(1))});`];
        if (ctx.value(0)) return [`_func.killvar(${this.visitValue(ctx.value(0))});`];
        return [`_func.killvar();`];
    }

    visitMsg(ctx){
        return [`_func.msg(${this.visitValue(ctx.value())});`];
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


            const identifier = ctx.PassageIdentifier().getText().replaceAll('#', '').trim().toLowerCase();

            if(asCommandArray)
                return this.visitBlock(ctx.block(), 1).map((cl) => cl.trim());
            const innerCodeRaw = this.visitBlock(ctx.block(), 1);

            const innerCode = innerCodeRaw.join("\n");

result = `
//QsrcVisitorFast
import { CodeExecute, type CodeFunctions } from "../code/code";
import { QSPStorageContext } from "../storage/QSP";
import { useContext, useEffect, useRef } from "react";

export const code: ((_$args:string[],_args:number[],_QSP:Record<string,any>,_func:CodeFunctions)=>Promise<any>) = async function(_$args,_args,_QSP,_func){
${innerCode}
};

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

    visitPrint(ctx){
        if(ctx.printMain()){
            if(ctx.printMain().value()) return [`_func.print(${this.visitValue(ctx.printMain().value(),{inPrintContext: true})});`];
        }
        if (ctx.printNewlineMain()) return [`_func.print(${this.visitValue(ctx.printNewlineMain().value(), { inPrintContext: true })}+"<br/>");`];
        if (ctx.printNewlinepreMain()) return [`_func.print("<br/>"+${this.visitValue(ctx.printNewlinepreMain().value(),{inPrintContext: true})});`];
        if (ctx.printEmptyLineMain()) return [`_func.print("<br/>");`];

        if (ctx.printSide()) return [`_func.printSide(${this.visitValue(ctx.printSide().value(), { inPrintContext: true })});`];
        if (ctx.printNewlineSide()) return [`_func.printSide(${this.visitValue(ctx.printNewlineSide().value(), { inPrintContext: true })}+"<br/>");`];
        if (ctx.printNewlinepreSide()) return [`_func.printSide("<br/>"+${this.visitValue(ctx.printNewlinepreSide().value(), { inPrintContext: true })});`];
        if (ctx.printEmptyLineSide()) return [`_func.printSide("<br/>");`];
    }

    visitStatementLine(ctx,indent = 0){
        if(ctx.actBlock()) return this.visitActBlock(ctx.actBlock(),indent);
        if (ctx.commandLine()) return this.visitCommandLine(ctx.commandLine(), indent); 
        if(ctx.ifBlock()) return this.visitIfBlock(ctx.ifBlock(),indent);
        return [];
    }


    visitSyscall(ctx){
        const cmd = ctx.getText().replace('*', 'STAR_').toUpperCase().replaceAll(" ", "_");
        if(cmd == "EXIT")
            return [`return; //COMMAND EXIT`];
        return [`await _func.${cmd}(_QSP);`];
    }

    visitSyssetting(ctx){
        return [`await _func.${ctx.SYSSETTING().getText().toUpperCase()}(${this.visitValue(ctx.value())});`];
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
        //if (ctx.INPUT()) return `_func.prompt(${this.visitValue(ctx.value(0))})`
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
        if (ctx.multilineBlock()) return this.visitMultilineBlock(ctx.multilineBlock());
        if(ctx.MINUS()) return `-${this.visitValue(ctx.value(0))}`;
    }

    visitMultilineBlock(ctx){
        var output = "`+++";
        for (let i = 0; ctx.multilineContents(i) != null; i++) {
            output += this.visitMultilineContents(ctx.multilineContents(i));
        }
        output+= "`";
        return output;
    }

    visitMultilineContents(ctx){
        //if (ctx.multilineBlockTemplateVar())
        //    return this.visitMultilineBlockTemplateVar(ctx.multilineBlockTemplateVar());
        return ctx.getText();
    }

    visitMultilineBlockTemplateVar(ctx){
        return "\\${"+this.visitValue(ctx.value())+"}";
    }
}


