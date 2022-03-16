import { build } from "esbuild";

build({
  entryPoints: ["src/modal.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: "build/index.js",
  loader: {
    ".svg": "dataurl",
    ".css": "text",
  },
  sourceRoot: "./",
  format: "cjs",
});
