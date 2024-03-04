import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    plugins: [],
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
    base: "/",
});
