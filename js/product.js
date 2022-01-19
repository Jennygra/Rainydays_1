const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const productIdURL = "https://jennygramdal.coom/rainydays/wp-json/wc/store/products/" + id; 
const productDetailsContainer = document.querySelector(".product-specific-main"); 


async function productId() {
    try {
        const response = await fetch(productIdURL); 
        const results = await response.json; 

        console.log(results);

    } catch(error) {
        console.log("error"); 
    }
}

productId()