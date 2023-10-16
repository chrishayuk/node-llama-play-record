import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfGrammarGenerator } from "../GbnfGrammarGenerator.js";
export declare class GbnfArray extends GbnfTerminal {
    readonly items: GbnfTerminal;
    constructor(items: GbnfTerminal);
    getGrammar(grammarGenerator: GbnfGrammarGenerator): string;
}
