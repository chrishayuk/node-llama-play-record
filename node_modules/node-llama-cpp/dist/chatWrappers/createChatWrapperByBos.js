import { LlamaChatPromptWrapper } from "./LlamaChatPromptWrapper.js";
import { ChatMLChatPromptWrapper } from "./ChatMLChatPromptWrapper.js";
export function getChatWrapperByBos(bos) {
    if (bos === "" || bos == null)
        return null;
    if ("<s>[INST] <<SYS>>\n".startsWith(bos)) {
        return LlamaChatPromptWrapper;
    }
    else if ("<|im_start|>system\n".startsWith(bos)) {
        return ChatMLChatPromptWrapper;
    }
    return null;
}
//# sourceMappingURL=createChatWrapperByBos.js.map