// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  // how many characters (8-128)
  var charNum = alert('How many characters would you like?');
  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters, please try again");
  }
  var uppercasePool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercasePool = 'abcdefghijklmnopqrstuvwxyz';
  var numbersPool = '0123456789';
  var specialPool = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var chooseFrom = '';
  // uppercase?
  var uppercase = confirm('Would you like uppercase letters?');
  if (uppercase) {
    chooseFrom += uppercasePool
  };

  // lowercase?
  var lowercase = confirm('Would you like lowercase letters?');
  if (lowercase) {
    chooseFrom += lowercasePool
  };
  // numbers?
  var numbers = confirm('Would you like numbers?');
  if (numbers) {
    chooseFrom += numbersPool
  };
  // special characters?
  var special = confirm('Would you like special characters?');
  if (special) {
    chooseFrom += specialPool
  };

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