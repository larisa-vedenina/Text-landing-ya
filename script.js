const gap = 20;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev"),
  arrow = document.getElementById("arrow");

next.addEventListener("click", e => {
carousel.scrollBy(395 + gap, 0);
});

prev.addEventListener("click", e => {
carousel.scrollBy(-(395 + gap), 0);
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


const carouselM = document.getElementById("carouselM"),
  contentM = document.getElementById("contentM"),
  nextM = document.getElementById("nextM"),
  prevM = document.getElementById("prevM"),
  arrowM = document.getElementById("arrowM");

nextM.addEventListener("click", e => {
carouselM.scrollBy(355 + gap, 0);
});

prevM.addEventListener("click", e => {
carouselM.scrollBy(-(355 + gap), 0);
});

let widthM = carouselM.offsetWidth;
window.addEventListener("resize", e => (widthM = carouselM.offsetWidth));








