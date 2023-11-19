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
  name: 'Tesla Model S',
  price: 5000,
  color: 'gold',
  img: '../img/tesla.jpg',
};
const bmw = {
  name: 'BMW Z4 2021 Sdrive30i 2.0',
  price: 6000,
  color: 'blue',
  img: '../img/bmw.jpg',
};
const ford = {
  name: 'Ford Ranger Wildtrak',
  price: 7000,
  color: 'blue',
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
/****************************************** */
/* In lớp phủ văn bản trên slide */
const txtNameProductFeature = document.querySelector('.nameProduct');
const txtPriceProductFeature = document.querySelector('.price');
const inputInfoText = num => {
  txtNameProductFeature.textContent = productFeature[num].name;
  txtPriceProductFeature.textContent = Math.trunc(
    productFeature[num].price / 12
  );
};

/*------------------------------------------ */
/*---------------------------------------- */
const nextSlideTop = document.querySelector('.next-slide-top');
const prevSlideTop = document.querySelector('.prev-slide-top');
const imgSlideTop = document.querySelector('.img-slide-top');
let slideIndex = 0;
const changeImgSlide = num => {
  imgSlideTop.src = productFeature[num].img;
  inputInfoText(num);
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
// slide tự nhảy ảnh mỗi 1 phút 1 lần
setInterval(eventNextSlideTop, 60000);

/*-------------------------------------------------- */
