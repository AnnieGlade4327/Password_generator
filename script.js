var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "/",
  "_",
  ">",
  "?",
  "<",
  "}",
  "{",
  ".",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function getSelection() {
  var length = parseInt(
    prompt("How many total characters would you prefer for your password?")
  );
  if (isNaN(length) === true) {
    alert("Please enter a numeric length for your password.");
    return;
  }
  if (length < 8) {
    alert("Password length must be at least eight characters.");
    return;
  }
  if (length > 128) {
    alert("Password must not be more than 128 characters");
    return;
  }
  var hasSpecialChar = confirm(
    "Please click Yes to confirm including special characters."
  );
  var hasUpperCase = confirm(
    "Please click Yes to confirm including an Upper Cased character."
  );
  var hasLowerCase = confirm(
    "Please click Yes to confirm including a lower cased character."
  );
  var hasNumericChar = confirm(
    "Please click Yes to confirm including numeric characters."
  );
  if (
    hasSpecialChar === false &&
    hasUpperCase === false &&
    hasLowerCase === false &&
    hasNumericChar === false
  ) {
    alert("Must choose at least one.");
    return;
  }
  var passwords = {
    length: length,
    hasSpecialChar: hasSpecialChar,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumericChar: hasNumericChar,
  };
  return passwords;
}
function getRandom(arr) {
  var randomI = Math.floor(Math.random() * arr.length);
  var randomE = arr[randomI];

  return randomE;
}
function createPassword() {

  var options = getSelection();
  var result = [];
  
}

//creating arrays for possible characters
var possibleChar = [];

var setChar = [];

if (options.hasSpecialChar) {
  possibleChar = possibleChar.concat(specialChar);
  setChar.push(getRandom(specialChar));
}
if (options.hasUpperCase) {
  possibleChar = possibleChar.concat(upperCase);
  setChar.push(getRandom(upperCase));
}
if (options.hasLowerCase) {
  possibleChar = possibleChar.concat(lowerCase);
  setChar.push(getRandom(lowerCase));
}
if (options.hasNumericChar) {
  possibleChar = possibleChar.concat(numericChar);
  setChar.push(getRandom(numericChar));
}
// for loop to iterate password length

for (var i = 0; i < options.length; i++) {
  var possibleChar = getRandom(possibleChar);

  result.push(possibleChar);

}
for (var i = 0; i < setChar.length; i++) {
  result[i] = setChar[i];
}
// return result.join("");

var createBtn = document.querySelector('#generate');
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}
generateBtn.addEventListener('click', writePassword);


//{
//   alert("your password is being concocted...");
// }

// var hasNumericChar = confirm("");
// var hasSpecialChar = confirm(
//   "Click pick to confirm including special characters."
// );
// for (var i = 0; i < specialChar.length; i++) {
//   console.log(specialChar[i]);
// }
// if (Number.isNaN(length) === true) {
//   alert("gott apick at least one");
// }
// if (isNaN(length) === true) {
//   alert(
//     "Please enter a unique special character of the following: ! @ # $ % ^ & / _ > ? < { or } for your password."
//   );
// }

// var length = parseInt (***********<<<<<<<<<<<<
//   prompt('Create a Password')
// );

// function getSelection() {
//   var length = parseInt(
//     prompt('Please type in a character')
//     );
//     if (isNaN(length) === true) {
//       alert('Please enter a unique special character of the following: ! @ # $ % ^ & / _ > ? < { or } for your password.');
//     return;
//    }
// }
// for (var i= 0; i > Selection
// var hasUpperCase =

// var hasLowerCase =

// var hasNumericChar =

// if (options.hasSpecialChar)

// var hasSpecialChar = confirm(
//   'Please type in a unique character'
// )

// var potentialChar = [""];

// var hasSpecialChar = confirm(
//   'Click pick to confirm including special characters.'
// );
// var length = parseInt (
//   prompt('Create a Password')
// );
// for (var i = 0; i < specialChar.length; i ++) {
//   console.log(specialChar[i]);
// }
// if (Number.isNaN(length)===true) {
//   alert("gott apick at least one");
// }
// var numericChar =[];
// var lowerCase= [];
// var upperCase= [];

// function getOptions() {
//   var length=
// if (Number.isNaN(length)=== true) {
//     alert("password length needs a number");
//     return;
// }
//
// console.log(test)
// var testaroo = ['uno', 'dos', 'tres'];
// var length = parseInt (
//   prompt('How many languages do you speak?')
// );
// for (var i = 0; i < testaroo.length; i ++) {
//   console.log(testaroo[i]);
// }
// if (isNaN(length)===true) {
//   alert("Not even one?!");
// }
// remember to ask about diff with isNan and Number.isNan, they both seemed to work the same
// Also, get into true vs false more, if, and the return; action or function junction whatever it is
