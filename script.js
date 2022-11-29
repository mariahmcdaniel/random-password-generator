// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  // how many characters (8-128)
  var charNum = prompt('How many characters would you like in your password?');
  var uppercasePool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercasePool = 'abcdefghijklmnopqrstuvwxyz';
  var numbersPool = '0123456789';
  var specialPool = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var chooseFrom = '';

  if (charNum >= 8 && charNum <= 128) {
    var containsUpper = false;
    var containsLower = false;
    var containsNumber = false;
    var containsSpecial = false;

    // uppercase?
    var uppercase = confirm('Would you like your password to contain uppercase letters?');
    if (uppercase) {
      chooseFrom += uppercasePool;
      containsUpper = true;
    };

    // lowercase?
    var lowercase = confirm('Would you like your password to contain lowercase letters?');
    if (lowercase) {
      chooseFrom += lowercasePool;
      containsLower = true;
    };
    // numbers?
    var numbers = confirm('Would you like your password to contain numbers?');
    if (numbers) {
      chooseFrom += numbersPool;
      containsNumber = true;
    };
    // special characters?
    var special = confirm('Would you like your password to contain special characters?');
    if (special) {
      chooseFrom += specialPool;
      containsSpecial = true;
    };

    var baseChars = "";
    if (containsUpper) {
      var randNum = Math.floor(Math.random() * uppercasePool.length);
      baseChars += uppercasePool[randNum];
    }
    if (containsLower) {
      var randNum = Math.floor(Math.random() * lowercasePool.length);
      baseChars += lowercasePool[randNum];
    }
    if (containsNumber) {
      var randNum = Math.floor(Math.random() * numbersPool.length);
      baseChars += numbersPool[randNum];
    }
    if (containsSpecial) {
      var randNum = Math.floor(Math.random() * specialPool.length);
      baseChars += specialPool[randNum];
    }

    var chooseFromArr = [...chooseFrom];
    var pw = [...baseChars];

    for (var i = 0; i < charNum - baseChars.length; i++) {
      pw.push(chooseFrom.charAt(Math.floor(Math.random() * chooseFromArr.length)))
    };

    //using the Fisher-Yates shuffle algorithm (modern version)  
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    //-----------------------------------------------------------

    shuffle(pw);

    return pw.join('');

  } else {
    alert("You must enter a number from 8-128, please try again");
    return generatePassword();
  };


  // var numLower = (pwString.match(/[a-z]/g) || []).length;
  // var numUpper = (pwString.match(/[A-Z]/g) || []).length;
  // var numNums = (pwString.match(/[0-9]/g) || []).length;
  // var numSpecial = (pwString.match(/[^A-Za-z0-9]/g) || []).length;

  // var numLowerExp = numLower > 0;
  // var numUpperExp = numUpper > 0;
  // var numNumsExp = numNums > 0;
  // var numSpecialExp = numSpecial > 0;

  // if (numbers && !numNumsExp) {
  //   special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (Math.floor(Math.random() * 9))) : uppercase && numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (Math.floor(Math.random() * 9))) : pwString.replace((pwString.search(/[a-z]/g)), (Math.floor(Math.random() * 9)))
  // } else if (lowercase && !numLowerExp) {
  //   special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26)))) : uppercase && !numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26)))) : pwString.replace((pwString.search(/[0-9]/g)), (lowercasePool.charAt(Math.floor(Math.random() * 26))))
  // } else if (uppercase && !numUpperExp) {
  //   special && numSpecialExp ? pwString.replace((pwString.search(/[^A-Za-z0-9]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26)))) : lowercase && numLowerExp ? pwString.replace((pwString.search(/[a-z]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26)))) : pwString.replace((pwString.search(/[0-9]/g)), (uppercasePool.charAt(Math.floor(Math.random() * 26))))
  // } else if (special && !numSpecialExp) {
  //   uppercase && !numUpperExp ? pwString.replace((pwString.search(/[A-Z]/g)), (specialPool.charAt(Math.floor(Math.random() * 30)))) : lowercase && numLowerExp ? pwString.replace((pwString.search(/[a-z]/g)), (specialPool.charAt(Math.floor(Math.random() * 30)))) : pwString.replace((pwString.search(/[0-9]/g)), (specialPool.charAt(Math.floor(Math.random() * 30))))
  // }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);