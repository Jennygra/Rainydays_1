//Newsletter form
const newsletterForm = document.querySelector("#newsletterForm"); 
const emailNewsletter = document.querySelector("#newsletter"); 
const newsletterError = document.querySelector("#newsletterError"); 

function validateNewsletter() {
    event.preventDefault(); 

    let isValidated = true; 

    if(validateEmail(emailNewsletter.value) === true){
        newsletterError.style.display = "none";
    } else {
        newsletterError.style.display = "block";
        isValidated = false;
    }

    return isValidated; 
}

const newsletterContainer = document.querySelector(".footer_update");
const submitBtn = document.querySelector(".subscribe");

function newsletterBtnFunction() {
    if(!validateNewsletter()) {
        return false; 
    } else {
        newsletterForm.innerHTML = `
        <div class="newsletter-success-msg">Submitted</div>
        `;
    }
}


submitBtn.addEventListener("click", newsletterBtnFunction); 