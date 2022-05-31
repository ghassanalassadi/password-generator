// Array of special characters
var specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters 
var numericArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

// Array of lowercase characters 
var lowerCasedArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Array of uppercase characters 
var upperCasedArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

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

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    // Password criteria prompts
    var passVal = "";
    var specialCheck = confirm("Would you like special characters in your password?"); // checks if special chars are desired
    var numericCheck = confirm("Would you like numeric characters in your password?"); // checks if numerical chars are desired
    var lowerCasedCheck = confirm("Would you like lower case characters in your password?"); // checks if lower case chars are desired
    var upperCasedCheck = confirm("Would you like upper case characters in your password?"); // checks if upper case chars are desired

    // Password length (must be min of 8 characters, max 128 characters)
    // Input must not be a non-numerical character
    // Keep prompting user if they enter undesirable inputs
    while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) == true) {
      var passwordLength = prompt("Please enter the desired length of your password (between 8 and 128):");
      // break out of loop if user cancels
      if (passwordLength === null || passwordLength === "") {
        break;
      }
      // prompt again if value is less than 8
      else if (passwordLength < 8) {
        alert("Please enter a higher value.");
      }
      // prompt again if value is greater than 128
      else if (passwordLength > 128) {
        alert("Please enter a lower value.")
      }
      // prompt again if user enters non-numerical value
      else if (isNaN(passwordLength) == true) {
        alert("Please enter a number between 8 and 128.")
      }
    }

    // generate the password based on which criteria are desired

    // check if special characters are desired
    if (specialCheck == true && numericCheck == false && lowerCasedCheck == false && upperCasedCheck == false) {
      for (index = 0, n = specialCharacters.length; index < passwordLength; index++) {
        passVal += specialCharacters.charAt(Math.random() * n);
      }
    }
    // check if numeric characters are desired
    else if (specialCheck == false && numericCheck == true && lowerCasedCheck == false && upperCasedCheck == false) {
      for (index = 0, n = numericCharacters.length; index < passwordLength; index++) {
        passVal += numericCharacters.charAt(Math.random() * n);
      }
    }
    // check if lower case characters are desired
    else if (specialCheck == false && numericCheck == false && lowerCasedCheck == true && upperCasedCheck == false) {
      for (index = 0, n = lowerCasedCharacters.length; index < passwordLength; index++) {
        passVal += lowerCasedCharacters.charAt(Math.random() * n);
      }
    }
    // check if upper case characters are desired
    else if (specialCheck == false && numericCheck == false && lowerCasedCheck == false && upperCasedCheck == true) {
      for (index = 0, n = upperCasedCharacters.length; index < passwordLength; index++) {
        passVal += upperCasedCharacters.charAt(Math.random() * n);
      }
    }
    // check if special and numeric are desired
    else if (specialCheck == true && numericCheck == true && lowerCasedCheck == false && upperCasedCheck == false) {
      for (index = 0, n = specialNumeric.length; index < passwordLength; index++) {
        passVal += specialNumeric.charAt(Math.random() * n);
      }
    }
    // check if special and lower case are desired
    else if (specialCheck == true && numericCheck == false && lowerCasedCheck == true && upperCasedCheck == false) {
      for (index = 0, n = specialLower.length; index < passwordLength; index++) {
        passVal += specialLower.charAt(Math.random() * n);
      }
    }
    // check if special and upper case are desired
    else if (specialCheck == true && numericCheck == false && lowerCasedCheck == false && upperCasedCheck == true) {
      for (index = 0, n = specialUpper.length; index < passwordLength; index++) {
        passVal += specialUpper.charAt(Math.random() * n);
      }
    }
    // check if numeric and lower are desired
    else if (specialCheck == false && numericCheck == true && lowerCasedCheck == true && upperCasedCheck == false) {
      for (index = 0, n = numericLower.length; index < passwordLength; index++) {
        passVal += numericLower.charAt(Math.random() * n);
      }
    }
    // check if numeric and upper are desired
    else if (specialCheck == false && numericCheck == true && lowerCasedCheck == false && upperCasedCheck == true) {
      for (index = 0, n = numericUpper.length; index < passwordLength; index++) {
        passVal += numericUpper.charAt(Math.random() * n);
      }
    }
    // check if lower and upper are desired
    else if (specialCheck == false && numericCheck == false && lowerCasedCheck == true && upperCasedCheck == true) {
      for (index = 0, n = lowerUpper.length; index < passwordLength; index++) {
        passVal += lowerUpper.charAt(Math.random() * n);
      }
    }
    // check if special, numeric and lower are desired
    else if (specialCheck == true && numericCheck == true && lowerCasedCheck == true && upperCasedCheck == false) {
      for (index = 0, n = specialNumericLower.length; index < passwordLength; index++) {
        passVal += specialNumericLower.charAt(Math.random() * n);
      }
    }
    // check if special, numeric and upper are desired
    else if (specialCheck == true && numericCheck == true && lowerCasedCheck == false && upperCasedCheck == true) {
      for (index = 0, n = specialNumericUpper.length; index < passwordLength; index++) {
        passVal += specialNumericUpper.charAt(Math.random() * n);
      }
    }
    // check if special, lower and upper are desired
    else if (specialCheck == true && numericCheck == false && lowerCasedCheck == true && upperCasedCheck == true) {
      for (index = 0, n = specialLowerUpper.length; index < passwordLength; index++) {
        passVal += specialLowerUpper.charAt(Math.random() * n);
      }
    }
    // check if numeric, lower and upper are desired
    else if (specialCheck == false && numericCheck == true && lowerCasedCheck == true && upperCasedCheck == true) {
      for (index = 0, n = numericLowerUpper.length; index < passwordLength; index++) {
        passVal += numericLowerUpper.charAt(Math.random() * n);
      }
    }
    // check if all character types are desired
    else if (specialCheck == true && numericCheck == true && lowerCasedCheck == true && upperCasedCheck == true) {
      for (index = 0, n = allCharacters.length; index < passwordLength; index++) {
        passVal += allCharacters.charAt(Math.random() * n);
      }
    }

    return passVal;
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

