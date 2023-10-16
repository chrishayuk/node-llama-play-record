import { ChatPromptWrapper } from "../ChatPromptWrapper.js";
import { ConversationInteraction } from "../types.js";
/**
 * Generate context text to load into a model context from a conversation history.
 * @param {ChatPromptWrapper} chatPromptWrapper
 * @param {ConversationInteraction[]} conversationHistory
 * @param {object} [options]
 * @param {string} [options.systemPrompt]
 * @param {number} [options.currentPromptIndex]
 * @param {string | null} [options.lastStopString]
 * @param {string | null} [options.lastStopStringSuffix]
 * @returns {{text: string, stopString: (string | null), stopStringSuffix: (string | null)}}
 */
export declare function generateContextTextFromConversationHistory(chatPromptWrapper: ChatPromptWrapper, conversationHistory: readonly ConversationInteraction[], { systemPrompt, currentPromptIndex, lastStopString, lastStopStringSuffix }?: {
    systemPrompt?: string;
    currentPromptIndex?: number;
    lastStopString?: string | null;
    lastStopStringSuffix?: string | null;
}): {
    text: string;
    stopString: string | null;
    stopStringSuffix: string | null;
};
