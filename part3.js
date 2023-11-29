let form = document.querySelector("form");
let inputName = document.getElementById('fullName');
let email = document.getElementById('email');
let inputNameError = document.querySelector(".errorName");
let emailError = document.querySelector(".errorEmail");


inputName.addEventListener("input", () =>{
  if(inputName.validity.valid){
    inputNameError.textContent = "";
    inputNameError.className = "errorName";
  }
  else{ showError(); }
} )

email.addEventListener("input", () =>{
  if(email.validity.valid){
    emailError.textContent = "";
    emailError.className = "errorEmail";
  }
  else { showError(); }

  if(email.value == "" || email.value == null){
    email.setCustomValidity("U got an email or nah ?");
  }
  else if(email.checkValidity() === false || email.typeMismatch()){
    email.setCustomValidity("Dat email no gud fam, put a legit one frfr");
  }
  else{
    email.setCustomValidity("");
  }
})

form.addEventListener("submit", event => {
  if(!inputName.validity.valid || !email.validity.valid){
    showError();
    event.preventDefault();
  }
})

function showError(){
  if(email.validity.valueMissing){
    emailError.textContent = "U gotta enter an email bruv";
    emailError.className = "errorEmail-active";
  }
  else if(!email.checkValidity()){
    emailError.textContent = "What you put ain't an email address fam";
    emailError.className = "errorEmail-active";
  }

  if(inputName.validity.valueMissing){
    inputNameError.textContent = "U got a name or nah ?";
    inputNameError.className = "errorName-active";
  }
  else if(!inputName.checkValidity()){
    inputNameError.textContent = "Only names using the Latin alphabet are accepted";
    inputNameError.className = "errorName-active";
  }
}