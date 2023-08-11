// map function

// let swappingCases = "aMGHaR";
// let invertedNumbers = [1, -50, 10, -100, -200];
// let ingoreNumbers = "ait125be5namgha85r";

// let sw = swappingCases
//   .split("")
//   .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
//   .join("");
// console.log(sw);

// let invert = invertedNumbers.map(function (e) {
//   return -e;
// });
// console.log(invert);

// let ing = ingoreNumbers
//   .split("")
//   .map(function (e) {
//     return isNaN(parseInt(e)) ? e : "";
//   })
//   .join("");
// console.log(ing);

// Filter function
let friends = ["Ahmed", "Taher", "Arwa", "Anouar", "Said", "Maroua"];

let filteredFriends = friends.filter((el) => el.startsWith("A"));
console.log(filteredFriends);

let numbers = [15, 12, 1, 2, 153, 1521];

let evenNumbers = numbers.filter((el) => el % 2 === 0);

console.log(evenNumbers);

// practicing filter function

let santence = "I love home and good restevly words like sleeping";

let smallWords = santence
  .split(" ")
  .filter((el) => el.length <= 4)
  .join(" ");
console.log(smallWords);

let justString = "amg120har4o";
let fliterString = justString
  .split("")
  .filter((el) => isNaN(parseInt(el)))
  .join("");
console.log(fliterString);

// using map and filter togither

let namee = "A12BC52D521";
let justNumbers = namee
  .split("")
  .filter((el) => parseInt(el))
  .map((el) => el * el)
  .join("");
console.log(justNumbers);
