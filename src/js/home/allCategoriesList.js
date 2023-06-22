import { BooksAPIService } from '../booksAPIService';
import { boxBooks, fetchBooksByCategories } from './booksByCategories';
import { renderTopBooks } from './topBooks';

const list = document.querySelector('.list-js');
export let selectedCategory = '';
let btnCategories;
const btnAllCategories = document.querySelector('.static-btn');
const divPage = document.querySelector('.books_container');
const listGenres = new BooksAPIService();

const loader = document.querySelector('.categories-loader');
const secondLoader = document.querySelector('.best-sellers-loader');

async function fetchBookCategories() {
  try {
    const data = await listGenres.getBookCategories();
    if (btnAllCategories) {
      btnAllCategories.classList.add('accent');
    }
    if (loader) {
      loader.style.display = 'none';
    }
    renderMarkupList(data);
    btnAllCategories.addEventListener('click', handleAllCategoryClick);
    onBtnCategoriesClick();
  } catch (error) {
    console.log(error);
  }
}

if (list) {
  fetchBookCategories();
}

// Ф-ція, що динамічно рендерить розмітку списку категорій книг
function renderMarkupList(genres) {
  const alphbetGenres = genres.sort((a, b) =>
    a.list_name.localeCompare(b.list_name)
  );
  const markup = alphbetGenres
    .map(genre => {
      return `<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${genre.list_name}</button></li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

// Головна ф-ція, де поставлено слухачі подій на кнопки списку категорії
function onBtnCategoriesClick() {
  btnCategories = document.querySelectorAll('.genres-btn-js');
  btnCategories.forEach(btn => {
    btn.addEventListener('click', () => {
      if (
        btn.classList.contains('accent') &&
        btn.classList.contains('genres-btn-js')
      ) {
        return;
      }
      handleCategoryClick(event);
    });
  });
}

// Фу-ція-колбек описує логіку роботи кнопок списку категорій. Очищається сторінка та рендериться розмітка
// відповідно до обраної категорії
function handleCategoryClick(event) {
  selectedCategory = event.target.textContent;
  divPage.innerHTML = '';
  fetchBooksByCategories(selectedCategory);
  // Перевірка, яка додає або знімає клас accent
  btnCategories.forEach(el => {
    if (el.textContent !== selectedCategory) {
      el.classList.remove('accent');
    }
    if (el.textContent === selectedCategory) {
      el.classList.add('accent');
    }
  });
}

// Фу-ція описує логіку першої кнопки All categories в списку категорії. Очищається сторінка та
// рендериться розмітка Best Sellers Books

function handleAllCategoryClick() {
  // Перевіряє чи є клас accent
  if (
    btnAllCategories.classList.contains('accent') &&
    btnAllCategories.classList.contains('static-btn')
  ) {
    return;
  }
  secondLoader.style.display = 'block';
  btnAllCategories.classList.add('accent');
  btnCategories.forEach(el => {
    el.classList.remove('accent');
  });
  divPage.innerHTML = '';
  renderTopBooks();
  if (btnAllCategories.classList.contains('accent')) {
    return;
  }
}
