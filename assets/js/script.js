var generateBtn = document.querySelector("#generate");

function generatePassword() {

  
  var charNum = document.querySelector("#length").value;
  var uppercasePool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercasePool = 'abcdefghijklmnopqrstuvwxyz';
  var numbersPool = '0123456789';
  var specialPool = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var chooseFrom = '';
  
  var containsUpper = false;
  var containsLower = false;
  var containsNumber = false;
  var containsSpecial = false;


  
  Array.prototype.slice.call(document.querySelectorAll("[name='charType']:checked"),0).map(function(v,i,a) { 
    if (v.value === "upper"){
      containsUpper = true;
      chooseFrom += uppercasePool;
    }
    if (v.value === "lower"){
      containsLower = true;
      chooseFrom += lowercasePool;
    }
    if (v.value === "numbers"){
      containsNumber = true;
      chooseFrom += numbersPool;
    }
    if (v.value === "symbols"){
      containsSpecial = true;
      chooseFrom += specialPool;
    }
    return v.value; 
  });


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
}

function writePassword(e) {
  e.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);