import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "typescript-eslint";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";

/** @type {import("eslint").Linter.Config[]} */
export default [
    jsPlugin.configs.recommended,
    ...tsPlugin.configs.recommended,
    ...sveltePlugin.configs["flat/recommended"],

    {
        languageOptions: { globals: globals.browser },
        rules: { "no-undef": "off" },
    },

    {
        files: ["**/*.svelte", "**/*.svelte.ts"],
        languageOptions: {
            parser: svelteParser,
            parserOptions: { parser: tsPlugin.parser },
        },
    },
];
