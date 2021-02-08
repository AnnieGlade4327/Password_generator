

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
var hasSpecialChar = confirm(
  'Click pick to confirm including special characters.'
);
var length = parseInt (
  prompt('Create a Password')
);
for (var i = 0; i < specialChar.length; i ++) {
  console.log(specialChar[i]);
}
if (Number.isNaN(length)===true) {
  alert("gott apick at least one");
}



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
