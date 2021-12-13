const seeMoreBtn = document.querySelector(".seeMoreBtn"); 

seeMoreBtn.onclick = function() {
    location.href="#";
}

const newsletterForm = document.querySelector("#newsletterForm"); 

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError"); 

console.log(newsletterForm)

function validateNewsletter() {
    event.preventDefault; 
    console.log("hello");

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

newsletterForm.addEventListener("subscribe", validateNewsletter); 

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/; 
    const patternMatches = regEx.test(email); 
    return patternMatches;
}


