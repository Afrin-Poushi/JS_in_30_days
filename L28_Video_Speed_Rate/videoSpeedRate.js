/** declare variables */
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
const video = document.querySelector("video");

function convertRange(value, oldMin, oldMax, newMin, newMax) {
  var oldRange = oldMax - oldMin;
  var newRange = newMax - newMin;
  var newValue = ((value - oldMin) * newRange) / oldRange + newMin;
  return newValue;
}

function handleMouseMove(e) {
  yAxis = e.pageY - this.offsetTop;
  const percent = yAxis / this.offsetHeight;
  const barHeight = Math.round(percent * 100);

  /** convert the range to .5 to 2  */
  const convertedValue = convertRange(barHeight, 1, 100, 0.5, 2);
  //   console.log(percent, barHeight, convertedValue);
  speedBar.textContent = convertedValue.toFixed(2) + "x";

  speedBar.style.height = `${barHeight}%`;

  video.playbackRate = convertedValue;
}

speed.addEventListener("mousemove", handleMouseMove);
