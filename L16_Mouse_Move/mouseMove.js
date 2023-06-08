/** Declare all variables */
const showText = document.querySelector(".textShowed");
const text = showText.querySelector("h1");
const position = 100; //100px

/** build all functions  */
function shadow(e) {
  console.log(e);
  //ES6 desturcturing
  const { offsetWidth: width, offsetHeight: height } = showText;
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  /** if 100 is the walk then 50 is maximum and -50 is the lowest */
  const xPosition = Math.round((x / width) * position - position / 2);
  const yPosition = Math.round((y / height) * position - position / 2);

  text.style.textShadow = `${xPosition}px ${yPosition}px 0 beige,
  ${xPosition * -1}px ${yPosition}px 0 cadetblue,
  ${xPosition}px ${yPosition * -1}px 0 aquamarine,
  ${xPosition * -1}px ${yPosition * -1}px 0 green
  `;
}

/** hook up all event listener */
document.addEventListener("mousemove", shadow);
