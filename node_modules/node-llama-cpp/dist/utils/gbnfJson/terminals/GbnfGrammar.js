import { GbnfTerminal } from "../GbnfTerminal.js";
export class GbnfGrammar extends GbnfTerminal {
    grammar;
    constructor(grammar) {
        super();
        this.grammar = grammar;
    }
    getGrammar() {
        if (this.grammar instanceof Array)
            return this.grammar
                .filter((item) => item !== "")
                .join(" ");
        return this.grammar;
    }
}
//# sourceMappingURL=GbnfGrammar.js.map