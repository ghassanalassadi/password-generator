//Array of special chartacters
var specialArray = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters 
var numericArray = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
];

// Array of lowercase characters 
var lowerCasedArray = [
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
  'z'
];

// Array of uppercase characters 
var upperCasedArray = [
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
  'Z'
];

// concatenate all arrays for easy access and convert them to string

// one character type
var specialCharacters = specialArray.join("");
var numericCharacters = numericArray.join("");
var lowerCasedCharacters = lowerCasedArray.join("");
var upperCasedCharacters = upperCasedArray.join("");

// two character types
var specialNumeric = specialCharacters + numericCharacters;
var specialLower = specialCharacters + lowerCasedCharacters;
var specialUpper = specialCharacters + upperCasedCharacters;
var numericLower = numericCharacters + lowerCasedCharacters;
var numericUpper = numericCharacters + upperCasedCharacters;
var lowerUpper = lowerCasedCharacters + upperCasedCharacters;

// three character types
var specialNumericLower = specialNumeric + lowerCasedCharacters;
var specialNumericUpper = specialNumeric + upperCasedCharacters;
var specialLowerUpper = specialLower + upperCasedCharacters;
var numericLowerUpper = numericLower + upperCasedCharacters;


// all character types
var allCharacters = specialCharacters + numericCharacters + lowerCasedCharacters + upperCasedCharacters;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCheckbox = document.querySelector("#special-characters");
var numericCheckbox = document.querySelector("#numeric-characters");
var lowerCasedCheckbox = document.querySelector("#lower-case");
var upperCasedCheckbox = document.querySelector("#upper-case");

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    // Password criteria prompts
    var passwordLength = prompt("Please enter the desired length of your password (between 8 and 128):");
    var passVal = "";

    // Password length (must be min of 8 characters, max 128 characters)
    if (passwordLength < 8) {
      alert("Please enter a higher value.");
    }
    else if (passwordLength > 128) {
      alert("Please enter a lower value.")
    }
    else if (isNaN(passwordLength) == true) {
      alert("Please enter a number between 8 and 128.")
    }

    // generate the password based on which checkboxes are checked
    // check if special characters are desired
    if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {
      for (index = 0, n = specialCharacters.length; index < passwordLength; index++) {
        passVal += specialCharacters.charAt(Math.random() * n);
      }
    }
    // check if numeric characters are desired
    else if (specialCheckbox.checked == false && numericCheckbox.checked == true && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {
      for (index = 0, n = numericCharacters.length; index < passwordLength; index++) {
        passVal += numericCharacters.charAt(Math.random() * n);
      }
    }
    // check if lower case characters are desired
    else if (specialCheckbox.checked == false && numericCheckbox.checked == false && lowerCasedCheckbox.checked == true && upperCasedCheckbox.checked == false) {
      for (index = 0, n = lowerCasedCharacters.length; index < passwordLength; index++) {
        passVal += lowerCasedCharacters.charAt(Math.random() * n);
      }
    }
    // check if upper case characters are desired
    else if (specialCheckbox.checked == false && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == true) {
      for (index = 0, n = upperCasedCharacters.length; index < passwordLength; index++) {
        passVal += upperCasedCharacters.charAt(Math.random() * n);
      }
    }
    // check if special and numeric are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == true && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {
      for (index = 0, n = specialNumeric.length; index < passwordLength; index++) {
        passVal += specialNumeric.charAt(Math.random() * n);
      }
    }
    // check if special and lower case are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if special and upper case are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if numeric and lower are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if numeric and upper are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if lower and upper are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if special, numeric and lower are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if special, numeric and upper are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if special, lower and upper are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if numeric, lower and upper are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }
    // check if all character types are desired
    else if (specialCheckbox.checked == true && numericCheckbox.checked == false && lowerCasedCheckbox.checked == false && upperCasedCheckbox.checked == false) {

    }

    return passVal;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

