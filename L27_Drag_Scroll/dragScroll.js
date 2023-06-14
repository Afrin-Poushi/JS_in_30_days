const items = document.querySelector(".items");
const item = document.querySelectorAll(".item");
let isMouseDown = false;
let startX = 0;
let scrollLeft;

/**Function build */
function handleMouseDown(e) {
  isMouseDown = true;
  items.classList.add("active");

  /**Starting of slider-> where user clicks, minus if there exists any margin */
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
  console.log(startX);
}
function handleMouseLeave(e) {
  isMouseDown = false;
  items.classList.remove("active");
}
function handleMouseMove(e) {
  if (!isMouseDown) return; //do not run when mousekey is not down
  e.preventDefault();

  /**recalculate x */
  const xAxis = e.pageX - items.offsetLeft;
  const movedPosition = xAxis - startX;
  items.scrollLeft = scrollLeft - movedPosition;
}
function handleMouseUp(e) {
  isMouseDown = false;
  items.classList.remove("active");
}

items.addEventListener("mousedown", handleMouseDown);
items.addEventListener("mouseleave", handleMouseLeave);
items.addEventListener("mousemove", handleMouseMove);
items.addEventListener("mouseup", handleMouseUp);
