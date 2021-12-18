//Newsletter form
const newsletterForm = document.querySelector("#newsletterForm"); 
const emailNewsletter = document.querySelector("#emailNewsletter"); 
const emailErrorNewsletter = document.querySelector("#emailErrorNewsletter"); 

function validateNewsletter() {
    event.preventDefault; 

    let isValidated = true; 

    if(validateEmail(emailNewsletter.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        isValidated = false;
    }

    return isValidated; 
}

newsletterForm.addEventListener("subscribe", validateNewsletter); 


// const newsletterContainer = document.querySelector(".footer_update");

// function newsletterBtnFunction() {
//     if(!validateNewsletter()) {
//         return false; 
//     } else {
//         console.log("hello");
//         newsletterForm.innerHTML = "<div>Submitted</div>";
//     }
// }