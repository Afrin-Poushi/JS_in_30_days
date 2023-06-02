/** get each of the boxs as nodelist */
const panelBoxs = document.querySelectorAll(".item");
// console.log(panelBoxs);

/** iterate over each of the box */
panelBoxs.forEach((panelBox) => {
  /** when mouse is hovering over that box */
  panelBox.addEventListener("mouseenter", function () {
    panelBox.classList.add("hoverOn");
    /** get box order value to select that box text classes */
    panelOrder = this.dataset.order;

    panelText = document.querySelectorAll(`span[data-text="${panelOrder}"]`);
    panelText.forEach((text) => text.classList.add("growText"));

    console.log("Start hovered over");
  });

  panelBox.addEventListener("mouseleave", function () {
    /** remove all the applied classes */
    panelBox.classList.remove("hoverOn");
    panelOrder = this.dataset.order;

    panelText = document.querySelectorAll(`span[data-text="${panelOrder}"]`);
    panelText.forEach((text) => text.classList.remove("growText"));

    console.log("End Hover over");
  });
});
