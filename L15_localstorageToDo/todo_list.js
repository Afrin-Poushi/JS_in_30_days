/**Declare all variables */
const addItems = document.querySelector(".add-items");
const allItems = document.querySelector(".all-items");
const form = document.querySelector("#form");
const userInput = document.getElementById("addItem");

/**if localstorage has item store in the array */
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

/** building all functions */
/**store inside Local storage */
function addToStorage(e) {
  //prevent to refresh page
  e.preventDefault();
  const itemName = userInput.value;
  console.log(itemName);

  itemsArray.push({ itemName: itemName, check: false });

  showItem(itemName, false, itemsArray.length - 1);

  localStorage.setItem("items", JSON.stringify(itemsArray));
  this.reset();
}

function showItem(itemName, check, index) {
  const isCheck = check ? "checked" : "";
  const list = document.createElement("li");
  list.setAttribute("class", "item");

  list.innerHTML = `<input type="checkbox" data-index=${index} id="item-${index}" ${isCheck} >
  <label for="item-${index}">${itemName}</label>`;

  allItems.appendChild(list);
}

function isNoItem() {
  if (itemsArray.length != 0) {
    const loadItem = document.querySelector(".loadItem");
    loadItem.style.display = "none";
  }
}

/** event delegation
 * when the list did not exist listen to the whole ul list for change
 * and select the specified target element
 */
function toggleBox(e) {
  const element = e.target;
  const index = element.dataset.index;
  if (element.matches("input")) {
    itemsArray[index].check = !itemsArray[index].check;
    localStorage.setItem("items", JSON.stringify(itemsArray));
  }
}

/** hook up all event listener */
itemsArray.forEach((item, index) => {
  showItem(item.itemName, item.check, index);
});

isNoItem();
form.addEventListener("submit", addToStorage);
allItems.addEventListener("click", toggleBox);
