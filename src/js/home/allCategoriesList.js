import { BooksAPIService } from '../booksAPIService';
import { boxBooks, fetchBooksByCategories } from './booksByCategories';
import { renderTopBooks } from './topBooks';

const list = document.querySelector('.list-js');
export let selectedCategory = '';
const btnAllCategories = document.querySelector('.static-btn');
const div = document.querySelector('.books_container');
// let onclickBtn = false;
const listGenres = new BooksAPIService();

const loader = document.querySelector('.categories-loader');

async function fetchBookCategories() {
  try {
    const data = await listGenres.getBookCategories();
    btnAllCategories.classList.add('accent')
    loader.style.display = 'none'
    renderMarkupList(data);
    btnAllCategories.addEventListener('click', handleAllCategoryClick);
    onBtnCategoriesClick();
  } catch (error) {
    console.log(error);
  }
}

fetchBookCategories();

// Ф-ція, що динамічно рендерить розмітку списку категорій книг
function renderMarkupList(genres) {
  const markup = genres
    .map(genre => {
      return `<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${genre.list_name}</button></li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

// Головна ф-ція, де поставлено слухачі подій на кнопки списку категорії 
function onBtnCategoriesClick() {
  const btnCategories = document.querySelectorAll('.genres-btn-js');
  btnCategories.forEach(btn => {
    btn.addEventListener('click', handleCategoryClick);
  });
}

// Фу-ція-колбек описує логіку роботи кнопок списку категорій. Очищається сторінка та рендериться розмітка
// відповідно до обраної категорії
function handleCategoryClick(event) {
  selectedCategory = event.target.textContent;
  boxBooks.innerHTML = '';
  fetchBooksByCategories(selectedCategory);
}

// Фу-ція описує логіку першої кнопки All categories в списку категорії. Очищається сторінка та 
// рендериться розмітка Best Sellers Books
function handleAllCategoryClick() {
  boxBooks.innerHTML = '';
      renderTopBooks();
      // За логікою тут має блокуватися повторне натискання по кнопці, але це поганий код
  // if (!onclickBtn) {
  //   renderTopBooks();
  //   onclickBtn = true;
  // }
  if (btnAllCategories.classList.contains('accent')) {
    return;
  }
}
