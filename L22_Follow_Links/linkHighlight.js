/**Declare all variables */
const content = document.querySelector(".content");
const links = document.querySelectorAll("a");

const highlightSpan = document.createElement("span");
highlightSpan.className = "highlightSpan";

// add a dom as first child of element
content.prepend(highlightSpan);

// document.body.appendChild(highlightSpan);

/**Building functions */
function highlightLink(e) {
  const linkPosition = this.getBoundingClientRect();
  console.log(linkPosition);

  highlightSpan.style.width = `${linkPosition.width}px`;
  highlightSpan.style.height = `${linkPosition.height}px`;
  highlightSpan.style.transform = `translate(${
    linkPosition.left + window.scrollX
  }px, ${linkPosition.top + window.scrollY}px)`;
}

/**hook up all event listener */
links.forEach((a) => {
  a.addEventListener("mouseenter", highlightLink);
});
