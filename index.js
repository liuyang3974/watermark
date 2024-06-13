export class Watermark {
  constructor(options) {
    /**@type {HTMLCanvasElement} */
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    
    canvas.width = context.measureText(options.text).width + options.rowGap;
    canvas.height = context.measureText(options.text).width + options.colGap;

    context.rotate((Math.PI / 180) * options.rotate || 45);
    context.fillStyle = options.color || "black";
    context.fillText(options.text, 10, 10);

    const parentNode = options.container.parentNode;
    parentNode.style.position = "relative";

    const $el = document.createElement("div");
    $el.style.pointerEvents = "none";
    $el.style.top = "0";
    $el.style.position = "absolute";
    $el.style.zIndex = options.zIndex;
    $el.style.width = "100%";
    $el.style.height = "100%";
    $el.style.opacity = options.opacity;

    $el.style.background =
      "url(" + canvas.toDataURL("image/png") + ") left top repeat";
    parentNode.appendChild($el);
  }
}
