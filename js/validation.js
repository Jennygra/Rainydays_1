function formChecker(value,len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email,emailCheckout) {
    const regEx = /\S+@\S+\.\S+/; 
    const patternMatches = regEx.test(email,emailCheckout,emailNewsletter); 
    return patternMatches;
}
