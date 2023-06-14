/**declare variables */
const timeLeft = document.querySelector(".display-timeLeft");
const timeEnd = document.querySelector(".display-timeEnd");
const buttons = document.querySelectorAll("[data-time]");
let countdown;

function timer(seconds) {
  /** Clear any existing countdown */
  clearInterval(countdown);
  const now = Date.now();
  const endTime = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayTimeEnd(endTime);

  countdown = setInterval(() => {
    const secsLeft = Math.round((endTime - Date.now()) / 1000);
    /**clearInterval() method cancels a timed, repeating action which
     *  was previously established by a call to setInterval()
     * clearInterval(intervalID) -> This ID was returned by
     * the corresponding call to setInterval() */
    if (secsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    /** Display time */
    displayTimeLeft(secsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const remainedHours = Math.floor(seconds / 3600);
  let remainedSecs = seconds % 3600;
  const remainedMins = Math.floor(remainedSecs / 60);
  remainedSecs = remainedSecs % 60;
  const displayTime = `${remainedHours < 1 ? "" : remainedHours + ":"}${
    remainedMins < 10 ? "0" : ""
  }${remainedMins}:${remainedSecs < 10 ? "0" : ""}${remainedSecs}`;
  timeLeft.textContent = displayTime;

  /** Show on title the remaining time*/
  document.title = displayTime;
  /** Change Background color on each seconds -> get the hex value from time */
  document.body.style.backgroundColor = `#${remainedHours}${remainedMins}${remainedSecs}`;
}

function displayTimeEnd(timestamp) {
  const endAt = new Date(timestamp);
  const hour = endAt.getHours();
  var localHour = hour;
  if (hour > 12 || hour == 0) {
    if (hour == 0) localHour = 12;
    else localHour = hour - 12;

    // const localHour = hour > 12 ? (hour - 12 === 0 ? 12 : hour - 12) : hour;
  }
  const abbreviate = hour > 12 ? "PM" : "AM";
  const min = endAt.getMinutes();
  const sec = endAt.getSeconds();
  timeEnd.textContent = `Be Back At ${localHour}:${min < 10 ? "0" : ""}${min}${
    sec < 10 ? ":0" : ":"
  }${sec}${abbreviate}`;
}

function startTimer(e) {
  const inputSecs = parseInt(this.dataset.time);
  timer(inputSecs);
}

function takeMinsInput(e) {
  e.preventDefault();
  const minutes = parseInt(this.mins.value);

  timer(minutes * 60);
  this.reset();
}

/**Hook up the event listener */
buttons.forEach((btn) => btn.addEventListener("click", startTimer));
/** if any element has name in it it can be called from document */
document.customTime.addEventListener("submit", takeMinsInput);
