// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  // how many characters (8-128)
  var charNum = prompt('How many characters would you like?');

  if (charNum < 8 || charNum > 128) {
    alert("Password must be between 8 and 128 characters, please try again");
  };

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

  var chooseFromArr = [...chooseFrom];
  var pw = [];

  for (var i = 0; i < charNum; i++) {
    pw.push(chooseFrom.charAt(Math.floor(Math.random() * chooseFromArr.length)))
  }

  var pwString = pw.join('');

  var numLower = (pwString.match(/[a-z]/g) || []).length;
  var numUpper = (pwString.match(/[A-Z]/g) || []).length;
  var numNums = (pwString.match(/[0-9]/g) || []).length;
  var numSpecial = (pwString.match(/[^A-Za-z0-9]/g) || []).length;

  var numLowerExp = numLower > 0;
  var numUpperExp = numUpper > 0;
  var numNumsExp = numNums > 0;
  var numSpecialExp = numSpecial > 0;

  if (numbers && !numNumsExp) {
    special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (Math.floor(Math.random() * 9))) : uppercase && numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (Math.floor(Math.random() * 9))) : pwString.replace((pwString.search(/[a-z]/g)), (Math.floor(Math.random() * 9)))
  } else if (lowercase && !numLowerExp) {
    special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26)))) : uppercase && !numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26)))) : pwString.replace((pwString.search(/[0-9]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26))))
  } else if (uppercase && !numUpperExp) {
    special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26)))) : lowercase && numLowerExp ? pwString.replace((pwString.search(/[a-z]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26)))) : pwString.replace((pwString.search(/[0-9]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26))))
  } else if (special && !numSpecialExp) {
    uppercase && !numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (specialPool.charAt(Math.floor(Math.random() * 30)))) : lowercase && numLowerExp ? pwString.replace((pwString.search(/[a-z]/g)), (specialPool.charAt(Math.floor(Math.random() * 30)))) : pwString.replace((pwString.search(/[0-9]/g)), (specialPool.charAt(Math.floor(Math.random() * 30))))
  }

  console.log(numLower);
  console.log(numUpper);
  console.log(numNums);
  console.log(numSpecial);


  return pw.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);