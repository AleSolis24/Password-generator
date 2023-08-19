var upperletter = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerletter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special =["!", "@", "#", "(", ")"];
// this is going to be used to pull values from characters above to generate password.


// create event listener on button click to update password length
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
  // todo this is where the prompt will show
  var passwordlength = prompt("How many characters do you want the password to be?");
  console.log(passwordlength);

  if (passwordlength >= 8 && passwordlength <= 128) { // this is good we allow the value
    console.log("is between 8 and 128")
    // todo ask if they want special characters
    var wantSpecialCharacters = confirm("do you want special characters");
    console.log(wantSpecialCharacters);
    // todo ask if they want upper
    var wantUpperCharacters = confirm("do you want uppercase characters");
    console.log(wantUpperCharacters);
    // todo ask if they want lower
    var wantLowerCharacter = confirm("do you want lower case characters");
    console.log(wantLowerCharacter);
    // todo ask if they want numbers
    var numberCharacter = confirm("do you want numbers");
    console.log(numberCharacter);
    // once you have all the confirm values. use those values with the password length to generate a password
    
    // depending on what of the 4 arrays they want to use, combine those they want and pick random from the array.
    // google how to add all array into one. How to pick a random item from a array 
    // I would have a new var array and combine all the ones they want and pick random
    

  } else { // this is not good we need them to enter a new value
    console.log("is not good, need to do again")
    // todo call a function that shows they need to try again
    alert("Character needs between 8 to 128 character");
  }
}
//to generate a random password
function rngpassword(num) {
  console.log(passwordlength);
var passwordlength = Math.floor(Math.random() * num.length);
}