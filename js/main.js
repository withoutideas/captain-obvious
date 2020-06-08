const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

const authorsButton = document.getElementById('authors-button');
const authorsList = document.getElementById('authors-list');

const categoriesButton = document.getElementById('categories-button');
const categoriesList = document.getElementById('categories-list');

const themeButton = document.getElementById('theme-button');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('nav__button_menu_active');
    menuList.classList.toggle('nav__list_active');
});

authorsButton.addEventListener('click', () => {
    authorsButton.classList.toggle('nav__button_active');
    authorsList.classList.toggle('nav__list_active');
});

categoriesButton.addEventListener('click', () => {
    categoriesButton.classList.toggle('nav__button_active');
    categoriesList.classList.toggle('nav__list_active');
});

themeButton.addEventListener('click', () => {
    themeButton.classList.toggle('nav__button_active');
});
















/* const menuToggle = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("nav_active");
    menuToggle.classList.toggle("header__menu_active");

});

document.querySelector(".main").addEventListener("click", () => {

    nav.classList.remove("nav_active");
    menuToggle.classList.remove("header__menu_active");

});

nav.addEventListener("click", function(event) {

    const navItem = event.target.closest(".nav__item_list");
    const navButton = event.target.closest(".nav__button");

    if (navButton && navItem) {
        navItem.classList.toggle("nav__item_list_active");
        navButton.classList.toggle("nav__button_active");

    }
});

const navButton = nav.querySelector(".nav__button_theme");

navButton.addEventListener("click", function(event) {

        navButton.classList.toggle("nav__button_active");
}); */
