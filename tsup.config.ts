// tsup.config.ts 예시
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  minify: false,
  treeshake: false,
  sourcemap: true,
});
