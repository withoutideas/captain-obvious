const menuToggle = document.querySelector(".header__menu");
const nav = document.querySelector(".nav");
const menuButton = document.querySelector(".menu-button");

menuToggle.addEventListener("click", function() {

    nav.classList.toggle("nav_active");
    menuToggle.classList.toggle("header__menu_active");

});

document.querySelector(".main").addEventListener("click", function() {

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
});