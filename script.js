
const btn = document.querySelector(".button-theme");

function switchTheme() {
    if(localStorage.getItem("darkMode") === "enabled"){
        document.body.classList.toggle("light-theme");
        localStorage.darkMode = "disabled";
    }
    else {
        document.body.classList.toggle("light-theme");
        localStorage.darkMode = "enabled";
    }
}

if(localStorage.getItem("darkMode") === "enabled"){
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", switchTheme);