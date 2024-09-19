<script module lang="ts">
    import { editor } from "monaco-editor";
    import { cssMedia } from "@libs/css-media";
</script>

<script lang="ts">
    let editorElement: HTMLDivElement;

    $effect(() => {
        editor.defineTheme("pico-dark", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#181c25",
            },
        });

        editor.create(editorElement, {
            value: `main:\n\tadd $t0, $t1, $t2\n\tj main`,
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
        });
    });

    $effect(() => {
        editor.setTheme(cssMedia.colorScheme === "dark" ? "pico-dark" : "vs");
    });
</script>

<main class="container-fluid">
    <div class="grid">
        <article class="editor-container">
            <div class="editor" bind:this={editorElement}></div>
        </article>

        <article>Hello, world!</article>
    </div>
</main>

<style>
    :root {
        --spacing-h: calc(var(--pico-block-spacing-horizontal) * 2);
        --spacing-v: calc(var(--pico-block-spacing-vertical) * 2);
        --height: calc(100dvh - var(--spacing-v));
        overflow: hidden;
    }

    .editor-container {
        height: var(--height);
        padding-left: 0;
        padding-right: 0;
    }

    .editor {
        width: 100%;
        height: 100%;
    }
</style>
