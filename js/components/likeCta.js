const likeBtnContainer = document.querySelector(".likeCta"); 

likeBtnContainer.onclick = function() {
    console.log("hello");
    likeBtnContainer.innerHTML += `<img src="Images/home-page-img/Like-button-hover.png" alt="Liked">`;
}
