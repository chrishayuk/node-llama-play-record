import { GbnfTerminal } from "../GbnfTerminal.js";
import { reservedRuleNames } from "./gbnfConsts.js";
export class GbnfWhitespace extends GbnfTerminal {
    newLinesAllowed;
    constructor({ newLinesAllowed = true } = {}) {
        super();
        this.newLinesAllowed = newLinesAllowed;
    }
    getGrammar() {
        if (this.newLinesAllowed)
            return "[\\n]? [ \\t]* [\\n]?";
        return "[ \\t]*";
    }
    getRuleName() {
        if (this.newLinesAllowed)
            return reservedRuleNames.whitespace.withNewLines;
        return reservedRuleNames.whitespace.withoutNewLines;
    }
}
//# sourceMappingURL=GbnfWhitespace.js.map