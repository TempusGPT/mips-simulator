import { editor } from "monaco-editor";

export type Theme = {
    light: string;
    dark: string;
};

export function createTheme(): Theme {
    const theme: Theme = {
        light: "mips-light",
        dark: "mips-dark",
    };

    editor.defineTheme(theme.light, {
        base: "vs",
        inherit: true,
        colors: {},

        rules: [
            { token: "directive", foreground: "#af01db" },
            { token: "register", foreground: "#1f2e91" },
            { token: "string.escape.valid", foreground: "#ee0000" },
            { token: "string.escape.invalid", foreground: "#d34645" },
        ],
    });

    editor.defineTheme(theme.dark, {
        base: "vs-dark",
        inherit: true,
        colors: { "editor.background": "#181c25" },

        rules: [
            { token: "directive", foreground: "#c586c0" },
            { token: "register", foreground: "#9cdcfe" },
            { token: "string.escape.valid", foreground: "#d7ba7d" },
            { token: "string.escape.invalid", foreground: "#f44748" },
        ],
    });

    return theme;
}
