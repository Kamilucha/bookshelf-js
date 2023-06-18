// посилання на елементи
const btnBurgerMenu = document.querySelector(`.button-menu`) 
const mobileMenu = document.querySelector(`.menu-container`) 
const btnCloseMenu = document.querySelector(`.btn-menu-close`) 
const navLink = document.querySelector(`.nav-list`)


// додаємо обробника подій на кнопку бургера 
btnBurgerMenu.addEventListener(`click`, onBtnBurgerClick) 
 
 function onBtnBurgerClick() { 
     mobileMenu.classList.add(`js-open-menu`) 
     btnBurgerMenu.style.display.none; 
     btnCloseMenu.style.display.block;
 
} 
 
// додаємо обробника подій на кнопку закриття меню
btnCloseMenu.addEventListener(`click`, onBtnCloseMenuClick) 
 
function onBtnCloseMenuClick() { 
    btnCloseMenu.classList.remove(`js-open-menu`) 
    btnBurgerMenu.style.display.block; 
     btnCloseMenu.style.display.none;
} 
 
// додаємо обробника подій на посилання з навігаціі
navLink.addEventListener(`click`, onNavLinkClick )

function onNavLinkClick() {
    navLink.classList.add(`active`)
}