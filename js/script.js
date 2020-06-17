const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');

const authorsButton = document.getElementById('authors-button');
const authorsList = document.getElementById('authors-list');
const authorsIcon = document.getElementById('authors-icon');

const categoriesButton = document.getElementById('categories-button');
const categoriesList = document.getElementById('categories-list');
const categoriesIcon = document.getElementById('categories-icon');

const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('nav__button_active');
    menuList.classList.toggle('nav__list_active');

    authorsList.classList.remove('nav__list_active');
    authorsIcon.classList.remove('nav__icon_list_active');
    
    categoriesList.classList.remove('nav__list_active');
    categoriesIcon.classList.remove('nav__icon_list_active');
});

window.addEventListener('scroll', () => {
    menuButton.classList.remove('nav__button_active');
    menuList.classList.remove('nav__list_active');

    authorsList.classList.remove('nav__list_active');
    authorsIcon.classList.remove('nav__icon_list_active');
    
    categoriesList.classList.remove('nav__list_active');
    categoriesIcon.classList.remove('nav__icon_list_active');
});

authorsButton.addEventListener('click', () => {
    authorsList.classList.toggle('nav__list_active');
    authorsIcon.classList.toggle('nav__icon_list_active');
});

categoriesButton.addEventListener('click', () => {
    categoriesList.classList.toggle('nav__list_active');
    categoriesIcon.classList.toggle('nav__icon_list_active');
});

// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
}

// When someone clicks the button
themeButton.addEventListener('click', () => {
    themeIcon.classList.toggle('nav__icon_theme_active');
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
        disableDarkMode(); 
    }
});
