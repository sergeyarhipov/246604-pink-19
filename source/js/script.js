var navToggle = document.querySelector(".navigation__toggle");
var nav = document.querySelector(".navigation");
var navItems = document.querySelector(".navigation__items");

navToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  navToggle.classList.toggle("navigation__toggle--active");
  nav.classList.toggle("navigation__nav-active");
  navItems.classList.toggle("navigation__items--visible");
});
