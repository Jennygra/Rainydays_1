const url = "https://jennygramdal.com/rainydays/wp-json/wc/store/products"; 
const featureProductContainer = document.querySelector(".homepage-feature-collection-container"); 
const featureCollectionCta = document.querySelector(".feature-collectionCta");

async function getProducts() {
    try{
        const response = await fetch(url); 
        const getResults = await response.json(); 

        for(let i = 0; i < getResults.length; i++) {
            const productId = getResults[i].id;
            const name = getResults[i].name; 
            const price = getResults[i].prices.price; 
            const productImg = getResults[i].images[0].src; 
            const productImgAlt = getResults[i].images[0].alt; 

            featureProductContainer.innerHTML += `
            <a href="product.html?id=${productId}" class="feature-collection">
            <img src="${productImg}" alt="${productImgAlt}">
        
            <div>
            <h4>${name}<h4>
            <p>Nok ${price}<p>
            </div>
        
            <div class="likeCta">
            <i onclick="liked(this)" class="far fa-heart" id="likeIcon"></i>
            </div>
            </a>
            `; 
        }
        
    } catch(error) {
        console.log("Ops! An error occurred");
        featureProductContainer.innerHTML = "";
        featureCollectionCta.innerHTML = "";
    }
}

getProducts();


