// Assignment Code
let generateBtn = document.querySelector("#generate");

let lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let number = ["0","1","2","3","4","5","6","7","8","9"];
let special = ["!", "\"", "#", "$", "%","^","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","]","[","\\","^","_","`","{","|","}","~"];
let arrNum;
let temp;
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

} 
function generatePassword() {
  let length = prompt("Select a password length between 8 and 128 characters.");
  if (length > 128) {
    alert("This is an invalid selection. Please select again.");
    reload();
  }
  if (length < 8) {
    alert ("This is an invalid selection. Please select again.")
    reload();
  }
  let lowerPrompt = confirm("Would you like to include lowercase letters in your password?");
  let upperPrompt = confirm("Would you like to include uppercase letters in your password?");
  let numberPrompt = confirm("Would you like to include numbers in your password?");
  let specialPrompt = confirm("Would you like to include special characters in your password?");

  console.log(length);
  console.log(lowerPrompt);
  let arrChoices = 4
  let charNum = Math.ceil(length / arrChoices);
  console.log(charNum)
  
  // if lowerPrompt = false arrChoices--
  // if lowerPrompt = true loop randoNum charNum of times
  for (i = 0; i < charNum; i++) {
    randoNum(lower)
    temp = []
    temp.push(arrNum)
  // concat() to join two or more arrays
  // Math.random with concatenated arrays
  } 
  

}

function randoNum(lower) {
  let indexNum = Math.floor(Math.random() * lower.length);
  arrNum = lower[indexNum];
  console.log(randoNum)
}
// function randoNum(lower) {
  // let indexNum = Math.floor(Math.random() * arr. length);
  // arrNum = arr[indexNum];
function randoNum(upper) {
  let indexNum = Math.floor(Math.random() * upper.length);
}
function randoNum(number) {
  
}
randoNum(lower);
console.log(arrNum);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Click button to generate password.

// Create prompts for password criteria, next.

// When prompted, I select which password criteria to include.

// When prompted for length of password it needs to be 8 to 128 characters.

// Prompt for lowercase, uppercase, numerical, and special characters.

// At least one of these must be selected.

// When all prompts input, a password is generated.

// Create an alert that displays the password.