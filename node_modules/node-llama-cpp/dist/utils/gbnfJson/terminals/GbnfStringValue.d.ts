import { GbnfTerminal } from "../GbnfTerminal.js";
export declare class GbnfStringValue extends GbnfTerminal {
    readonly value: string;
    constructor(value: string);
    getGrammar(): string;
}
