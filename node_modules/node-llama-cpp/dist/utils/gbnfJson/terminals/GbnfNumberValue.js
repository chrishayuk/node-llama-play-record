import { GbnfTerminal } from "../GbnfTerminal.js";
export class GbnfNumberValue extends GbnfTerminal {
    value;
    constructor(value) {
        super();
        this.value = value;
    }
    getGrammar() {
        return '"' + JSON.stringify(this.value) + '"';
    }
    resolve() {
        return this.getGrammar();
    }
}
//# sourceMappingURL=GbnfNumberValue.js.map