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
/* in các nút dot ra  */
function printdot() {
  for (let i = 0; i < productFeature.length; i++) {
    const dotControl = document.getElementById('dot-control');
    const createDiv = document.createElement('div');
    dotControl.appendChild(createDiv);
  }
}
printdot();
const dotControl = document.getElementById('dot-control');
const resetColorDot = num => {
  dotControl.children[num].style.backgroundColor = '#e2dfdf';
};

/*------------------------------------------ */
/*---------------------------------------- */
const nextSlideTop = document.querySelector('.next-slide-top');
const prevSlideTop = document.querySelector('.prev-slide-top');
const imgSlideTop = document.querySelector('.img-slide-top');
let slideIndex = 0;
const changeImgSlide = num => {
  imgSlideTop.src = productFeature[num].img;
  dotControl.children[num].style.backgroundColor = '#717171';
};
changeImgSlide(slideIndex);
/* xử lý nút netx trên slide */
const eventNextSlideTop = () => {
  if (slideIndex < productFeature.length - 1) {
    resetColorDot(slideIndex);
    changeImgSlide(slideIndex + 1);
    slideIndex++;
  } else {
    resetColorDot(slideIndex);
    changeImgSlide(0);
    slideIndex = 0;
  }
};
nextSlideTop.addEventListener('click', eventNextSlideTop);
/*------------------------------------------ */
/* Xử lý nút back trên slide*/
prevSlideTop.addEventListener('click', function () {
  if (slideIndex > 0 && slideIndex <= productFeature.length - 1) {
    resetColorDot(slideIndex);
    changeImgSlide(slideIndex - 1);
    slideIndex--;
  } else {
    resetColorDot(slideIndex);
    changeImgSlide(productFeature.length - 1);
    slideIndex = productFeature.length - 1;
  }
});
// Switch to the next slide every 60 seconds
//setInterval(eventNextSlideTop, 60000);
