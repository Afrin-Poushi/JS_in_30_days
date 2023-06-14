/** declare variables */
const allDivs = document.querySelectorAll("div");

function logText(e) {
  /** First capture the event going from top to bottom */
  console.log(this.classList.value);
  e.stopPropagation(); // this will stop bubbling
  /**if click on three will show three two one
   * this is called Bubbling which go upward to the root
   */
}

allDivs.forEach((eachDiv) => {
  eachDiv.addEventListener("click", logText);

  /** capture true will start from the top
   * so it will show one two three
   * by default it is false
   */
  eachDiv.addEventListener("click", logText, { capture: true });
  /**Once - unbind the eventListener from the div so it will just run once */
  eachDiv.addEventListener("click", logText, { capture: true, once: true });
});
