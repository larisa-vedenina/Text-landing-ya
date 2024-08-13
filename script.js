// const arrowLeft = document.querySelector(".button-arrow-left"),
//     arrowRight = document.querySelector(".button-arrow-right"),
//     sliderList = document.querySelectorAll(".participants__slider-list"),
//     left = 200,
//     itemWidth = 394;

// slideTo = (direction) => {
//     if(direction == "left") {
//         left = left - itemWidth;
//     }
//     if(direction == "right") left += itemWidth;

//     if(left < -1400) left = 0;
//     if(left > 0) left = -1400;
//     sliderList.style.left = left + "px";
// }

// arrowLeft.addEventListener("click", () => {
//     slideTo("left");
// });

// arrowRight.addEventListener("click", () => {
//     slideTo("right");
// });

const gap = 20;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev"),
  arrow = document.getElementById("arrow");

next.addEventListener("click", e => {
  carousel.scrollBy(395 + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
});

prev.addEventListener("click", e => {
  carousel.scrollBy(-(395 + gap), 0);
//   if (carousel.scrollLeft - width - gap <= 0) {
//     prev.style.display = "flex";
//   }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
