const url = "http://jennygramdal.com/rainydays/wp-json/wc/store/products"; 
const featureProductContainer = document.querySelector(".homepage-feature-collection-container"); 

async function getProducts(){
    try{
        const response = await fetch(url); 
        const getResults = await response.json(); 
        createHTML(getResults);
    } 

    catch(error) {
        console.log("This is an error");
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        featureProductContainer.innerHTML += `
            <div class="feature-collection">
            <img src="${product.images[0].src}" alt="${product.images[0].alt}">
        
            <div>
            <p>woman/men<p>
            <h4>${product.name}<h4>
            <p>Nok ${product.prices.price}<p>
            </div>
        
            <div class="likeCta">
            <i onclick="liked(this)" class="far fa-heart" id="likeIcon"></i>
            </div>
            </div>
            `;
    });
}
