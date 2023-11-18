'use strict';
const hideBgMenu = document.querySelector('.layer-under-menu');
function modifyBgMenuHeight() {
  if (document.documentElement.scrollTop > 50) {
    hideBgMenu.style.height = '70px';
  } else if (document.documentElement.scrollTop < 10) {
    hideBgMenu.style.height = '100px';
  }
}
window.onscroll = function () {
  modifyBgMenuHeight();
};

/*------------Slide show home---------------- */
const tesla = {
  name: 'tesla',
  price: 5000,
  color: 'green',
  img: '../img/tesla.jpg',
};
const bmw = {
  name: 'bmw',
  price: 6000,
  color: 'blue',
  img: '../img/bmw.jpg',
};
const ford = {
  name: 'ford',
  price: 7000,
  color: 'yellow',
  img: '../img/ford.jpg',
};
const productFeature = [tesla, bmw, ford];
let slideIndex = 1;
const nextSlideTop = document.querySelector('.next-slide-top');
const prevSlideTop = document.querySelector('.prev-slide-top');
const imgSlideTop = document.querySelector('.img-slide-top');
console.log(nextSlideTop);
console.log(imgSlideTop);
// imgSlideTop.src = productFeature[0].img;
nextSlideTop.addEventListener('click', function () {
  if (slideIndex == productFeature.length) {
    imgSlideTop.src = productFeature[0].img;
    slideIndex = 0;
  }
  if (slideIndex < productFeature.length) {
    imgSlideTop.src = productFeature[slideIndex].img;
    slideIndex++;
  }
});
prevSlideTop.addEventListener('click', function () {
  if (slideIndex == 1) {
    imgSlideTop.src = productFeature[productFeature.length - 1].img;
    slideIndex = productFeature.length;
  }
  if (slideIndex > 1) {
    imgSlideTop.src = productFeature[slideIndex - 1].img;
    slideIndex--;
  }
});
// Autoplay (optional)
// Switch to the next slide every 3 seconds
// setInterval(nextSlide, 1000);
