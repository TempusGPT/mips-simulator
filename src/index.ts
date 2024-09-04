import { mount } from "svelte";
import App from "./pages/App.svelte";

mount(App, {
    target: document.getElementById("root")!,
});
