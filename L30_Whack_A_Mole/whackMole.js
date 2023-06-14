/**declare variables */
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");
const startBtn = document.querySelector(".start-btn");

let lastHole; //to keep the randomness of hole
let score = 0;
let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  let index = Math.floor(Math.random() * holes.length);
  let selectedHole = holes[index];
  if (selectedHole == lastHole) {
    /**Duplicate hole same as last time */
    return randomHole(holes);
  }
  lastHole = selectedHole;
  return selectedHole;
}

function peek() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  /**after the random time mole will go down */
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peek();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  /**starting the game */
  peek();
  /**game will timeup after 10 seconds */
  setTimeout(() => {
    timeUp = true;
  }, 10000);
}

function getScored(e) {
  /** isTrusted gets false if js is edited on client side or fake a click*/
  if (!e.isTrusted) return;
  console.count("You get a score");
  score = parseInt(scoreBoard.textContent);
  score++;
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = score;
}

startBtn.addEventListener("click", startGame);
moles.forEach((mole) => {
  mole.addEventListener("click", getScored);
});
