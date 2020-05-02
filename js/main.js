//const menu_toggle = document.querySelector(".header__menu");
//const nav_position = document.querySelector(".nav");

document.querySelector(".header__menu").onclick = function() {
    document.querySelector(".menu-button").classList.toggle("menu-button_active");
    document.querySelector(".navigation").classList.toggle("navigation_active");
    document.querySelector(".page").classList.toggle("page_adroop");
}

document.querySelector(".navigation__item").onclick = function() {
}