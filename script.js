

var specialChar = [
  '!', 
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '/',
  '_',
  '>',
  '?',
  '<',
  '}',
  '{',
  '.',
];
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var numericChar = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];
function getSelection() {
  var length = parseInt(
    prompt('How many total characters would you prefer for your password?')
  );
  if (Number.isNaN(length) === true) {
    alert('Please enter a numeric length for your password.');
    return;
  }
  if (length < 8) {
    alert('Password length must be at least eight characters.');
    return;
  }
  if (length > 128) {
    alert('Password must not me more than 128 characters');
    return;
  }
} 
function getSelection() {
  var length = parseInt(
    prompt('Please type in a character')
    );
    if (isNaN(length) === true) {
      alert('Please enter a unique special character of the following: ! @ # $ % ^ & / _ > ? < { or } for your password.');
    return;
   }
}


// for (var i= 0; i > )
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
