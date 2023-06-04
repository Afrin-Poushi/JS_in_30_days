const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

/*** fetch.then() will return blob(any data) and this is raw data
 * which should be convert into JSON
 */
const result = fetch(endpoint).then((fetchResult) => {
  fetchResult.json().then((data) => {
    /** If this data is pushed directly into cities, this will become array of array (length 1)
     * to get individual array spread the data
     */
    cities.push(...data);
    // Or write  cities = Array.from(data);
  });
});

function searchCities(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    // console.log(place.city.match(regex) || place.state.match(regex));
    return place.city.match(regex) || place.state.match(regex);
  });
}
const showResult = document.querySelector(".showResult");

function displayCities(userInput) {
  /**Clear previous List */
  showResult.innerHTML = "";
  /** get matched item in the array */
  matchedCities = searchCities(this.value, cities);
  //   console.log(...matchedCities);

  /** When there is no input or erased the input value */
  if (this.value.trim() === "") {
    showResult.innerHTML = "type city or state name";
  } else {
    matchedCities.forEach((place) => {
      const list = document.createElement("li");
      list.classList.add("places");
      list.textContent = `${place.city}, ${place.state} ${place.population}`;
      showResult.appendChild(list);
    });

    const html = matchedCities.map((place) => {
      return `
      <li><span class="name">${place.city}, ${place.state} </span></li>
      `;
    });
  }
}

const inputField = document.querySelector(".inputField");
/** every time write a value and put the cursor out of input*/
inputField.addEventListener("change", displayCities);
/** gets each value with the same writing time (keyboard key up)*/
inputField.addEventListener("keyup", displayCities);

// setTimeout(() => {
//   console.table(cities);
// }, 2000);
// console.log(cities);
