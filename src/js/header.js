import { doc } from "firebase/firestore";

// отримаємо посилання на кнопку меню і додаємо слухача
const mobileMenu = document.querySelector('.menu-container');
const btmMenu = document.querySelector('.button-menu');
const btnLogin = document.querySelector('.button-log');
const btnUser = document.querySelector('.button-user');
const iconUser = document.querySelector('.icon-user-login');
const userWrapper = document.querySelector('.user-login-wrapper')


btmMenu.addEventListener('click', onBtnMenuClick)

function onBtnMenuClick() {
  btmMenu.classList.toggle('active')
  mobileMenu.classList.toggle('is-open')
  if (mobileMenu.classList.contains('is-open')) {
    btnLogin.classList.remove('button-log-2')

    if (btnLogin.classList.contains('none')) {
      btnUser.style.display = 'flex'
  iconUser.classList.add('block')
  userWrapper.classList.add('flex')
    }

    return
  }
  btnLogin.classList.add('button-log-2')
  btnUser.style.display = 'none'
  iconUser.classList.remove('block')
  userWrapper.classList.remove('flex')
}


// отримаємо посилання на навігацію і додаємо слухача
// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll('.nav-item')
//   .forEach(link => {

//     if (link.href === activePage) {
//       link.setAttribute('aria-current','page')
//     }
// })

