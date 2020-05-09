/* Панель навигации */
var nav = document.querySelector(".navigation");
/* Кнопка-бургер */
var navToggle = document.querySelector(".navigation__toggle");
/* Пункты меню*/
var navItems = document.querySelector(".navigation__items");
var navItemsVisible = document.querySelector(".navigation__items--visible");
/* Изображения кнопки-бургера */
var toggleOpen = document.querySelector(".navigation__img-toggle--open");
var toggleClose = document.querySelector(".navigation__img-toggle--close");

/* Скрытие пунктов меню */
navItemsVisible.classList.add("navigation__items--invisible");
navItemsVisible.classList.remove("navigation__items--visible");

/* Смена фота панели навигации при включенном JS */
nav.classList.remove("navigation--active");

/* Показ кнопки-бургера при включенном JS */
navToggle.classList.add("navigation__toggle--js");

/* Переключение видимости изображений у кнопки-бургера при включенном JS */
toggleOpen.classList.toggle("navigation__img-toggle--invisible");
toggleClose.classList.toggle("navigation__img-toggle--invisible");

navToggle.addEventListener("click", function() {
  nav.classList.toggle("navigation--active");
  navItems.classList.toggle("navigation__items--visible");
  toggleOpen.classList.toggle("navigation__img-toggle--invisible");
  toggleClose.classList.toggle("navigation__img-toggle--invisible");
});
