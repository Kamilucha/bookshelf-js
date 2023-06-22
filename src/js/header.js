import { doc } from "firebase/firestore";
// отримаємо посилання на кнопку меню і додаємо слухача
// const mobileMenu = document.querySelector('.menu-container');
// const btmMenu = document.querySelector('.button-menu')

// btmMenu.addEventListener('click', onBtnMenuClick)

// function onBtnMenuClick() {
//   btmMenu.classList.toggle('active')
//   mobileMenu.classList.toggle('is-open')
// }


// отримаємо посилання на навігацію і додаємо слухача
// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll('.nav-item')
//   .forEach(link => {

//     if (link.href === activePage) {
//       link.setAttribute('aria-current','page')
//     }
// })




const mobileMenu = document.querySelector('.menu-container');
const btmMenu = document.querySelector('.button-menu');
const btnLogin = document.querySelector('.button-log');
const btnUser = document.querySelector('.button-user');
const iconUser = document.querySelector('.icon-user-login');
const userWrapper = document.querySelector('.user-login-wrapper');
const greet = document.querySelector('.greeting');

const btnWrapper = document.querySelector('.log-in-btns-wrepper');

btmMenu.addEventListener('click', onBtnMenuClick)

function onBtnMenuClick() {
  btmMenu.classList.toggle('active')
  mobileMenu.classList.toggle('is-open')
  if (mobileMenu.classList.contains('is-open')) {

    btnWrapper.classList.add('flex')
  

    // btnLogin.classList.remove('button-log-2')

    if (btnLogin.classList.contains('none')) {



      btnUser.classList.add('flex')
      // greet.classList.add('flex')
  // iconUser.classList.add('block')
  userWrapper.classList.add('flex')
    }

    return
  }
  btnWrapper.classList.remove('flex')
  btnUser.classList.add('flex-2')

  iconUser.classList.add('flex-2')


  btnLogin.classList.add('button-log-2')
  btnUser.classList.remove('flex')
  // iconUser.classList.remove('block')
  // userWrapper.classList.remove('flex')
}



// отримаємо посилання на навігацію і додаємо слухача
// const activePage = window.location.pathname;
// const navLink = document.querySelectorAll('.nav-item')
//   .forEach(link => {

//     if (link.href === activePage) {
//       link.setAttribute('aria-current','page')
//     }
// })

// 
document.addEventListener("DOMContentLoaded", function() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    if (link.href === activePage) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const path = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-item-li');

  navItems.forEach(function(item) {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');

    if (href === path) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});