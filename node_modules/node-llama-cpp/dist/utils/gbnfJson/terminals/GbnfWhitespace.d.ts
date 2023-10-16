import { GbnfTerminal } from "../GbnfTerminal.js";
export declare class GbnfWhitespace extends GbnfTerminal {
    readonly newLinesAllowed: boolean;
    constructor({ newLinesAllowed }?: {
        newLinesAllowed?: boolean;
    });
    getGrammar(): string;
    getRuleName(): string;
}
