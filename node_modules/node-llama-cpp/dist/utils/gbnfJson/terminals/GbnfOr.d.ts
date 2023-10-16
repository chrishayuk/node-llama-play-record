import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfGrammarGenerator } from "../GbnfGrammarGenerator.js";
export declare class GbnfOr extends GbnfTerminal {
    readonly values: readonly GbnfTerminal[];
    constructor(values: readonly GbnfTerminal[]);
    getGrammar(grammarGenerator: GbnfGrammarGenerator): string;
    resolve(grammarGenerator: GbnfGrammarGenerator): string;
}
