import antlr4 from 'antlr4';
import fs from 'fs';

import MiGramaticaLexer from './parser/MiGramaticaLexer.js';
import MiGramaticaParser from './parser/MiGramaticaParser.js';

function main() {
    try {
        const input = fs.readFileSync('./input.txt', 'utf-8');
        const chars = new antlr4.InputStream(input);
        const lexer = new MiGramaticaLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new MiGramaticaParser(tokens);

        console.log("=== TABLA DE TOKENS ===");
        tokens.fill();
        for (let token of tokens.tokens) {
            if (token.type !== -1) {
                const tokenName = MiGramaticaLexer.symbolicNames[token.type] || `T_${token.type}`;
                console.log(`Lexema: ${token.text.padEnd(15)} | Token: ${tokenName.padEnd(15)} | Línea: ${token.line}`);
            }
        }

        console.log("\n=== ÁRBOL SINTÁCTICO ===");
        const tree = parser.programa();
        console.log(tree.toStringTree(parser.ruleNames, parser));

        console.log("\n✅ Análisis completado sin errores");
    } catch (error) {
        console.error("❌ Error durante el análisis:", error.message);
        process.exit(1);
    }
}

main();
