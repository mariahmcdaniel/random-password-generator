// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  // how many characters (8-128)
  var charNum = function () {
    prompt("How many characters?")
  }
  var upper = function () {
    confirm("Would you like uppercase letters?")
  }
  var lower = function () {
    confirm("Would you like lowercase letters?")
  }
  var numbers = function () {
    confirm("Would you like numbers?")
  }
  var special = function () {
    confirm("Would you like special characters?")
  }

  generateBtn.addEventListener("click", () => {
    charNum()

  })
  // uppercase?
  if (charNum > 7 && charNum < 100) {
    upper();
  } else {
    alert("Password must be between 8 and 100 characters, please try again")
  }

  lower();
  numbers();
  special();

  // lowercase?

  // numbers?
  // special characters?


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);