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
dropBtn.addEventListener('mouseover', function () {
  dropDownContent.classList.remove('hiden');
});
dropDownContent.addEventListener('mouseleave', function () {
  dropDownContent.classList.add('hiden');
});
