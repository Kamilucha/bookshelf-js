import { BooksAPIService } from '../booksAPIService';
import { selectedCategory } from './allCategoriesList';
import renderModal from '../modal';

export const boxBooks = document.querySelector('.category-books-wrapper');
const divClean = document.querySelector('.books_container');
const btnAllCategories = document.querySelector('.static-btn');

const booksByCategories = new BooksAPIService();

// Ф-ція, яка експортується до AllCategoriesList.js та отримує з бекенду книги за обраною категорією
// Тут же викликаються ф-ції для рендерингу розмітки
export async function fetchBooksByCategories(selectedCategory) {
  try {
    const data = await booksByCategories.getBooksByCategory(selectedCategory);
    btnAllCategories.classList.remove('accent')
    divClean.innerHTML = '';
    renderBaseMarkupCategory();
    renderMarkupCard(data);
    // onCardClick(data)
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
  boxBooks.insertAdjacentHTML('beforeend', markup);
}

// Ф-ція, що рендерить одну картку/книгу
function renderMarkupCard(bookArr) {
  const markup = bookArr
    .map(({ title, book_image, author }) => {
      return `
        <li>
        <div class='card-wrapper card'>
        <img class='book_image' src=${book_image} alt='${title} width='335' height='485'/>
        <div>         
        <p>${title}</p>
        <p>${author}</p>
        </div>
        </div>
        </li>
        `;
    })
    .join('');
  const categoryList = document.querySelector('.category-list');
  categoryList.insertAdjacentHTML('beforeend', markup);
}

// function onCardClick(data) {
//     const cardsBooks = document.querySelectorAll('.card-wrapper')
//         cardsBooks.forEach(card => {
//           card.addEventListener('click', () => {
//             const data = data.map(({book_uri, buy_links}))
//             console.log(card)
//             renderModal(data);
//           });
//         });
// }
