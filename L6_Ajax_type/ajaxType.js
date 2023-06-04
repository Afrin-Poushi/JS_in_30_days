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

function displayMatches(e) {
  /**Clear previous List */
  showResult.innerHTML = "";
  const userInput = this.value;
  /** get matched item in the array */
  matchedCities = searchCities(userInput, cities);
  //   console.log(...matchedCities);

  /** When there is no input or erased the input value */
  if (userInput.trim() === "") {
    showResult.innerHTML = "";
  } else {
    matchedCities.forEach((place) => {
      const cityName = place.city;
      const stateName = place.state;

      /**$1 is the first group from your regular expression,
       * $2 is the second, Groups are defined by brackets */
      // Highlight matching part in city name, g means global, i means case insensitive
      const highlightedCity = cityName.replace(
        new RegExp(`(${userInput})`, "gi"),
        `<span class='highlight'>$1</span>`
      );

      // Highlight matching part in state name
      const highlightedState = stateName.replace(
        new RegExp(`(${userInput})`, "gi"),
        "<span class='highlight'>$1</span>"
      );

      const list = document.createElement("li");
      list.classList.add("places");
      list.innerHTML = `${highlightedCity}, ${highlightedState} `;
      const span = document.createElement("span");
      span.classList.add("population");
      span.textContent = place.population;
      list.appendChild(span);
      showResult.appendChild(list);
    });
  }
}

const inputField = document.querySelector(".inputField");
/** every time write a value and put the cursor out of input*/
inputField.addEventListener("change", displayMatches);
/** gets each value with the same writing time (keyboard key up)*/
inputField.addEventListener("keyup", displayMatches);
