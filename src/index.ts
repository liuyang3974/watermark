export interface WatermarkOptions {
  text?: string;
  rowGap?: number;
  colGap?: number;
  rotate?: number;
  color?: string;
  opacity?: number;
  zIndex?: number;
  container?: HTMLElement;
  fontSize?: number;
  fontFamily?: string;
  updateInterval?: number;
  width?: number;
  height?: number;
}

export class Watermark {
  private options: WatermarkOptions;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private $el: HTMLDivElement | null;

  constructor(options: WatermarkOptions = {}) {
    const defaultOptions: WatermarkOptions = {
      text: "水印",
      rowGap: 30,
      colGap: 30,
      rotate: 45,
      color: "rgba(0, 0, 0, 0.3)",
      opacity: 0.5,
      zIndex: 9999,
      container: document.body,
      fontSize: 20,
      fontFamily: "Arial",
      updateInterval: 1000,
      width: 100,
      height: 100,
    };
    this.options = { ...defaultOptions, ...options };
    
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d")!;
    this.$el = null;
    this.updateWatermark();
    
    window.addEventListener("resize", this.updateWatermark.bind(this));
  }

  private updateWatermark(): void {
    const options = this.options;
    this.canvas.width = options.width!;
    this.canvas.height = options.height!;
    
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.context.rotate((Math.PI / 180) * options.rotate!);
    this.context.translate(-this.canvas.width / 2, -this.canvas.height / 2);
    
    this.context.font = `${options.fontSize}px ${options.fontFamily}`;
    this.context.fillStyle = options.color!;
    const textWidth = this.context.measureText(options.text!).width;
    const textX = (this.canvas.width - textWidth) / 2;
    const textY = (this.canvas.height + options.fontSize!) / 2;
    this.context.fillText(options.text!, textX, textY);
    
    const parentNode = options.container!.parentNode as HTMLElement;
    if (!parentNode.querySelector(".watermark-overlay")) {
      parentNode.style.position = "relative";
      this.$el = document.createElement("div");
      this.$el.classList.add("watermark-overlay");
      this.$el.style.pointerEvents = "none";
      this.$el.style.top = "0";
      this.$el.style.left = "0";
      this.$el.style.position = "absolute";
      this.$el.style.zIndex = `${options.zIndex}`;
      this.$el.style.width = "100%";
      this.$el.style.height = "100%";
      this.$el.style.opacity = `${options.opacity}`;
      this.$el.style.background = `url(${this.canvas.toDataURL("image/png")}) left top repeat`;
      parentNode.appendChild(this.$el);
    } else {
      this.$el!.style.background = `url(${this.canvas.toDataURL("image/png")}) left top repeat`;
    }
  }

  public updateText(newText: string): void {
    this.options.text = newText;
    this.updateWatermark();
  }

  public removeWatermark(): void {
    const parentNode = this.options.container!.parentNode as HTMLElement;
    const watermarkEl = parentNode.querySelector(".watermark-overlay");
    if (watermarkEl) {
      watermarkEl.remove();
    }
    window.removeEventListener("resize", this.updateWatermark.bind(this));
  }
}
