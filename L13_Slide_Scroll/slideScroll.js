/** declare all variables */
const allImages = document.querySelectorAll(".slide-in");

/** Build all funtions */
function checkSliding(e) {
  allImages.forEach((img) => {
    /**scrollY get scroll value from top so to get bottom add height
     * then so show image halfway divide by 2 img height
     */
    const slideInPage = window.scrollY + window.innerHeight - img.height / 2;

    /**offsetTop how far img top is from the top of screen window */
    const imgBottom = img.offsetTop + img.height;

    const isImgPassed = window.scrollY > imgBottom;
    const isHalfShow = slideInPage > img.offsetTop;

    if (isHalfShow && !isImgPassed) img.classList.add("active");
    else img.classList.remove("active");
  });
}

/**debounce function makes sure that the passed function is
 * only triggered once per specified timeout,
 * immediate flag for leading edge(true) or trailing edge(false)*/
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    /** later function that will be invoked
     * after the debounce time has passed */
    var later = function () {
      timeout = null;
      /** leading edge call */
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/** Hook up all event listener */

/** As this scroll func will run many times so useing Debounce */
window.addEventListener("scroll", debounce(checkSliding));
