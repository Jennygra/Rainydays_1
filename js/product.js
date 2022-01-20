
const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const productIdURL = "https://jennygramdal.com/rainydays/wp-json/wc/store/products/" + id; 

const productDetailsContainer = document.querySelector(".product-specific"); 
const productInfoContainer = document.querySelector(".product-info"); 

async function productId() {
    try {
        const response = await fetch(productIdURL); 
        const results = await response.json(); 

        newHTML(results);

    } catch(error) {
        console.log("Ops! An error occurred"); 
    }
}

productId()

function newHTML(results) {
    productDetailsContainer.innerHTML += `
        <div class="blue-jacket-img-thumbnails-1"> 
            <img src="${results.images[0].src}" alt="${results.images[0].alt}">
            </div>
        </div>
    `; 

    productInfoContainer.innerHTML += `
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <h4>${results.name}</h4>
        <p>Nok ${results.prices.price}</p>
        <img src="Images/ratingStars.png" alt="ratings">
    `;
}
