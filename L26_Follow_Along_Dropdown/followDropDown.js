const triggers = document.querySelectorAll(".topbar > li");
const bg = document.querySelector(".dropDownBg");
const nav = document.querySelector(".navBar");

function handleMouseEnter(e) {
  this.classList.add("trigger-enter");

  /** To show the animation do it in 2 parts
   * first display then make opacity 1 after timeout
   */
  setTimeout(() => {
    this.classList.add("trigger-active");
  }, 200);

  /** show the dropdown background */
  bg.classList.add("open");
  const activeDropdown = this.querySelector(".dropdown");

  const getDropdownCoords = activeDropdown.getBoundingClientRect();
  const getNavCoords = nav.getBoundingClientRect();

  const coords = {
    height: getDropdownCoords.height,
    width: getDropdownCoords.width,
    top: getDropdownCoords.top - getNavCoords.top,
    left: getDropdownCoords.left - getNavCoords.left,
  };

  bg.style.height = `${coords.height}px`;
  bg.style.width = `${coords.width}px`;
  bg.style.transform = `translate( ${coords.left}px,${coords.top}px)`;
}

function handleMouseLeave(e) {
  this.classList.remove("trigger-enter", "trigger-active");

  bg.classList.remove("open");
  bg.style.setProperty("width", "0px");
  bg.style.setProperty("height", "0px");
}

triggers.forEach((trigger) => {
  trigger.addEventListener("mouseenter", handleMouseEnter);

  trigger.addEventListener("mouseleave", handleMouseLeave);
});
