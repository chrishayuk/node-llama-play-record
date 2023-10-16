import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfGrammarGenerator } from "../GbnfGrammarGenerator.js";
export declare class GbnfBoolean extends GbnfTerminal {
    getGrammar(grammarGenerator: GbnfGrammarGenerator): string;
    getRuleName(): string;
}
