let pressedKeys = [];
const secretCode = "anime";

window.addEventListener("keyup", (e) => {
  pressedKeys.push(e.key);
  /** this will splice upto the length of the secretCode from backwards (so -)  */
  pressedKeys.splice(
    -secretCode.length - 1,
    pressedKeys.length - secretCode.length
  );

  if (pressedKeys.join("").includes(secretCode)) {
    console.log("Koninchiwa");
    cornify_add();
  }
  console.log(pressedKeys);
});
