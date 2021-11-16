// Természetesen babellel ezt is kompatibilisebbé tenném a régebbi böngészőkkel
// selectors
const slider = document.querySelector('.slider');
const imgs = document.querySelectorAll('.slider .card');
const btnR = document.querySelector('.btn-right');
const btnL = document.querySelector('.btn-left');

// counter
let currentCard = 1;
const gapSize = 40;

function positionSlider() {
if (window.getComputedStyle(btnL, null).display !== "none"){
const cardsiz = imgs[0].clientWidth;
slider.style.transform = "translateX(" + (-cardsiz * currentCard - currentCard * gapSize) + "px)";
} else {
  slider.style.transform = "translateX(0px)";
}
}

// listeners

btnR.addEventListener("click", () => {
  if (currentCard >= imgs.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  currentCard++;
  positionSlider();
})

btnL.addEventListener("click", () => {
  if (currentCard <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  currentCard--;
  positionSlider();
})

slider.addEventListener("transitionend", () => {
if (imgs[currentCard].id === "last-card-clone"){
  slider.style.transition = "none";
  currentCard = imgs.length - 2;
  positionSlider();
}
if (imgs[currentCard].id === "first-card-clone"){
  slider.style.transition = "none";
  currentCard = imgs.length - currentCard;
  positionSlider();
}
})

positionSlider();
window.onresize = positionSlider;