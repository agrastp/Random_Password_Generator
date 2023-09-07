// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "O123456789";
var symbolChar = "@#$%^&*()_+~]}{][<>/-=?!";

function generatePassword() {
    console.log("User clicked the button");


    var passLength = prompt("Please choose the length of your password (8-128)!");
        while (passLength < 8 || passLength > 128 || isNaN(passLength)) 
        {
        passLength = prompt("Wrong length size.  Please choose the length of your password (8-128)!");
    }
        console.log(passLength);


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
