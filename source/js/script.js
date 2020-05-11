var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var navItems = document.querySelector(".navigation__items");
var navItemsVisible = document.querySelector(".navigation__items--visible");
var toggleOpen = document.querySelector(".navigation__toggle-open");
var toggleClose = document.querySelector(".navigation__toggle-close");
var navigation = document.querySelector(".navigation__container--not-js");
var form = document.querySelector(".form");
var header = document.querySelector(".page-header");
var popupSend = document.querySelector(".popup--send");
var popupError = document.querySelector(".popup--error");
var popupBtnSend = document.querySelector(".popup__btn--send");
var popupBtnError = document.querySelector(".popup__btn--error");

header.classList.remove("page-header--not-js");
navItemsVisible.classList.add("navigation__items--invisible");
navItemsVisible.classList.remove("navigation__items--visible");
nav.classList.remove("navigation--active");
navToggle.classList.add("navigation__toggle--js");
navigation.classList.remove("navigation__container--not-js");
toggleOpen.classList.remove("navigation__toggle-hide");
toggleClose.classList.add("navigation__toggle-hide");

navToggle.addEventListener("click", function() {
  nav.classList.toggle("navigation--active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("navigation__toggle-hide");
  toggleClose.classList.toggle("navigation__toggle-hide");
});

form.addEventListener('invalid', function() {
  popupError.classList.remove("popup--invisible");
}, true)

form.addEventListener("submit", function(){
  popupSend.classList.remove("popup--invisible");
});

popupBtnSend.addEventListener("click", function() {
  popupSend.classList.add("popup--invisible");
});

popupBtnError.addEventListener("click", function() {
  popupError.classList.add("popup--invisible");
});
