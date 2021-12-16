
//Product page 
const addToCartBtn = document.querySelector("#addToCart");  

addToCartBtn.onclick = function() {
    addToCartBtn.innerHTML = `Added to bag`; 
}

//Collection page 
const showMoreCollection = document.querySelector("#showMoreCollection"); 
const collectionContainer = document.querySelector("#collectionContainer");

showMoreCollection.addEventListener("click",showMore); 

function showMore() {
    if(collectionContainer.className === "open") {
        //Read less
        collectionContainer.className = ""; 
        showMoreCollection.innerHTML = "Show more"; 
    } else {
        collectionContainer.className = "open"; 
        showMoreCollection.innerHTML = ""; 
    }
}


