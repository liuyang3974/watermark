# watermark

This is a watermark generation tool for JavaScript

# Install

## npm

```bash
npm install yang-watermark
```

## pnpm

```bash
pnpm add yang-watermark
```

# 使用方法

```js
import { Watermark } from "yang-watermark";

new Watermark({
  text: "watermark", // 水印文字
  color: "red", // 水印文字颜色
  rotate: 45, // 水印文字旋转角度
  opacity: 0.2, // 水印文字透明度
  zIndex: 9999, // 水印文字z-index
  rowGap: 10, // 水印文字行间距
  colGap: 10, // 水印文字列间距
  container: document.querySelector(".box"), // 水印容器
});

```
