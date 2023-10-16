import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfWhitespace } from "./GbnfWhitespace.js";
import { GbnfGrammar } from "./GbnfGrammar.js";
export class GbnfObjectMap extends GbnfTerminal {
    fields;
    constructor(fields) {
        super();
        this.fields = fields;
    }
    getGrammar(grammarGenerator) {
        const whitespaceRuleName = new GbnfWhitespace().resolve(grammarGenerator);
        return new GbnfGrammar([
            '"{"', whitespaceRuleName,
            ...this.fields.map(({ key, value }, index) => {
                return new GbnfGrammar([
                    key.getGrammar(), '":"', "[ ]?", value.resolve(grammarGenerator),
                    index < this.fields.length - 1 ? '","' : "",
                    whitespaceRuleName
                ]).getGrammar();
            }),
            '"}"'
        ]).getGrammar();
    }
}
//# sourceMappingURL=GbnfObjectMap.js.map