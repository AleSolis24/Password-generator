//setting up new Var for creating a new password 
var upperletter = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerletter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special =["!", "@", "#", "(", ")"];
// this is going to be used to pull values from characters above to generate password.

// create event listener on button click to update password length
var generateBtn = document.getElementById("generate")
var games = document.getElementById("password")
generateBtn.addEventListener("click", generatePassword);
function passwordsource(passwordlength, wantSpecialCharacters, wantLowerCharacter, wantUpperCharacters, numberCharacter){
  //to generate a random password
  var possibleSource = [];
  var passwordArray = [];
  if (wantSpecialCharacters === true) {
    possibleSource.push(special)
  }
  if (wantLowerCharacter === true) {
    possibleSource.push(lowerletter)
  }
  if (wantUpperCharacters === true) {
    possibleSource.push(upperletter)
  }
  if (numberCharacter === true) {
    possibleSource.push(number)
  }
  
  
  for (var index = 0; index < passwordlength; index++) {
    while(passwordArray.length < passwordlength){
       if (possibleSource[0]){
        // you can use array methods like concat/push to combine arrays and Math.random() to pick a random item from an array
        passwordArray.push(possibleSource[0][Math.floor(Math.random()*possibleSource[0].length)])
      }
      if(possibleSource[1]) {
        passwordArray.push(possibleSource[1][Math.floor(Math.random()*possibleSource[1].length)])
      }
      if (possibleSource[2]){
        passwordArray.push(possibleSource[2][Math.floor(Math.random()*possibleSource[2].length)])
      }
      if (possibleSource[3]){
        passwordArray.push(possibleSource[3][Math.floor(Math.random()*possibleSource[3].length)])
      }
    }
    
    
  }
  var completedPassword = passwordArray.join("") 
  games.textContent = completedPassword
  console.log(completedPassword)
}

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

    passwordsource(passwordlength, wantSpecialCharacters, wantLowerCharacter, wantUpperCharacters, numberCharacter);

    // once you have all the confirm values, use those values with the password length to generate a password
    // depending on which of the 4 arrays they want to use, combine those they want and pick randomly from the array
    
  } else {
  
    console.log("is not good, need to do again");
    // todo call a function that shows they need to try again
    alert("Character needs to be between 8 and 128 characters");
    generatePassword();
  }
  } 
  
  
 
 
  