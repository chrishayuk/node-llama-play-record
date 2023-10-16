import { GbnfTerminal } from "../GbnfTerminal.js";
export declare class GbnfNumberValue extends GbnfTerminal {
    readonly value: number;
    constructor(value: number);
    getGrammar(): string;
    resolve(): string;
}
