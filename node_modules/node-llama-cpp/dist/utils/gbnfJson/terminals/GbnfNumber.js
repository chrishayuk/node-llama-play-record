import { GbnfTerminal } from "../GbnfTerminal.js";
import { reservedRuleNames } from "./gbnfConsts.js";
export class GbnfNumber extends GbnfTerminal {
    allowFractional;
    constructor({ allowFractional = true }) {
        super();
        this.allowFractional = allowFractional;
    }
    getGrammar() {
        const numberGrammar = '("-"? ([0-9] | [1-9] [0-9]*))';
        if (this.allowFractional)
            return numberGrammar + ' ("." [0-9]+)? ([eE] [-+]? [0-9]+)?';
        return numberGrammar;
    }
    getRuleName() {
        if (this.allowFractional)
            return reservedRuleNames.number.fractional;
        return reservedRuleNames.number.integer;
    }
}
//# sourceMappingURL=GbnfNumber.js.map