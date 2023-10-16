import { LLAMAGrammarEvaluationState } from "./LlamaBins.js";
export class LlamaGrammarEvaluationState {
    /** @internal */
    _state;
    /**
     * Grammar evaluation state is used to track the model response to determine the next allowed characters for the model to generate.
     * Create a new grammar evaluation state for every response you generate with the model.
     * This is only needed when using the `LlamaContext` class directly, as `LlamaChatSession` already handles this for you.
     * @param {object} options
     * @param {LlamaGrammar} options.grammar
     */
    constructor({ grammar }) {
        this._state = new LLAMAGrammarEvaluationState(grammar._grammar);
    }
}
//# sourceMappingURL=LlamaGrammarEvaluationState.js.map