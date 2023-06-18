import { BooksAPIService } from '../booksAPIService';
import { boxBooks, fetchBooksByCategories } from './booksByCategories';
import { renderTopBooks } from './topBooks';

const list = document.querySelector('.list-js');
export let selectedCategory = '';
const btnAllCategories = document.querySelector('.static-btn');
const div = document.querySelector('.books_container');
let onclickBtn = false;
const listGenres = new BooksAPIService();

async function fetchBookCategories() {
  try {
    const data = await listGenres.getBookCategories();
    renderMarkupList(data);
    btnAllCategories.addEventListener('click', handleAllCategoryClick);
    onBtnCategoriesClick();
  } catch (error) {
    console.log(error);
  }
}

fetchBookCategories();

function renderMarkupList(genres) {
  const markup = genres
    .map(genre => {
      return `<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${genre.list_name}</button></li>`;
    })
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}

function onBtnCategoriesClick() {
  const btnCategories = document.querySelectorAll('.genres-btn-js');
  btnCategories.forEach(btn => {
    btn.addEventListener('click', handleCategoryClick);
  });
}

function handleCategoryClick(event) {
  selectedCategory = event.target.textContent;
  boxBooks.innerHTML = '';
  fetchBooksByCategories(selectedCategory);
}

function handleAllCategoryClick() {
  boxBooks.innerHTML = '';
  if (!onclickBtn) {
    renderTopBooks();
    onclickBtn = true;
  }
}
