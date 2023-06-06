/** get the elements */
// var videoPlayer = document.getElementById("videoPlayer");
const player = document.querySelector(".player");
const videoPlayer = document.querySelector(".video-div");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-bar");

const togglePlay = player.querySelector(".playPause");
const skipBtn = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".play-controls");

/** Building functions */
function showControls(e) {
  var videoControllers = document.querySelector(".controls");
  videoControllers.setAttribute("data-state", "visible");
}
function hideControls(e) {
  var videoControllers = document.querySelector(".controls");
  videoControllers.setAttribute("data-state", "hidden");
}

function playPause() {
  if (videoPlayer.paused || videoPlayer.ended) videoPlayer.play();
  else videoPlayer.pause();
  changeBtnState("playpause");
}

/**Skipping buttons */
function onSkip(e) {
  const value = this.dataset.skip;
  console.log("rate changed", value);
  videoPlayer.currentTime += parseFloat(value);
}
/**Volume and rate */
function handleRangeUpdate(e) {
  /**set video[playbackRate] = value */
  videoPlayer[this.name] = this.value;
}

/** Progress bar show */
function handleProgress(e) {
  const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100;
  console.log({ percent });
  progressBar.style.flexBasis = `${percent}%`;
}

/** Seek time on bar */
function seekTime(e) {
  const seekTime = (e.offsetX / progress.offsetWidth) * videoPlayer.duration;
  console.log({ seekTime });
  videoPlayer.currentTime = seekTime;
}

/** For changing icon of the buttons */
function changeBtnState(type) {
  if (type === "playpause") {
    // Play/Pause button
    if (videoPlayer.paused || videoPlayer.ended) {
      togglePlay.textContent = "Play";
      togglePlay.setAttribute("data-state", "play");
    } else {
      togglePlay.textContent = "Pause";
      togglePlay.setAttribute("data-state", "pause");
    }
  }
}

/*** Hookup Event listeners */
videoPlayer.addEventListener("click", playPause);
/**for handle progressbar each time update in video */
videoPlayer.addEventListener("timeupdate", handleProgress);
// videoPlayer.addEventListener("ratechange", onRateChange);
/** hovering over video will show controls  */
player.addEventListener("mouseover", showControls);
player.addEventListener("mouseout", hideControls);

progress.addEventListener("click", seekTime);

togglePlay.addEventListener("click", playPause);

skipBtn.forEach((btn) => btn.addEventListener("click", onSkip));

ranges.forEach((range) => range.addEventListener("click", handleRangeUpdate));
