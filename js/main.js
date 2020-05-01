const menu_toggle = document.querySelector(".header__menu");
//const nav_position = document.querySelector(".nav");

menu_toggle.onclick = function() {
    document.querySelector(".menu-button").classList.toggle("menu-button_active");
    document.querySelector(".navigation").classList.toggle("navigation_active");
    document.querySelector(".page").classList.toggle("page_adroop");
}