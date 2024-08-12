const arrowLeft = document.querySelector(".button-arrow-left"),
    arrowRight = document.querySelector(".button-arrow-right"),
    sliderList = document.querySelectorAll(".participants__slider-list"),
    left = 200,
    itemWidth = 394;

slideTo = (direction) => {
    if(direction == "left") {
        left = left - itemWidth;
    }
    if(direction == "right") left += itemWidth;

    if(left < -1400) left = 0;
    if(left > 0) left = -1400;
    sliderList.style.left = left + "px";
}

arrowLeft.addEventListener("click", () => {
    slideTo("left");
});

arrowRight.addEventListener("click", () => {
    slideTo("right");
});