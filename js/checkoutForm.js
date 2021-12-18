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

    let isValidated = true; 

    if(validateEmail(emailCheckout.value) === true){
        emailCheckoutError.style.display = "none"; 
    } else {
        emailCheckoutError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(fname.value,0) === true){
        fnameError.style.display = "none"; 
    } else {
        fnameError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(lname.value,0) === true){
        lnameError.style.display = "none"; 
    } else {
        lnameError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(address.value,10) === true){
        addressError.style.display = "none"; 
    } else {
        addressError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(city.value,2) === true){
        cityError.style.display = "none"; 
    } else {
        cityError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(zipCode.value,3) === true){
        zipCodeError.style.display = "none"; 
    } else {
        zipCodeError.style.display = "block"; 
        isValidated = false;
    }

    if(formChecker(country.value,3) === true){
        countryError.style.display = "none"; 
    } else {
        countryError.style.display = "block"; 
        isValidated = false;
    }

    return isValidated; 
}

function myFunction() {
    if(!validateCheckout()) {
        return false; 
    } else {
        window.location.href = "checkoutSuccess.html"
    }
}


