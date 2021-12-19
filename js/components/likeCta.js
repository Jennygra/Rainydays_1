// const likeIcon = document.querySelector("#likeIcon"); 

// likeIcon.addEventListener('click',liked);

// function liked() {
//     console.log("hello");
//     likeIcon.innerHTML += `<i class="fas fa-heart"></i>`;
// }

let liked = function(icon) {
    icon.classList.toggle('fas fa-heart');
}