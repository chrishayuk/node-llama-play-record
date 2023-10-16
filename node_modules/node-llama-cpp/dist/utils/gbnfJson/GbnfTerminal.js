export class GbnfTerminal {
    _ruleName = null;
    getRuleName(grammarGenerator) {
        if (this._ruleName != null)
            return this._ruleName;
        const ruleName = grammarGenerator.generateRuleName();
        this._ruleName = ruleName;
        return ruleName;
    }
    resolve(grammarGenerator) {
        const ruleName = this.getRuleName(grammarGenerator);
        if (!grammarGenerator.rules.has(ruleName))
            grammarGenerator.rules.set(ruleName, this.getGrammar(grammarGenerator));
        return ruleName;
    }
}
//# sourceMappingURL=GbnfTerminal.js.map