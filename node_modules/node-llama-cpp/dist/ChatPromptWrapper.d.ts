export declare abstract class ChatPromptWrapper {
    abstract readonly wrapperName: string;
    wrapPrompt(prompt: string, { systemPrompt, promptIndex }: {
        systemPrompt: string;
        promptIndex: number;
        lastStopString: string | null;
        lastStopStringSuffix: string | null;
    }): string;
    getStopStrings(): string[];
    getDefaultStopString(): string;
}
