// отримаємо посилання на кнопку меню і додаємо слухача
const mobileMenu = document.querySelector('.menu-container');
const btmMenu = document.querySelector('.button-menu')

btmMenu.addEventListener('click', onBtnMenuClick)

function onBtnMenuClick() {
  btmMenu.classList.toggle('active')
  mobileMenu.classList.toggle('is-open')
}


// отримаємо посилання на навігацію і додаємо слухача
// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll('.nav-item')
//   .forEach(link => {

//     if (link.href === activePage) {
//       link.setAttribute('aria-current','page')
//     }
// })

