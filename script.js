//make the initial variables
let specialChar = [
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
  let upperCase = [
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
  let lowerCase = [
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
  let numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //creating a function and circumstances to set characters
  function getSelection() {
    let length = parseInt(
      prompt("How many total characters would you prefer for your password?")
    ); //circumstance to set length
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
    //(variable function?) targetting all elements, or are these objects, anywho, return that data.
    let hasSpecialChar = confirm(
      "Please click Yes to confirm including special characters."
    );
    let hasUpperCase = confirm(
      "Please click Yes to confirm including an Upper Cased character."
    );
    let hasLowerCase = confirm(
      "Please click Yes to confirm including a lower cased character."
    );
    let hasNumericChar = confirm(
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
    } //ask about : vs =.  set password variable to equal input of each of these elements
    let passwords = {
      length: length,
      hasSpecialChar: hasSpecialChar,
      hasUpperCase: hasUpperCase,
      hasLowerCase: hasLowerCase,
      hasNumericChar: hasNumericChar,
    }; //why does the return go outside of the function i get lost here took me forever to figure out
    return passwords;
  } //creating an array to set a random, generated psw
  function getRandom(arr) {
    let randomI = Math.floor(Math.random() * arr.length); //ask about arr.length more
    let randomE = arr[randomI];
  //and why did this only work when i placed it inside the function?
    return randomE;
  } // function to retrieve input and trigger random character selection 
  function generatePassword() {
    let options = getSelection();
    let result = [];
  
  //creating arrays for possible characters
  var possibleChar = [];
  
  var setChar = [];
  //conditions to set psw
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
  return result.join("");
  } //why is it returning a billion letters at end, i mess up for loop somehow, it's not random enough
  
  var generateBtn = document.querySelector("#generate");
  
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  generateBtn.addEventListener("click", writePassword);
