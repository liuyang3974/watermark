# **yang-watermark** 📌

`yang-watermark` 是一个轻量级的 JavaScript/TypeScript 水印生成工具，支持：
- **动态更新** 水印文本内容
- **可定制** 旋转角度、颜色、透明度、字体等
- **自动适应** 窗口尺寸变化
- **适用于** Vue、React、原生 JavaScript 项目

## 🚀 **安装**
使用 `npm` 安装：
```sh
npm install yang-watermark
```

## 📌 **使用方法**
### **1️⃣ 导入**
```javascript
import { Watermark } from "yang-watermark";
```

### **2️⃣ 创建水印**
```javascript
const watermark = new Watermark({
  text: "公司机密", // 水印文本
  width: 100, // 水印宽度
  height: 100, // 水印高度
  rowGap: 30, // 行间距
  colGap: 30, // 列间距
  rotate: 30, // 旋转角度（度）
  color: "rgba(0, 0, 0, 0.2)", // 颜色
  opacity: 0.5, // 透明度
  zIndex: 9999, // 层级
  container: document.getElementById("container"), // 目标容器
  fontSize: 16, // 字体大小
  fontFamily: "Arial", // 字体
});
```

### **3️⃣ 动态更新水印**
```javascript
watermark.updateText("新水印内容");
```

### **4️⃣ 移除水印**
```javascript
watermark.removeWatermark();
```

---

## ⚙️ **API 说明**
### **🔹 `new Watermark(options: WatermarkOptions)`**
创建水印实例，支持以下配置：

| **参数**      | **类型**       | **默认值**   | **说明** |
|--------------|--------------|------------|---------|
| `text`       | `string`     | `"水印"`     | 水印文本 |
| `width`      | `number`     | `100`       | 水印区域宽度 |
| `height`     | `number`     | `100`       | 水印区域高度 |
| `rowGap`     | `number`     | `30`        | 行间距 |
| `colGap`     | `number`     | `30`        | 列间距 |
| `rotate`     | `number`     | `45`        | 旋转角度（度）|
| `color`      | `string`     | `"rgba(0, 0, 0, 0.3)"` | 颜色 |
| `opacity`    | `number`     | `0.5`       | 透明度（0-1）|
| `zIndex`     | `number`     | `9999`      | 水印的层级 |
| `container`  | `HTMLElement` | `document.body` | 目标容器 |
| `fontSize`   | `number`     | `20`        | 字体大小 |
| `fontFamily` | `string`     | `"Arial"`   | 字体 |

---

### **🔹 `updateText(newText: string)`**
更新水印文本。
```javascript
watermark.updateText("新的水印文本");
```

### **🔹 `removeWatermark()`**
移除水印。
```javascript
watermark.removeWatermark();
```

---

## 🖥️ **浏览器兼容性**
✅ Chrome  
✅ Firefox  
✅ Safari  
✅ Edge  

---

## 📜 **示例**
### **HTML**
```html
<div id="container" style="width: 500px; height: 300px; position: relative;">
  <!-- 水印将会添加到这个容器中 -->
</div>
```

### **JavaScript**
```javascript
import { Watermark } from "yang-watermark";

// 初始化水印
const watermark = new Watermark({
  text: "Demo 水印",
  container: document.getElementById("container"),
  rotate: 30,
  opacity: 0.3,
  zIndex: 1000,
});

// 3 秒后更新水印
setTimeout(() => {
  watermark.updateText("新水印内容");
}, 3000);

// 6 秒后移除水印
setTimeout(() => {
  watermark.removeWatermark();
}, 6000);
```

---

## 📌 **适用场景**
- **企业内部文档保护**
- **防止截图泄露**
- **在线文档水印**
- **后台管理系统**

🚀 **立即体验！** 安装并使用 `yang-watermark`，轻松为你的网页添加水印！