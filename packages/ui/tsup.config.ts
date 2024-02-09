import { defineConfig } from "tsup";
import cssModulePlugin from "esbuild-plugin-css-module";

export default defineConfig({
  clean: true,
  sourcemap: true,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  external: ["react"],
  esbuildPlugins: [cssModulePlugin()],
});
