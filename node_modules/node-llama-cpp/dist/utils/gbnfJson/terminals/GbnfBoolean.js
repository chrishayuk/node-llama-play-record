import { GbnfTerminal } from "../GbnfTerminal.js";
import { GbnfOr } from "./GbnfOr.js";
import { GbnfGrammar } from "./GbnfGrammar.js";
import { reservedRuleNames } from "./gbnfConsts.js";
export class GbnfBoolean extends GbnfTerminal {
    getGrammar(grammarGenerator) {
        return new GbnfOr([
            new GbnfGrammar('"true"'),
            new GbnfGrammar('"false"')
        ]).getGrammar(grammarGenerator);
    }
    getRuleName() {
        return reservedRuleNames.boolean;
    }
}
//# sourceMappingURL=GbnfBoolean.js.map