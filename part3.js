let form = document.querySelector("form");
let inputName = document.getElementById('fullName');
let email = document.getElementById('email');
let inputNameError = document.querySelector(".errorName");
let emailError = document.querySelector(".errorEmail");
let charLimit = document.querySelector(".character-limit");
let commentArea = document.getElementById("comments");


inputName.addEventListener("input", () =>{
  if(inputName.validity.valid){
    inputNameError.textContent = "";
    inputNameError.className = "errorName";
  }
  else{ showNameError(); }
} )

email.addEventListener("input", () =>{
  if(email.validity.valid){
    emailError.textContent = "";
    emailError.className = "errorEmail";
  }
  else { showEmailError(); }
})

form.addEventListener("submit", event => {
  if(!inputName.validity.valid){
    showNameError();
    event.preventDefault();
  }
  if(!email.validity.valid){
    showEmailError();
    event.preventDefault();
  }
  
})

form.addEventListener("input", () => {
  commentArea.onkeydown = characterLimit();
})

function showEmailError(){
  if(email.validity.valueMissing){
    emailError.textContent = "U gotta enter an email bruv";
    emailError.className = "errorEmail-active";
  }
  else if(email.validity.typeMismatch){
    emailError.textContent = "What you put ain't an email address fam";
    emailError.className = "errorEmail-active";
  }
}

function showNameError(){
  if(inputName.validity.valueMissing){
    inputNameError.textContent = "U got a name or nah ?";
    inputNameError.className = "errorName-active";
  }
  else if(!inputName.checkValidity()){
    inputNameError.textContent = "Only names using the Latin alphabet are accepted";
    inputNameError.className = "errorName-active";
  }
}

function characterLimit(){
  charLimit.textContent = commentArea.maxLength - commentArea.value.length;


  if(charLimit.textContent <= 50){
    charLimit.className = "character-limit-warning";
    if(charLimit.textContent == 0){
      charLimit.textContent = "Character limit reached!";
    }
  }
  else{
    charLimit.className = "character-limit";
  }
}