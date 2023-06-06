/** get the video div */
// var videoPlayer = document.getElementById("videoPlayer");
var videoPlayer = document.querySelector(".video-div");
var player = document.querySelector(".player");

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
}

function onRateChange(e) {
  console.log("rate changed", e);
}

function checkVol(e) {
  const symbol = e.target.dataset.state;
  /** As the max vol is 1 and min is 0 so making it to round number 0-1 */
  const currentVol = Math.floor(videoPlayer.volume * 10) / 10;
  console.log({ currentVol });

  if (symbol === "volup" && currentVol < 1) videoPlayer.volume += 0.1;
  else if (symbol === "voldown" && currentVol > 0) videoPlayer.volume -= 0.1;

  videoPlayer.muted = currentVol <= 0;
}

/** For changing icon of the buttons */
function changeBtnState(type) {
  if (type === "playpause") {
    // Play/Pause button
    if (videoPlayer.paused || videoPlayer.ended) {
      playPauseBtn.setAttribute("data-state", "play");
    } else {
      playPauseBtn.setAttribute("data-state", "pause");
      console.log({ playPauseBtn });
    }
  } else if (type == "mute") {
    mute.setAttribute("data-state", videoPlayer.muted ? "unmute" : "mute");
  }
}

videoPlayer.addEventListener("ratechange", onRateChange);
/** hovering over video will show controls  */
player.addEventListener("mouseover", showControls);
player.addEventListener("mouseout", hideControls);

const playPauseBtn = document.querySelector(".playPause");
playPauseBtn.addEventListener("click", playPause, changeBtnState("playpause"));

const mute = document.querySelector(".mute");
mute.addEventListener("click", (e) => {
  videoPlayer.muted = !videoPlayer.muted;
  changeBtnState("mute");
});

// videoPlayer.addEventListener("volumechange", checkVol);
const volUp = document.querySelector(".volInc");
volUp.addEventListener("click", checkVol);

const volDown = document.querySelector(".volDec");
volDown.addEventListener("click", checkVol);

/** Progress Bar */
const progress = document.querySelector(".progress");
progress.addEventListener("click", (e) => {
  console.log(e);
  /** pageX gives the point of click,
   * then minus how much the progress bar is left from the margin(offsetleft)
   * then minus the full player div
   * */
  const pos =
    (e.pageX -
      progress.offsetLeft -
      progress.parentElement.offsetParent.offsetLeft) /
    progress.offsetWidth;
  videoPlayer.currentTime = pos * videoPlayer.duration; //pos is 0 to 1
  /** set the position value in progress bar tag */
  const progressBar = progress.children.item(0);
  progressBar.value = pos;
});
