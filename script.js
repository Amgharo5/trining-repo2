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
// let friends = ["Ahmed", "Taher", "Arwa", "Anouar", "Said", "Maroua"];

// let filteredFriends = friends.filter((el) => el.startsWith("A"));
// console.log(filteredFriends);

// let numbers = [15, 12, 1, 2, 153, 1521];

// let evenNumbers = numbers.filter((el) => el % 2 === 0);

// console.log(evenNumbers);

// practicing filter function

// let santence = "I love home and good restevly words like sleeping";

// let smallWords = santence
//   .split(" ")
//   .filter((el) => el.length <= 4)
//   .join(" ");
// console.log(smallWords);

// let justString = "amg120har4o";
// let fliterString = justString
//   .split("")
//   .filter((el) => isNaN(parseInt(el)))
//   .join("");
// console.log(fliterString);

// using map and filter togither

// let namee = "A12BC52D521";
// let justNumbers = namee
//   .split("")
//   .filter((el) => parseInt(el))
//   .map((el) => el * el)
//   .join("");
// console.log(justNumbers);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [12, 15, 20, 5, 45];

// let add = nums.reduce((acc, current, index, arr) => acc + current, 5); // (accumulator, currentValue, currentIndex, sourceArray
// console.log(add);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = [
//   "Bla",
//   "Propaganda",
//   "Other",
//   "AAA",
//   "Battery",
//   "Test",
//   "Propaganda_Two",
// ];
// let removeChars = ["A", "@", "@", "M", "G", "@", "@", "H", "A", "@", "R"];

// let check = theBiggest.reduce((acc, current) =>
//   acc.length > current.length ? acc : current
// );
// console.log(check);

// let letString = removeChars
//   .filter((el) => el !== "@")
//   .reduce(function (acc, curr) {
//     return `${acc}${curr}`;
//   });
// console.log(letString);

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     this.classList.add("active");
//     allDivs.forEach((ele) => (ele.style.display = "none"));
//   };
// });

/*
  Object
  - Create Object With Create Method
*/

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myId = document.getElementById("my-div");
// console.log(myId);
// let myTag = document.getElementsByTagName("p");
// //you can use index for specify your result
// // console.log(myTag[0]);
// console.log(myTag);
// let myClassName = document.getElementsByClassName("my-span");
// console.log(myClassName);
// console.log(document.title);
// console.log(document.forms[1].two);
// console.log(document.links[0]);
// console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let divText = document.querySelector(".js");
let divText1 = document.querySelector(".js1");
console.log(divText.innerHTML);
console.log(divText.textContent);
//set change content use innerHTML and textContent and the diffrence betwin them
//is that innerHTML will be render as html code while textContent will not be rendered in html code
divText.innerHTML = "This text came from <span>script.js</span> file";
divText1.textContent = "This text came from <span>script.js</span> file";
//change or add attribute

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

//change or add attribute
//directly to element with getAttribute() method, but it is not recommended because you have to write a lot of codes
let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
