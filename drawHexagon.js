const canvasCtx = getCanvas2dContextSomehow();

const cos = Math.cos(60 * Math.PI / 180),
	sin = Math.sin(60 * Math.PI / 180);
  
function drawHexagon(x, y, scale) {
	canvasCtx.beginPath();
	canvasCtx.moveTo(x, y - scale);
	canvasCtx.lineTo(x + sin * scale, x - cos * scale);
	canvasCtx.lineTo(x + sin * scale, x + cos * scale);
	canvasCtx.lineTo(x, y + scale);
	canvasCtx.lineTo(x - sin * scale, x + cos * scale);
	canvasCtx.lineTo(x - sin * scale, x - cos * scale);
	canvasCtx.closePath();
	canvasCtx.fill();
}
