const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

const mobileMenu = document.querySelector('.menu-container');
const btmMenu = document.querySelector('.button-menu');
const btnLogin = document.querySelector('.button-log');
const btnUser = document.querySelector('.button-user');
const iconUser = document.querySelector('.icon-user-login');
const userWrapper = document.querySelector('.user-login-wrapper');
const greet = document.querySelector('.greeting');
const header = document.querySelector('.header');

const btnWrapper = document.querySelector('.log-in-btns-wrepper');

btmMenu.addEventListener('click', onBtnMenuClick);

function onBtnMenuClick() {
  btmMenu.classList.toggle('active');
  mobileMenu.classList.toggle('is-open');

  if (mobileMenu.classList.contains('is-open')) {
    // disableScroll();
    disableBodyScroll(document.body);

    btnUser.classList.remove('flex');

    if (document.documentElement.clientWidth >= 768) {
      btnWrapper.classList.add('flex');
    }

    if (btnLogin.classList.contains('none')) {
      btnUser.classList.add('flex');
      userWrapper.classList.add('flex');
    }

    if (btnLogin.style.display === 'flex') {
      btnUser.classList.remove('flex');
      btnUser.classList.remove('flex-2');
      userWrapper.classList.remove('flex');
    }

    return;
  }
  // enableScroll();
  enableBodyScroll(document.body);

  if (document.documentElement.clientWidth >= 768) {
    btnWrapper.classList.remove('flex');
  }
  btnUser.classList.add('flex-2');

  iconUser.classList.add('flex-2');
  btnLogin.classList.add('button-log-2');
  btnUser.classList.remove('flex');

  if (btnLogin.style.display === 'flex') {
    btnUser.classList.remove('flex');
    btnUser.classList.remove('flex-2');
    userWrapper.classList.remove('flex');
  }
}

// -------Change button current page

document.addEventListener('DOMContentLoaded', function () {
  let path = window.location.pathname;
  // console.log(path);
  if (path === '/project_team_6_js/') {
    path = '/project_team_6_js/index.html';
  }
  // console.log(path);
  const navItems = document.querySelectorAll('.nav-item-li');

  navItems.forEach(function (item) {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');

    if (path === href) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let path = window.location.pathname;
  // console.log(path);
  if (path === '/project_team_6_js/') {
    path = '/project_team_6_js/index.html';
  }
  // console.log(path);
  const navItems = document.querySelectorAll('.nav-item-mobile');

  navItems.forEach(function (item) {
    const link = item.querySelector('a');
    const href = link.getAttribute('href');

    if (path === href) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
