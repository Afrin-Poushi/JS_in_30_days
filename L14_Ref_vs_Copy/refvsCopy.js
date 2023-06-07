/**ES6 spread operator: squad2 = [...squad];
Slice: squad2 = squad.slice();
Concatenate into empty array: squad2 = [].concat(squad);
From an array: squad2 = Array.from(squad);
 * 
 */

let initialSpeed = 20;
let finalSpeed = initialSpeed;

console.log("Before change: ");
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

initialSpeed = 50;

console.log("After change: ");
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

let name1 = "Rufaro";
let name2 = name1;

console.log("Before change: ");
console.log(`Name: ${name1}`);
console.log(`Name2: ${name2}`);

name1 = "Ray";

console.log("After change: ");
console.log(`Name: ${name1}`);
console.log(`Name2: ${name2}`);

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// take copy of an object or use slice
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

//...spread object shallow copy
const cap3 = { ...person };

const obj1 = { name: "Mark", age: 20 };
const obj2 = { age: 30, occupation: "SWE" };
const clonedObj = { ...obj1, ...obj2 };
console.log(clonedObj); // {name: 'Mark', age: 30, occupation: "SWE" }

/* / this is only 1 level deep both for Arrays and Objects. lodash has a cloneDeep method*/

const wes = {
  name: "Wes",
  age: 100,
  social: {
    twitter: "@wesbos",
    facebook: "wesbos.developer",
  },
};

console.log(wes);

const dev = Object.assign({}, wes);

const dev2 = JSON.parse(JSON.stringify(wes));
