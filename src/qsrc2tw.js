import antlr4, { ErrorListener } from 'antlr4';
import qsrcLexer from './antlr/qsrcLexer.js';
import qsrcParser from './antlr/qsrcParser.js';
import QsrcVisitorFast from "./visitor/QsrcVisitorFast.js";
import QsrcVisitorStable from "./visitor/QsrcVisitorStable.js";
import Listener from './listener/Listener.js';

class ThrowingErrorListener extends ErrorListener {
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		throw new Error(`line ${line}:${column} ${msg}`);
	}
}

export default function qsrc2tw(input, isPassage = false, asCommandArray = false, preferStable=false, language="TS"){
    //const input = qspString+"\r";
	if(!isPassage)
    	input = "# SINGLELINECOMMAND\n"+input+"\n--- SINGLELINECOMMAND ---------------------------------\n";
	else
		input += "\n";
	const chars = new antlr4.InputStream(input);

	var lexer;
	lexer = new qsrcLexer(chars);
	lexer.removeErrorListeners();
	lexer.addErrorListener(new ThrowingErrorListener());


	var tokens;
	tokens = new antlr4.CommonTokenStream(lexer);

	var parser;
	parser = new qsrcParser(tokens);
	parser.removeErrorListeners();
	parser.addErrorListener(new ThrowingErrorListener());

	const tree = parser.passage();

    const listener = new Listener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

	var output;
	try {
		if(!preferStable)
		{
			try {
				output = new QsrcVisitorFast().visitPassage(tree, isPassage, asCommandArray);
				return output;
			}catch(e){
				if (e.message != "JUMP" && e.message != "JUMP MARKER")
					throw e;
			}
		}
		output = new QsrcVisitorStable({language}).visitPassage(tree, isPassage, asCommandArray);
		return output;
	} catch (e) {
		throw e;
	}

}

export function parseStringToContext(s, startRule = 'expression') {
	const chars = new antlr4.InputStream(s);
	const lexer = new qsrcLexer(chars);
	const tokens = new antlr4.CommonTokenStream(lexer);
	const parser = new qsrcParser(tokens);

	// Gewünschte Startregel aufrufen
	return parser[startRule](); // z.B. parser.expression()
}
