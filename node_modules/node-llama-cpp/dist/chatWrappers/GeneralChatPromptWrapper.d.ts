import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
export declare class GeneralChatPromptWrapper extends ChatPromptWrapper {
    readonly wrapperName: string;
    private readonly _instructionName;
    private readonly _responseName;
    constructor({ instructionName, responseName }?: {
        instructionName?: string;
        responseName?: string;
    });
    wrapPrompt(prompt: string, { systemPrompt, promptIndex, lastStopString, lastStopStringSuffix }: {
        systemPrompt: string;
        promptIndex: number;
        lastStopString: string | null;
        lastStopStringSuffix: string | null;
    }): string;
    getStopStrings(): string[];
    getDefaultStopString(): string;
    private _getPromptPrefix;
}
