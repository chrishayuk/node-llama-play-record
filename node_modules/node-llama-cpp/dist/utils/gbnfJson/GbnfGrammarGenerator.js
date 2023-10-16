export class GbnfGrammarGenerator {
    rules = new Map();
    ruleId = 0;
    generateRuleName() {
        const ruleId = this.ruleId;
        this.ruleId++;
        return `rule${ruleId}`;
    }
}
//# sourceMappingURL=GbnfGrammarGenerator.js.map