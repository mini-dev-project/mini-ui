import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  // ✅ Tailwind CSS 포함
  injectStyle: true,
});
