<script module lang="ts">
    import { editor } from "monaco-editor";
    import { cssMedia } from "@libs/css-media";
    import { createLanguage } from "./language";
    import { createTheme } from "./theme";

    const initialText = `.text
.globl main

main:
    add $t0, $t1, $t2  # t0 = t1 + t2
    beq $t0, $t3, end  # t0 == t3이면 end로 분기
    j main             # main으로 무한루프

end:
    jr $ra             # 리턴
`;
</script>

<script lang="ts">
    let element: HTMLElement;

    const language = createLanguage();
    const theme = createTheme();

    $effect(() => {
        editor.create(element, {
            value: initialText,
            language,
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
        });
    });

    $effect(() => {
        editor.setTheme(theme[cssMedia.colorScheme]);
    });
</script>

<div class="editor" bind:this={element}></div>

<style>
    .editor {
        width: 100%;
        height: 100%;
    }
</style>
