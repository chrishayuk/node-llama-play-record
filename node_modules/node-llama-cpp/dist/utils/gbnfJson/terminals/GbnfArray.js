import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfWhitespace } from "./GbnfWhitespace.js";
import { GbnfGrammar } from "./GbnfGrammar.js";
import { GbnfOr } from "./GbnfOr.js";
export class GbnfArray extends GbnfTerminal {
    items;
    constructor(items) {
        super();
        this.items = items;
    }
    getGrammar(grammarGenerator) {
        const whitespaceRuleName = new GbnfWhitespace().resolve(grammarGenerator);
        const itemsGrammarRuleName = this.items.resolve(grammarGenerator);
        return new GbnfGrammar([
            '"["', whitespaceRuleName,
            new GbnfOr([
                new GbnfGrammar([
                    "(", itemsGrammarRuleName, ")",
                    "(", '","', whitespaceRuleName, itemsGrammarRuleName, ")*"
                ]),
                new GbnfGrammar([
                    "(", itemsGrammarRuleName, ")?"
                ])
            ]).getGrammar(grammarGenerator),
            whitespaceRuleName, '"]"'
        ]).getGrammar();
    }
}
//# sourceMappingURL=GbnfArray.js.map