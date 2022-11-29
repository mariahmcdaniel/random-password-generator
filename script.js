var generateBtn = document.querySelector("#generate");

function generatePassword() {

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

    var uppercase = confirm('Would you like your password to contain uppercase letters?');
    if (uppercase) {
      chooseFrom += uppercasePool;
      containsUpper = true;
    };

    var lowercase = confirm('Would you like your password to contain lowercase letters?');
    if (lowercase) {
      chooseFrom += lowercasePool;
      containsLower = true;
    };

    var numbers = confirm('Would you like your password to contain numbers?');
    if (numbers) {
      chooseFrom += numbersPool;
      containsNumber = true;
    };

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
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);