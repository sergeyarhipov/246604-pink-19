var navToggle = document.querySelector(".navigation__toggle");
var nav = document.querySelector(".navigation");
var navItems = document.querySelector(".navigation__items");
var navItemsVisible = document.querySelector(".navigation__items--visible");
var navActive = document.querySelector(".navigation__nav-active");
var toggleOpen = document.querySelector(".navigation__img-toggle--open");
var toggleClose = document.querySelector(".navigation__img-toggle--close");

navItemsVisible.classList.add("navigation__items--invisible");
navItemsVisible.classList.remove("navigation__items--visible");
navActive.classList.remove("navigation__nav-active");
toggleOpen.classList.toggle("navigation__img-toggle--invisible");
toggleClose.classList.toggle("navigation__img-toggle--invisible");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("navigation__toggle--active");
  nav.classList.toggle("navigation__nav-active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("navigation__img-toggle--invisible");
  toggleClose.classList.toggle("navigation__img-toggle--invisible");
});
