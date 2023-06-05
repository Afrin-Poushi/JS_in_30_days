// const canvas = document.querySelector("#draw");
canvas = document.getElementById("draw");

console.log(canvas);
/*context is the thing onto which the drawing will be rendered*/
const ctx = canvas.getContext("2d");
/**The actual drawing is done using the CanvasRenderingContext2D interface */
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = "green";
// /** Canvas only directly supports the rectangle shape */
// /** X, Y, Height, Width */
// ctx.fillRect(10, 20, 150, 100);

/**lineJoin determines the shape used to join two line segments where they meet.
 * lineCap  determines the shape used to draw the end points of lines.
 */
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.strokeStyle = "#8776e8";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true; // direction length go up

function drawing(e) {
  /** Only works when mouse is down */
  if (!isDrawing) return;
  console.log(e);

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  //   ctx.lineWidth = 10;
  ctx.beginPath();
  //Starting coordinate
  ctx.moveTo(lastX, lastY);
  //Ending coordinate
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) direction = !direction;
  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

/** Click drag and draw */
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue = 0;
});

/** HSL - Hue means from red to red
 * saturation - how bright it is
 * lightness
 */

canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
/** MouseOut will stop drawing if mouse is out of window */
canvas.addEventListener("mouseout", () => (isDrawing = false));
