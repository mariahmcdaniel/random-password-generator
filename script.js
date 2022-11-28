// Assignment Code
var generateBtn = document.querySelector("#generate");

// var actions = {
//   charNum: prompt('How many characters?'),
//   upper: confirm("Would you like uppercase letters?"),
//   lower: confirm("Would you like lowercase letters?"),
//   numbers: confirm("Would you like numbers?"),
//   special: confirm("Would you like special characters?")
// };
function generatePassword() {
  // YOUR CODE GOES HERE
  // how many characters (8-128)
  var charNum = alert('How many characters would you like?');
  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters, please try again");
  }
  // uppercase?
  var uppercase = false;
  // lowercase?
  var lowercase = false;
  // numbers?
  var numbers = false;
  // special characters?
  var special = false;

  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);