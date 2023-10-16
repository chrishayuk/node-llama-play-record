import { getGbnfJsonTerminalForGbnfJsonSchema } from "./gbnfJson/utils/getGbnfJsonTerminalForGbnfJsonSchema.js";
import { GbnfGrammarGenerator } from "./gbnfJson/GbnfGrammarGenerator.js";
export function getGbnfGrammarForGbnfJsonSchema(schema) {
    const grammarGenerator = new GbnfGrammarGenerator();
    const rootTerminal = getGbnfJsonTerminalForGbnfJsonSchema(schema, grammarGenerator);
    const rootGrammar = rootTerminal.getGrammar(grammarGenerator);
    const rules = [{
            name: "root",
            grammar: rootGrammar + " [\\n]".repeat(4) + " [\\n]*"
        }];
    for (const [ruleName, grammar] of grammarGenerator.rules.entries()) {
        if (grammar == null)
            continue;
        rules.push({
            name: ruleName,
            grammar
        });
    }
    const ruleStrings = rules.map((rule) => rule.name + " ::= " + rule.grammar);
    const gbnf = ruleStrings.join("\n");
    return gbnf;
}
//# sourceMappingURL=getGbnfGrammarForGbnfJsonSchema.js.map