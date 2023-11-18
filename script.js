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
const dropBtn = document.querySelector('.drop-btn');

const dropDownContent = document.querySelector('.dropdown-content');

function hideDropdown(){
  dropDownContent.style.display = "none";
}

function showDropdown(){
  dropDownContent.style.display = "block";
}
// dropBtn.addEventListener('mouseover', function () {
//   dropDownContent.classList.remove('hiden');
// });
// dropDownContent.addEventListener('mouseleave', function () {
//   dropDownContent.classList.add('hiden');
// });
/*------------Slide show home---------------- */
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
function nextSlide() {
  for (let i = 0; i < slideIndex.length; i++) {
    showSlides(i + 1);
  }
}
// Autoplay (optional)
// Switch to the next slide every 3 seconds
setInterval(nextSlide, 1000);
