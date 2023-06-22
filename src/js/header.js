// отримаємо посилання на кнопку меню і додаємо слухача
const mobileMenu = document.querySelector('.menu-container');
const btmMenu = document.querySelector('.button-menu')

btmMenu.addEventListener('click', onBtnMenuClick)

function onBtnMenuClick() {
  btmMenu.classList.toggle('active')
  mobileMenu.classList.toggle('is-open')
}

// -------Change button current page

document.addEventListener("DOMContentLoaded", function() {
  let path = window.location.pathname;
  console.log(path);
  if (path === '/') {
    path = '/index.html';
  }
  console.log(path);
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
  console.log(path);
  if (path === '/') {
    path = '/index.html';
  }
  console.log(path);
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

