const loader = document.querySelector(".loader"); 
const contactUsContainer = document.querySelector(".contact-us-container"); 

contactUsContainer.style.display = "none"; 

setTimeout(function() {
    loader.className = "hidden";
    contactUsContainer.style.display = "";
},400);

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


const checkoutForm = document.querySelector(".checkoutForm"); 

const emailCheckout = document.querySelector("#emailCheckout"); 
const emailCheckoutError = document.querySelector("#emailCheckoutError"); 

const fname = document.querySelector("#fname"); 
const fnameError = document.querySelector("#fnameError");

const lname = document.querySelector("#lname"); 
const lnameError = document.querySelector("#lnameError"); 

const address = document.querySelector("#address"); 
const addressError = document.querySelector("#addressError"); 

const city = document.querySelector("#city"); 
const cityError = document.querySelector("#cityError");

const zipCode = document.querySelector("#zip"); 
const zipCodeError = document.querySelector("#zipError");

const country = document.querySelector("#country"); 
const countryError = document.querySelector("#countryError"); 

function validateCheckout() {
    event.preventDefault(); 

    if(validateEmail(emailCheckout.value) === true){
        emailCheckoutError.style.display = "none"; 
    } else {
        emailCheckoutError.style.display = "block"; 
    }

    if(formChecker(fname.value,0) === true){
        fnameError.style.display = "none"; 
    } else {
        nameError.style.display = "block"; 
    }

    if(formChecker(lname.value,0) === true){
        lnameError.style.display = "none"; 
    } else {
        lameError.style.display = "block"; 
    }

    if(formChecker(city.value,0) === true){
        cityError.style.display = "none"; 
    } else {
        cityError.style.display = "block"; 
    }

    if(formChecker(zipCode.value,0) === true){
        zipCodeError.style.display = "none"; 
    } else {
        zipCodeError.style.display = "block"; 
    }

    if(formChecker(country.value,0) === true){
        countryError.style.display = "none"; 
    } else {
        countryError.style.display = "block"; 
    }
}

checkoutForm.addEventListener("Continue to shipping", validateCheckout); 

function formChecker(value,len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/; 
    const patternMatches = regEx.test(email); 
    return patternMatches;
}