import { BooksAPIService } from '../booksAPIService';
import { selectedCategory } from './allCategoriesList';
import renderModal from '../modal';

export const boxBooks = document.querySelector('.category-books-wrapper');
const divPage = document.querySelector('.books_container');
const btnAllCategories = document.querySelector('.static-btn');

const booksByCategories = new BooksAPIService();

export let addRemoveBtn;
// Ф-ція, яка експортується до AllCategoriesList.js та отримує з бекенду книги за обраною категорією
// Тут же викликаються ф-ції для рендерингу розмітки
export async function fetchBooksByCategories(selectedCategory) {
  try {
    const data = await booksByCategories.getBooksByCategory(selectedCategory);
    btnAllCategories.classList.remove('accent');
    divPage.innerHTML = '';
    renderBaseMarkupCategory();
    renderMarkupCard(data);
    onCardClick(data);
  } catch (error) {
    console.log(error);
  }
}

// Ф-ція, що рендерить основну розмітку, для того, щоб можна було вставити картки книг
function renderBaseMarkupCategory() {
  const markup = `<h1>${selectedCategory}</h1>
  <div>
  <ul class='card_list category-list'></ul>
  </div>
  `;
  divPage.insertAdjacentHTML('beforeend', markup);
}

// Ф-ція, що рендерить одну картку/книгу
function renderMarkupCard(bookArr) {
  const categoryList = document.querySelector('.category-list');
  categoryList.innerHTML = '';
  const markup = bookArr.map(card => {
    const { title, book_image, author } = card;
    let li = document.createElement('li');
    li.onclick = function () {
      renderModal(card);
    };
    li.innerHTML = `
        <div class='card-wrapper card'>
        <img class='book_image' src=${book_image} alt='${title} width='335' height='485'/>
        <div>         
        <p>${title}</p>
        <p>${author}</p>
        </div>
        </div>
        `;
    return li;
  });
  categoryList.append(...markup);
}

function onCardClick() {
  const cardsBooks = document.querySelectorAll('.card-wrapper');
  cardsBooks.forEach(card => {
    card.addEventListener('click', () => {
      const data = data.map({ book_uri, buy_links });
      console.log(card);
      renderModal(data);
      console.log(document.querySelector('.btn'));
    });
  });
}
