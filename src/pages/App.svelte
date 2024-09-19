<script lang="ts">
    import { MipsEditor } from "@libs/mips-editor";
</script>

<main class="container-fluid">
    <div class="grid">
        <article class="editor-container">
            <MipsEditor />
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
</style>
