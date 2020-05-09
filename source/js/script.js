var nav = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation__toggle");
var navItems = document.querySelector(".navigation__items");
var navItemsVisible = document.querySelector(".navigation__items--visible");
var toggleOpen = document.querySelector(".navigation__img-toggle--open");
var toggleClose = document.querySelector(".navigation__img-toggle--close");
var navigation = document.querySelector(".navigation__container--not-js");

navItemsVisible.classList.add("navigation__items--invisible");
navItemsVisible.classList.remove("navigation__items--visible");

nav.classList.remove("navigation--active");

navToggle.classList.add("navigation__toggle--js");

navigation.classList.remove("navigation__container--not-js");

toggleOpen.classList.remove("navigation__img-toggle--hide");
toggleClose.classList.add("navigation__img-toggle--hide");

navToggle.addEventListener("click", function() {
  nav.classList.toggle("navigation--active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("navigation__img-toggle--invisible");
  toggleClose.classList.toggle("navigation__img-toggle--invisible");
});
