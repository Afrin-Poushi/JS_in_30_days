/**Declare variables */
const synthesis = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

const voices = [];

/**Building Functions */
function getVoiceList(e) {
  const voices = synthesis.getVoices();

  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
}

/**use this element's data-name attribute,
 * finding the SpeechSynthesisVoice object
 * whose name matches this attribute's value */
function handleTextSubmit(e) {
  e.preventDefault();
  console.log(inputTxt.value);

  const sayText = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption = voiceSelect.options[voiceSelect.selectedIndex];
  const selectedVoice = selectedOption.dataset.name;

  voices.forEach((voice) => {
    if (voice.name == selectedVoice) sayText.voice = voice;
  });

  sayText.pitch = pitch.value;
  sayText.rate = rate.value;
  synthesis.speak(sayText);
}

/**Older browser don't support the voiceschanged event,
 * just return a list of voices when SpeechSynthesis.getVoices() is fired.
 * In Chrome, have to wait for the event to fire before populating the list.
 * To allow for both cases- */
getVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = getVoiceList;
}

inputForm.addEventListener("submit", handleTextSubmit);

pitch.onchange = () => {
  pitchValue.textContent = pitch.value;
};

rate.onchange = () => {
  rateValue.textContent = rate.value;
};
