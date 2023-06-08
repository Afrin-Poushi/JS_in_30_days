/** Given array */
const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function trimArticle(bandName) {
  let regex = new RegExp("^(a |the |an )", "i");
  return bandName.replace(regex, "").trim();
}

// Sort the names
const sorted = bands.sort(function (first, second) {
  console.log(trimArticle(first));
  return trimArticle(first) > trimArticle(second) ? 1 : -1;
});
console.table(sorted);

const showBands = document.getElementById("bands");

showBands.innerHTML = sorted
  .map((band) => {
    return `<li>${band}</li>`;
  })
  .join("");
