export function getTextCompletion(text, fullText) {
    if (text == null) {
        return null;
    }
    const fullTexts = typeof fullText === "string" ? [fullText] : fullText;
    for (const fullText of fullTexts) {
        if (fullText.startsWith(text))
            return fullText.slice(text.length);
    }
    return null;
}
//# sourceMappingURL=getTextCompletion.js.map