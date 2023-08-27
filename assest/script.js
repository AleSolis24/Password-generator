//setting up new Var for creating a new password 
// this is going to be used to pull values from characters above to generate password.
var upperletter = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var lowerletter = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special =["!", "@", "#", "(", ")"];


// create event listener on button click to update password length
var generateBtn = document.getElementById("generate")
var games = document.getElementById("password")
generateBtn.addEventListener("click", generatePassword);
// this is telling the website that if the user chooses any kind of characther that the log would be true and if they did not want any kind specific charcther than it would be false
function passwordsource(passwordlength, wantSpecialCharacters, wantLowerCharacter, wantUpperCharacters, numberCharacter){
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
  // this would display and generate the random password to display to the user
  var completedPassword = passwordArray.join("") 
  games.textContent = completedPassword
  console.log(completedPassword)
}
// This is where the prompt would appear to ask the user on how many characther they would like to use for the their password
function generatePassword() {
  var passwordlength = prompt("How many characters do you want the password to be?");
  console.log(passwordlength);
  // If statement is being used to tell the website that the user can only use less than or greather than 8 to 128 characthers 
  if (passwordlength >= 8 && passwordlength <= 128) { // this is good we allow the value
    console.log("is between 8 and 128")
    // This is asking the user what kind of characther they would like to use 
    var wantSpecialCharacters = confirm("do you want special characters");
    console.log(wantSpecialCharacters);
   
    var wantUpperCharacters = confirm("do you want uppercase characters");
    console.log(wantUpperCharacters);
    
    var wantLowerCharacter = confirm("do you want lower case characters");
    console.log(wantLowerCharacter);

    var numberCharacter = confirm("do you want numbers");
    console.log(numberCharacter);

    // depending on which of the 4 arrays they want to use, combine those they want and pick randomly from the array
    passwordsource(passwordlength, wantSpecialCharacters, wantLowerCharacter, wantUpperCharacters, numberCharacter);

    
    

    //this else statement is bringing up a alert informing the user that they need to choose a password length of 8 to 128 
  } else {
      console.log("is not good, need to do again");
      alert("Character needs to be between 8 and 128 characters");
    generatePassword();
  }
  } 
  
  
 
 
  