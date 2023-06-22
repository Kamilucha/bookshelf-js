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

// disableScroll();

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
  // enableScroll();


  btnWrapper.classList.remove('flex')
  btnUser.classList.add('flex-2')

  iconUser.classList.add('flex-2')


  btnLogin.classList.add('button-log-2')
  btnUser.classList.remove('flex')
  // iconUser.classList.remove('block')
  // userWrapper.classList.remove('flex')
}


// -------Change button current page

document.addEventListener("DOMContentLoaded", function() {
  let path = window.location.pathname;
  // console.log(path);
  if (path === '/project_team_6_js/') {
    path = '/project_team_6_js/index.html';
  }
  // console.log(path);
  const navItems = document.querySelectorAll('.nav-item-li');

  navItems.forEach(function(item) {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');
    

    if (path === href) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  let path = window.location.pathname;
  // console.log(path);
  if (path === '/project_team_6_js/') {
    path = '/project_team_6_js/index.html';
  }
  // console.log(path);
  const navItems = document.querySelectorAll('.nav-item-mobile');

  navItems.forEach(function(item) {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');
    

    if (path === href) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

