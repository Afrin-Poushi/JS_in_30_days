const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

let showResult = document.querySelector(".paraOne");

// Array.prototype.filter()
// array.filter(callback(element, index, array), thisArg)
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteensInventors = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});

fifteensInventors.map((inventor) => {
  const li = document.createElement("li");
  li.textContent = inventor.year;
  showResult.appendChild(li);
});
console.table(fifteensInventors);

// Array.prototype.map()
// array.map(callback(element, index, array), thisArg)
// 2. Give us an array of the inventors' first and last names
const names = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last;
});
showResult = document.querySelector(".paraTwo");
names.map((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  showResult.appendChild(li);
});

console.table(names);

// Array.prototype.sort()
// array.sort(compareFunction)
// return -1 if a sorted before b, 1 if a sorted after b
// 3. Sort the inventors by birthdate, oldest to youngest
const orderlistByBirth = inventors.sort(function (
  firstInventor,
  secondInventor
) {
  if (firstInventor.year > secondInventor.year) return 1;
  else return -1;
});

showResult = document.querySelector(".paraThree");
orderlistByBirth.map((inventor) => {
  const li = document.createElement("li");
  li.textContent = `${inventor.first} ${inventor.last} - ${inventor.year}`;
  showResult.appendChild(li);
});
console.table(orderlistByBirth);

// Array.prototype.reduce()
// array.reduce(callback(accumulator, currentValue, currentIndex, array),initialValue)
// 4. How many years did all the inventors live?
const totalLivedYears = inventors.reduce(function (
  accumulatorTotal,
  currentInventor
) {
  return accumulatorTotal + (currentInventor.passed - currentInventor.year);
},
0);
console.log("lived years " + totalLivedYears);

// 5. Sort the inventors by years lived
const orderByAge = inventors.sort((a, b) => {
  const firstInventor = a.passed - a.year;
  const secondInventor = b.passed - b.year;

  return firstInventor < secondInventor ? 1 : -1;
});

showResult = document.querySelector(".paraFour");
orderByAge.map((inventor) => {
  const li = document.createElement("li");
  li.textContent = `${inventor.first} ${inventor.last} - ${
    inventor.passed - inventor.year
  }`;
  showResult.appendChild(li);
});
console.table(orderByAge);

// setTimeout(() => {
//   // using sort function the actual array is changed
//   console.table(inventors);
// }, 3000);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const lists = document.querySelector(".mw-category");
// /*query oprations can be on the nodeList or on existing another query
// const links = lists.querySelectorAll("a");
// the above line will give nodeList in which most of the array functionality
// is not available so turn this into an array
// */
// const links = [...lists.querySelectorAll("a")]; //spread into array in ES6
// // const links = Array.from(lists.querySelectorAll("a")); this also can be applied

// const de = links
//   .map((link) => {
//     return link.textContent;
//   })
//   .filter((name) => name.includes("de"));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const alphaNames = people.sort(function (firstPerson, secondPerson) {
  // here in array last name is given first(before comma)
  const [firstL, firstF] = firstPerson.split(", ");
  const [secondL, secondF] = secondPerson.split(", ");
  return firstL > secondL ? 1 : -1;
});
console.table(alphaNames);

// 8. Reduce Exercise for data objects
// Sum up the instances of each of these
const talley = data.reduce(function (obj, vehicleItem) {
  if (!obj[vehicleItem]) obj[vehicleItem] = 0;
  obj[vehicleItem]++;
  return obj;
}, {});
// as the inital values are empty obj, otherwise give as {walk:2, bike: 2}
console.log(talley);
