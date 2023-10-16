import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfGrammarGenerator } from "../GbnfGrammarGenerator.js";
import { GbnfString } from "./GbnfString.js";
import { GbnfStringValue } from "./GbnfStringValue.js";
export declare class GbnfObjectMap extends GbnfTerminal {
    readonly fields: Array<Readonly<{
        key: GbnfString | GbnfStringValue;
        value: GbnfTerminal;
        required: true;
    }>>;
    constructor(fields: Array<Readonly<{
        key: GbnfString | GbnfStringValue;
        value: GbnfTerminal;
        required: true;
    }>>);
    getGrammar(grammarGenerator: GbnfGrammarGenerator): string;
}
