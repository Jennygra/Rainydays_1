
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

const moreCommentCta = document.querySelector(".more-comment-cta"); 
const commentCarouselSubcontainer = document.querySelector(".comment-carousel-subcontainer"); 

moreCommentCta.addEventListener("click", function() {
    commentCarouselSubcontainer.scrollTop += 200; 
}); 

commentCarouselSubcontainer.addEventListener("scroll", function() {
    const isScrolling = this.scrollTop; 
    
    if(isScrolling === 738) {
        moreCommentCta.style.display = "none"; 
    } 
}); 