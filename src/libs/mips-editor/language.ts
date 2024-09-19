import { languages } from "monaco-editor";

const keywords = [
    "add",
    "sub",
    "and",
    "or",
    "nor",
    "slt",
    "lw",
    "sw",
    "beq",
    "bne",
    "jal",
    "jr",
    "j",
] as const;

const registers = [
    "$zero",
    "$at",
    "$v0",
    "$v1",
    "$a0",
    "$a1",
    "$a2",
    "$a3",
    "$t0",
    "$t1",
    "$t2",
    "$t3",
    "$t4",
    "$t5",
    "$t6",
    "$t7",
    "$s0",
    "$s1",
    "$s2",
    "$s3",
    "$s4",
    "$s5",
    "$s6",
    "$s7",
    "$t8",
    "$t9",
    "$k0",
    "$k1",
    "$gp",
    "$sp",
    "$fp",
    "$ra",
] as const;

export function createLanguage(): string {
    const language = "mips";
    languages.register({ id: language });

    languages.registerCompletionItemProvider(language, {
        triggerCharacters: ["$"],

        provideCompletionItems(model, position) {
            const word = model.getWordUntilPosition(position);
            const text = model.getValue();
            const labels = Array.from(text.matchAll(/(\w+):/g), (m) => m[1]);

            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            };

            const keywordsMap = keywords.map((keyword) => ({
                label: keyword,
                kind: languages.CompletionItemKind.Keyword,
                insertText: keyword,
                range,
            }));

            const registersMap = registers.map((register) => ({
                label: register,
                kind: languages.CompletionItemKind.Variable,
                insertText: word.word.length === 0 ? register.slice(1) : register,
                range,
            }));

            const labelsMap = labels.map((label) => ({
                label: label,
                kind: languages.CompletionItemKind.Module,
                insertText: label,
                range,
            }));

            return {
                suggestions: [...keywordsMap, ...registersMap, ...labelsMap],
            };
        },
    });

    languages.setLanguageConfiguration(language, {
        autoClosingPairs: [
            { open: `'`, close: `'` },
            { open: `"`, close: `"` },
        ],
        surroundingPairs: [
            { open: `'`, close: `'` },
            { open: `"`, close: `"` },
        ],
    });

    languages.setMonarchTokensProvider(language, {
        tokenizer: {
            root: [
                [new RegExp(keywords.join("|")), "keyword"],
                [/\.\w+/, "directive"],
                [/\$[a-zA-Z0-9]+/, "register"],
                [/0x[0-9A-Fa-f]+|\d+/, "number"],
                [/"[^"]*"|'[^']*'/, "string"],
                [/#[^\n]*/, "comment"],
            ],
        },
    });

    return language;
}
