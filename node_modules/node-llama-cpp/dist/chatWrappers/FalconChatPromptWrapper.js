import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
import { getTextCompletion } from "../utils/getTextCompletion.js";
export class FalconChatPromptWrapper extends ChatPromptWrapper {
    wrapperName = "Falcon";
    _instructionName;
    _responseName;
    constructor({ instructionName = "User", responseName = "Assistant" } = {}) {
        super();
        this._instructionName = instructionName;
        this._responseName = responseName;
    }
    wrapPrompt(prompt, { systemPrompt, promptIndex, lastStopString, lastStopStringSuffix }) {
        if (promptIndex === 0)
            return systemPrompt + `\n${this._instructionName}: ` + prompt + `\n${this._responseName}: `;
        return this._getPromptPrefix(lastStopString, lastStopStringSuffix) + prompt + `\n${this._responseName}: `;
    }
    getStopStrings() {
        return [
            `\n${this._instructionName}: `,
            `\n${this._responseName}:`
        ];
    }
    getDefaultStopString() {
        return `\n${this._instructionName}: `;
    }
    _getPromptPrefix(lastStopString, lastStopStringSuffix) {
        return getTextCompletion((lastStopString ?? "") + (lastStopStringSuffix ?? ""), [
            `\n${this._instructionName}: `,
            `${this._instructionName}: `
        ]) ?? `\n${this._instructionName}: `;
    }
}
//# sourceMappingURL=FalconChatPromptWrapper.js.map