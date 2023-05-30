// function for playing audio
function playSound(e) {
  // console.log(e);
  const dataKey = `data-key="${e.keyCode}"`; //getting the ascii code from keyboard
  audio = document.querySelector(`audio[${dataKey}]`);
  // console.log(audio);

  if (!audio) return; // stop playing all audio together
  audio.currentTime = 0; //rewind the audio from start
  audio.play();

  // add listenerevent for keys
  const key = document.querySelector(`.key[${dataKey}]`);
  // console.log(key);
  // add effects on pressing key
  if (key) key.classList.add("playing");
}
function removeEffect(e) {
  this.classList.remove("playing");
}

// remove effects on each keys
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeEffect);
});

// add audio on keydown
window.addEventListener("keydown", playSound);
