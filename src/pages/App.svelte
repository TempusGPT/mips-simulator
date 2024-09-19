<script module lang="ts">
    import * as monaco from "monaco-editor";
</script>

<script lang="ts">
    let editor: HTMLDivElement;

    $effect(() => {
        monaco.editor.create(editor, {
            value: `main:\n\tadd $t0, $t1, $t2\n\tj main`,
            theme: "vs-dark",
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
        });
    });
</script>

<main class="container-fluid">
    <div class="grid">
        <article>
            <div bind:this={editor}></div>
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

    article {
        height: var(--height);
    }

    div {
        width: 100%;
        height: 100%;
    }
</style>
