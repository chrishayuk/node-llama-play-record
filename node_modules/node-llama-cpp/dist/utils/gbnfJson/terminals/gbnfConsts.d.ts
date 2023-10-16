export declare const grammarNoValue = "\"\"";
export declare const reservedRuleNames: {
    readonly null: "null-rule";
    readonly boolean: "boolean-rule";
    readonly number: {
        readonly fractional: "fractional-number-rule";
        readonly integer: "integer-number-rule";
    };
    readonly string: "string-rule";
    readonly whitespace: {
        readonly withNewLines: "whitespace-new-lines-rule";
        readonly withoutNewLines: "whitespace-no-new-lines-rule";
    };
};
