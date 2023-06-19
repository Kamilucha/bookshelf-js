// посилання на елементи
const btnOpenMenu = document.querySelector('.button-menu');
const mobileMenu = document.querySelector('.menu-container');
const btnCloseMenu = document.querySelector('.btn-menu-close');

// додаємо обробника подій на кнопки бургера і закриття меню
btnOpenMenu.addEventListener('click', toggleMenu);
btnCloseMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  mobileMenu.classList.toggle('js-open-menu');
  if (mobileMenu.classList.contains('js-open-menu')) {
    // btnOpenMenu.style.display.none;
    // btnCloseMenu.style.display.block;
  }
}

// отримаємо посилання з навігаціі і додаємо обробника подій
const navigationLink = document.querySelectorAll('.nav-item');

navigationLink.forEach(link => link.addEventListener('click', onNavLinkClick));

function onNavLinkClick() {
  navigationLink.classList.add('active');
}



// отримаємо посилання на чекбокс і додаємо обробника подій
const checkboxLabel = document.querySelector('.checkbox-label')
checkbox.addEventListener('click', onCheckboxClick)

function onCheckboxClick() {
    checkboxLabel.classList.toggle('active-check')
}
