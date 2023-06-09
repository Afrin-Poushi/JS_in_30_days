/** variables declaration */
const showResult = document.querySelector(".showResult");
const mic = document.querySelector(".mic");
const lang = document.querySelector(".lang");
var langDictionary = {
  Bangla: "bn-BD",
  Hindi: "hi-IN",
  Japanese: "ja-JP",
  Korean: "ko-KR",
  English: "en-US",
};

let p = document.createElement("p");
showResult.appendChild(p);

/**both prefixed properties & unprefixed versions for supporting in future */
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

/**define a speech recognition instance to control the recognition
 *  using the SpeechRecognition() constructor
 */
const recognition = new SpeechRecognition();
/**recognition system should return interim results, or just final results */
recognition.interimResults = true;

//set language
// recognition.lang = "en-US";
/**Controls whether continuous results are captured (true) */
// recognition.continuous = true;

// recognition.onResult = (event) => {
//   console.log({ event });
// };

function startRecognition(end) {
  recognition.start();
}
function changeLang(e) {
  let selectedLang = lang.options[lang.selectedIndex].text;
  if (selectedLang === "Choose Language (Eng)") selectedLang = "English";
  recognition.lang = `${langDictionary[selectedLang]}`;
}

/**hook up events */
mic.addEventListener("click", startRecognition);
lang.addEventListener("change", changeLang);

/**recognition.results property returns a SpeechRecognitionResultList object
 * containing Result objects. It has a getter so it can be accessed like array
 * so first [0] returns SpeechRecognitionResult at position 0.
 * Each RecognitionResult object contains SpeechRecognitionAlternative objects
 *  that contain individual recognized words. the second [0] returns
 * the SpeechRecognitionAlternative at position 0. */
recognition.addEventListener("result", (e) => {
  console.log(e);
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  console.log(transcript);
  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    showResult.appendChild(p);
  }
});

recognition.addEventListener("end", recognition.start);

console.log(recognition);
