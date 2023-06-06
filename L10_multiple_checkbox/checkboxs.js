const checkboxs = document.querySelectorAll(".item");

let items = [];
let shiftKeyPressed = false;
let lastCheckedBox = null;

items.push(...checkboxs);

function handleCheckboxChange(item, e) {
  const box = e.target;
  // let inBetween = false;
  // console.log(this.checked);

  // if (shiftKeyPressed === true && this.checked) {
  //   checkboxs.forEach((checkbox) => {
  //     if (checkbox === this || checkbox === lastCheckedBox) {
  //       inBetween = !inBetween;
  //       console.log("started to check in between");
  //     }

  //     if (inBetween) checkbox.checked = true;
  //   });

  if (shiftKeyPressed) {
    const allBoxs = Array.from(
      item.parentNode.querySelectorAll("input[type='checkbox']")
    );
    const currentIndex = allBoxs.indexOf(box);

    console.dir({ currentIndex });

    const lastIndex = allBoxs.lastIndexOf(lastCheckedBox);

    const [start, end] =
      currentIndex > lastIndex
        ? [lastIndex, currentIndex]
        : [currentIndex, lastIndex];

    allBoxs.slice(start, end + 1).forEach((checkbox) => {
      checkbox.checked = true;

      // const parentDiv = checkbox.parentElement;
      // const text = parentDiv.querySelector("p");
      // text.classList.add("itemChecked");
    });
  }
  lastCheckedBox = box;

  // const text = item.querySelector("p");
  // const isChecked = box.checked;
  // isChecked
  //   ? text.classList.add("itemChecked")
  //   : text.classList.remove("itemChecked");
}

items.forEach((item) =>
  item.addEventListener("change", (event) => handleCheckboxChange(item, event))
);

document.addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    console.log(event.shiftKey);
    shiftKeyPressed = true;
  }
});

document.addEventListener("keyup", (event) => {
  if (!event.shiftKey) {
    console.log(event.shiftKey);
    shiftKeyPressed = false;
  }
});
