import antlr4 from 'antlr4';
import qsrcLexer from './antlr/qsrcLexer.js';
import qsrcParser from './antlr/qsrcParser.js';
import QsrcVisitor from "./visitor/QsrcVisitor.js";
import Listener from './listener/Listener.js';


export default function qsrc2tw(input, isPassage = false, asCommandArray = false){
    //const input = qspString+"\r";
	if(!isPassage)
    	input = "# SINGLELINECOMMAND\n"+input+"\n--- SINGLELINECOMMAND ---------------------------------\n";
	else
		input += "\n";
	const chars = new antlr4.InputStream(input);

	var lexer;
	try{
		lexer = new qsrcLexer(chars);
	} catch (e) {
		throw new Error(`Lexer Error: ${e.message}`);
	}

	var tokens;
	try {
		tokens = new antlr4.CommonTokenStream(lexer);
	} catch (e) {
		throw new Error(`Tokenizer Error: ${e.message}`);
	} 

	var parser;
	try{
		parser = new qsrcParser(tokens);
	}catch(e){
		throw new Error(`Parser Error: ${e.message}`);
	}
	const tree = parser.passage();

    const listener = new Listener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	var output;
	try {
		output = new QsrcVisitor().visitPassage(tree, isPassage, asCommandArray);
	} catch (e) {
		throw new Error(`Visitor Error: ${e.message}`);
	}

    return output;
}

