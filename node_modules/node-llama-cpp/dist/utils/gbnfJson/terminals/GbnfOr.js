import { GbnfTerminal } from "../GbnfTerminal.js";
import { grammarNoValue } from "./gbnfConsts.js";
export class GbnfOr extends GbnfTerminal {
    values;
    constructor(values) {
        super();
        this.values = values;
    }
    getGrammar(grammarGenerator) {
        const mappedValues = this.values
            .map(v => v.resolve(grammarGenerator))
            .filter(value => value !== "" && value !== grammarNoValue);
        if (mappedValues.length === 0)
            return grammarNoValue;
        else if (mappedValues.length === 1)
            return mappedValues[0];
        return "( " + mappedValues.join(" | ") + " )";
    }
    resolve(grammarGenerator) {
        const mappedValues = this.values
            .map(v => v.resolve(grammarGenerator))
            .filter(value => value !== "" && value !== grammarNoValue);
        if (mappedValues.length === 0)
            return grammarNoValue;
        else if (mappedValues.length === 1)
            return mappedValues[0];
        return super.resolve(grammarGenerator);
    }
}
//# sourceMappingURL=GbnfOr.js.map