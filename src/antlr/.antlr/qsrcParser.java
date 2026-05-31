// Generated from e:/Development/qsrc2react/src/antlr/qsrcParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class qsrcParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PassageIdentifier=1, PassageEndMarker=2, SYSCALL=3, SYSSETTING=4, ADDOBJ=5, 
		COPYARR=6, DELACT=7, DYNAMIC=8, GOSUB=9, GOTO=10, XGOTO=11, INPUT=12, 
		JUMP=13, KILLVAR=14, MSG=15, OPENGAME=16, PLAY=17, Print=18, PrintNewline=19, 
		PrintNewlinepre=20, SAVEGAME=21, VIEW=22, WAIT=23, ACT=24, IF=25, ELSEIF=26, 
		ELSE=27, END=28, INVERT=29, AND=30, OR=31, CommandConnect=32, NumberLiteral=33, 
		SET=34, EqualOperator=35, IncrementOperator=36, DecrementOperator=37, 
		DivideSelfOperator=38, MultSelfOperator=39, SetToOperator=40, TemplateStringEndExpression=41, 
		DOUBLEQUOTE=42, SINGLEQUOTE=43, TemplateDoubleSingleQuote=44, MOD=45, 
		WORD=46, STAR=47, DPOINT=48, PLUS=49, MINUS=50, DIVIDE=51, GREATER_THAN=52, 
		GREAT_EQUAL_THAN=53, LOWER_THAN=54, LOWER_EQUAL_THAN=55, NEQ=56, DOLLAR=57, 
		EXCLAMATIONMARK=58, CommentStart=59, AttachedComment=60, Multilinecomment=61, 
		ARRAYBRACKOPEN=62, ARRAYBRACKCLOSE=63, BRACK_OPEN=64, ParenthesisLeft=65, 
		ParenthesisRight=66, Comma=67, Questionmark=68, NEWLINE=69, WHITESPACE=70, 
		LINEBREAK=71, AnythingElse=72, EscapedSingleQuote=73, TemplateStringStartExpression=74, 
		StringAtom=75, EscapedDoubleQuote=76, DQTemplateStringStartExpression=77, 
		DQStringAtom=78, EscapedStringTemplateStart=79, InEscapedStringAtom=80, 
		BRACK_CLOSE=81, MultilineTemplateStringStartExpression=82, AnythingElseInMultiLine=83, 
		InComment=84;
	public static final int
		RULE_passage = 0, RULE_block = 1, RULE_statementLine = 2, RULE_emptyLine = 3, 
		RULE_actBlock = 4, RULE_actInline = 5, RULE_actPicture = 6, RULE_ifInline = 7, 
		RULE_ifBlock = 8, RULE_elseIfBlock = 9, RULE_elseBlock = 10, RULE_command = 11, 
		RULE_commandLine = 12, RULE_commandAppended = 13, RULE_addobj = 14, RULE_assignment = 15, 
		RULE_assignmentNumber = 16, RULE_assignmentString = 17, RULE_assignmentoperator = 18, 
		RULE_comment = 19, RULE_commentAttached = 20, RULE_copyarr = 21, RULE_delact = 22, 
		RULE_dynamic = 23, RULE_gosub = 24, RULE_gt = 25, RULE_xgt = 26, RULE_inp = 27, 
		RULE_jump = 28, RULE_jumpmarker = 29, RULE_killvar = 30, RULE_msg = 31, 
		RULE_multilineBlock = 32, RULE_multilineContents = 33, RULE_multilineBlockTemplateVar = 34, 
		RULE_opengame = 35, RULE_play = 36, RULE_print = 37, RULE_printMain = 38, 
		RULE_printNewlineMain = 39, RULE_printNewlinepreMain = 40, RULE_printEmptyLineMain = 41, 
		RULE_printSide = 42, RULE_printNewlineSide = 43, RULE_printNewlinepreSide = 44, 
		RULE_printEmptyLineSide = 45, RULE_savegame = 46, RULE_syscall = 47, RULE_syssetting = 48, 
		RULE_view = 49, RULE_wait = 50, RULE_identifier = 51, RULE_identifierNumber = 52, 
		RULE_identifierString = 53, RULE_arrayIndex = 54, RULE_compareOperator = 55, 
		RULE_notEqual = 56, RULE_value = 57, RULE_comparee = 58, RULE_sum = 59, 
		RULE_term = 60, RULE_addOp = 61, RULE_logicOp = 62, RULE_mulOp = 63, RULE_factor = 64, 
		RULE_numberLiteralWithOptionalSign = 65, RULE_functionWithNumberReturn = 66, 
		RULE_invert = 67, RULE_numberOperator = 68, RULE_functionWithStringReturn = 69, 
		RULE_functionArguments = 70, RULE_escapedString = 71, RULE_escapedStringContent = 72, 
		RULE_escapedStringTemplateVar = 73, RULE_stringAtom = 74, RULE_stringTemplateVar = 75, 
		RULE_stringTemplateVarSuffix = 76, RULE_doubleQuoteAtom = 77, RULE_stringTemplateVarDQ = 78, 
		RULE_stringDQTemplateVarSuffix = 79;
	private static String[] makeRuleNames() {
		return new String[] {
			"passage", "block", "statementLine", "emptyLine", "actBlock", "actInline", 
			"actPicture", "ifInline", "ifBlock", "elseIfBlock", "elseBlock", "command", 
			"commandLine", "commandAppended", "addobj", "assignment", "assignmentNumber", 
			"assignmentString", "assignmentoperator", "comment", "commentAttached", 
			"copyarr", "delact", "dynamic", "gosub", "gt", "xgt", "inp", "jump", 
			"jumpmarker", "killvar", "msg", "multilineBlock", "multilineContents", 
			"multilineBlockTemplateVar", "opengame", "play", "print", "printMain", 
			"printNewlineMain", "printNewlinepreMain", "printEmptyLineMain", "printSide", 
			"printNewlineSide", "printNewlinepreSide", "printEmptyLineSide", "savegame", 
			"syscall", "syssetting", "view", "wait", "identifier", "identifierNumber", 
			"identifierString", "arrayIndex", "compareOperator", "notEqual", "value", 
			"comparee", "sum", "term", "addOp", "logicOp", "mulOp", "factor", "numberLiteralWithOptionalSign", 
			"functionWithNumberReturn", "invert", "numberOperator", "functionWithStringReturn", 
			"functionArguments", "escapedString", "escapedStringContent", "escapedStringTemplateVar", 
			"stringAtom", "stringTemplateVar", "stringTemplateVarSuffix", "doubleQuoteAtom", 
			"stringTemplateVarDQ", "stringDQTemplateVarSuffix"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, "'&'", null, null, "'='", 
			"'+='", "'-='", "'/='", "'*='", "'to'", null, null, null, null, null, 
			null, "'*'", "':'", "'+'", "'-'", "'/'", "'>'", null, "'<'", null, "'<>'", 
			"'$'", "'!'", "'!!'", null, null, "'['", "']'", "'{'", "'('", "')'", 
			"','", "'?'", null, null, null, null, null, null, null, "'\"\"'", null, 
			null, null, null, "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PassageIdentifier", "PassageEndMarker", "SYSCALL", "SYSSETTING", 
			"ADDOBJ", "COPYARR", "DELACT", "DYNAMIC", "GOSUB", "GOTO", "XGOTO", "INPUT", 
			"JUMP", "KILLVAR", "MSG", "OPENGAME", "PLAY", "Print", "PrintNewline", 
			"PrintNewlinepre", "SAVEGAME", "VIEW", "WAIT", "ACT", "IF", "ELSEIF", 
			"ELSE", "END", "INVERT", "AND", "OR", "CommandConnect", "NumberLiteral", 
			"SET", "EqualOperator", "IncrementOperator", "DecrementOperator", "DivideSelfOperator", 
			"MultSelfOperator", "SetToOperator", "TemplateStringEndExpression", "DOUBLEQUOTE", 
			"SINGLEQUOTE", "TemplateDoubleSingleQuote", "MOD", "WORD", "STAR", "DPOINT", 
			"PLUS", "MINUS", "DIVIDE", "GREATER_THAN", "GREAT_EQUAL_THAN", "LOWER_THAN", 
			"LOWER_EQUAL_THAN", "NEQ", "DOLLAR", "EXCLAMATIONMARK", "CommentStart", 
			"AttachedComment", "Multilinecomment", "ARRAYBRACKOPEN", "ARRAYBRACKCLOSE", 
			"BRACK_OPEN", "ParenthesisLeft", "ParenthesisRight", "Comma", "Questionmark", 
			"NEWLINE", "WHITESPACE", "LINEBREAK", "AnythingElse", "EscapedSingleQuote", 
			"TemplateStringStartExpression", "StringAtom", "EscapedDoubleQuote", 
			"DQTemplateStringStartExpression", "DQStringAtom", "EscapedStringTemplateStart", 
			"InEscapedStringAtom", "BRACK_CLOSE", "MultilineTemplateStringStartExpression", 
			"AnythingElseInMultiLine", "InComment"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "qsrcParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public qsrcParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PassageContext extends ParserRuleContext {
		public TerminalNode PassageIdentifier() { return getToken(qsrcParser.PassageIdentifier, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode PassageEndMarker() { return getToken(qsrcParser.PassageEndMarker, 0); }
		public TerminalNode EOF() { return getToken(qsrcParser.EOF, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public List<CommentContext> comment() {
			return getRuleContexts(CommentContext.class);
		}
		public CommentContext comment(int i) {
			return getRuleContext(CommentContext.class,i);
		}
		public PassageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_passage; }
	}

	public final PassageContext passage() throws RecognitionException {
		PassageContext _localctx = new PassageContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_passage);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			match(PassageIdentifier);
			setState(161);
			block();
			setState(162);
			match(PassageEndMarker);
			setState(167);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (((((_la - 58)) & ~0x3f) == 0 && ((1L << (_la - 58)) & 2059L) != 0)) {
				{
				setState(165);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case NEWLINE:
					{
					setState(163);
					match(NEWLINE);
					}
					break;
				case EXCLAMATIONMARK:
				case CommentStart:
				case Multilinecomment:
					{
					setState(164);
					comment();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(169);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(170);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StatementLineContext> statementLine() {
			return getRuleContexts(StatementLineContext.class);
		}
		public StatementLineContext statementLine(int i) {
			return getRuleContext(StatementLineContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 3316861569513553912L) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & 35L) != 0)) {
				{
				{
				setState(172);
				statementLine();
				}
				}
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementLineContext extends ParserRuleContext {
		public ActBlockContext actBlock() {
			return getRuleContext(ActBlockContext.class,0);
		}
		public CommandLineContext commandLine() {
			return getRuleContext(CommandLineContext.class,0);
		}
		public IfBlockContext ifBlock() {
			return getRuleContext(IfBlockContext.class,0);
		}
		public EmptyLineContext emptyLine() {
			return getRuleContext(EmptyLineContext.class,0);
		}
		public StatementLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statementLine; }
	}

	public final StatementLineContext statementLine() throws RecognitionException {
		StatementLineContext _localctx = new StatementLineContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statementLine);
		try {
			setState(182);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(178);
				actBlock();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(179);
				commandLine();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(180);
				ifBlock();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(181);
				emptyLine();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EmptyLineContext extends ParserRuleContext {
		public TerminalNode NEWLINE() { return getToken(qsrcParser.NEWLINE, 0); }
		public EmptyLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_emptyLine; }
	}

	public final EmptyLineContext emptyLine() throws RecognitionException {
		EmptyLineContext _localctx = new EmptyLineContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_emptyLine);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActBlockContext extends ParserRuleContext {
		public TerminalNode ACT() { return getToken(qsrcParser.ACT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode END() { return getToken(qsrcParser.END, 0); }
		public CommandAppendedContext commandAppended() {
			return getRuleContext(CommandAppendedContext.class,0);
		}
		public CommentAttachedContext commentAttached() {
			return getRuleContext(CommentAttachedContext.class,0);
		}
		public ActBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actBlock; }
	}

	public final ActBlockContext actBlock() throws RecognitionException {
		ActBlockContext _localctx = new ActBlockContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_actBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(186);
			match(ACT);
			setState(187);
			value(0);
			setState(188);
			match(DPOINT);
			setState(189);
			match(NEWLINE);
			setState(190);
			block();
			setState(191);
			match(END);
			setState(193);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CommandConnect) {
				{
				setState(192);
				commandAppended();
				}
			}

			setState(196);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AttachedComment) {
				{
				setState(195);
				commentAttached();
				}
			}

			setState(198);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActInlineContext extends ParserRuleContext {
		public TerminalNode ACT() { return getToken(qsrcParser.ACT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public CommandContext command() {
			return getRuleContext(CommandContext.class,0);
		}
		public ActPictureContext actPicture() {
			return getRuleContext(ActPictureContext.class,0);
		}
		public ActInlineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actInline; }
	}

	public final ActInlineContext actInline() throws RecognitionException {
		ActInlineContext _localctx = new ActInlineContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_actInline);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(200);
			match(ACT);
			setState(201);
			value(0);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==Comma) {
				{
				setState(202);
				actPicture();
				}
			}

			setState(205);
			match(DPOINT);
			setState(206);
			command();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ActPictureContext extends ParserRuleContext {
		public TerminalNode Comma() { return getToken(qsrcParser.Comma, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ActPictureContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_actPicture; }
	}

	public final ActPictureContext actPicture() throws RecognitionException {
		ActPictureContext _localctx = new ActPictureContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_actPicture);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			match(Comma);
			setState(209);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfInlineContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(qsrcParser.IF, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public List<CommandContext> command() {
			return getRuleContexts(CommandContext.class);
		}
		public CommandContext command(int i) {
			return getRuleContext(CommandContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(qsrcParser.ELSE, 0); }
		public IfInlineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifInline; }
	}

	public final IfInlineContext ifInline() throws RecognitionException {
		IfInlineContext _localctx = new IfInlineContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_ifInline);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(211);
			match(IF);
			setState(212);
			value(0);
			setState(213);
			match(DPOINT);
			setState(214);
			command();
			setState(217);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
			case 1:
				{
				setState(215);
				match(ELSE);
				setState(216);
				command();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfBlockContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(qsrcParser.IF, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public TerminalNode END() { return getToken(qsrcParser.END, 0); }
		public List<ElseIfBlockContext> elseIfBlock() {
			return getRuleContexts(ElseIfBlockContext.class);
		}
		public ElseIfBlockContext elseIfBlock(int i) {
			return getRuleContext(ElseIfBlockContext.class,i);
		}
		public ElseBlockContext elseBlock() {
			return getRuleContext(ElseBlockContext.class,0);
		}
		public CommandAppendedContext commandAppended() {
			return getRuleContext(CommandAppendedContext.class,0);
		}
		public CommentAttachedContext commentAttached() {
			return getRuleContext(CommentAttachedContext.class,0);
		}
		public IfBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifBlock; }
	}

	public final IfBlockContext ifBlock() throws RecognitionException {
		IfBlockContext _localctx = new IfBlockContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_ifBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(219);
			match(IF);
			setState(220);
			value(0);
			setState(221);
			match(DPOINT);
			setState(222);
			match(NEWLINE);
			setState(223);
			block();
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSEIF) {
				{
				{
				setState(224);
				elseIfBlock();
				}
				}
				setState(229);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(231);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(230);
				elseBlock();
				}
			}

			setState(233);
			match(END);
			setState(235);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CommandConnect) {
				{
				setState(234);
				commandAppended();
				}
			}

			setState(238);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AttachedComment) {
				{
				setState(237);
				commentAttached();
				}
			}

			setState(240);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseIfBlockContext extends ParserRuleContext {
		public TerminalNode ELSEIF() { return getToken(qsrcParser.ELSEIF, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public TerminalNode NEWLINE() { return getToken(qsrcParser.NEWLINE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseIfBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfBlock; }
	}

	public final ElseIfBlockContext elseIfBlock() throws RecognitionException {
		ElseIfBlockContext _localctx = new ElseIfBlockContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_elseIfBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(242);
			match(ELSEIF);
			setState(243);
			value(0);
			setState(244);
			match(DPOINT);
			setState(245);
			match(NEWLINE);
			setState(246);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseBlockContext extends ParserRuleContext {
		public TerminalNode ELSE() { return getToken(qsrcParser.ELSE, 0); }
		public TerminalNode NEWLINE() { return getToken(qsrcParser.NEWLINE, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseBlock; }
	}

	public final ElseBlockContext elseBlock() throws RecognitionException {
		ElseBlockContext _localctx = new ElseBlockContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_elseBlock);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(ELSE);
			setState(249);
			match(NEWLINE);
			setState(250);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommandContext extends ParserRuleContext {
		public AddobjContext addobj() {
			return getRuleContext(AddobjContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public CopyarrContext copyarr() {
			return getRuleContext(CopyarrContext.class,0);
		}
		public DelactContext delact() {
			return getRuleContext(DelactContext.class,0);
		}
		public DynamicContext dynamic() {
			return getRuleContext(DynamicContext.class,0);
		}
		public GosubContext gosub() {
			return getRuleContext(GosubContext.class,0);
		}
		public GtContext gt() {
			return getRuleContext(GtContext.class,0);
		}
		public XgtContext xgt() {
			return getRuleContext(XgtContext.class,0);
		}
		public JumpContext jump() {
			return getRuleContext(JumpContext.class,0);
		}
		public JumpmarkerContext jumpmarker() {
			return getRuleContext(JumpmarkerContext.class,0);
		}
		public KillvarContext killvar() {
			return getRuleContext(KillvarContext.class,0);
		}
		public MsgContext msg() {
			return getRuleContext(MsgContext.class,0);
		}
		public OpengameContext opengame() {
			return getRuleContext(OpengameContext.class,0);
		}
		public PlayContext play() {
			return getRuleContext(PlayContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
		}
		public SavegameContext savegame() {
			return getRuleContext(SavegameContext.class,0);
		}
		public SyscallContext syscall() {
			return getRuleContext(SyscallContext.class,0);
		}
		public SyssettingContext syssetting() {
			return getRuleContext(SyssettingContext.class,0);
		}
		public ViewContext view() {
			return getRuleContext(ViewContext.class,0);
		}
		public WaitContext wait() {
			return getRuleContext(WaitContext.class,0);
		}
		public List<CommandAppendedContext> commandAppended() {
			return getRuleContexts(CommandAppendedContext.class);
		}
		public CommandAppendedContext commandAppended(int i) {
			return getRuleContext(CommandAppendedContext.class,i);
		}
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public CommandContext command() {
			return getRuleContext(CommandContext.class,0);
		}
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public ActInlineContext actInline() {
			return getRuleContext(ActInlineContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public IfInlineContext ifInline() {
			return getRuleContext(IfInlineContext.class,0);
		}
		public CommandContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_command; }
	}

	public final CommandContext command() throws RecognitionException {
		CommandContext _localctx = new CommandContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_command);
		try {
			int _alt;
			setState(287);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SYSCALL:
			case SYSSETTING:
			case ADDOBJ:
			case COPYARR:
			case DELACT:
			case DYNAMIC:
			case GOSUB:
			case GOTO:
			case XGOTO:
			case INPUT:
			case JUMP:
			case KILLVAR:
			case MSG:
			case OPENGAME:
			case PLAY:
			case Print:
			case PrintNewline:
			case PrintNewlinepre:
			case SAVEGAME:
			case VIEW:
			case WAIT:
			case INVERT:
			case NumberLiteral:
			case SET:
			case DOUBLEQUOTE:
			case SINGLEQUOTE:
			case TemplateDoubleSingleQuote:
			case WORD:
			case STAR:
			case DPOINT:
			case PLUS:
			case MINUS:
			case DOLLAR:
			case BRACK_OPEN:
			case ParenthesisLeft:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(276);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
				case 1:
					{
					{
					setState(252);
					match(ParenthesisLeft);
					setState(253);
					command();
					setState(254);
					match(ParenthesisRight);
					}
					}
					break;
				case 2:
					{
					setState(256);
					addobj();
					}
					break;
				case 3:
					{
					setState(257);
					assignment();
					}
					break;
				case 4:
					{
					setState(258);
					copyarr();
					}
					break;
				case 5:
					{
					setState(259);
					delact();
					}
					break;
				case 6:
					{
					setState(260);
					dynamic();
					}
					break;
				case 7:
					{
					setState(261);
					gosub();
					}
					break;
				case 8:
					{
					setState(262);
					gt();
					}
					break;
				case 9:
					{
					setState(263);
					xgt();
					}
					break;
				case 10:
					{
					setState(264);
					jump();
					}
					break;
				case 11:
					{
					setState(265);
					jumpmarker();
					}
					break;
				case 12:
					{
					setState(266);
					killvar();
					}
					break;
				case 13:
					{
					setState(267);
					msg();
					}
					break;
				case 14:
					{
					setState(268);
					opengame();
					}
					break;
				case 15:
					{
					setState(269);
					play();
					}
					break;
				case 16:
					{
					setState(270);
					print();
					}
					break;
				case 17:
					{
					setState(271);
					savegame();
					}
					break;
				case 18:
					{
					setState(272);
					syscall();
					}
					break;
				case 19:
					{
					setState(273);
					syssetting();
					}
					break;
				case 20:
					{
					setState(274);
					view();
					}
					break;
				case 21:
					{
					setState(275);
					wait();
					}
					break;
				}
				setState(281);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(278);
						commandAppended();
						}
						} 
					}
					setState(283);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				}
				}
				break;
			case ACT:
				enterOuterAlt(_localctx, 2);
				{
				setState(284);
				actInline();
				}
				break;
			case EXCLAMATIONMARK:
			case CommentStart:
			case Multilinecomment:
				enterOuterAlt(_localctx, 3);
				{
				setState(285);
				comment();
				}
				break;
			case IF:
				enterOuterAlt(_localctx, 4);
				{
				setState(286);
				ifInline();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommandLineContext extends ParserRuleContext {
		public CommandContext command() {
			return getRuleContext(CommandContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(qsrcParser.NEWLINE, 0); }
		public CommandAppendedContext commandAppended() {
			return getRuleContext(CommandAppendedContext.class,0);
		}
		public CommentAttachedContext commentAttached() {
			return getRuleContext(CommentAttachedContext.class,0);
		}
		public CommandLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandLine; }
	}

	public final CommandLineContext commandLine() throws RecognitionException {
		CommandLineContext _localctx = new CommandLineContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_commandLine);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(289);
			command();
			setState(291);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CommandConnect) {
				{
				setState(290);
				commandAppended();
				}
			}

			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AttachedComment) {
				{
				setState(293);
				commentAttached();
				}
			}

			setState(296);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommandAppendedContext extends ParserRuleContext {
		public List<TerminalNode> CommandConnect() { return getTokens(qsrcParser.CommandConnect); }
		public TerminalNode CommandConnect(int i) {
			return getToken(qsrcParser.CommandConnect, i);
		}
		public CommandContext command() {
			return getRuleContext(CommandContext.class,0);
		}
		public CommandAppendedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commandAppended; }
	}

	public final CommandAppendedContext commandAppended() throws RecognitionException {
		CommandAppendedContext _localctx = new CommandAppendedContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_commandAppended);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			match(CommandConnect);
			setState(300);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CommandConnect) {
				{
				setState(299);
				match(CommandConnect);
				}
			}

			setState(302);
			command();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddobjContext extends ParserRuleContext {
		public TerminalNode ADDOBJ() { return getToken(qsrcParser.ADDOBJ, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public AddobjContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addobj; }
	}

	public final AddobjContext addobj() throws RecognitionException {
		AddobjContext _localctx = new AddobjContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_addobj);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(304);
			match(ADDOBJ);
			setState(305);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentContext extends ParserRuleContext {
		public AssignmentNumberContext assignmentNumber() {
			return getRuleContext(AssignmentNumberContext.class,0);
		}
		public AssignmentStringContext assignmentString() {
			return getRuleContext(AssignmentStringContext.class,0);
		}
		public TerminalNode SET() { return getToken(qsrcParser.SET, 0); }
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_assignment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(308);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SET) {
				{
				setState(307);
				match(SET);
				}
			}

			setState(312);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WORD:
				{
				setState(310);
				assignmentNumber();
				}
				break;
			case DOLLAR:
				{
				setState(311);
				assignmentString();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentNumberContext extends ParserRuleContext {
		public IdentifierNumberContext identifierNumber() {
			return getRuleContext(IdentifierNumberContext.class,0);
		}
		public AssignmentoperatorContext assignmentoperator() {
			return getRuleContext(AssignmentoperatorContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public AssignmentNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentNumber; }
	}

	public final AssignmentNumberContext assignmentNumber() throws RecognitionException {
		AssignmentNumberContext _localctx = new AssignmentNumberContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_assignmentNumber);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			identifierNumber();
			setState(315);
			assignmentoperator();
			setState(316);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentStringContext extends ParserRuleContext {
		public IdentifierStringContext identifierString() {
			return getRuleContext(IdentifierStringContext.class,0);
		}
		public AssignmentoperatorContext assignmentoperator() {
			return getRuleContext(AssignmentoperatorContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public MultilineBlockContext multilineBlock() {
			return getRuleContext(MultilineBlockContext.class,0);
		}
		public AssignmentStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentString; }
	}

	public final AssignmentStringContext assignmentString() throws RecognitionException {
		AssignmentStringContext _localctx = new AssignmentStringContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_assignmentString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(318);
			identifierString();
			setState(319);
			assignmentoperator();
			setState(322);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				setState(320);
				value(0);
				}
				break;
			case 2:
				{
				setState(321);
				multilineBlock();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AssignmentoperatorContext extends ParserRuleContext {
		public TerminalNode EqualOperator() { return getToken(qsrcParser.EqualOperator, 0); }
		public TerminalNode IncrementOperator() { return getToken(qsrcParser.IncrementOperator, 0); }
		public TerminalNode DecrementOperator() { return getToken(qsrcParser.DecrementOperator, 0); }
		public TerminalNode SetToOperator() { return getToken(qsrcParser.SetToOperator, 0); }
		public TerminalNode MultSelfOperator() { return getToken(qsrcParser.MultSelfOperator, 0); }
		public TerminalNode DivideSelfOperator() { return getToken(qsrcParser.DivideSelfOperator, 0); }
		public AssignmentoperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignmentoperator; }
	}

	public final AssignmentoperatorContext assignmentoperator() throws RecognitionException {
		AssignmentoperatorContext _localctx = new AssignmentoperatorContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_assignmentoperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(324);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2164663517184L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommentContext extends ParserRuleContext {
		public TerminalNode EXCLAMATIONMARK() { return getToken(qsrcParser.EXCLAMATIONMARK, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public TerminalNode CommentStart() { return getToken(qsrcParser.CommentStart, 0); }
		public List<TerminalNode> InComment() { return getTokens(qsrcParser.InComment); }
		public TerminalNode InComment(int i) {
			return getToken(qsrcParser.InComment, i);
		}
		public TerminalNode Multilinecomment() { return getToken(qsrcParser.Multilinecomment, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_comment);
		int _la;
		try {
			int _alt;
			setState(341);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EXCLAMATIONMARK:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(326);
				match(EXCLAMATIONMARK);
				setState(330);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(327);
						_la = _input.LA(1);
						if ( _la <= 0 || (_la==NEWLINE) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						} 
					}
					setState(332);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,21,_ctx);
				}
				}
				}
				break;
			case CommentStart:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(333);
				match(CommentStart);
				setState(337);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==InComment) {
					{
					{
					setState(334);
					match(InComment);
					}
					}
					setState(339);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				}
				break;
			case Multilinecomment:
				enterOuterAlt(_localctx, 3);
				{
				setState(340);
				match(Multilinecomment);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CommentAttachedContext extends ParserRuleContext {
		public TerminalNode AttachedComment() { return getToken(qsrcParser.AttachedComment, 0); }
		public List<TerminalNode> InComment() { return getTokens(qsrcParser.InComment); }
		public TerminalNode InComment(int i) {
			return getToken(qsrcParser.InComment, i);
		}
		public CommentAttachedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_commentAttached; }
	}

	public final CommentAttachedContext commentAttached() throws RecognitionException {
		CommentAttachedContext _localctx = new CommentAttachedContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_commentAttached);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(343);
			match(AttachedComment);
			setState(347);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==InComment) {
				{
				{
				setState(344);
				match(InComment);
				}
				}
				setState(349);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CopyarrContext extends ParserRuleContext {
		public TerminalNode COPYARR() { return getToken(qsrcParser.COPYARR, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public CopyarrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_copyarr; }
	}

	public final CopyarrContext copyarr() throws RecognitionException {
		CopyarrContext _localctx = new CopyarrContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_copyarr);
		try {
			setState(357);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(350);
				match(COPYARR);
				setState(351);
				functionArguments();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(352);
				match(COPYARR);
				setState(353);
				match(ParenthesisLeft);
				setState(354);
				functionArguments();
				setState(355);
				match(ParenthesisRight);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DelactContext extends ParserRuleContext {
		public TerminalNode DELACT() { return getToken(qsrcParser.DELACT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public DelactContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_delact; }
	}

	public final DelactContext delact() throws RecognitionException {
		DelactContext _localctx = new DelactContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_delact);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(359);
			match(DELACT);
			setState(360);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DynamicContext extends ParserRuleContext {
		public TerminalNode DYNAMIC() { return getToken(qsrcParser.DYNAMIC, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public DynamicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dynamic; }
	}

	public final DynamicContext dynamic() throws RecognitionException {
		DynamicContext _localctx = new DynamicContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_dynamic);
		try {
			setState(369);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(362);
				match(DYNAMIC);
				setState(363);
				functionArguments();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(364);
				match(DYNAMIC);
				setState(365);
				match(ParenthesisLeft);
				setState(366);
				functionArguments();
				setState(367);
				match(ParenthesisRight);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GosubContext extends ParserRuleContext {
		public TerminalNode GOSUB() { return getToken(qsrcParser.GOSUB, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public GosubContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gosub; }
	}

	public final GosubContext gosub() throws RecognitionException {
		GosubContext _localctx = new GosubContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_gosub);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(371);
			match(GOSUB);
			setState(372);
			functionArguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class GtContext extends ParserRuleContext {
		public TerminalNode GOTO() { return getToken(qsrcParser.GOTO, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public GtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_gt; }
	}

	public final GtContext gt() throws RecognitionException {
		GtContext _localctx = new GtContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_gt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			match(GOTO);
			setState(375);
			functionArguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class XgtContext extends ParserRuleContext {
		public TerminalNode XGOTO() { return getToken(qsrcParser.XGOTO, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public XgtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_xgt; }
	}

	public final XgtContext xgt() throws RecognitionException {
		XgtContext _localctx = new XgtContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_xgt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(377);
			match(XGOTO);
			setState(378);
			functionArguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InpContext extends ParserRuleContext {
		public TerminalNode INPUT() { return getToken(qsrcParser.INPUT, 0); }
		public SumContext sum() {
			return getRuleContext(SumContext.class,0);
		}
		public InpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inp; }
	}

	public final InpContext inp() throws RecognitionException {
		InpContext _localctx = new InpContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_inp);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(380);
			match(INPUT);
			setState(381);
			sum(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JumpContext extends ParserRuleContext {
		public TerminalNode JUMP() { return getToken(qsrcParser.JUMP, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public JumpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jump; }
	}

	public final JumpContext jump() throws RecognitionException {
		JumpContext _localctx = new JumpContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_jump);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(383);
			match(JUMP);
			setState(384);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class JumpmarkerContext extends ParserRuleContext {
		public TerminalNode DPOINT() { return getToken(qsrcParser.DPOINT, 0); }
		public TerminalNode WORD() { return getToken(qsrcParser.WORD, 0); }
		public JumpmarkerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_jumpmarker; }
	}

	public final JumpmarkerContext jumpmarker() throws RecognitionException {
		JumpmarkerContext _localctx = new JumpmarkerContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_jumpmarker);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(386);
			match(DPOINT);
			setState(387);
			match(WORD);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class KillvarContext extends ParserRuleContext {
		public TerminalNode KILLVAR() { return getToken(qsrcParser.KILLVAR, 0); }
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public TerminalNode Comma() { return getToken(qsrcParser.Comma, 0); }
		public KillvarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_killvar; }
	}

	public final KillvarContext killvar() throws RecognitionException {
		KillvarContext _localctx = new KillvarContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_killvar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(389);
			match(KILLVAR);
			setState(395);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 12)) & ~0x3f) == 0 && ((1L << (_la - 12)) & 13546420269350913L) != 0)) {
				{
				setState(390);
				value(0);
				setState(393);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==Comma) {
					{
					setState(391);
					match(Comma);
					setState(392);
					value(0);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MsgContext extends ParserRuleContext {
		public TerminalNode MSG() { return getToken(qsrcParser.MSG, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public MsgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_msg; }
	}

	public final MsgContext msg() throws RecognitionException {
		MsgContext _localctx = new MsgContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_msg);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(MSG);
			setState(398);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultilineBlockContext extends ParserRuleContext {
		public TerminalNode BRACK_OPEN() { return getToken(qsrcParser.BRACK_OPEN, 0); }
		public TerminalNode BRACK_CLOSE() { return getToken(qsrcParser.BRACK_CLOSE, 0); }
		public List<MultilineContentsContext> multilineContents() {
			return getRuleContexts(MultilineContentsContext.class);
		}
		public MultilineContentsContext multilineContents(int i) {
			return getRuleContext(MultilineContentsContext.class,i);
		}
		public MultilineBlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multilineBlock; }
	}

	public final MultilineBlockContext multilineBlock() throws RecognitionException {
		MultilineBlockContext _localctx = new MultilineBlockContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_multilineBlock);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(400);
			match(BRACK_OPEN);
			{
			setState(404);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==MultilineTemplateStringStartExpression || _la==AnythingElseInMultiLine) {
				{
				{
				setState(401);
				multilineContents();
				}
				}
				setState(406);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
			setState(407);
			match(BRACK_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultilineContentsContext extends ParserRuleContext {
		public TerminalNode AnythingElseInMultiLine() { return getToken(qsrcParser.AnythingElseInMultiLine, 0); }
		public MultilineBlockTemplateVarContext multilineBlockTemplateVar() {
			return getRuleContext(MultilineBlockTemplateVarContext.class,0);
		}
		public MultilineContentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multilineContents; }
	}

	public final MultilineContentsContext multilineContents() throws RecognitionException {
		MultilineContentsContext _localctx = new MultilineContentsContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_multilineContents);
		try {
			setState(411);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AnythingElseInMultiLine:
				enterOuterAlt(_localctx, 1);
				{
				setState(409);
				match(AnythingElseInMultiLine);
				}
				break;
			case MultilineTemplateStringStartExpression:
				enterOuterAlt(_localctx, 2);
				{
				setState(410);
				multilineBlockTemplateVar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MultilineBlockTemplateVarContext extends ParserRuleContext {
		public TerminalNode MultilineTemplateStringStartExpression() { return getToken(qsrcParser.MultilineTemplateStringStartExpression, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TemplateStringEndExpression() { return getToken(qsrcParser.TemplateStringEndExpression, 0); }
		public MultilineBlockTemplateVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multilineBlockTemplateVar; }
	}

	public final MultilineBlockTemplateVarContext multilineBlockTemplateVar() throws RecognitionException {
		MultilineBlockTemplateVarContext _localctx = new MultilineBlockTemplateVarContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_multilineBlockTemplateVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(413);
			match(MultilineTemplateStringStartExpression);
			setState(414);
			value(0);
			setState(415);
			match(TemplateStringEndExpression);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OpengameContext extends ParserRuleContext {
		public TerminalNode OPENGAME() { return getToken(qsrcParser.OPENGAME, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public OpengameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_opengame; }
	}

	public final OpengameContext opengame() throws RecognitionException {
		OpengameContext _localctx = new OpengameContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_opengame);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(417);
			match(OPENGAME);
			setState(419);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 12)) & ~0x3f) == 0 && ((1L << (_la - 12)) & 13546420269350913L) != 0)) {
				{
				setState(418);
				value(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PlayContext extends ParserRuleContext {
		public TerminalNode PLAY() { return getToken(qsrcParser.PLAY, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public PlayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_play; }
	}

	public final PlayContext play() throws RecognitionException {
		PlayContext _localctx = new PlayContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_play);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(421);
			match(PLAY);
			setState(422);
			functionArguments();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintContext extends ParserRuleContext {
		public PrintMainContext printMain() {
			return getRuleContext(PrintMainContext.class,0);
		}
		public PrintNewlineMainContext printNewlineMain() {
			return getRuleContext(PrintNewlineMainContext.class,0);
		}
		public PrintNewlinepreMainContext printNewlinepreMain() {
			return getRuleContext(PrintNewlinepreMainContext.class,0);
		}
		public PrintEmptyLineMainContext printEmptyLineMain() {
			return getRuleContext(PrintEmptyLineMainContext.class,0);
		}
		public PrintSideContext printSide() {
			return getRuleContext(PrintSideContext.class,0);
		}
		public PrintNewlineSideContext printNewlineSide() {
			return getRuleContext(PrintNewlineSideContext.class,0);
		}
		public PrintNewlinepreSideContext printNewlinepreSide() {
			return getRuleContext(PrintNewlinepreSideContext.class,0);
		}
		public PrintEmptyLineSideContext printEmptyLineSide() {
			return getRuleContext(PrintEmptyLineSideContext.class,0);
		}
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_print);
		try {
			setState(432);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(424);
				printMain();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(425);
				printNewlineMain();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(426);
				printNewlinepreMain();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(427);
				printEmptyLineMain();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(428);
				printSide();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(429);
				printNewlineSide();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(430);
				printNewlinepreSide();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(431);
				printEmptyLineSide();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintMainContext extends ParserRuleContext {
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode Print() { return getToken(qsrcParser.Print, 0); }
		public PrintMainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printMain; }
	}

	public final PrintMainContext printMain() throws RecognitionException {
		PrintMainContext _localctx = new PrintMainContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_printMain);
		try {
			setState(438);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INPUT:
			case INVERT:
			case NumberLiteral:
			case DOUBLEQUOTE:
			case SINGLEQUOTE:
			case TemplateDoubleSingleQuote:
			case WORD:
			case PLUS:
			case MINUS:
			case DOLLAR:
			case BRACK_OPEN:
			case ParenthesisLeft:
				enterOuterAlt(_localctx, 1);
				{
				setState(434);
				value(0);
				}
				break;
			case STAR:
				enterOuterAlt(_localctx, 2);
				{
				{
				setState(435);
				match(STAR);
				setState(436);
				match(Print);
				setState(437);
				value(0);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintNewlineMainContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode PrintNewline() { return getToken(qsrcParser.PrintNewline, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintNewlineMainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printNewlineMain; }
	}

	public final PrintNewlineMainContext printNewlineMain() throws RecognitionException {
		PrintNewlineMainContext _localctx = new PrintNewlineMainContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_printNewlineMain);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(440);
			match(STAR);
			setState(441);
			match(PrintNewline);
			setState(442);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintNewlinepreMainContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode PrintNewlinepre() { return getToken(qsrcParser.PrintNewlinepre, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintNewlinepreMainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printNewlinepreMain; }
	}

	public final PrintNewlinepreMainContext printNewlinepreMain() throws RecognitionException {
		PrintNewlinepreMainContext _localctx = new PrintNewlinepreMainContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_printNewlinepreMain);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(444);
			match(STAR);
			setState(445);
			match(PrintNewlinepre);
			setState(446);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintEmptyLineMainContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode PrintNewline() { return getToken(qsrcParser.PrintNewline, 0); }
		public TerminalNode PrintNewlinepre() { return getToken(qsrcParser.PrintNewlinepre, 0); }
		public PrintEmptyLineMainContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printEmptyLineMain; }
	}

	public final PrintEmptyLineMainContext printEmptyLineMain() throws RecognitionException {
		PrintEmptyLineMainContext _localctx = new PrintEmptyLineMainContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_printEmptyLineMain);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(448);
			match(STAR);
			setState(449);
			_la = _input.LA(1);
			if ( !(_la==PrintNewline || _la==PrintNewlinepre) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintSideContext extends ParserRuleContext {
		public TerminalNode Print() { return getToken(qsrcParser.Print, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintSideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printSide; }
	}

	public final PrintSideContext printSide() throws RecognitionException {
		PrintSideContext _localctx = new PrintSideContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_printSide);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(451);
			match(Print);
			setState(452);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintNewlineSideContext extends ParserRuleContext {
		public TerminalNode PrintNewline() { return getToken(qsrcParser.PrintNewline, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintNewlineSideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printNewlineSide; }
	}

	public final PrintNewlineSideContext printNewlineSide() throws RecognitionException {
		PrintNewlineSideContext _localctx = new PrintNewlineSideContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_printNewlineSide);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(454);
			match(PrintNewline);
			setState(455);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintNewlinepreSideContext extends ParserRuleContext {
		public TerminalNode PrintNewlinepre() { return getToken(qsrcParser.PrintNewlinepre, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public PrintNewlinepreSideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printNewlinepreSide; }
	}

	public final PrintNewlinepreSideContext printNewlinepreSide() throws RecognitionException {
		PrintNewlinepreSideContext _localctx = new PrintNewlinepreSideContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_printNewlinepreSide);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(457);
			match(PrintNewlinepre);
			setState(458);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PrintEmptyLineSideContext extends ParserRuleContext {
		public TerminalNode PrintNewline() { return getToken(qsrcParser.PrintNewline, 0); }
		public TerminalNode PrintNewlinepre() { return getToken(qsrcParser.PrintNewlinepre, 0); }
		public PrintEmptyLineSideContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_printEmptyLineSide; }
	}

	public final PrintEmptyLineSideContext printEmptyLineSide() throws RecognitionException {
		PrintEmptyLineSideContext _localctx = new PrintEmptyLineSideContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_printEmptyLineSide);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			_la = _input.LA(1);
			if ( !(_la==PrintNewline || _la==PrintNewlinepre) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SavegameContext extends ParserRuleContext {
		public TerminalNode SAVEGAME() { return getToken(qsrcParser.SAVEGAME, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public SavegameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_savegame; }
	}

	public final SavegameContext savegame() throws RecognitionException {
		SavegameContext _localctx = new SavegameContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_savegame);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(462);
			match(SAVEGAME);
			setState(463);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SyscallContext extends ParserRuleContext {
		public TerminalNode SYSCALL() { return getToken(qsrcParser.SYSCALL, 0); }
		public SyscallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syscall; }
	}

	public final SyscallContext syscall() throws RecognitionException {
		SyscallContext _localctx = new SyscallContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_syscall);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(465);
			match(SYSCALL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SyssettingContext extends ParserRuleContext {
		public TerminalNode SYSSETTING() { return getToken(qsrcParser.SYSSETTING, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public SyssettingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_syssetting; }
	}

	public final SyssettingContext syssetting() throws RecognitionException {
		SyssettingContext _localctx = new SyssettingContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_syssetting);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(467);
			match(SYSSETTING);
			setState(468);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ViewContext extends ParserRuleContext {
		public TerminalNode VIEW() { return getToken(qsrcParser.VIEW, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public ViewContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_view; }
	}

	public final ViewContext view() throws RecognitionException {
		ViewContext _localctx = new ViewContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_view);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(470);
			match(VIEW);
			setState(472);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 12)) & ~0x3f) == 0 && ((1L << (_la - 12)) & 13546420269350913L) != 0)) {
				{
				setState(471);
				value(0);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class WaitContext extends ParserRuleContext {
		public TerminalNode WAIT() { return getToken(qsrcParser.WAIT, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public WaitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wait; }
	}

	public final WaitContext wait() throws RecognitionException {
		WaitContext _localctx = new WaitContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_wait);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(474);
			match(WAIT);
			setState(475);
			value(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public IdentifierStringContext identifierString() {
			return getRuleContext(IdentifierStringContext.class,0);
		}
		public IdentifierNumberContext identifierNumber() {
			return getRuleContext(IdentifierNumberContext.class,0);
		}
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_identifier);
		try {
			setState(479);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOLLAR:
				enterOuterAlt(_localctx, 1);
				{
				setState(477);
				identifierString();
				}
				break;
			case WORD:
				enterOuterAlt(_localctx, 2);
				{
				setState(478);
				identifierNumber();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierNumberContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(qsrcParser.WORD, 0); }
		public ArrayIndexContext arrayIndex() {
			return getRuleContext(ArrayIndexContext.class,0);
		}
		public IdentifierNumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierNumber; }
	}

	public final IdentifierNumberContext identifierNumber() throws RecognitionException {
		IdentifierNumberContext _localctx = new IdentifierNumberContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_identifierNumber);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(481);
			match(WORD);
			setState(483);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(482);
				arrayIndex();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierStringContext extends ParserRuleContext {
		public TerminalNode DOLLAR() { return getToken(qsrcParser.DOLLAR, 0); }
		public TerminalNode WORD() { return getToken(qsrcParser.WORD, 0); }
		public ArrayIndexContext arrayIndex() {
			return getRuleContext(ArrayIndexContext.class,0);
		}
		public IdentifierStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierString; }
	}

	public final IdentifierStringContext identifierString() throws RecognitionException {
		IdentifierStringContext _localctx = new IdentifierStringContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_identifierString);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(485);
			match(DOLLAR);
			setState(486);
			match(WORD);
			setState(488);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				{
				setState(487);
				arrayIndex();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArrayIndexContext extends ParserRuleContext {
		public TerminalNode ARRAYBRACKOPEN() { return getToken(qsrcParser.ARRAYBRACKOPEN, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode ARRAYBRACKCLOSE() { return getToken(qsrcParser.ARRAYBRACKCLOSE, 0); }
		public ArrayIndexContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayIndex; }
	}

	public final ArrayIndexContext arrayIndex() throws RecognitionException {
		ArrayIndexContext _localctx = new ArrayIndexContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_arrayIndex);
		try {
			setState(496);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(490);
				match(ARRAYBRACKOPEN);
				setState(491);
				value(0);
				setState(492);
				match(ARRAYBRACKCLOSE);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(494);
				match(ARRAYBRACKOPEN);
				setState(495);
				match(ARRAYBRACKCLOSE);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompareOperatorContext extends ParserRuleContext {
		public TerminalNode GREAT_EQUAL_THAN() { return getToken(qsrcParser.GREAT_EQUAL_THAN, 0); }
		public TerminalNode GREATER_THAN() { return getToken(qsrcParser.GREATER_THAN, 0); }
		public TerminalNode LOWER_EQUAL_THAN() { return getToken(qsrcParser.LOWER_EQUAL_THAN, 0); }
		public TerminalNode LOWER_THAN() { return getToken(qsrcParser.LOWER_THAN, 0); }
		public TerminalNode EqualOperator() { return getToken(qsrcParser.EqualOperator, 0); }
		public NotEqualContext notEqual() {
			return getRuleContext(NotEqualContext.class,0);
		}
		public CompareOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareOperator; }
	}

	public final CompareOperatorContext compareOperator() throws RecognitionException {
		CompareOperatorContext _localctx = new CompareOperatorContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_compareOperator);
		try {
			setState(504);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case GREAT_EQUAL_THAN:
				enterOuterAlt(_localctx, 1);
				{
				setState(498);
				match(GREAT_EQUAL_THAN);
				}
				break;
			case GREATER_THAN:
				enterOuterAlt(_localctx, 2);
				{
				setState(499);
				match(GREATER_THAN);
				}
				break;
			case LOWER_EQUAL_THAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(500);
				match(LOWER_EQUAL_THAN);
				}
				break;
			case LOWER_THAN:
				enterOuterAlt(_localctx, 4);
				{
				setState(501);
				match(LOWER_THAN);
				}
				break;
			case EqualOperator:
				enterOuterAlt(_localctx, 5);
				{
				setState(502);
				match(EqualOperator);
				}
				break;
			case NEQ:
			case EXCLAMATIONMARK:
				enterOuterAlt(_localctx, 6);
				{
				setState(503);
				notEqual();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NotEqualContext extends ParserRuleContext {
		public TerminalNode NEQ() { return getToken(qsrcParser.NEQ, 0); }
		public TerminalNode EXCLAMATIONMARK() { return getToken(qsrcParser.EXCLAMATIONMARK, 0); }
		public NotEqualContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notEqual; }
	}

	public final NotEqualContext notEqual() throws RecognitionException {
		NotEqualContext _localctx = new NotEqualContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_notEqual);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(506);
			_la = _input.LA(1);
			if ( !(_la==NEQ || _la==EXCLAMATIONMARK) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValueContext extends ParserRuleContext {
		public CompareeContext comparee() {
			return getRuleContext(CompareeContext.class,0);
		}
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public LogicOpContext logicOp() {
			return getRuleContext(LogicOpContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		return value(0);
	}

	private ValueContext value(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ValueContext _localctx = new ValueContext(_ctx, _parentState);
		ValueContext _prevctx = _localctx;
		int _startState = 114;
		enterRecursionRule(_localctx, 114, RULE_value, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(509);
			comparee(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(517);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new ValueContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_value);
					setState(511);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(512);
					logicOp();
					setState(513);
					comparee(0);
					}
					} 
				}
				setState(519);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CompareeContext extends ParserRuleContext {
		public SumContext sum() {
			return getRuleContext(SumContext.class,0);
		}
		public CompareeContext comparee() {
			return getRuleContext(CompareeContext.class,0);
		}
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public CompareeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparee; }
	}

	public final CompareeContext comparee() throws RecognitionException {
		return comparee(0);
	}

	private CompareeContext comparee(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CompareeContext _localctx = new CompareeContext(_ctx, _parentState);
		CompareeContext _prevctx = _localctx;
		int _startState = 116;
		enterRecursionRule(_localctx, 116, RULE_comparee, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(521);
			sum(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(529);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CompareeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_comparee);
					setState(523);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(524);
					compareOperator();
					setState(525);
					sum(0);
					}
					} 
				}
				setState(531);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SumContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public SumContext sum() {
			return getRuleContext(SumContext.class,0);
		}
		public AddOpContext addOp() {
			return getRuleContext(AddOpContext.class,0);
		}
		public SumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sum; }
	}

	public final SumContext sum() throws RecognitionException {
		return sum(0);
	}

	private SumContext sum(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SumContext _localctx = new SumContext(_ctx, _parentState);
		SumContext _prevctx = _localctx;
		int _startState = 118;
		enterRecursionRule(_localctx, 118, RULE_sum, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(533);
			term(0);
			}
			_ctx.stop = _input.LT(-1);
			setState(541);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SumContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_sum);
					setState(535);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(536);
					addOp();
					setState(537);
					term(0);
					}
					} 
				}
				setState(543);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TermContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public MulOpContext mulOp() {
			return getRuleContext(MulOpContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		return term(0);
	}

	private TermContext term(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TermContext _localctx = new TermContext(_ctx, _parentState);
		TermContext _prevctx = _localctx;
		int _startState = 120;
		enterRecursionRule(_localctx, 120, RULE_term, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(545);
			factor();
			}
			_ctx.stop = _input.LT(-1);
			setState(553);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TermContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_term);
					setState(547);
					if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
					setState(548);
					mulOp();
					setState(549);
					factor();
					}
					} 
				}
				setState(555);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AddOpContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(qsrcParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(qsrcParser.MINUS, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public AddOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_addOp; }
	}

	public final AddOpContext addOp() throws RecognitionException {
		AddOpContext _localctx = new AddOpContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_addOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(559);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(556);
				match(NEWLINE);
				}
				}
				setState(561);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(562);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LogicOpContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(qsrcParser.AND, 0); }
		public TerminalNode OR() { return getToken(qsrcParser.OR, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public LogicOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicOp; }
	}

	public final LogicOpContext logicOp() throws RecognitionException {
		LogicOpContext _localctx = new LogicOpContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_logicOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(567);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(564);
				match(NEWLINE);
				}
				}
				setState(569);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(570);
			_la = _input.LA(1);
			if ( !(_la==AND || _la==OR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MulOpContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode MOD() { return getToken(qsrcParser.MOD, 0); }
		public TerminalNode DIVIDE() { return getToken(qsrcParser.DIVIDE, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public MulOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_mulOp; }
	}

	public final MulOpContext mulOp() throws RecognitionException {
		MulOpContext _localctx = new MulOpContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_mulOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(575);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(572);
				match(NEWLINE);
				}
				}
				setState(577);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(578);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 2427721674129408L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FactorContext extends ParserRuleContext {
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public NumberLiteralWithOptionalSignContext numberLiteralWithOptionalSign() {
			return getRuleContext(NumberLiteralWithOptionalSignContext.class,0);
		}
		public IdentifierNumberContext identifierNumber() {
			return getRuleContext(IdentifierNumberContext.class,0);
		}
		public InvertContext invert() {
			return getRuleContext(InvertContext.class,0);
		}
		public FunctionWithNumberReturnContext functionWithNumberReturn() {
			return getRuleContext(FunctionWithNumberReturnContext.class,0);
		}
		public EscapedStringContext escapedString() {
			return getRuleContext(EscapedStringContext.class,0);
		}
		public IdentifierStringContext identifierString() {
			return getRuleContext(IdentifierStringContext.class,0);
		}
		public FunctionWithStringReturnContext functionWithStringReturn() {
			return getRuleContext(FunctionWithStringReturnContext.class,0);
		}
		public MultilineBlockContext multilineBlock() {
			return getRuleContext(MultilineBlockContext.class,0);
		}
		public TerminalNode MINUS() { return getToken(qsrcParser.MINUS, 0); }
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_factor);
		try {
			setState(596);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(580);
				match(ParenthesisLeft);
				setState(581);
				value(0);
				setState(582);
				match(ParenthesisRight);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(584);
				numberLiteralWithOptionalSign();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(585);
				identifierNumber();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(586);
				invert();
				setState(587);
				value(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(589);
				functionWithNumberReturn();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(590);
				escapedString();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(591);
				identifierString();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(592);
				functionWithStringReturn();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(593);
				multilineBlock();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(594);
				match(MINUS);
				setState(595);
				value(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberLiteralWithOptionalSignContext extends ParserRuleContext {
		public TerminalNode NumberLiteral() { return getToken(qsrcParser.NumberLiteral, 0); }
		public TerminalNode PLUS() { return getToken(qsrcParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(qsrcParser.MINUS, 0); }
		public NumberLiteralWithOptionalSignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numberLiteralWithOptionalSign; }
	}

	public final NumberLiteralWithOptionalSignContext numberLiteralWithOptionalSign() throws RecognitionException {
		NumberLiteralWithOptionalSignContext _localctx = new NumberLiteralWithOptionalSignContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_numberLiteralWithOptionalSign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(599);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLUS || _la==MINUS) {
				{
				setState(598);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(601);
			match(NumberLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionWithNumberReturnContext extends ParserRuleContext {
		public TerminalNode WORD() { return getToken(qsrcParser.WORD, 0); }
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public FunctionWithNumberReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionWithNumberReturn; }
	}

	public final FunctionWithNumberReturnContext functionWithNumberReturn() throws RecognitionException {
		FunctionWithNumberReturnContext _localctx = new FunctionWithNumberReturnContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_functionWithNumberReturn);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(603);
			match(WORD);
			setState(604);
			match(ParenthesisLeft);
			setState(605);
			functionArguments();
			setState(606);
			match(ParenthesisRight);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InvertContext extends ParserRuleContext {
		public TerminalNode INVERT() { return getToken(qsrcParser.INVERT, 0); }
		public InvertContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_invert; }
	}

	public final InvertContext invert() throws RecognitionException {
		InvertContext _localctx = new InvertContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_invert);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(608);
			match(INVERT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberOperatorContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(qsrcParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(qsrcParser.MINUS, 0); }
		public TerminalNode STAR() { return getToken(qsrcParser.STAR, 0); }
		public TerminalNode MOD() { return getToken(qsrcParser.MOD, 0); }
		public TerminalNode DIVIDE() { return getToken(qsrcParser.DIVIDE, 0); }
		public TerminalNode AND() { return getToken(qsrcParser.AND, 0); }
		public TerminalNode OR() { return getToken(qsrcParser.OR, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(qsrcParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(qsrcParser.NEWLINE, i);
		}
		public NumberOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numberOperator; }
	}

	public final NumberOperatorContext numberOperator() throws RecognitionException {
		NumberOperatorContext _localctx = new NumberOperatorContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_numberOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(613);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE) {
				{
				{
				setState(610);
				match(NEWLINE);
				}
				}
				setState(615);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(616);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4116574755618816L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionWithStringReturnContext extends ParserRuleContext {
		public TerminalNode DOLLAR() { return getToken(qsrcParser.DOLLAR, 0); }
		public TerminalNode WORD() { return getToken(qsrcParser.WORD, 0); }
		public TerminalNode ParenthesisLeft() { return getToken(qsrcParser.ParenthesisLeft, 0); }
		public FunctionArgumentsContext functionArguments() {
			return getRuleContext(FunctionArgumentsContext.class,0);
		}
		public TerminalNode ParenthesisRight() { return getToken(qsrcParser.ParenthesisRight, 0); }
		public InpContext inp() {
			return getRuleContext(InpContext.class,0);
		}
		public FunctionWithStringReturnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionWithStringReturn; }
	}

	public final FunctionWithStringReturnContext functionWithStringReturn() throws RecognitionException {
		FunctionWithStringReturnContext _localctx = new FunctionWithStringReturnContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_functionWithStringReturn);
		try {
			setState(625);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DOLLAR:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(618);
				match(DOLLAR);
				setState(619);
				match(WORD);
				setState(620);
				match(ParenthesisLeft);
				setState(621);
				functionArguments();
				setState(622);
				match(ParenthesisRight);
				}
				}
				break;
			case INPUT:
				enterOuterAlt(_localctx, 2);
				{
				setState(624);
				inp();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FunctionArgumentsContext extends ParserRuleContext {
		public List<ValueContext> value() {
			return getRuleContexts(ValueContext.class);
		}
		public ValueContext value(int i) {
			return getRuleContext(ValueContext.class,i);
		}
		public List<TerminalNode> Comma() { return getTokens(qsrcParser.Comma); }
		public TerminalNode Comma(int i) {
			return getToken(qsrcParser.Comma, i);
		}
		public FunctionArgumentsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionArguments; }
	}

	public final FunctionArgumentsContext functionArguments() throws RecognitionException {
		FunctionArgumentsContext _localctx = new FunctionArgumentsContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_functionArguments);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(627);
			value(0);
			setState(632);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==Comma) {
				{
				{
				setState(628);
				match(Comma);
				setState(629);
				value(0);
				}
				}
				setState(634);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EscapedStringContext extends ParserRuleContext {
		public List<TerminalNode> TemplateDoubleSingleQuote() { return getTokens(qsrcParser.TemplateDoubleSingleQuote); }
		public TerminalNode TemplateDoubleSingleQuote(int i) {
			return getToken(qsrcParser.TemplateDoubleSingleQuote, i);
		}
		public List<EscapedStringContentContext> escapedStringContent() {
			return getRuleContexts(EscapedStringContentContext.class);
		}
		public EscapedStringContentContext escapedStringContent(int i) {
			return getRuleContext(EscapedStringContentContext.class,i);
		}
		public List<TerminalNode> SINGLEQUOTE() { return getTokens(qsrcParser.SINGLEQUOTE); }
		public TerminalNode SINGLEQUOTE(int i) {
			return getToken(qsrcParser.SINGLEQUOTE, i);
		}
		public List<StringAtomContext> stringAtom() {
			return getRuleContexts(StringAtomContext.class);
		}
		public StringAtomContext stringAtom(int i) {
			return getRuleContext(StringAtomContext.class,i);
		}
		public List<StringTemplateVarSuffixContext> stringTemplateVarSuffix() {
			return getRuleContexts(StringTemplateVarSuffixContext.class);
		}
		public StringTemplateVarSuffixContext stringTemplateVarSuffix(int i) {
			return getRuleContext(StringTemplateVarSuffixContext.class,i);
		}
		public List<TerminalNode> DOUBLEQUOTE() { return getTokens(qsrcParser.DOUBLEQUOTE); }
		public TerminalNode DOUBLEQUOTE(int i) {
			return getToken(qsrcParser.DOUBLEQUOTE, i);
		}
		public List<DoubleQuoteAtomContext> doubleQuoteAtom() {
			return getRuleContexts(DoubleQuoteAtomContext.class);
		}
		public DoubleQuoteAtomContext doubleQuoteAtom(int i) {
			return getRuleContext(DoubleQuoteAtomContext.class,i);
		}
		public List<StringDQTemplateVarSuffixContext> stringDQTemplateVarSuffix() {
			return getRuleContexts(StringDQTemplateVarSuffixContext.class);
		}
		public StringDQTemplateVarSuffixContext stringDQTemplateVarSuffix(int i) {
			return getRuleContext(StringDQTemplateVarSuffixContext.class,i);
		}
		public EscapedStringContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_escapedString; }
	}

	public final EscapedStringContext escapedString() throws RecognitionException {
		EscapedStringContext _localctx = new EscapedStringContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_escapedString);
		int _la;
		try {
			setState(671);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TemplateDoubleSingleQuote:
				enterOuterAlt(_localctx, 1);
				{
				setState(635);
				match(TemplateDoubleSingleQuote);
				setState(639);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==EscapedStringTemplateStart || _la==InEscapedStringAtom) {
					{
					{
					setState(636);
					escapedStringContent();
					}
					}
					setState(641);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(642);
				match(TemplateDoubleSingleQuote);
				}
				break;
			case SINGLEQUOTE:
				enterOuterAlt(_localctx, 2);
				{
				setState(643);
				match(SINGLEQUOTE);
				setState(647);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==EscapedSingleQuote || _la==StringAtom) {
					{
					{
					setState(644);
					stringAtom();
					}
					}
					setState(649);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(653);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==TemplateStringStartExpression) {
					{
					{
					setState(650);
					stringTemplateVarSuffix();
					}
					}
					setState(655);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(656);
				match(SINGLEQUOTE);
				}
				break;
			case DOUBLEQUOTE:
				enterOuterAlt(_localctx, 3);
				{
				setState(657);
				match(DOUBLEQUOTE);
				setState(661);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==EscapedDoubleQuote || _la==DQStringAtom) {
					{
					{
					setState(658);
					doubleQuoteAtom();
					}
					}
					setState(663);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(667);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==DQTemplateStringStartExpression) {
					{
					{
					setState(664);
					stringDQTemplateVarSuffix();
					}
					}
					setState(669);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(670);
				match(DOUBLEQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EscapedStringContentContext extends ParserRuleContext {
		public TerminalNode InEscapedStringAtom() { return getToken(qsrcParser.InEscapedStringAtom, 0); }
		public EscapedStringTemplateVarContext escapedStringTemplateVar() {
			return getRuleContext(EscapedStringTemplateVarContext.class,0);
		}
		public EscapedStringContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_escapedStringContent; }
	}

	public final EscapedStringContentContext escapedStringContent() throws RecognitionException {
		EscapedStringContentContext _localctx = new EscapedStringContentContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_escapedStringContent);
		try {
			setState(675);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case InEscapedStringAtom:
				enterOuterAlt(_localctx, 1);
				{
				setState(673);
				match(InEscapedStringAtom);
				}
				break;
			case EscapedStringTemplateStart:
				enterOuterAlt(_localctx, 2);
				{
				setState(674);
				escapedStringTemplateVar();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EscapedStringTemplateVarContext extends ParserRuleContext {
		public TerminalNode EscapedStringTemplateStart() { return getToken(qsrcParser.EscapedStringTemplateStart, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TemplateStringEndExpression() { return getToken(qsrcParser.TemplateStringEndExpression, 0); }
		public EscapedStringTemplateVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_escapedStringTemplateVar; }
	}

	public final EscapedStringTemplateVarContext escapedStringTemplateVar() throws RecognitionException {
		EscapedStringTemplateVarContext _localctx = new EscapedStringTemplateVarContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_escapedStringTemplateVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(677);
			match(EscapedStringTemplateStart);
			setState(678);
			value(0);
			setState(679);
			match(TemplateStringEndExpression);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringAtomContext extends ParserRuleContext {
		public TerminalNode StringAtom() { return getToken(qsrcParser.StringAtom, 0); }
		public TerminalNode EscapedSingleQuote() { return getToken(qsrcParser.EscapedSingleQuote, 0); }
		public StringAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringAtom; }
	}

	public final StringAtomContext stringAtom() throws RecognitionException {
		StringAtomContext _localctx = new StringAtomContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_stringAtom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(681);
			_la = _input.LA(1);
			if ( !(_la==EscapedSingleQuote || _la==StringAtom) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringTemplateVarContext extends ParserRuleContext {
		public TerminalNode TemplateStringStartExpression() { return getToken(qsrcParser.TemplateStringStartExpression, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TemplateStringEndExpression() { return getToken(qsrcParser.TemplateStringEndExpression, 0); }
		public StringTemplateVarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringTemplateVar; }
	}

	public final StringTemplateVarContext stringTemplateVar() throws RecognitionException {
		StringTemplateVarContext _localctx = new StringTemplateVarContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_stringTemplateVar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(683);
			match(TemplateStringStartExpression);
			setState(684);
			value(0);
			setState(685);
			match(TemplateStringEndExpression);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringTemplateVarSuffixContext extends ParserRuleContext {
		public StringTemplateVarContext stringTemplateVar() {
			return getRuleContext(StringTemplateVarContext.class,0);
		}
		public List<StringAtomContext> stringAtom() {
			return getRuleContexts(StringAtomContext.class);
		}
		public StringAtomContext stringAtom(int i) {
			return getRuleContext(StringAtomContext.class,i);
		}
		public StringTemplateVarSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringTemplateVarSuffix; }
	}

	public final StringTemplateVarSuffixContext stringTemplateVarSuffix() throws RecognitionException {
		StringTemplateVarSuffixContext _localctx = new StringTemplateVarSuffixContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_stringTemplateVarSuffix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(687);
			stringTemplateVar();
			setState(691);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EscapedSingleQuote || _la==StringAtom) {
				{
				{
				setState(688);
				stringAtom();
				}
				}
				setState(693);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DoubleQuoteAtomContext extends ParserRuleContext {
		public TerminalNode DQStringAtom() { return getToken(qsrcParser.DQStringAtom, 0); }
		public TerminalNode EscapedDoubleQuote() { return getToken(qsrcParser.EscapedDoubleQuote, 0); }
		public DoubleQuoteAtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doubleQuoteAtom; }
	}

	public final DoubleQuoteAtomContext doubleQuoteAtom() throws RecognitionException {
		DoubleQuoteAtomContext _localctx = new DoubleQuoteAtomContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_doubleQuoteAtom);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(694);
			_la = _input.LA(1);
			if ( !(_la==EscapedDoubleQuote || _la==DQStringAtom) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringTemplateVarDQContext extends ParserRuleContext {
		public TerminalNode DQTemplateStringStartExpression() { return getToken(qsrcParser.DQTemplateStringStartExpression, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode TemplateStringEndExpression() { return getToken(qsrcParser.TemplateStringEndExpression, 0); }
		public StringTemplateVarDQContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringTemplateVarDQ; }
	}

	public final StringTemplateVarDQContext stringTemplateVarDQ() throws RecognitionException {
		StringTemplateVarDQContext _localctx = new StringTemplateVarDQContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_stringTemplateVarDQ);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(696);
			match(DQTemplateStringStartExpression);
			setState(697);
			value(0);
			setState(698);
			match(TemplateStringEndExpression);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringDQTemplateVarSuffixContext extends ParserRuleContext {
		public StringTemplateVarDQContext stringTemplateVarDQ() {
			return getRuleContext(StringTemplateVarDQContext.class,0);
		}
		public List<DoubleQuoteAtomContext> doubleQuoteAtom() {
			return getRuleContexts(DoubleQuoteAtomContext.class);
		}
		public DoubleQuoteAtomContext doubleQuoteAtom(int i) {
			return getRuleContext(DoubleQuoteAtomContext.class,i);
		}
		public StringDQTemplateVarSuffixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringDQTemplateVarSuffix; }
	}

	public final StringDQTemplateVarSuffixContext stringDQTemplateVarSuffix() throws RecognitionException {
		StringDQTemplateVarSuffixContext _localctx = new StringDQTemplateVarSuffixContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_stringDQTemplateVarSuffix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(700);
			stringTemplateVarDQ();
			setState(704);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==EscapedDoubleQuote || _la==DQStringAtom) {
				{
				{
				setState(701);
				doubleQuoteAtom();
				}
				}
				setState(706);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 57:
			return value_sempred((ValueContext)_localctx, predIndex);
		case 58:
			return comparee_sempred((CompareeContext)_localctx, predIndex);
		case 59:
			return sum_sempred((SumContext)_localctx, predIndex);
		case 60:
			return term_sempred((TermContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean value_sempred(ValueContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean comparee_sempred(CompareeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean sum_sempred(SumContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean term_sempred(TermContext _localctx, int predIndex) {
		switch (predIndex) {
		case 3:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001T\u02c4\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0002,\u0007,\u0002"+
		"-\u0007-\u0002.\u0007.\u0002/\u0007/\u00020\u00070\u00021\u00071\u0002"+
		"2\u00072\u00023\u00073\u00024\u00074\u00025\u00075\u00026\u00076\u0002"+
		"7\u00077\u00028\u00078\u00029\u00079\u0002:\u0007:\u0002;\u0007;\u0002"+
		"<\u0007<\u0002=\u0007=\u0002>\u0007>\u0002?\u0007?\u0002@\u0007@\u0002"+
		"A\u0007A\u0002B\u0007B\u0002C\u0007C\u0002D\u0007D\u0002E\u0007E\u0002"+
		"F\u0007F\u0002G\u0007G\u0002H\u0007H\u0002I\u0007I\u0002J\u0007J\u0002"+
		"K\u0007K\u0002L\u0007L\u0002M\u0007M\u0002N\u0007N\u0002O\u0007O\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000\u00a6"+
		"\b\u0000\n\u0000\f\u0000\u00a9\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0005\u0001\u00ae\b\u0001\n\u0001\f\u0001\u00b1\t\u0001\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u00b7\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0003\u0004\u00c2\b\u0004\u0001\u0004\u0003\u0004\u00c5"+
		"\b\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005\u00cc\b\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0003\u0007\u00da\b\u0007\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0005\b\u00e2\b\b\n\b\f\b\u00e5\t\b\u0001\b\u0003\b"+
		"\u00e8\b\b\u0001\b\u0001\b\u0003\b\u00ec\b\b\u0001\b\u0003\b\u00ef\b\b"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0003\u000b\u0115\b\u000b\u0001\u000b\u0005\u000b"+
		"\u0118\b\u000b\n\u000b\f\u000b\u011b\t\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0003\u000b\u0120\b\u000b\u0001\f\u0001\f\u0003\f\u0124\b\f\u0001"+
		"\f\u0003\f\u0127\b\f\u0001\f\u0001\f\u0001\r\u0001\r\u0003\r\u012d\b\r"+
		"\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0003"+
		"\u000f\u0135\b\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u0139\b\u000f"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0003\u0011\u0143\b\u0011\u0001\u0012\u0001\u0012"+
		"\u0001\u0013\u0001\u0013\u0005\u0013\u0149\b\u0013\n\u0013\f\u0013\u014c"+
		"\t\u0013\u0001\u0013\u0001\u0013\u0005\u0013\u0150\b\u0013\n\u0013\f\u0013"+
		"\u0153\t\u0013\u0001\u0013\u0003\u0013\u0156\b\u0013\u0001\u0014\u0001"+
		"\u0014\u0005\u0014\u015a\b\u0014\n\u0014\f\u0014\u015d\t\u0014\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015"+
		"\u0003\u0015\u0166\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0017"+
		"\u0003\u0017\u0172\b\u0017\u0001\u0018\u0001\u0018\u0001\u0018\u0001\u0019"+
		"\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a\u0001\u001b"+
		"\u0001\u001b\u0001\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0001\u001d"+
		"\u0001\u001d\u0001\u001d\u0001\u001e\u0001\u001e\u0001\u001e\u0001\u001e"+
		"\u0003\u001e\u018a\b\u001e\u0003\u001e\u018c\b\u001e\u0001\u001f\u0001"+
		"\u001f\u0001\u001f\u0001 \u0001 \u0005 \u0193\b \n \f \u0196\t \u0001"+
		" \u0001 \u0001!\u0001!\u0003!\u019c\b!\u0001\"\u0001\"\u0001\"\u0001\""+
		"\u0001#\u0001#\u0003#\u01a4\b#\u0001$\u0001$\u0001$\u0001%\u0001%\u0001"+
		"%\u0001%\u0001%\u0001%\u0001%\u0001%\u0003%\u01b1\b%\u0001&\u0001&\u0001"+
		"&\u0001&\u0003&\u01b7\b&\u0001\'\u0001\'\u0001\'\u0001\'\u0001(\u0001"+
		"(\u0001(\u0001(\u0001)\u0001)\u0001)\u0001*\u0001*\u0001*\u0001+\u0001"+
		"+\u0001+\u0001,\u0001,\u0001,\u0001-\u0001-\u0001.\u0001.\u0001.\u0001"+
		"/\u0001/\u00010\u00010\u00010\u00011\u00011\u00031\u01d9\b1\u00012\u0001"+
		"2\u00012\u00013\u00013\u00033\u01e0\b3\u00014\u00014\u00034\u01e4\b4\u0001"+
		"5\u00015\u00015\u00035\u01e9\b5\u00016\u00016\u00016\u00016\u00016\u0001"+
		"6\u00036\u01f1\b6\u00017\u00017\u00017\u00017\u00017\u00017\u00037\u01f9"+
		"\b7\u00018\u00018\u00019\u00019\u00019\u00019\u00019\u00019\u00019\u0005"+
		"9\u0204\b9\n9\f9\u0207\t9\u0001:\u0001:\u0001:\u0001:\u0001:\u0001:\u0001"+
		":\u0005:\u0210\b:\n:\f:\u0213\t:\u0001;\u0001;\u0001;\u0001;\u0001;\u0001"+
		";\u0001;\u0005;\u021c\b;\n;\f;\u021f\t;\u0001<\u0001<\u0001<\u0001<\u0001"+
		"<\u0001<\u0001<\u0005<\u0228\b<\n<\f<\u022b\t<\u0001=\u0005=\u022e\b="+
		"\n=\f=\u0231\t=\u0001=\u0001=\u0001>\u0005>\u0236\b>\n>\f>\u0239\t>\u0001"+
		">\u0001>\u0001?\u0005?\u023e\b?\n?\f?\u0241\t?\u0001?\u0001?\u0001@\u0001"+
		"@\u0001@\u0001@\u0001@\u0001@\u0001@\u0001@\u0001@\u0001@\u0001@\u0001"+
		"@\u0001@\u0001@\u0001@\u0001@\u0003@\u0255\b@\u0001A\u0003A\u0258\bA\u0001"+
		"A\u0001A\u0001B\u0001B\u0001B\u0001B\u0001B\u0001C\u0001C\u0001D\u0005"+
		"D\u0264\bD\nD\fD\u0267\tD\u0001D\u0001D\u0001E\u0001E\u0001E\u0001E\u0001"+
		"E\u0001E\u0001E\u0003E\u0272\bE\u0001F\u0001F\u0001F\u0005F\u0277\bF\n"+
		"F\fF\u027a\tF\u0001G\u0001G\u0005G\u027e\bG\nG\fG\u0281\tG\u0001G\u0001"+
		"G\u0001G\u0005G\u0286\bG\nG\fG\u0289\tG\u0001G\u0005G\u028c\bG\nG\fG\u028f"+
		"\tG\u0001G\u0001G\u0001G\u0005G\u0294\bG\nG\fG\u0297\tG\u0001G\u0005G"+
		"\u029a\bG\nG\fG\u029d\tG\u0001G\u0003G\u02a0\bG\u0001H\u0001H\u0003H\u02a4"+
		"\bH\u0001I\u0001I\u0001I\u0001I\u0001J\u0001J\u0001K\u0001K\u0001K\u0001"+
		"K\u0001L\u0001L\u0005L\u02b2\bL\nL\fL\u02b5\tL\u0001M\u0001M\u0001N\u0001"+
		"N\u0001N\u0001N\u0001O\u0001O\u0005O\u02bf\bO\nO\fO\u02c2\tO\u0001O\u0000"+
		"\u0004rtvxP\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprt"+
		"vxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090\u0092\u0094"+
		"\u0096\u0098\u009a\u009c\u009e\u0000\n\u0001\u0000#(\u0001\u0000EE\u0001"+
		"\u0000\u0013\u0014\u0002\u000088::\u0001\u000012\u0001\u0000\u001e\u001f"+
		"\u0003\u0000--//33\u0004\u0000\u001e\u001f--//13\u0002\u0000IIKK\u0002"+
		"\u0000LLNN\u02db\u0000\u00a0\u0001\u0000\u0000\u0000\u0002\u00af\u0001"+
		"\u0000\u0000\u0000\u0004\u00b6\u0001\u0000\u0000\u0000\u0006\u00b8\u0001"+
		"\u0000\u0000\u0000\b\u00ba\u0001\u0000\u0000\u0000\n\u00c8\u0001\u0000"+
		"\u0000\u0000\f\u00d0\u0001\u0000\u0000\u0000\u000e\u00d3\u0001\u0000\u0000"+
		"\u0000\u0010\u00db\u0001\u0000\u0000\u0000\u0012\u00f2\u0001\u0000\u0000"+
		"\u0000\u0014\u00f8\u0001\u0000\u0000\u0000\u0016\u011f\u0001\u0000\u0000"+
		"\u0000\u0018\u0121\u0001\u0000\u0000\u0000\u001a\u012a\u0001\u0000\u0000"+
		"\u0000\u001c\u0130\u0001\u0000\u0000\u0000\u001e\u0134\u0001\u0000\u0000"+
		"\u0000 \u013a\u0001\u0000\u0000\u0000\"\u013e\u0001\u0000\u0000\u0000"+
		"$\u0144\u0001\u0000\u0000\u0000&\u0155\u0001\u0000\u0000\u0000(\u0157"+
		"\u0001\u0000\u0000\u0000*\u0165\u0001\u0000\u0000\u0000,\u0167\u0001\u0000"+
		"\u0000\u0000.\u0171\u0001\u0000\u0000\u00000\u0173\u0001\u0000\u0000\u0000"+
		"2\u0176\u0001\u0000\u0000\u00004\u0179\u0001\u0000\u0000\u00006\u017c"+
		"\u0001\u0000\u0000\u00008\u017f\u0001\u0000\u0000\u0000:\u0182\u0001\u0000"+
		"\u0000\u0000<\u0185\u0001\u0000\u0000\u0000>\u018d\u0001\u0000\u0000\u0000"+
		"@\u0190\u0001\u0000\u0000\u0000B\u019b\u0001\u0000\u0000\u0000D\u019d"+
		"\u0001\u0000\u0000\u0000F\u01a1\u0001\u0000\u0000\u0000H\u01a5\u0001\u0000"+
		"\u0000\u0000J\u01b0\u0001\u0000\u0000\u0000L\u01b6\u0001\u0000\u0000\u0000"+
		"N\u01b8\u0001\u0000\u0000\u0000P\u01bc\u0001\u0000\u0000\u0000R\u01c0"+
		"\u0001\u0000\u0000\u0000T\u01c3\u0001\u0000\u0000\u0000V\u01c6\u0001\u0000"+
		"\u0000\u0000X\u01c9\u0001\u0000\u0000\u0000Z\u01cc\u0001\u0000\u0000\u0000"+
		"\\\u01ce\u0001\u0000\u0000\u0000^\u01d1\u0001\u0000\u0000\u0000`\u01d3"+
		"\u0001\u0000\u0000\u0000b\u01d6\u0001\u0000\u0000\u0000d\u01da\u0001\u0000"+
		"\u0000\u0000f\u01df\u0001\u0000\u0000\u0000h\u01e1\u0001\u0000\u0000\u0000"+
		"j\u01e5\u0001\u0000\u0000\u0000l\u01f0\u0001\u0000\u0000\u0000n\u01f8"+
		"\u0001\u0000\u0000\u0000p\u01fa\u0001\u0000\u0000\u0000r\u01fc\u0001\u0000"+
		"\u0000\u0000t\u0208\u0001\u0000\u0000\u0000v\u0214\u0001\u0000\u0000\u0000"+
		"x\u0220\u0001\u0000\u0000\u0000z\u022f\u0001\u0000\u0000\u0000|\u0237"+
		"\u0001\u0000\u0000\u0000~\u023f\u0001\u0000\u0000\u0000\u0080\u0254\u0001"+
		"\u0000\u0000\u0000\u0082\u0257\u0001\u0000\u0000\u0000\u0084\u025b\u0001"+
		"\u0000\u0000\u0000\u0086\u0260\u0001\u0000\u0000\u0000\u0088\u0265\u0001"+
		"\u0000\u0000\u0000\u008a\u0271\u0001\u0000\u0000\u0000\u008c\u0273\u0001"+
		"\u0000\u0000\u0000\u008e\u029f\u0001\u0000\u0000\u0000\u0090\u02a3\u0001"+
		"\u0000\u0000\u0000\u0092\u02a5\u0001\u0000\u0000\u0000\u0094\u02a9\u0001"+
		"\u0000\u0000\u0000\u0096\u02ab\u0001\u0000\u0000\u0000\u0098\u02af\u0001"+
		"\u0000\u0000\u0000\u009a\u02b6\u0001\u0000\u0000\u0000\u009c\u02b8\u0001"+
		"\u0000\u0000\u0000\u009e\u02bc\u0001\u0000\u0000\u0000\u00a0\u00a1\u0005"+
		"\u0001\u0000\u0000\u00a1\u00a2\u0003\u0002\u0001\u0000\u00a2\u00a7\u0005"+
		"\u0002\u0000\u0000\u00a3\u00a6\u0005E\u0000\u0000\u00a4\u00a6\u0003&\u0013"+
		"\u0000\u00a5\u00a3\u0001\u0000\u0000\u0000\u00a5\u00a4\u0001\u0000\u0000"+
		"\u0000\u00a6\u00a9\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000"+
		"\u0000\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00aa\u0001\u0000\u0000"+
		"\u0000\u00a9\u00a7\u0001\u0000\u0000\u0000\u00aa\u00ab\u0005\u0000\u0000"+
		"\u0001\u00ab\u0001\u0001\u0000\u0000\u0000\u00ac\u00ae\u0003\u0004\u0002"+
		"\u0000\u00ad\u00ac\u0001\u0000\u0000\u0000\u00ae\u00b1\u0001\u0000\u0000"+
		"\u0000\u00af\u00ad\u0001\u0000\u0000\u0000\u00af\u00b0\u0001\u0000\u0000"+
		"\u0000\u00b0\u0003\u0001\u0000\u0000\u0000\u00b1\u00af\u0001\u0000\u0000"+
		"\u0000\u00b2\u00b7\u0003\b\u0004\u0000\u00b3\u00b7\u0003\u0018\f\u0000"+
		"\u00b4\u00b7\u0003\u0010\b\u0000\u00b5\u00b7\u0003\u0006\u0003\u0000\u00b6"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b6\u00b3\u0001\u0000\u0000\u0000\u00b6"+
		"\u00b4\u0001\u0000\u0000\u0000\u00b6\u00b5\u0001\u0000\u0000\u0000\u00b7"+
		"\u0005\u0001\u0000\u0000\u0000\u00b8\u00b9\u0005E\u0000\u0000\u00b9\u0007"+
		"\u0001\u0000\u0000\u0000\u00ba\u00bb\u0005\u0018\u0000\u0000\u00bb\u00bc"+
		"\u0003r9\u0000\u00bc\u00bd\u00050\u0000\u0000\u00bd\u00be\u0005E\u0000"+
		"\u0000\u00be\u00bf\u0003\u0002\u0001\u0000\u00bf\u00c1\u0005\u001c\u0000"+
		"\u0000\u00c0\u00c2\u0003\u001a\r\u0000\u00c1\u00c0\u0001\u0000\u0000\u0000"+
		"\u00c1\u00c2\u0001\u0000\u0000\u0000\u00c2\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c3\u00c5\u0003(\u0014\u0000\u00c4\u00c3\u0001\u0000\u0000\u0000\u00c4"+
		"\u00c5\u0001\u0000\u0000\u0000\u00c5\u00c6\u0001\u0000\u0000\u0000\u00c6"+
		"\u00c7\u0005E\u0000\u0000\u00c7\t\u0001\u0000\u0000\u0000\u00c8\u00c9"+
		"\u0005\u0018\u0000\u0000\u00c9\u00cb\u0003r9\u0000\u00ca\u00cc\u0003\f"+
		"\u0006\u0000\u00cb\u00ca\u0001\u0000\u0000\u0000\u00cb\u00cc\u0001\u0000"+
		"\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000\u00cd\u00ce\u00050\u0000"+
		"\u0000\u00ce\u00cf\u0003\u0016\u000b\u0000\u00cf\u000b\u0001\u0000\u0000"+
		"\u0000\u00d0\u00d1\u0005C\u0000\u0000\u00d1\u00d2\u0003r9\u0000\u00d2"+
		"\r\u0001\u0000\u0000\u0000\u00d3\u00d4\u0005\u0019\u0000\u0000\u00d4\u00d5"+
		"\u0003r9\u0000\u00d5\u00d6\u00050\u0000\u0000\u00d6\u00d9\u0003\u0016"+
		"\u000b\u0000\u00d7\u00d8\u0005\u001b\u0000\u0000\u00d8\u00da\u0003\u0016"+
		"\u000b\u0000\u00d9\u00d7\u0001\u0000\u0000\u0000\u00d9\u00da\u0001\u0000"+
		"\u0000\u0000\u00da\u000f\u0001\u0000\u0000\u0000\u00db\u00dc\u0005\u0019"+
		"\u0000\u0000\u00dc\u00dd\u0003r9\u0000\u00dd\u00de\u00050\u0000\u0000"+
		"\u00de\u00df\u0005E\u0000\u0000\u00df\u00e3\u0003\u0002\u0001\u0000\u00e0"+
		"\u00e2\u0003\u0012\t\u0000\u00e1\u00e0\u0001\u0000\u0000\u0000\u00e2\u00e5"+
		"\u0001\u0000\u0000\u0000\u00e3\u00e1\u0001\u0000\u0000\u0000\u00e3\u00e4"+
		"\u0001\u0000\u0000\u0000\u00e4\u00e7\u0001\u0000\u0000\u0000\u00e5\u00e3"+
		"\u0001\u0000\u0000\u0000\u00e6\u00e8\u0003\u0014\n\u0000\u00e7\u00e6\u0001"+
		"\u0000\u0000\u0000\u00e7\u00e8\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001"+
		"\u0000\u0000\u0000\u00e9\u00eb\u0005\u001c\u0000\u0000\u00ea\u00ec\u0003"+
		"\u001a\r\u0000\u00eb\u00ea\u0001\u0000\u0000\u0000\u00eb\u00ec\u0001\u0000"+
		"\u0000\u0000\u00ec\u00ee\u0001\u0000\u0000\u0000\u00ed\u00ef\u0003(\u0014"+
		"\u0000\u00ee\u00ed\u0001\u0000\u0000\u0000\u00ee\u00ef\u0001\u0000\u0000"+
		"\u0000\u00ef\u00f0\u0001\u0000\u0000\u0000\u00f0\u00f1\u0005E\u0000\u0000"+
		"\u00f1\u0011\u0001\u0000\u0000\u0000\u00f2\u00f3\u0005\u001a\u0000\u0000"+
		"\u00f3\u00f4\u0003r9\u0000\u00f4\u00f5\u00050\u0000\u0000\u00f5\u00f6"+
		"\u0005E\u0000\u0000\u00f6\u00f7\u0003\u0002\u0001\u0000\u00f7\u0013\u0001"+
		"\u0000\u0000\u0000\u00f8\u00f9\u0005\u001b\u0000\u0000\u00f9\u00fa\u0005"+
		"E\u0000\u0000\u00fa\u00fb\u0003\u0002\u0001\u0000\u00fb\u0015\u0001\u0000"+
		"\u0000\u0000\u00fc\u00fd\u0005A\u0000\u0000\u00fd\u00fe\u0003\u0016\u000b"+
		"\u0000\u00fe\u00ff\u0005B\u0000\u0000\u00ff\u0115\u0001\u0000\u0000\u0000"+
		"\u0100\u0115\u0003\u001c\u000e\u0000\u0101\u0115\u0003\u001e\u000f\u0000"+
		"\u0102\u0115\u0003*\u0015\u0000\u0103\u0115\u0003,\u0016\u0000\u0104\u0115"+
		"\u0003.\u0017\u0000\u0105\u0115\u00030\u0018\u0000\u0106\u0115\u00032"+
		"\u0019\u0000\u0107\u0115\u00034\u001a\u0000\u0108\u0115\u00038\u001c\u0000"+
		"\u0109\u0115\u0003:\u001d\u0000\u010a\u0115\u0003<\u001e\u0000\u010b\u0115"+
		"\u0003>\u001f\u0000\u010c\u0115\u0003F#\u0000\u010d\u0115\u0003H$\u0000"+
		"\u010e\u0115\u0003J%\u0000\u010f\u0115\u0003\\.\u0000\u0110\u0115\u0003"+
		"^/\u0000\u0111\u0115\u0003`0\u0000\u0112\u0115\u0003b1\u0000\u0113\u0115"+
		"\u0003d2\u0000\u0114\u00fc\u0001\u0000\u0000\u0000\u0114\u0100\u0001\u0000"+
		"\u0000\u0000\u0114\u0101\u0001\u0000\u0000\u0000\u0114\u0102\u0001\u0000"+
		"\u0000\u0000\u0114\u0103\u0001\u0000\u0000\u0000\u0114\u0104\u0001\u0000"+
		"\u0000\u0000\u0114\u0105\u0001\u0000\u0000\u0000\u0114\u0106\u0001\u0000"+
		"\u0000\u0000\u0114\u0107\u0001\u0000\u0000\u0000\u0114\u0108\u0001\u0000"+
		"\u0000\u0000\u0114\u0109\u0001\u0000\u0000\u0000\u0114\u010a\u0001\u0000"+
		"\u0000\u0000\u0114\u010b\u0001\u0000\u0000\u0000\u0114\u010c\u0001\u0000"+
		"\u0000\u0000\u0114\u010d\u0001\u0000\u0000\u0000\u0114\u010e\u0001\u0000"+
		"\u0000\u0000\u0114\u010f\u0001\u0000\u0000\u0000\u0114\u0110\u0001\u0000"+
		"\u0000\u0000\u0114\u0111\u0001\u0000\u0000\u0000\u0114\u0112\u0001\u0000"+
		"\u0000\u0000\u0114\u0113\u0001\u0000\u0000\u0000\u0115\u0119\u0001\u0000"+
		"\u0000\u0000\u0116\u0118\u0003\u001a\r\u0000\u0117\u0116\u0001\u0000\u0000"+
		"\u0000\u0118\u011b\u0001\u0000\u0000\u0000\u0119\u0117\u0001\u0000\u0000"+
		"\u0000\u0119\u011a\u0001\u0000\u0000\u0000\u011a\u0120\u0001\u0000\u0000"+
		"\u0000\u011b\u0119\u0001\u0000\u0000\u0000\u011c\u0120\u0003\n\u0005\u0000"+
		"\u011d\u0120\u0003&\u0013\u0000\u011e\u0120\u0003\u000e\u0007\u0000\u011f"+
		"\u0114\u0001\u0000\u0000\u0000\u011f\u011c\u0001\u0000\u0000\u0000\u011f"+
		"\u011d\u0001\u0000\u0000\u0000\u011f\u011e\u0001\u0000\u0000\u0000\u0120"+
		"\u0017\u0001\u0000\u0000\u0000\u0121\u0123\u0003\u0016\u000b\u0000\u0122"+
		"\u0124\u0003\u001a\r\u0000\u0123\u0122\u0001\u0000\u0000\u0000\u0123\u0124"+
		"\u0001\u0000\u0000\u0000\u0124\u0126\u0001\u0000\u0000\u0000\u0125\u0127"+
		"\u0003(\u0014\u0000\u0126\u0125\u0001\u0000\u0000\u0000\u0126\u0127\u0001"+
		"\u0000\u0000\u0000\u0127\u0128\u0001\u0000\u0000\u0000\u0128\u0129\u0005"+
		"E\u0000\u0000\u0129\u0019\u0001\u0000\u0000\u0000\u012a\u012c\u0005 \u0000"+
		"\u0000\u012b\u012d\u0005 \u0000\u0000\u012c\u012b\u0001\u0000\u0000\u0000"+
		"\u012c\u012d\u0001\u0000\u0000\u0000\u012d\u012e\u0001\u0000\u0000\u0000"+
		"\u012e\u012f\u0003\u0016\u000b\u0000\u012f\u001b\u0001\u0000\u0000\u0000"+
		"\u0130\u0131\u0005\u0005\u0000\u0000\u0131\u0132\u0003r9\u0000\u0132\u001d"+
		"\u0001\u0000\u0000\u0000\u0133\u0135\u0005\"\u0000\u0000\u0134\u0133\u0001"+
		"\u0000\u0000\u0000\u0134\u0135\u0001\u0000\u0000\u0000\u0135\u0138\u0001"+
		"\u0000\u0000\u0000\u0136\u0139\u0003 \u0010\u0000\u0137\u0139\u0003\""+
		"\u0011\u0000\u0138\u0136\u0001\u0000\u0000\u0000\u0138\u0137\u0001\u0000"+
		"\u0000\u0000\u0139\u001f\u0001\u0000\u0000\u0000\u013a\u013b\u0003h4\u0000"+
		"\u013b\u013c\u0003$\u0012\u0000\u013c\u013d\u0003r9\u0000\u013d!\u0001"+
		"\u0000\u0000\u0000\u013e\u013f\u0003j5\u0000\u013f\u0142\u0003$\u0012"+
		"\u0000\u0140\u0143\u0003r9\u0000\u0141\u0143\u0003@ \u0000\u0142\u0140"+
		"\u0001\u0000\u0000\u0000\u0142\u0141\u0001\u0000\u0000\u0000\u0143#\u0001"+
		"\u0000\u0000\u0000\u0144\u0145\u0007\u0000\u0000\u0000\u0145%\u0001\u0000"+
		"\u0000\u0000\u0146\u014a\u0005:\u0000\u0000\u0147\u0149\b\u0001\u0000"+
		"\u0000\u0148\u0147\u0001\u0000\u0000\u0000\u0149\u014c\u0001\u0000\u0000"+
		"\u0000\u014a\u0148\u0001\u0000\u0000\u0000\u014a\u014b\u0001\u0000\u0000"+
		"\u0000\u014b\u0156\u0001\u0000\u0000\u0000\u014c\u014a\u0001\u0000\u0000"+
		"\u0000\u014d\u0151\u0005;\u0000\u0000\u014e\u0150\u0005T\u0000\u0000\u014f"+
		"\u014e\u0001\u0000\u0000\u0000\u0150\u0153\u0001\u0000\u0000\u0000\u0151"+
		"\u014f\u0001\u0000\u0000\u0000\u0151\u0152\u0001\u0000\u0000\u0000\u0152"+
		"\u0156\u0001\u0000\u0000\u0000\u0153\u0151\u0001\u0000\u0000\u0000\u0154"+
		"\u0156\u0005=\u0000\u0000\u0155\u0146\u0001\u0000\u0000\u0000\u0155\u014d"+
		"\u0001\u0000\u0000\u0000\u0155\u0154\u0001\u0000\u0000\u0000\u0156\'\u0001"+
		"\u0000\u0000\u0000\u0157\u015b\u0005<\u0000\u0000\u0158\u015a\u0005T\u0000"+
		"\u0000\u0159\u0158\u0001\u0000\u0000\u0000\u015a\u015d\u0001\u0000\u0000"+
		"\u0000\u015b\u0159\u0001\u0000\u0000\u0000\u015b\u015c\u0001\u0000\u0000"+
		"\u0000\u015c)\u0001\u0000\u0000\u0000\u015d\u015b\u0001\u0000\u0000\u0000"+
		"\u015e\u015f\u0005\u0006\u0000\u0000\u015f\u0166\u0003\u008cF\u0000\u0160"+
		"\u0161\u0005\u0006\u0000\u0000\u0161\u0162\u0005A\u0000\u0000\u0162\u0163"+
		"\u0003\u008cF\u0000\u0163\u0164\u0005B\u0000\u0000\u0164\u0166\u0001\u0000"+
		"\u0000\u0000\u0165\u015e\u0001\u0000\u0000\u0000\u0165\u0160\u0001\u0000"+
		"\u0000\u0000\u0166+\u0001\u0000\u0000\u0000\u0167\u0168\u0005\u0007\u0000"+
		"\u0000\u0168\u0169\u0003r9\u0000\u0169-\u0001\u0000\u0000\u0000\u016a"+
		"\u016b\u0005\b\u0000\u0000\u016b\u0172\u0003\u008cF\u0000\u016c\u016d"+
		"\u0005\b\u0000\u0000\u016d\u016e\u0005A\u0000\u0000\u016e\u016f\u0003"+
		"\u008cF\u0000\u016f\u0170\u0005B\u0000\u0000\u0170\u0172\u0001\u0000\u0000"+
		"\u0000\u0171\u016a\u0001\u0000\u0000\u0000\u0171\u016c\u0001\u0000\u0000"+
		"\u0000\u0172/\u0001\u0000\u0000\u0000\u0173\u0174\u0005\t\u0000\u0000"+
		"\u0174\u0175\u0003\u008cF\u0000\u01751\u0001\u0000\u0000\u0000\u0176\u0177"+
		"\u0005\n\u0000\u0000\u0177\u0178\u0003\u008cF\u0000\u01783\u0001\u0000"+
		"\u0000\u0000\u0179\u017a\u0005\u000b\u0000\u0000\u017a\u017b\u0003\u008c"+
		"F\u0000\u017b5\u0001\u0000\u0000\u0000\u017c\u017d\u0005\f\u0000\u0000"+
		"\u017d\u017e\u0003v;\u0000\u017e7\u0001\u0000\u0000\u0000\u017f\u0180"+
		"\u0005\r\u0000\u0000\u0180\u0181\u0003r9\u0000\u01819\u0001\u0000\u0000"+
		"\u0000\u0182\u0183\u00050\u0000\u0000\u0183\u0184\u0005.\u0000\u0000\u0184"+
		";\u0001\u0000\u0000\u0000\u0185\u018b\u0005\u000e\u0000\u0000\u0186\u0189"+
		"\u0003r9\u0000\u0187\u0188\u0005C\u0000\u0000\u0188\u018a\u0003r9\u0000"+
		"\u0189\u0187\u0001\u0000\u0000\u0000\u0189\u018a\u0001\u0000\u0000\u0000"+
		"\u018a\u018c\u0001\u0000\u0000\u0000\u018b\u0186\u0001\u0000\u0000\u0000"+
		"\u018b\u018c\u0001\u0000\u0000\u0000\u018c=\u0001\u0000\u0000\u0000\u018d"+
		"\u018e\u0005\u000f\u0000\u0000\u018e\u018f\u0003r9\u0000\u018f?\u0001"+
		"\u0000\u0000\u0000\u0190\u0194\u0005@\u0000\u0000\u0191\u0193\u0003B!"+
		"\u0000\u0192\u0191\u0001\u0000\u0000\u0000\u0193\u0196\u0001\u0000\u0000"+
		"\u0000\u0194\u0192\u0001\u0000\u0000\u0000\u0194\u0195\u0001\u0000\u0000"+
		"\u0000\u0195\u0197\u0001\u0000\u0000\u0000\u0196\u0194\u0001\u0000\u0000"+
		"\u0000\u0197\u0198\u0005Q\u0000\u0000\u0198A\u0001\u0000\u0000\u0000\u0199"+
		"\u019c\u0005S\u0000\u0000\u019a\u019c\u0003D\"\u0000\u019b\u0199\u0001"+
		"\u0000\u0000\u0000\u019b\u019a\u0001\u0000\u0000\u0000\u019cC\u0001\u0000"+
		"\u0000\u0000\u019d\u019e\u0005R\u0000\u0000\u019e\u019f\u0003r9\u0000"+
		"\u019f\u01a0\u0005)\u0000\u0000\u01a0E\u0001\u0000\u0000\u0000\u01a1\u01a3"+
		"\u0005\u0010\u0000\u0000\u01a2\u01a4\u0003r9\u0000\u01a3\u01a2\u0001\u0000"+
		"\u0000\u0000\u01a3\u01a4\u0001\u0000\u0000\u0000\u01a4G\u0001\u0000\u0000"+
		"\u0000\u01a5\u01a6\u0005\u0011\u0000\u0000\u01a6\u01a7\u0003\u008cF\u0000"+
		"\u01a7I\u0001\u0000\u0000\u0000\u01a8\u01b1\u0003L&\u0000\u01a9\u01b1"+
		"\u0003N\'\u0000\u01aa\u01b1\u0003P(\u0000\u01ab\u01b1\u0003R)\u0000\u01ac"+
		"\u01b1\u0003T*\u0000\u01ad\u01b1\u0003V+\u0000\u01ae\u01b1\u0003X,\u0000"+
		"\u01af\u01b1\u0003Z-\u0000\u01b0\u01a8\u0001\u0000\u0000\u0000\u01b0\u01a9"+
		"\u0001\u0000\u0000\u0000\u01b0\u01aa\u0001\u0000\u0000\u0000\u01b0\u01ab"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ac\u0001\u0000\u0000\u0000\u01b0\u01ad"+
		"\u0001\u0000\u0000\u0000\u01b0\u01ae\u0001\u0000\u0000\u0000\u01b0\u01af"+
		"\u0001\u0000\u0000\u0000\u01b1K\u0001\u0000\u0000\u0000\u01b2\u01b7\u0003"+
		"r9\u0000\u01b3\u01b4\u0005/\u0000\u0000\u01b4\u01b5\u0005\u0012\u0000"+
		"\u0000\u01b5\u01b7\u0003r9\u0000\u01b6\u01b2\u0001\u0000\u0000\u0000\u01b6"+
		"\u01b3\u0001\u0000\u0000\u0000\u01b7M\u0001\u0000\u0000\u0000\u01b8\u01b9"+
		"\u0005/\u0000\u0000\u01b9\u01ba\u0005\u0013\u0000\u0000\u01ba\u01bb\u0003"+
		"r9\u0000\u01bbO\u0001\u0000\u0000\u0000\u01bc\u01bd\u0005/\u0000\u0000"+
		"\u01bd\u01be\u0005\u0014\u0000\u0000\u01be\u01bf\u0003r9\u0000\u01bfQ"+
		"\u0001\u0000\u0000\u0000\u01c0\u01c1\u0005/\u0000\u0000\u01c1\u01c2\u0007"+
		"\u0002\u0000\u0000\u01c2S\u0001\u0000\u0000\u0000\u01c3\u01c4\u0005\u0012"+
		"\u0000\u0000\u01c4\u01c5\u0003r9\u0000\u01c5U\u0001\u0000\u0000\u0000"+
		"\u01c6\u01c7\u0005\u0013\u0000\u0000\u01c7\u01c8\u0003r9\u0000\u01c8W"+
		"\u0001\u0000\u0000\u0000\u01c9\u01ca\u0005\u0014\u0000\u0000\u01ca\u01cb"+
		"\u0003r9\u0000\u01cbY\u0001\u0000\u0000\u0000\u01cc\u01cd\u0007\u0002"+
		"\u0000\u0000\u01cd[\u0001\u0000\u0000\u0000\u01ce\u01cf\u0005\u0015\u0000"+
		"\u0000\u01cf\u01d0\u0003r9\u0000\u01d0]\u0001\u0000\u0000\u0000\u01d1"+
		"\u01d2\u0005\u0003\u0000\u0000\u01d2_\u0001\u0000\u0000\u0000\u01d3\u01d4"+
		"\u0005\u0004\u0000\u0000\u01d4\u01d5\u0003r9\u0000\u01d5a\u0001\u0000"+
		"\u0000\u0000\u01d6\u01d8\u0005\u0016\u0000\u0000\u01d7\u01d9\u0003r9\u0000"+
		"\u01d8\u01d7\u0001\u0000\u0000\u0000\u01d8\u01d9\u0001\u0000\u0000\u0000"+
		"\u01d9c\u0001\u0000\u0000\u0000\u01da\u01db\u0005\u0017\u0000\u0000\u01db"+
		"\u01dc\u0003r9\u0000\u01dce\u0001\u0000\u0000\u0000\u01dd\u01e0\u0003"+
		"j5\u0000\u01de\u01e0\u0003h4\u0000\u01df\u01dd\u0001\u0000\u0000\u0000"+
		"\u01df\u01de\u0001\u0000\u0000\u0000\u01e0g\u0001\u0000\u0000\u0000\u01e1"+
		"\u01e3\u0005.\u0000\u0000\u01e2\u01e4\u0003l6\u0000\u01e3\u01e2\u0001"+
		"\u0000\u0000\u0000\u01e3\u01e4\u0001\u0000\u0000\u0000\u01e4i\u0001\u0000"+
		"\u0000\u0000\u01e5\u01e6\u00059\u0000\u0000\u01e6\u01e8\u0005.\u0000\u0000"+
		"\u01e7\u01e9\u0003l6\u0000\u01e8\u01e7\u0001\u0000\u0000\u0000\u01e8\u01e9"+
		"\u0001\u0000\u0000\u0000\u01e9k\u0001\u0000\u0000\u0000\u01ea\u01eb\u0005"+
		">\u0000\u0000\u01eb\u01ec\u0003r9\u0000\u01ec\u01ed\u0005?\u0000\u0000"+
		"\u01ed\u01f1\u0001\u0000\u0000\u0000\u01ee\u01ef\u0005>\u0000\u0000\u01ef"+
		"\u01f1\u0005?\u0000\u0000\u01f0\u01ea\u0001\u0000\u0000\u0000\u01f0\u01ee"+
		"\u0001\u0000\u0000\u0000\u01f1m\u0001\u0000\u0000\u0000\u01f2\u01f9\u0005"+
		"5\u0000\u0000\u01f3\u01f9\u00054\u0000\u0000\u01f4\u01f9\u00057\u0000"+
		"\u0000\u01f5\u01f9\u00056\u0000\u0000\u01f6\u01f9\u0005#\u0000\u0000\u01f7"+
		"\u01f9\u0003p8\u0000\u01f8\u01f2\u0001\u0000\u0000\u0000\u01f8\u01f3\u0001"+
		"\u0000\u0000\u0000\u01f8\u01f4\u0001\u0000\u0000\u0000\u01f8\u01f5\u0001"+
		"\u0000\u0000\u0000\u01f8\u01f6\u0001\u0000\u0000\u0000\u01f8\u01f7\u0001"+
		"\u0000\u0000\u0000\u01f9o\u0001\u0000\u0000\u0000\u01fa\u01fb\u0007\u0003"+
		"\u0000\u0000\u01fbq\u0001\u0000\u0000\u0000\u01fc\u01fd\u00069\uffff\uffff"+
		"\u0000\u01fd\u01fe\u0003t:\u0000\u01fe\u0205\u0001\u0000\u0000\u0000\u01ff"+
		"\u0200\n\u0002\u0000\u0000\u0200\u0201\u0003|>\u0000\u0201\u0202\u0003"+
		"t:\u0000\u0202\u0204\u0001\u0000\u0000\u0000\u0203\u01ff\u0001\u0000\u0000"+
		"\u0000\u0204\u0207\u0001\u0000\u0000\u0000\u0205\u0203\u0001\u0000\u0000"+
		"\u0000\u0205\u0206\u0001\u0000\u0000\u0000\u0206s\u0001\u0000\u0000\u0000"+
		"\u0207\u0205\u0001\u0000\u0000\u0000\u0208\u0209\u0006:\uffff\uffff\u0000"+
		"\u0209\u020a\u0003v;\u0000\u020a\u0211\u0001\u0000\u0000\u0000\u020b\u020c"+
		"\n\u0002\u0000\u0000\u020c\u020d\u0003n7\u0000\u020d\u020e\u0003v;\u0000"+
		"\u020e\u0210\u0001\u0000\u0000\u0000\u020f\u020b\u0001\u0000\u0000\u0000"+
		"\u0210\u0213\u0001\u0000\u0000\u0000\u0211\u020f\u0001\u0000\u0000\u0000"+
		"\u0211\u0212\u0001\u0000\u0000\u0000\u0212u\u0001\u0000\u0000\u0000\u0213"+
		"\u0211\u0001\u0000\u0000\u0000\u0214\u0215\u0006;\uffff\uffff\u0000\u0215"+
		"\u0216\u0003x<\u0000\u0216\u021d\u0001\u0000\u0000\u0000\u0217\u0218\n"+
		"\u0002\u0000\u0000\u0218\u0219\u0003z=\u0000\u0219\u021a\u0003x<\u0000"+
		"\u021a\u021c\u0001\u0000\u0000\u0000\u021b\u0217\u0001\u0000\u0000\u0000"+
		"\u021c\u021f\u0001\u0000\u0000\u0000\u021d\u021b\u0001\u0000\u0000\u0000"+
		"\u021d\u021e\u0001\u0000\u0000\u0000\u021ew\u0001\u0000\u0000\u0000\u021f"+
		"\u021d\u0001\u0000\u0000\u0000\u0220\u0221\u0006<\uffff\uffff\u0000\u0221"+
		"\u0222\u0003\u0080@\u0000\u0222\u0229\u0001\u0000\u0000\u0000\u0223\u0224"+
		"\n\u0002\u0000\u0000\u0224\u0225\u0003~?\u0000\u0225\u0226\u0003\u0080"+
		"@\u0000\u0226\u0228\u0001\u0000\u0000\u0000\u0227\u0223\u0001\u0000\u0000"+
		"\u0000\u0228\u022b\u0001\u0000\u0000\u0000\u0229\u0227\u0001\u0000\u0000"+
		"\u0000\u0229\u022a\u0001\u0000\u0000\u0000\u022ay\u0001\u0000\u0000\u0000"+
		"\u022b\u0229\u0001\u0000\u0000\u0000\u022c\u022e\u0005E\u0000\u0000\u022d"+
		"\u022c\u0001\u0000\u0000\u0000\u022e\u0231\u0001\u0000\u0000\u0000\u022f"+
		"\u022d\u0001\u0000\u0000\u0000\u022f\u0230\u0001\u0000\u0000\u0000\u0230"+
		"\u0232\u0001\u0000\u0000\u0000\u0231\u022f\u0001\u0000\u0000\u0000\u0232"+
		"\u0233\u0007\u0004\u0000\u0000\u0233{\u0001\u0000\u0000\u0000\u0234\u0236"+
		"\u0005E\u0000\u0000\u0235\u0234\u0001\u0000\u0000\u0000\u0236\u0239\u0001"+
		"\u0000\u0000\u0000\u0237\u0235\u0001\u0000\u0000\u0000\u0237\u0238\u0001"+
		"\u0000\u0000\u0000\u0238\u023a\u0001\u0000\u0000\u0000\u0239\u0237\u0001"+
		"\u0000\u0000\u0000\u023a\u023b\u0007\u0005\u0000\u0000\u023b}\u0001\u0000"+
		"\u0000\u0000\u023c\u023e\u0005E\u0000\u0000\u023d\u023c\u0001\u0000\u0000"+
		"\u0000\u023e\u0241\u0001\u0000\u0000\u0000\u023f\u023d\u0001\u0000\u0000"+
		"\u0000\u023f\u0240\u0001\u0000\u0000\u0000\u0240\u0242\u0001\u0000\u0000"+
		"\u0000\u0241\u023f\u0001\u0000\u0000\u0000\u0242\u0243\u0007\u0006\u0000"+
		"\u0000\u0243\u007f\u0001\u0000\u0000\u0000\u0244\u0245\u0005A\u0000\u0000"+
		"\u0245\u0246\u0003r9\u0000\u0246\u0247\u0005B\u0000\u0000\u0247\u0255"+
		"\u0001\u0000\u0000\u0000\u0248\u0255\u0003\u0082A\u0000\u0249\u0255\u0003"+
		"h4\u0000\u024a\u024b\u0003\u0086C\u0000\u024b\u024c\u0003r9\u0000\u024c"+
		"\u0255\u0001\u0000\u0000\u0000\u024d\u0255\u0003\u0084B\u0000\u024e\u0255"+
		"\u0003\u008eG\u0000\u024f\u0255\u0003j5\u0000\u0250\u0255\u0003\u008a"+
		"E\u0000\u0251\u0255\u0003@ \u0000\u0252\u0253\u00052\u0000\u0000\u0253"+
		"\u0255\u0003r9\u0000\u0254\u0244\u0001\u0000\u0000\u0000\u0254\u0248\u0001"+
		"\u0000\u0000\u0000\u0254\u0249\u0001\u0000\u0000\u0000\u0254\u024a\u0001"+
		"\u0000\u0000\u0000\u0254\u024d\u0001\u0000\u0000\u0000\u0254\u024e\u0001"+
		"\u0000\u0000\u0000\u0254\u024f\u0001\u0000\u0000\u0000\u0254\u0250\u0001"+
		"\u0000\u0000\u0000\u0254\u0251\u0001\u0000\u0000\u0000\u0254\u0252\u0001"+
		"\u0000\u0000\u0000\u0255\u0081\u0001\u0000\u0000\u0000\u0256\u0258\u0007"+
		"\u0004\u0000\u0000\u0257\u0256\u0001\u0000\u0000\u0000\u0257\u0258\u0001"+
		"\u0000\u0000\u0000\u0258\u0259\u0001\u0000\u0000\u0000\u0259\u025a\u0005"+
		"!\u0000\u0000\u025a\u0083\u0001\u0000\u0000\u0000\u025b\u025c\u0005.\u0000"+
		"\u0000\u025c\u025d\u0005A\u0000\u0000\u025d\u025e\u0003\u008cF\u0000\u025e"+
		"\u025f\u0005B\u0000\u0000\u025f\u0085\u0001\u0000\u0000\u0000\u0260\u0261"+
		"\u0005\u001d\u0000\u0000\u0261\u0087\u0001\u0000\u0000\u0000\u0262\u0264"+
		"\u0005E\u0000\u0000\u0263\u0262\u0001\u0000\u0000\u0000\u0264\u0267\u0001"+
		"\u0000\u0000\u0000\u0265\u0263\u0001\u0000\u0000\u0000\u0265\u0266\u0001"+
		"\u0000\u0000\u0000\u0266\u0268\u0001\u0000\u0000\u0000\u0267\u0265\u0001"+
		"\u0000\u0000\u0000\u0268\u0269\u0007\u0007\u0000\u0000\u0269\u0089\u0001"+
		"\u0000\u0000\u0000\u026a\u026b\u00059\u0000\u0000\u026b\u026c\u0005.\u0000"+
		"\u0000\u026c\u026d\u0005A\u0000\u0000\u026d\u026e\u0003\u008cF\u0000\u026e"+
		"\u026f\u0005B\u0000\u0000\u026f\u0272\u0001\u0000\u0000\u0000\u0270\u0272"+
		"\u00036\u001b\u0000\u0271\u026a\u0001\u0000\u0000\u0000\u0271\u0270\u0001"+
		"\u0000\u0000\u0000\u0272\u008b\u0001\u0000\u0000\u0000\u0273\u0278\u0003"+
		"r9\u0000\u0274\u0275\u0005C\u0000\u0000\u0275\u0277\u0003r9\u0000\u0276"+
		"\u0274\u0001\u0000\u0000\u0000\u0277\u027a\u0001\u0000\u0000\u0000\u0278"+
		"\u0276\u0001\u0000\u0000\u0000\u0278\u0279\u0001\u0000\u0000\u0000\u0279"+
		"\u008d\u0001\u0000\u0000\u0000\u027a\u0278\u0001\u0000\u0000\u0000\u027b"+
		"\u027f\u0005,\u0000\u0000\u027c\u027e\u0003\u0090H\u0000\u027d\u027c\u0001"+
		"\u0000\u0000\u0000\u027e\u0281\u0001\u0000\u0000\u0000\u027f\u027d\u0001"+
		"\u0000\u0000\u0000\u027f\u0280\u0001\u0000\u0000\u0000\u0280\u0282\u0001"+
		"\u0000\u0000\u0000\u0281\u027f\u0001\u0000\u0000\u0000\u0282\u02a0\u0005"+
		",\u0000\u0000\u0283\u0287\u0005+\u0000\u0000\u0284\u0286\u0003\u0094J"+
		"\u0000\u0285\u0284\u0001\u0000\u0000\u0000\u0286\u0289\u0001\u0000\u0000"+
		"\u0000\u0287\u0285\u0001\u0000\u0000\u0000\u0287\u0288\u0001\u0000\u0000"+
		"\u0000\u0288\u028d\u0001\u0000\u0000\u0000\u0289\u0287\u0001\u0000\u0000"+
		"\u0000\u028a\u028c\u0003\u0098L\u0000\u028b\u028a\u0001\u0000\u0000\u0000"+
		"\u028c\u028f\u0001\u0000\u0000\u0000\u028d\u028b\u0001\u0000\u0000\u0000"+
		"\u028d\u028e\u0001\u0000\u0000\u0000\u028e\u0290\u0001\u0000\u0000\u0000"+
		"\u028f\u028d\u0001\u0000\u0000\u0000\u0290\u02a0\u0005+\u0000\u0000\u0291"+
		"\u0295\u0005*\u0000\u0000\u0292\u0294\u0003\u009aM\u0000\u0293\u0292\u0001"+
		"\u0000\u0000\u0000\u0294\u0297\u0001\u0000\u0000\u0000\u0295\u0293\u0001"+
		"\u0000\u0000\u0000\u0295\u0296\u0001\u0000\u0000\u0000\u0296\u029b\u0001"+
		"\u0000\u0000\u0000\u0297\u0295\u0001\u0000\u0000\u0000\u0298\u029a\u0003"+
		"\u009eO\u0000\u0299\u0298\u0001\u0000\u0000\u0000\u029a\u029d\u0001\u0000"+
		"\u0000\u0000\u029b\u0299\u0001\u0000\u0000\u0000\u029b\u029c\u0001\u0000"+
		"\u0000\u0000\u029c\u029e\u0001\u0000\u0000\u0000\u029d\u029b\u0001\u0000"+
		"\u0000\u0000\u029e\u02a0\u0005*\u0000\u0000\u029f\u027b\u0001\u0000\u0000"+
		"\u0000\u029f\u0283\u0001\u0000\u0000\u0000\u029f\u0291\u0001\u0000\u0000"+
		"\u0000\u02a0\u008f\u0001\u0000\u0000\u0000\u02a1\u02a4\u0005P\u0000\u0000"+
		"\u02a2\u02a4\u0003\u0092I\u0000\u02a3\u02a1\u0001\u0000\u0000\u0000\u02a3"+
		"\u02a2\u0001\u0000\u0000\u0000\u02a4\u0091\u0001\u0000\u0000\u0000\u02a5"+
		"\u02a6\u0005O\u0000\u0000\u02a6\u02a7\u0003r9\u0000\u02a7\u02a8\u0005"+
		")\u0000\u0000\u02a8\u0093\u0001\u0000\u0000\u0000\u02a9\u02aa\u0007\b"+
		"\u0000\u0000\u02aa\u0095\u0001\u0000\u0000\u0000\u02ab\u02ac\u0005J\u0000"+
		"\u0000\u02ac\u02ad\u0003r9\u0000\u02ad\u02ae\u0005)\u0000\u0000\u02ae"+
		"\u0097\u0001\u0000\u0000\u0000\u02af\u02b3\u0003\u0096K\u0000\u02b0\u02b2"+
		"\u0003\u0094J\u0000\u02b1\u02b0\u0001\u0000\u0000\u0000\u02b2\u02b5\u0001"+
		"\u0000\u0000\u0000\u02b3\u02b1\u0001\u0000\u0000\u0000\u02b3\u02b4\u0001"+
		"\u0000\u0000\u0000\u02b4\u0099\u0001\u0000\u0000\u0000\u02b5\u02b3\u0001"+
		"\u0000\u0000\u0000\u02b6\u02b7\u0007\t\u0000\u0000\u02b7\u009b\u0001\u0000"+
		"\u0000\u0000\u02b8\u02b9\u0005M\u0000\u0000\u02b9\u02ba\u0003r9\u0000"+
		"\u02ba\u02bb\u0005)\u0000\u0000\u02bb\u009d\u0001\u0000\u0000\u0000\u02bc"+
		"\u02c0\u0003\u009cN\u0000\u02bd\u02bf\u0003\u009aM\u0000\u02be\u02bd\u0001"+
		"\u0000\u0000\u0000\u02bf\u02c2\u0001\u0000\u0000\u0000\u02c0\u02be\u0001"+
		"\u0000\u0000\u0000\u02c0\u02c1\u0001\u0000\u0000\u0000\u02c1\u009f\u0001"+
		"\u0000\u0000\u0000\u02c2\u02c0\u0001\u0000\u0000\u0000=\u00a5\u00a7\u00af"+
		"\u00b6\u00c1\u00c4\u00cb\u00d9\u00e3\u00e7\u00eb\u00ee\u0114\u0119\u011f"+
		"\u0123\u0126\u012c\u0134\u0138\u0142\u014a\u0151\u0155\u015b\u0165\u0171"+
		"\u0189\u018b\u0194\u019b\u01a3\u01b0\u01b6\u01d8\u01df\u01e3\u01e8\u01f0"+
		"\u01f8\u0205\u0211\u021d\u0229\u022f\u0237\u023f\u0254\u0257\u0265\u0271"+
		"\u0278\u027f\u0287\u028d\u0295\u029b\u029f\u02a3\u02b3\u02c0";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}