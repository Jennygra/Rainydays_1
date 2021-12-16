const loader = document.querySelector(".loader"); 
const checkoutSuccessContainer = document.querySelector(".Checkout-success-main"); 

checkoutSuccessContainer.style.display = "none"; 

setTimeout(function() {
    loader.className = "hidden";
    checkoutSuccessContainer.style.display = "";
}, 600);
