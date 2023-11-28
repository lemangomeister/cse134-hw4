let inputName = document.getElementById('fullName');
let email = document.getElementById('email');
let comment = document.getElementById('comments');
// console.log("name: " + inputName.checkValidity());
// console.log("email: " + email.checkValidity());
// console.log("comments: " + comment.checkValidity());
// console.log(comment);


if(inputName.value === ""){
    inputName.setCustomValidity("U got a name or nah ?");
}
else if(inputName.checkValidity() === false){
    inputName.setCustomValidity("Only names using the Latin alphabet are accepted");
}

if(email.checkValidity() === false){
  email.setCustomValidity("Dat email no gud fam, put a legit one frfr");
}

if(comment.value === ""){
  comment.setCustomValidity("Share somethin fam");
}
else if(comment.checkValidity() === false){
  comment.setCustomValidity("Some characters are not accepted");
}