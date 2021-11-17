"use strict";

// Természetesen babellel ezt is kompatibilisebbé tenném a régebbi böngészőkkel
// Slider ***********************
// selectors
var slider = document.querySelector('.slider');
var imgs = document.querySelectorAll('.slider .card');
var btnR = document.querySelector('.btn-right');
var btnL = document.querySelector('.btn-left'); // counter

var currentCard = 1;
var gapSize = 40;

function positionSlider() {
  if (window.getComputedStyle(btnL, null).display !== "none") {
    var cardsiz = imgs[0].clientWidth;
    slider.style.transform = "translateX(" + (-cardsiz * currentCard - currentCard * gapSize) + "px)";
  } else {
    slider.style.transform = "translateX(0px)";
  }
} // listeners


btnR.addEventListener("click", function () {
  if (currentCard >= imgs.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  currentCard++;
  positionSlider();
});
btnL.addEventListener("click", function () {
  if (currentCard <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  currentCard--;
  positionSlider();
});
slider.addEventListener("transitionend", function () {
  if (imgs[currentCard].id === "last-card-clone") {
    slider.style.transition = "none";
    currentCard = imgs.length - 2;
    positionSlider();
  }

  if (imgs[currentCard].id === "first-card-clone") {
    slider.style.transition = "none";
    currentCard = imgs.length - currentCard;
    positionSlider();
  }
});
positionSlider();
window.onresize = positionSlider;