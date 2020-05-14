//const menu_toggle = document.querySelector(".header__menu");
//const nav_position = document.querySelector(".nav");

document.querySelector(".header__menu").onclick = function() {
    document.querySelector(".menu-button").classList.toggle("menu-button_active");
    document.querySelector(".nav").classList.toggle("nav_active");
    
    document.getElementById("button_categories").classList.remove("nav-button_active");
    document.getElementById("item_categories").classList.remove("nav__item_active");

    document.getElementById("button_authors").classList.remove("nav-button_active");
    document.getElementById("item_authors").classList.remove("nav__item_active");
}

document.getElementById("nav__button_categories").onclick = function() {
    document.getElementById("button_categories").classList.toggle("nav-button_active");
    document.getElementById("item_categories").classList.toggle("nav__item_active");
    
    document.getElementById("button_authors").classList.remove("nav-button_active");
    document.getElementById("item_authors").classList.remove("nav__item_active");
}

document.getElementById("nav__button_authors").onclick = function() {
    document.getElementById("button_authors").classList.toggle("nav-button_active");
    document.getElementById("item_authors").classList.toggle("nav__item_active");
    
    document.getElementById("button_categories").classList.remove("nav-button_active");
    document.getElementById("item_categories").classList.remove("nav__item_active");
}
