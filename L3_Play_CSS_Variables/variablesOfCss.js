function handleUpdate(e) {
  /** get the size measure from input px from 10px or empty string*/
  suffixValue = this.dataset.size || "";
  changeControl = this.name;
  /**  this is used to dynamically set or modify CSS custom properties */
  document.documentElement.style.setProperty(
    `--${changeControl}`,
    this.value + suffixValue
  );
}

const inputs = document.querySelectorAll(".controls input");

console.log(inputs);
/** take all input fleids as NodeList and iterate over it */
inputs.forEach((input) => {
  console.log(input);
  /**this will trigger whenever the input value is changed */
  input.addEventListener("change", handleUpdate);
  /** this will triger on mouse movement over input */
  input.addEventListener("mousemove", handleUpdate);
});
