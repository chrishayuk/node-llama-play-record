import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
export declare class ChatMLChatPromptWrapper extends ChatPromptWrapper {
    readonly wrapperName: string;
    wrapPrompt(prompt: string, { systemPrompt, promptIndex, lastStopString, lastStopStringSuffix }: {
        systemPrompt: string;
        promptIndex: number;
        lastStopString: string | null;
        lastStopStringSuffix: string | null;
    }): string;
    getStopStrings(): string[];
    getDefaultStopString(): string;
}
