const loader = document.querySelector(".loader"); 
const contactUsContainer = document.querySelector(".contact-us-container"); 

contactUsContainer.style.display = "none"; 

setTimeout(function() {
    loader.className = "hidden";
    contactUsContainer.style.display = "";
},400);


