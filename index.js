export class Watermark {
  constructor(options) {
    const defaultOptions = {
      text: "水印",
      rowGap: 30,
      colGap: 30,
      rotate: 45,
      color: "rgba(0, 0, 0, 0.3)",
      opacity: 0.5,
      zIndex: 9999,
      container: document.body,
      fontSize: 20, // 可配置字体大小
      fontFamily: "Arial", // 字体可配置
      updateInterval: 1000 // 设置更新频率（毫秒）
    };
    this.options = { ...defaultOptions, ...options };
    
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.$el = null;
    this.timeoutId = null;
    this.updateWatermark();
    
    // 监听容器的resize事件，实时更新水印
    window.addEventListener("resize", this.updateWatermark.bind(this));
  }

  updateWatermark() {
    const options = this.options;
    const textWidth = this.context.measureText(options.text).width;
    const textHeight = options.fontSize; // 假设文本的高度等于字体大小
    
    // 根据旋转角度调整canvas大小
    const canvasWidth = textWidth + options.rowGap;
    const canvasHeight = textHeight + options.colGap;
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    
    // 旋转canvas
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // 清除上次绘制
    this.context.translate(canvasWidth / 2, canvasHeight / 2); 
    this.context.rotate((Math.PI / 180) * options.rotate); 
    this.context.translate(-canvasWidth / 2, -canvasHeight / 2);
    
    // 设置文本样式并绘制
    this.context.font = `${options.fontSize}px ${options.fontFamily}`;
    this.context.fillStyle = options.color;
    this.context.fillText(options.text, 10, options.fontSize);

    // 获取父容器并添加水印
    const parentNode = options.container.parentNode;
    if (!parentNode.querySelector(".watermark-overlay")) {
      parentNode.style.position = "relative";
      this.$el = document.createElement("div");
      this.$el.classList.add("watermark-overlay");
      this.$el.style.pointerEvents = "none";
      this.$el.style.top = "0";
      this.$el.style.left = "0";
      this.$el.style.position = "absolute";
      this.$el.style.zIndex = options.zIndex;
      this.$el.style.width = "100%";
      this.$el.style.height = "100%";
      this.$el.style.opacity = options.opacity;
      this.$el.style.background = `url(${this.canvas.toDataURL("image/png")}) left top repeat`;
      parentNode.appendChild(this.$el);
    } else {
      // 更新已有水印
      this.$el.style.background = `url(${this.canvas.toDataURL("image/png")}) left top repeat`;
    }
  }

  // 动态更新水印内容
  updateText(newText) {
    this.options.text = newText;
    this.updateWatermark();
  }

  // 清除水印
  removeWatermark() {
    const parentNode = this.options.container.parentNode;
    const watermarkEl = parentNode.querySelector(".watermark-overlay");
    if (watermarkEl) {
      watermarkEl.remove();
    }
    window.removeEventListener("resize", this.updateWatermark.bind(this));
  }
}
