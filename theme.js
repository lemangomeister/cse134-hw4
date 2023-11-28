
const btn = document.querySelector(".button-theme");

if(localStorage.getItem("lightMode") === null){
    localStorage.lightMode = "disabled";
}

function switchTheme() {
    if(localStorage.getItem("lightMode") === "enabled"){
        document.body.classList.toggle("light-theme");
        localStorage.lightMode = "disabled";
    }
    else {
        document.body.classList.toggle("light-theme");
        localStorage.lightMode = "enabled";
    }
}

if(localStorage.getItem("lightMode") === "enabled"){
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", switchTheme);