import { LlamaGrammar } from "./LlamaGrammar.js";
export type LlamaGrammarEvaluationStateOptions = {
    grammar: LlamaGrammar;
};
export declare class LlamaGrammarEvaluationState {
    /**
     * Grammar evaluation state is used to track the model response to determine the next allowed characters for the model to generate.
     * Create a new grammar evaluation state for every response you generate with the model.
     * This is only needed when using the `LlamaContext` class directly, as `LlamaChatSession` already handles this for you.
     * @param {object} options
     * @param {LlamaGrammar} options.grammar
     */
    constructor({ grammar }: LlamaGrammarEvaluationStateOptions);
}
