let generateBtn = document.querySelector("#generate");
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number = "0123456789";
let special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
let passwordLength;
let upperCheck;
let numberCheck;
let specialCheck;

//Password length
function howLong(){
  passwordLength = prompt("Choose the length of your password. It must be at least 8 and no more than 128. ");

    if (passwordLength < 8){
      alert("Enter a valid number between 8 and 128.");
      howLong();
    }else if (passwordLength > 128){
      alert("Enter a valid number between 8 and 128.");
      howLong();
    }else if (isNaN(passwordLength)){
      alert("Enter a valid number between 8 and 128.");
      howLong();
    }else{
    alert("Plese enter y if you want to include a type of character and n if not. Lowercase characters are included by default.");
    }
    return passwordLength;
}

//Include uppercase?
function determineUppercase(){
  upperCheck = prompt("Would you like uppercase letters in your password?");
    upperCheck = upperCheck.toLowerCase();

    if (upperCheck === null || upperCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (upperCheck === "no" || upperCheck ==="n"){
      upperCheck = false;
      return upperCheck;
	  
    }else if (upperCheck === "yes" || upperCheck ==="y"){
      upperCheck = true;
      return upperCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return upperCheck;
}

//Include numbers?
function determineNumbers(){
  numberCheck = prompt("Would you like numbers in your password?");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();
	  
    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
	  
    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

//special characters?
function determineSpecial(){
  specialCheck = prompt("Would you like special characters in your password?");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();
	  
    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
	  
    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

 //make function that takes all the data entered from the previous questions
function generatePassword(){
  howLong();
  console.log(passwordLength);
  determineUppercase();
  console.log(upperCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

let characters = lower;
let password = "";
if (upperCheck && numberCheck && specialCheck){
  characters += upper + number + special;

}else if (upperCheck && numberCheck){
  characters += upper + number;

}else if (numberCheck && specialCheck){
  characters += number + special;

}else if (upperCheck && specialCheck){
  characters += upper + special;

}else if (upperCheck){
  characters += upper;
  
}else if (specialCheck){
  characters += special;
  
}else if(numberCheck){
  characters += number;

}else{
  characters === lower;
}

  for(let i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  let password1 = "";
  password1 = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Add event listener to activate function
generateBtn.addEventListener("click", writePassword);