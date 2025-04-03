import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false, //清空dist
    minify: true, //开启压缩
    lib: {
      entry: "./src/index.js",
      name: "index",
      fileName: (format) => {
        return `index.${format}.js`;
      },
      formats: ["es", "cjs"],
    },
  },
  resolve: {
    extensions: [".ts", ".js"], // 允许导入 TS 和 JS 文件
  },
});
