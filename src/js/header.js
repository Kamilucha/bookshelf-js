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
const activePage = window.location.pathname; 
const navLink = document.querySelectorAll('.nav-item') 
  .forEach(link => { 
 
    if (link.href === activePage) { 
      link.setAttribute('aria-current','page') 
    } 
} 
) 
//  
const path = window.location.pathname; 
console.log(path); 
const navItems = document.querySelectorAll('.nav-item-li'); 
 
   
navItems.forEach(function (item) { 
     
  const link = item.querySelector('a'); 
 
 
     
  const href = link.getAttribute('href'); 
  console.log(href); 
 
     
  if (href === path) { 
       
    item.classList.add('active'); 
       
  } 
  else { 
    item.classList.remove('active'); 
  } 
});
