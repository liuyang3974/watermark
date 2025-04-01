理解了，你需要一个更容易复制的版本。以下是简化和格式化的 README 文档，适合复制和粘贴：

```markdown
# Watermark

`Watermark` 是一个简单的 JavaScript 水印生成器，允许在网页上为指定容器添加可自定义的水印，支持动态更新文本内容、旋转、颜色、透明度等属性。

## 安装

通过 npm 安装：

```bash
npm install watermark-js
```

## 使用

### 导入

```javascript
import Watermark from 'watermark-js';
```

### 初始化

要使用 `Watermark`，你只需提供一个配置对象并调用构造函数。默认情况下，水印会添加到 `document.body` 中，你也可以指定其他容器。

#### 示例

```javascript
// 创建水印实例
const watermark = new Watermark({
  text: "这是水印",          // 水印文本内容
  rowGap: 30,               // 行间距（水平间距）
  colGap: 30,               // 列间距（垂直间距）
  rotate: 45,               // 旋转角度（单位：度）
  color: "rgba(0, 0, 0, 0.3)", // 水印颜色
  opacity: 0.5,             // 水印透明度（0到1之间）
  zIndex: 9999,             // 水印的层级
  container: document.getElementById("container"),  // 容器（默认为 body）
  fontSize: 20,             // 字体大小
  fontFamily: "Arial",      // 字体
});
```

### 动态更新水印

你可以使用 `updateText()` 方法动态更新水印文本内容：

```javascript
watermark.updateText("新的水印文本");
```

### 移除水印

使用 `removeWatermark()` 方法可以移除水印：

```javascript
watermark.removeWatermark();
```

### 响应式支持

水印会自动适应容器的大小变化。你可以通过调整窗口或容器的大小，水印会随之更新。

## API

### `constructor(options: Object)`

创建水印实例。以下是可配置的选项：

- **`text`** (`string`): 水印文本，默认为 `"水印"`。
- **`rowGap`** (`number`): 水平间距，默认为 `30`。
- **`colGap`** (`number`): 垂直间距，默认为 `30`。
- **`rotate`** (`number`): 水印旋转角度，默认为 `45`（单位：度）。
- **`color`** (`string`): 水印颜色，默认为 `"rgba(0, 0, 0, 0.3)"`。
- **`opacity`** (`number`): 水印透明度，默认为 `0.5`。
- **`zIndex`** (`number`): 水印的层级，默认为 `9999`。
- **`container`** (`HTMLElement`): 指定容器元素，默认为 `document.body`。
- **`fontSize`** (`number`): 水印字体大小，默认为 `20`。
- **`fontFamily`** (`string`): 水印字体，默认为 `"Arial"`。

### `updateText(newText: string)`

动态更新水印的文本内容。

- **`newText`** (`string`): 新的水印文本。

### `removeWatermark()`

移除水印。

### 响应式更新

水印会根据容器大小和窗口大小自动进行更新。容器尺寸变化时，水印会重新计算并适配。

## 示例

```html
<div id="container" style="width: 500px; height: 300px; position: relative;">
  <!-- 水印将会添加到这个容器中 -->
</div>

<script>
  import Watermark from 'watermark-js';

  // 创建水印
  const watermark = new Watermark({
    text: "Demo 水印",
    container: document.getElementById("container"),
    rotate: 30,
    opacity: 0.3,
    zIndex: 1000,
  });

  // 动态更新水印内容
  setTimeout(() => {
    watermark.updateText("新水印内容");
  }, 3000);

  // 移除水印
  setTimeout(() => {
    watermark.removeWatermark();
  }, 6000);
</script>
```

## 支持的浏览器

- Chrome
- Firefox
- Safari
- Edge

## 贡献

欢迎提交 PR 或 Issues 来改进该项目。请确保在修改代码时，能够通过所有测试。

## License

MIT License. See the [LICENSE](LICENSE) file for details.
```

---

这个格式化后的 README 文档应该更易于复制和使用。你可以直接将其粘贴到你的 `README.md` 文件中。如果有任何需要修改的部分，随时告诉我！