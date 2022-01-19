const queryString = document.location.search; 
const params = new URLSearchParams(queryString); 
const id = params.get("id"); 
const productIdURL = "https://jennygramdal.com/rainydays/wp-json/wc/store/products/" + id; 

const productDetailsContainer = document.querySelector(".product-specific"); 

console.log(id);

async function productId() {
    try {
        const response = await fetch(productIdURL); 
        const results = await response.json; 

        newHTML(results);

        console.log(results);

    } catch(error) {
        console.log("Ops! An error occurred"); 
    }
}

productId()

function newHTML() {

}
