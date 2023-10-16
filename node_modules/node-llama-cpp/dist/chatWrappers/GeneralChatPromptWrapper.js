import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
import { getTextCompletion } from "../utils/getTextCompletion.js";
export class GeneralChatPromptWrapper extends ChatPromptWrapper {
    wrapperName = "General";
    _instructionName;
    _responseName;
    constructor({ instructionName = "Human", responseName = "Assistant" } = {}) {
        super();
        this._instructionName = instructionName;
        this._responseName = responseName;
    }
    wrapPrompt(prompt, { systemPrompt, promptIndex, lastStopString, lastStopStringSuffix }) {
        if (promptIndex === 0)
            return systemPrompt + `\n\n### ${this._instructionName}:\n` + prompt + `\n\n### ${this._responseName}:\n`;
        return this._getPromptPrefix(lastStopString, lastStopStringSuffix) + prompt + `\n\n### ${this._responseName}:\n`;
    }
    getStopStrings() {
        return [
            `\n\n### ${this._instructionName}`,
            `### ${this._instructionName}`,
            `\n\n### ${this._responseName}`,
            `### ${this._responseName}`,
            "<end>"
        ];
    }
    getDefaultStopString() {
        return `\n\n### ${this._instructionName}`;
    }
    _getPromptPrefix(lastStopString, lastStopStringSuffix) {
        return getTextCompletion(lastStopString === "<end>"
            ? lastStopStringSuffix
            : ((lastStopString ?? "") + (lastStopStringSuffix ?? "")), [
            `\n\n### ${this._instructionName}:\n`,
            `### ${this._instructionName}:\n`
        ]) ?? `\n\n### ${this._instructionName}:\n`;
    }
}
//# sourceMappingURL=GeneralChatPromptWrapper.js.map