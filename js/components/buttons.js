
//Product page 
const addToCartBtn = document.querySelector("#addToCart");  

const colorChoicesContainer = document.querySelector("#colorSelect"); 
const sizeChoicesContainer = document.querySelector("#sizeSelect");

const colorError = document.querySelector("#colorError"); 
const sizeError = document.querySelector("#sizeError");

function productSelection() {
    event.preventDefault(); 

    let isSelected = true; 

    if(colorChoicesContainer.value > 0) {
        colorError.style.display = "none"; 
    } else {
        colorError.style.display = "block"; 
        return false
    }

    if(sizeChoicesContainer.value > 0) {
        sizeError.style.display = "none"; 
    } else {
        sizeError.style.display = "block"; 
        return false; 
    }

    return isSelected; 
}

function addToCart() {
    if(!productSelection()) {
        return false; 
    } else {
        addToCartBtn.innerHTML = `Added to bag`; 
    }
}

function buyNow() {
    if(!productSelection()) {
        return false; 
    } else {
        location.href = "cart.html";
    }
}



// //Collection page 
// const showMoreCollection = document.querySelector("#showMoreCollection"); 
// const collectionContainer = document.querySelector("#collectionContainer");

// showMoreCollection.addEventListener("click",showMore); 

// function showMore() {
//     if(collectionContainer.className === "open") {
//         //Read less
//         collectionContainer.className = ""; 
//         showMoreCollection.innerHTML = "Show more"; 
//     } else {
//         collectionContainer.className = "open"; 
//         showMoreCollection.innerHTML = ""; 
//     }
// }


