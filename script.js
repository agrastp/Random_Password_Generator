// This connects the html generate button with the eventlistener below.
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "O123456789";
var symbolChar = "@#$%^&*()_+~]}{][<>/-=?!";

//Created a function to generate the password
function generatePassword() {
    console.log("User clicked the button");


    //User input determines the length of the code.  It loops until a valid length is chosen.

    var passLength = prompt("Please choose the length of your password (8-128)!");
    while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        passLength = prompt("Wrong length size.  Please choose the length of your password (8-128)!");
    }
    console.log(passLength);

    //After length prompt, it prompts the user for types of characters wanted in password.
    var characterSet = "";
    var wantsLowerCase = confirm("Do you want to use lowercase letters?");
    if (wantsLowerCase) {
        characterSet += lowerCaseChar;
    }
    var wantsUpperCase = confirm("Do you want to use uppercase letters?");
    if (wantsUpperCase) {
        characterSet += upperCaseChar;
    }
    var wantsNumbers = confirm("Do you want to use numbers?");
    if (wantsNumbers) {
        characterSet += numberChar;
    }
    var wantsSymbols = confirm("Do you want to use symbols?");
    if (wantsSymbols) {
        characterSet += symbolChar;
    }
    //This checks if the characterSet has at least one type of character to generate a password with.
    if (characterSet.length === 0) {
        alert("You must select one character type! Select Generate Password again!")
    }

    console.log(characterSet);
    //This will take the length and the chosen characters to generate the password randomly.
    var finalPassword = "";
    for (let i = 0; i < passLength; i++); {
        finalPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
    }
    return finalPassword;

}



// Write password to the #password input. This initializes the generaterPassword function.
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button.  This initializes the writePassword function.
generateBtn.addEventListener("click", writePassword);
