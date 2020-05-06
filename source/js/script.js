var navToggle = document.querySelector(".navigation__toggle");
var nav = document.querySelector(".navigation");
var navItems = document.querySelector(".navigation__items");
var toggleOpen = document.querySelector(".toggle-open");
var toggleClose = document.querySelector(".toggle-close");


navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("navigation__toggle--active");
  nav.classList.toggle("navigation__nav-active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("toggle-open--invisible");
  toggleClose.classList.toggle("toggle-close--visible");
});

