import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

/** @type {import("vite").UserConfig} */
export default {
    plugins: [svelte(), tsconfigPaths()],
    root: "./src",
    publicDir: "./assets",
    envDir: "../",
    build: {
        outDir: "../dist",
    },
};
