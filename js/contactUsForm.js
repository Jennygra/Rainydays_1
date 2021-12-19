const contactForm = document.querySelector(".contactForm"); 

const name = document.querySelector("#name"); 
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message"); 
const messageError = document.querySelector("#messageError");

function validateForm() {
    event.preventDefault(); 

    let isValidated = true;
    
    if(formChecker(name.value,2) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        isValidated = false;
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        isValidated = false;
    }

    if(formChecker(message.value,5) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        isValidated = false;
    }

    return isValidated; 
}

const sumbmitBtn = document.querySelector(".sumbmitBtn");

function btnFunctionForm() {
    console.log("hello")
    if(!validateForm()) {
        return false; 
    } else {
        contactForm.innerHTML = `<div><h3> Thank you for contacting us, we will come back to you within two days!</div></h3>`;
        // alert("Thank you for contacting us, we will come back to you within two days!");
        // window.location.href = "contactUs.html"
    }
}


