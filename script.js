let swappingCases = "aMGHaR";
let invertedNumbers = [1, -50, 10, -100, -200];
let ingoreNumbers = "ait125be5namgha85r";

let sw = swappingCases
  .split("")
  .map((e) => (e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
  .join("");
console.log(sw);

let invert = invertedNumbers.map(function (e) {
  return -e;
});
console.log(invert);

let ing = ingoreNumbers
  .split("")
  .map(function (e) {
    return isNaN(parseInt(e)) ? e : "";
  })
  .join("");
console.log(ing);
