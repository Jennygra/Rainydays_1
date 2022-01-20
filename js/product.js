
const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const productIdURL = "https://jennygramdal.com/rainydays/wp-json/wc/store/products?id=" + id; 

console.log(productIdURL);

const productDetailsContainer = document.querySelector(".product-specific"); 
const productInfoContainer = document.querySelector(".product-info"); 

async function productId() {
    try {
        const response = await fetch(url); 
        const results = await response.json(); 

        // for(let i = 0; i < results.length; i++) {
        //     const productById = results[i].id; 

        //     console.log(productById);
        //     newHTML();
        // }

    } catch(error) {
        console.log("Ops! An error occurred"); 
    }
}

productId()

function newHTML() {
    productDetailsContainer.innerHTML += `
        <div class="blue-jacket-img-thumbnails-1"> 
            <img src="${product.images[0].src}" alt="${product.images[0].alt}">
            </div>
        </div>
    `; 

    productInfoContainer.innerHTML += `
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <h4>${product.name}</h4>
        <p>Nok ${product.prices.price}</p>
        <img src="Images/ratingStars.png" alt="ratings">
    `;
}
