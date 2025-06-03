// Generated from C:/Users/Lucas1/Desktop/analizador sintactico/MiGramatica.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MiGramaticaListener from './MiGramaticaListener.js';
import MiGramaticaVisitor from './MiGramaticaVisitor.js';

const serializedATN = [4,1,21,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,1,4,1,29,8,1,11,1,12,1,30,1,2,1,2,1,2,3,2,36,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,
7,1,7,1,8,1,8,1,9,1,9,3,9,67,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,
1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,1,0,8,13,1,0,14,15,69,
0,24,1,0,0,0,2,28,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,49,1,0,0,0,10,53,1,
0,0,0,12,57,1,0,0,0,14,60,1,0,0,0,16,62,1,0,0,0,18,66,1,0,0,0,20,68,1,0,
0,0,22,74,1,0,0,0,24,25,3,2,1,0,25,26,5,0,0,1,26,1,1,0,0,0,27,29,3,4,2,0,
28,27,1,0,0,0,29,30,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,
36,3,6,3,0,33,36,3,20,10,0,34,36,3,22,11,0,35,32,1,0,0,0,35,33,1,0,0,0,35,
34,1,0,0,0,36,5,1,0,0,0,37,38,5,1,0,0,38,39,5,2,0,0,39,40,3,8,4,0,40,41,
5,3,0,0,41,42,3,10,5,0,42,43,5,3,0,0,43,44,3,12,6,0,44,45,5,4,0,0,45,46,
5,5,0,0,46,47,3,18,9,0,47,48,5,6,0,0,48,7,1,0,0,0,49,50,5,18,0,0,50,51,5,
7,0,0,51,52,5,19,0,0,52,9,1,0,0,0,53,54,5,18,0,0,54,55,3,14,7,0,55,56,5,
19,0,0,56,11,1,0,0,0,57,58,5,18,0,0,58,59,3,16,8,0,59,13,1,0,0,0,60,61,7,
0,0,0,61,15,1,0,0,0,62,63,7,1,0,0,63,17,1,0,0,0,64,67,3,20,10,0,65,67,3,
22,11,0,66,64,1,0,0,0,66,65,1,0,0,0,67,19,1,0,0,0,68,69,5,16,0,0,69,70,5,
2,0,0,70,71,5,20,0,0,71,72,5,4,0,0,72,73,5,3,0,0,73,21,1,0,0,0,74,75,5,17,
0,0,75,76,5,3,0,0,76,23,1,0,0,0,3,30,35,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MiGramaticaParser extends antlr4.Parser {

    static grammarFileName = "MiGramatica.g4";
    static literalNames = [ null, "'for'", "'('", "';'", "')'", "'{'", "'}'", 
                            "'='", "'<'", "'>'", "'<='", "'>='", "'=='", 
                            "'!='", "'++'", "'--'", "'printf'", "'break'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "IDENTIFICADOR", "NUMERO", "CADENA", 
                             "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "bucle", 
                         "inicializacion", "condicion", "actualizacion", 
                         "operador_relacional", "operador_incremento", "sentencia", 
                         "salida", "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MiGramaticaParser.ruleNames;
        this.literalNames = MiGramaticaParser.literalNames;
        this.symbolicNames = MiGramaticaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MiGramaticaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.instrucciones();
	        this.state = 25;
	        this.match(MiGramaticaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MiGramaticaParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 27;
	            this.instruccion();
	            this.state = 30; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 196610) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MiGramaticaParser.RULE_instruccion);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.bucle();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.salida();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bucle() {
	    let localctx = new BucleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MiGramaticaParser.RULE_bucle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(MiGramaticaParser.T__0);
	        this.state = 38;
	        this.match(MiGramaticaParser.T__1);
	        this.state = 39;
	        this.inicializacion();
	        this.state = 40;
	        this.match(MiGramaticaParser.T__2);
	        this.state = 41;
	        this.condicion();
	        this.state = 42;
	        this.match(MiGramaticaParser.T__2);
	        this.state = 43;
	        this.actualizacion();
	        this.state = 44;
	        this.match(MiGramaticaParser.T__3);
	        this.state = 45;
	        this.match(MiGramaticaParser.T__4);
	        this.state = 46;
	        this.sentencia();
	        this.state = 47;
	        this.match(MiGramaticaParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacion() {
	    let localctx = new InicializacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MiGramaticaParser.RULE_inicializacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(MiGramaticaParser.IDENTIFICADOR);
	        this.state = 50;
	        this.match(MiGramaticaParser.T__6);
	        this.state = 51;
	        this.match(MiGramaticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MiGramaticaParser.RULE_condicion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(MiGramaticaParser.IDENTIFICADOR);
	        this.state = 54;
	        this.operador_relacional();
	        this.state = 55;
	        this.match(MiGramaticaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actualizacion() {
	    let localctx = new ActualizacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MiGramaticaParser.RULE_actualizacion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(MiGramaticaParser.IDENTIFICADOR);
	        this.state = 58;
	        this.operador_incremento();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_relacional() {
	    let localctx = new Operador_relacionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MiGramaticaParser.RULE_operador_relacional);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 16128) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operador_incremento() {
	    let localctx = new Operador_incrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MiGramaticaParser.RULE_operador_incremento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MiGramaticaParser.RULE_sentencia);
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 64;
	            this.salida();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 65;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MiGramaticaParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(MiGramaticaParser.T__15);
	        this.state = 69;
	        this.match(MiGramaticaParser.T__1);
	        this.state = 70;
	        this.match(MiGramaticaParser.CADENA);
	        this.state = 71;
	        this.match(MiGramaticaParser.T__3);
	        this.state = 72;
	        this.match(MiGramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MiGramaticaParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(MiGramaticaParser.T__16);
	        this.state = 75;
	        this.match(MiGramaticaParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MiGramaticaParser.EOF = antlr4.Token.EOF;
MiGramaticaParser.T__0 = 1;
MiGramaticaParser.T__1 = 2;
MiGramaticaParser.T__2 = 3;
MiGramaticaParser.T__3 = 4;
MiGramaticaParser.T__4 = 5;
MiGramaticaParser.T__5 = 6;
MiGramaticaParser.T__6 = 7;
MiGramaticaParser.T__7 = 8;
MiGramaticaParser.T__8 = 9;
MiGramaticaParser.T__9 = 10;
MiGramaticaParser.T__10 = 11;
MiGramaticaParser.T__11 = 12;
MiGramaticaParser.T__12 = 13;
MiGramaticaParser.T__13 = 14;
MiGramaticaParser.T__14 = 15;
MiGramaticaParser.T__15 = 16;
MiGramaticaParser.T__16 = 17;
MiGramaticaParser.IDENTIFICADOR = 18;
MiGramaticaParser.NUMERO = 19;
MiGramaticaParser.CADENA = 20;
MiGramaticaParser.WS = 21;

MiGramaticaParser.RULE_programa = 0;
MiGramaticaParser.RULE_instrucciones = 1;
MiGramaticaParser.RULE_instruccion = 2;
MiGramaticaParser.RULE_bucle = 3;
MiGramaticaParser.RULE_inicializacion = 4;
MiGramaticaParser.RULE_condicion = 5;
MiGramaticaParser.RULE_actualizacion = 6;
MiGramaticaParser.RULE_operador_relacional = 7;
MiGramaticaParser.RULE_operador_incremento = 8;
MiGramaticaParser.RULE_sentencia = 9;
MiGramaticaParser.RULE_salida = 10;
MiGramaticaParser.RULE_terminar = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(MiGramaticaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_instruccion;
    }

	bucle() {
	    return this.getTypedRuleContext(BucleContext,0);
	};

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BucleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_bucle;
    }

	inicializacion() {
	    return this.getTypedRuleContext(InicializacionContext,0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	actualizacion() {
	    return this.getTypedRuleContext(ActualizacionContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterBucle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitBucle(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitBucle(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InicializacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_inicializacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	NUMERO() {
	    return this.getToken(MiGramaticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterInicializacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitInicializacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitInicializacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_condicion;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	operador_relacional() {
	    return this.getTypedRuleContext(Operador_relacionalContext,0);
	};

	NUMERO() {
	    return this.getToken(MiGramaticaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActualizacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_actualizacion;
    }

	IDENTIFICADOR() {
	    return this.getToken(MiGramaticaParser.IDENTIFICADOR, 0);
	};

	operador_incremento() {
	    return this.getTypedRuleContext(Operador_incrementoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterActualizacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitActualizacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitActualizacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_relacionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_operador_relacional;
    }


	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterOperador_relacional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitOperador_relacional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitOperador_relacional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operador_incrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_operador_incremento;
    }


	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterOperador_incremento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitOperador_incremento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitOperador_incremento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_salida;
    }

	CADENA() {
	    return this.getToken(MiGramaticaParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MiGramaticaParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MiGramaticaListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MiGramaticaVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MiGramaticaParser.ProgramaContext = ProgramaContext; 
MiGramaticaParser.InstruccionesContext = InstruccionesContext; 
MiGramaticaParser.InstruccionContext = InstruccionContext; 
MiGramaticaParser.BucleContext = BucleContext; 
MiGramaticaParser.InicializacionContext = InicializacionContext; 
MiGramaticaParser.CondicionContext = CondicionContext; 
MiGramaticaParser.ActualizacionContext = ActualizacionContext; 
MiGramaticaParser.Operador_relacionalContext = Operador_relacionalContext; 
MiGramaticaParser.Operador_incrementoContext = Operador_incrementoContext; 
MiGramaticaParser.SentenciaContext = SentenciaContext; 
MiGramaticaParser.SalidaContext = SalidaContext; 
MiGramaticaParser.TerminarContext = TerminarContext; 
