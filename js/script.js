const url = "https://jennygramdal.com/rainydays/wp-json/wc/store/products"; 
const featureProductContainer = document.querySelector(".homepage-feature-collection-container"); 
const featureCollectionCta = document.querySelector(".feature-collectionCta");

async function getProducts() {
    try{
        const response = await fetch(url); 
        const getResults = await response.json(); 
        createHTML(getResults);
    } catch(error) {
        console.log("Ops! An error occurred");
        featureProductContainer.innerHTML = "";
        featureCollectionCta.innerHTML = "";
    }
}

getProducts();

function createHTML(products) {
    products.forEach(function(product) {
        featureProductContainer.innerHTML += `
            <a href="product.html?id=${products.id}" class="feature-collection">
            <img src="${product.images[0].src}" alt="${product.images[0].alt}">
        
            <div>
            <p>${product.categories.name}<p>
            <h4>${product.name}<h4>
            <p>Nok ${product.prices.price}<p>
            </div>
        
            <div class="likeCta">
            <i onclick="liked(this)" class="far fa-heart" id="likeIcon"></i>
            </div>
            </a>
            `;
    });
}

