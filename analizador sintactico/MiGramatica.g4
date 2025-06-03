grammar MiGramatica;

programa: instrucciones EOF;

instrucciones: instruccion+;

instruccion: bucle | salida | terminar;

bucle: 'for' '(' inicializacion ';' condicion ';' actualizacion ')' '{' sentencia '}' ;

inicializacion: IDENTIFICADOR '=' NUMERO ;

condicion: IDENTIFICADOR operador_relacional NUMERO ;

actualizacion: IDENTIFICADOR operador_incremento ;

operador_relacional: '<' | '>' | '<=' | '>=' | '==' | '!=' ;

operador_incremento: '++' | '--' ;

sentencia: salida | terminar ;

salida: 'printf' '(' CADENA ')' ';' ;

terminar: 'break' ';' ;

IDENTIFICADOR: [a-zA-Z] [a-zA-Z0-9]* ;
NUMERO: [0-9]+ ;
CADENA: '"' (~["\r\n])* '"' ;

WS: [ \t\r\n]+ -> skip ;
