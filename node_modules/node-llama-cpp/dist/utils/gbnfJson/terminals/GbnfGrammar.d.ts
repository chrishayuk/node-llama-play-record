import { GbnfTerminal } from "../GbnfTerminal.js";
export declare class GbnfGrammar extends GbnfTerminal {
    readonly grammar: string | string[];
    constructor(grammar: string | string[]);
    getGrammar(): string;
}
