import path from "path";
import fs from "fs-extra";
import { getGrammarsFolder } from "../utils/getGrammarsFolder.js";
import { LLAMAGrammar } from "./LlamaBins.js";
export class LlamaGrammar {
    /** @internal */
    _grammar;
    _stopStrings;
    _trimWhitespaceSuffix;
    _grammarText;
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
    constructor({ grammar, stopStrings = [], trimWhitespaceSuffix = false, printGrammar = false }) {
        this._grammar = new LLAMAGrammar(grammar, {
            printGrammar
        });
        this._stopStrings = stopStrings ?? [];
        this._trimWhitespaceSuffix = trimWhitespaceSuffix;
        this._grammarText = grammar;
    }
    get grammar() {
        return this._grammarText;
    }
    get stopStrings() {
        return this._stopStrings;
    }
    get trimWhitespaceSuffix() {
        return this._trimWhitespaceSuffix;
    }
    static async getFor(type) {
        const grammarsFolder = await getGrammarsFolder();
        const grammarFile = path.join(grammarsFolder, type + ".gbnf");
        if (await fs.pathExists(grammarFile)) {
            const grammar = await fs.readFile(grammarFile, "utf8");
            return new LlamaGrammar({
                grammar,
                stopStrings: ["\n".repeat(10)],
                trimWhitespaceSuffix: true
            });
        }
        throw new Error(`Grammar file for type "${type}" was not found in "${grammarsFolder}"`);
    }
}
//# sourceMappingURL=LlamaGrammar.js.map