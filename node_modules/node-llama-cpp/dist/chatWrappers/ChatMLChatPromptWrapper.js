import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
import { getTextCompletion } from "../utils/getTextCompletion.js";
// source: https://github.com/openai/openai-python/blob/120d225b91a8453e15240a49fb1c6794d8119326/chatml.md
export class ChatMLChatPromptWrapper extends ChatPromptWrapper {
    wrapperName = "ChatML";
    wrapPrompt(prompt, { systemPrompt, promptIndex, lastStopString, lastStopStringSuffix }) {
        const previousCompletionEnd = (lastStopString ?? "") + (lastStopStringSuffix ?? "");
        if (promptIndex === 0 && systemPrompt != "")
            return (getTextCompletion(previousCompletionEnd, "<|im_start|>system\n") ?? "<|im_start|>system\n") +
                systemPrompt + "<|im_end|>\n<|im_start|>user\n" + prompt + "<|im_end|>\n<|im_start|>assistant\n";
        else
            return (getTextCompletion(previousCompletionEnd, "<|im_end|>\n<|im_start|>user\n") ?? "<|im_end|>\n<|im_start|>user\n") +
                prompt + "<|im_end|>\n<|im_start|>assistant\n";
    }
    getStopStrings() {
        return ["<|im_end|>"];
    }
    getDefaultStopString() {
        return "<|im_end|>";
    }
}
//# sourceMappingURL=ChatMLChatPromptWrapper.js.map