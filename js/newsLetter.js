//Newsletter form
const newsletterForm = document.querySelector("#newsletterForm"); 
const email = document.querySelector("#newsletter"); 
const emailError = document.querySelector("#newsletterError"); 

function validateNewsletter() {
    event.preventDefault; 
    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

const subscribe = document.querySelector(".subscribe"); 

subscribe.onclick = function() {
    event.preventDefault; 
    
    validateNewsletter();
}


