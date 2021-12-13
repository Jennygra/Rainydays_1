const productData = [
    {
        name: "Jacket",
        cost: 999,
        image:"productlist-product1.jpg", 
        size: "S",
        sex: "Mens"
    }, 
    {
        name: "Blue Jacket",
        cost: 699,
        image:"productlist-product2.jpg", 
        size: "S",
        sex: "Mens"
    }, 
    {
        name: "Running Jacket",
        cost: 599,
        image:"productlist-product3.jpg", 
        size: "M",
        sex: "Mens"
    }, 
    {
        name: "Blackie",
        cost: 199,
        image:"productlist-product4.jpg", 
        size: "L",
        sex: "Mens"
    }, 
    {
        name: "Jacket",
        cost: 999,
        image:"productlist-product1.jpg", 
        size: "S",
        sex: "Mens"
    }, 
    {
        name: "Blue Jacket",
        cost: 699,
        image:"productlist-product2.jpg", 
        size: "S",
        sex: "Mens"
    }, 
    {
        name: "Running Jacket",
        cost: 599,
        image:"productlist-product3.jpg", 
        size: "M",
        sex: "Mens"
    }, 
    {
        name: "Blackie",
        cost: 199,
        image:"productlist-product4.jpg", 
        size: "L",
        sex: "Mens"
    }, 
]; 

const featureProductContainer = document.querySelector(".homepage-feature-collection-container"); 


for(let i = 0; i < productData.length; i++) {
    const name = productData[i].name; 
    const price = productData[i].cost;
    const sex = productData[i].sex;
    const productImg = productData[i].image;

    featureProductContainer.innerHTML += `
    <div class="feature-collection">
    <a href="product.html"><img src="images/collection-page/${productImg}" alt="product image of the Blue Jacket"></a>

    <div>
    <p>${sex}<p>
    <h4>${name}<h4>
    <p>${price}<p>
    </div>

    <div class="likeCta">
    <img src="Images/home-page-img/Like-button-default.png" alt="Like button">
    </div>
    </div>
    `;
}


const seeMoreBtn = document.querySelector(".seeMoreBtn"); 

seeMoreBtn.onclick = function() {
    location.href="collection.html";
}

const newsletterForm = document.querySelector("#newsletterForm"); 

const email = document.querySelector("#email"); 
const emailError = document.querySelector("#emailError"); 

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



