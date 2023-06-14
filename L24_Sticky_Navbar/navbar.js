/**declare variables */
const navbar = document.querySelector(".navbar");

const topOfnav = navbar.offsetTop;

/** building functions */
function stickNav(e) {
  if (window.scrollY >= topOfnav) {
    /**when a div gets fixed it float on the page
     * so other divs take it's space  */
    document.body.style.paddingTop = navbar.offsetHeight + "px";
    navbar.classList.add("stickyNav");
  } else {
    document.body.style.paddingTop = 0;
    navbar.classList.remove("stickyNav");
  }
}

/**hook up event listener */
window.addEventListener("scroll", stickNav);
