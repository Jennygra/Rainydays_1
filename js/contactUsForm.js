const contactForm = document.querySelector(".contactForm"); 

const name = document.querySelector("#name"); 
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message"); 
const messageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault(); 
    
    if(formChecker(name.value,2) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(formChecker(message.value,5) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}

contactForm.addEventListener("submit", validateForm); 


