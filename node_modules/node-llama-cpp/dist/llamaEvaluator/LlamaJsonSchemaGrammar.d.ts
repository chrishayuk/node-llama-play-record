import { GbnfJsonSchema, GbnfJsonSchemaToType } from "../utils/gbnfJson/types.js";
import { LlamaGrammar } from "./LlamaGrammar.js";
export declare class LlamaJsonSchemaGrammar<const T extends Readonly<GbnfJsonSchema>> extends LlamaGrammar {
    private readonly _schema;
    constructor(schema: T);
    parse(json: string): GbnfJsonSchemaToType<T>;
}
