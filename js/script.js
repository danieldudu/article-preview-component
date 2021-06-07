const btn = document.querySelector(".card__share-btn");
const menu = document.querySelector(".card__share-menu");
function toggleShare() {
  btn.classList.toggle("card__share-btn--active");
  menu.classList.toggle("hidden");
} 

btn.addEventListener('click', toggleShare);