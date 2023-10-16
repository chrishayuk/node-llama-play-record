export type LlamaGrammarOptions = {
    /** GBNF grammar */
    grammar: string;
    /** print the grammar to stdout */
    printGrammar?: boolean;
    /** Consider any of these texts as EOS for the generated out. Only supported by `LlamaChatSession` */
    stopStrings?: string[];
    /** Trim whitespace from the end of the generated text. Only supported by `LlamaChatSession` */
    trimWhitespaceSuffix?: boolean;
};
export declare class LlamaGrammar {
    private readonly _stopStrings;
    private readonly _trimWhitespaceSuffix;
    private readonly _grammarText;
    /**
     * > GBNF files are supported.
     * > More info here: [github:ggerganov/llama.cpp:grammars/README.md](
     * > https://github.com/ggerganov/llama.cpp/blob/f5fe98d11bdf9e7797bcfb05c0c3601ffc4b9d26/grammars/README.md)
     * @param {object} options
     * @param {string} options.grammar - GBNF grammar
     * @param {string[]} [options.stopStrings] - Consider any of these texts as EOS for the generated out.
     * Only supported by `LlamaChatSession`
     * @param {boolean} [options.trimWhitespaceSuffix] - Trim whitespace from the end of the generated text.
     * Only supported by `LlamaChatSession`
     * @param {boolean} [options.printGrammar] - print the grammar to stdout
     */
    constructor({ grammar, stopStrings, trimWhitespaceSuffix, printGrammar }: LlamaGrammarOptions);
    get grammar(): string;
    get stopStrings(): readonly string[];
    get trimWhitespaceSuffix(): boolean;
    static getFor(type: "json" | "list" | "arithmetic" | "japanese" | "chess"): Promise<LlamaGrammar>;
}
