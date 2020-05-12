/* Отключен JS */
var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var navItems = document.querySelector(".navigation__items");
var navItemsVisible = document.querySelector(".navigation__items--visible");
var toggleOpen = document.querySelector(".navigation__toggle-open");
var toggleClose = document.querySelector(".navigation__toggle-close");
var navigation = document.querySelector(".navigation__container--not-js");
var form = document.querySelector(".form");
var header = document.querySelector(".page-header");
var map = document.querySelector(".contacts__map-frame--no-js");

/* Форма */
var popupSend = document.querySelector(".popup--send");
var popupError = document.querySelector(".popup--error");
var popupBtnSend = document.querySelector(".popup__btn--send");
var popupBtnError = document.querySelector(".popup__btn--error");
var formBtn = document.querySelector(".form__btn");
var inputElems = document.querySelectorAll(".form__input-required");
var inputArray = Array.prototype.slice.call(inputElems);

/* JS отключен */
header.classList.remove("page-header--not-js");
navItemsVisible.classList.add("navigation__items--invisible");
navItemsVisible.classList.remove("navigation__items--visible");
nav.classList.remove("navigation--active");
navToggle.classList.add("navigation__toggle--js");
navigation.classList.remove("navigation__container--not-js");
toggleOpen.classList.remove("navigation__toggle-hide");
toggleClose.classList.add("navigation__toggle-hide");
map.classList.remove("contacts__map-frame--no-js");

/* Навигация (mobile, tablet) */
navToggle.addEventListener("click", function() {
  nav.classList.toggle("navigation--active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("navigation__toggle-hide");
  toggleClose.classList.toggle("navigation__toggle-hide");
});

/* Работа с формой */
formBtn.addEventListener("click", function() {
  var isAllInputsRequired = inputElems.every(function(input) {
    return input.require;
  });
  if (isAllInputsRequired) {
    popupSend.classList.toggle("popup--invisible");
  } else {
    popupError.classList.toggle("popup--invisible");
  }
});

form.addEventListener("submit", function(evt){
  evt.preventDefault();
});

popupBtnSend.addEventListener("click", function() {
  popupSend.classList.add("popup--invisible");
});

popupBtnError.addEventListener("click", function() {
  popupError.classList.add("popup--invisible");
});
