let inputName = document.getElementById('fullName');
let email = document.getElementById('email');
let comment = document.getElementById('comments');
// console.log("name: " + inputName.checkValidity());
// console.log("email: " + email.checkValidity());
// console.log("comments: " + comment.checkValidity());
// console.log(comment);


inputName.addEventListener("input", () =>{
  if(inputName.value === ""){
    inputName.setCustomValidity("U got a name or nah ?");
  }
  else if(inputName.patternMismatch){
    inputName.setCustomValidity("Only names using the Latin alphabet are accepted");
  }
  else{
    inputName.setCustomValidity("");
  }
} )

email.addEventListener("input", () =>{
  if(email.value === ""){
    email.setCustomValidity("U got an email or nah ?");
  }
  else if(email.checkValidity() === false){
    email.setCustomValidity("Dat email no gud fam, put a legit one frfr");
  }
  else{
    email.setCustomValidity("");
  }
})


comment.addEventListener("input", () => {
  if(comment.value.length === 0){
    comment.setCustomValidity("Share somethin fam");
  }
  else if(comment.checkValidity() === false){
    comment.setCustomValidity("Some characters are not accepted");
  }
  else{
    comment.setCustomValidity("");
  }
})