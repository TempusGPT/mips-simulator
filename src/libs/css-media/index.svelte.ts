export type ColorScheme = "light" | "dark";

class CssMedia {
    private colorSchemeValue: ColorScheme = $state(
        window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark",
    );

    public constructor() {
        window
            .matchMedia("(prefers-color-scheme: light)")
            .addEventListener(
                "change",
                (e) => (this.colorSchemeValue = e.matches ? "light" : "dark"),
            );
    }

    public get colorScheme(): ColorScheme {
        return this.colorSchemeValue;
    }
}

export const cssMedia = new CssMedia();
