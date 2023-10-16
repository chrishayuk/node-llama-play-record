import { getGbnfGrammarForGbnfJsonSchema } from "../utils/getGbnfGrammarForGbnfJsonSchema.js";
import { validateObjectAgainstGbnfSchema } from "../utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.js";
import { LlamaGrammar } from "./LlamaGrammar.js";
export class LlamaJsonSchemaGrammar extends LlamaGrammar {
    _schema;
    constructor(schema) {
        const grammar = getGbnfGrammarForGbnfJsonSchema(schema);
        super({
            grammar,
            stopStrings: ["\n".repeat(4)],
            trimWhitespaceSuffix: true
        });
        this._schema = schema;
    }
    parse(json) {
        const parsedJson = JSON.parse(json);
        validateObjectAgainstGbnfSchema(parsedJson, this._schema);
        return parsedJson;
    }
}
//# sourceMappingURL=LlamaJsonSchemaGrammar.js.map