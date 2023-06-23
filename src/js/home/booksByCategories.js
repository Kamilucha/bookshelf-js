import { BooksAPIService } from '../booksAPIService';
import { selectedCategory } from './allCategoriesList';
import renderModal from '../modal';
import Notiflix from 'notiflix';

export const boxBooks = document.querySelector('.category-books-wrapper');
const divPage = document.querySelector('.books_container');
const btnAllCategories = document.querySelector('.static-btn');

const loader = document.querySelector('.best-sellers-loader');

const booksByCategories = new BooksAPIService();

export let addRemoveBtn;
// Ф-ція, яка експортується до AllCategoriesList.js та отримує з бекенду книги за обраною категорією
// Тут же викликаються ф-ції для рендерингу розмітки
export async function fetchBooksByCategories(selectedCategory) {
  try {
    loader.style.display = 'block';
    const data = await booksByCategories.getBooksByCategory(selectedCategory);
    btnAllCategories.classList.remove('accent');
    divPage.innerHTML = '';
    if (data.length === 0) {
      Notiflix.Notify.info(
        `Sorry, but no books on the selected category '${selectedCategory}' were found. 
      Please choose another category.`,
        {
          fontFamily: 'DM Sans',
          fontSize: '16px',
          clickToClose: true,
          cssAnimationStyle: 'from-top',
          timeout: 2000,
          position: 'center-top',
          messageMaxLength: 150,
          info: {
            background: 'rgba(79, 46, 232, 0.9)',
          },
        }
      );

      return;
    }
    renderBaseMarkupCategory();
    loader.style.display = 'none';
    renderMarkupCard(data);
    // onCardClick(data);
  } catch (error) {
    console.log(error);
  }
}

// Ф-ція, що рендерить основну розмітку, для того, щоб можна було вставити картки книг
function renderBaseMarkupCategory() {
  // Стилізація останнього слова заголовка категорії
  const words = selectedCategory.split(' ');
  const lastWord = words[words.length - 1];

  const styledLastWord = `<span class='section-books-header-span'>${lastWord}</span>`;
  const formattedCategory = words.slice(0, -1).join(' ') + ' ' + styledLastWord;
  //
  const markup = `
    <h1 class="section-books-header">${formattedCategory}</h1>
    <div>
      <ul class="card_list category-list"></ul>
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
    li.classList.add('category-item');
    li.onclick = function () {
      renderModal(card);
    };

    function renderImg() {
      if (book_image) {
        return `<img class="book_image" src="${book_image}" alt="${title}" loading="lazy" width='335' height='485'>`;
      } else {
        return `<div class="empty_img"></div>`;
      }
    }

    li.innerHTML = `
        <div class='card-wrapper card'>
        <div class='img_wrapper'>
                ${renderImg()}
        </div>
        <div class='book-info'>         
        <p class='book_title'>${title}</p>
        <p class='book_author'>${author}</p>
        </div>
        </div>
        `;
    return li;
  });
  categoryList.append(...markup);
}

// function onCardClick() {
//   const cardsBooks = document.querySelectorAll('.card-wrapper');
//   cardsBooks.forEach(card => {
//     card.addEventListener('click', () => {
//       const data = data.map({ book_uri, buy_links });
//       console.log(card);
//       renderModal(data);
//       console.log(document.querySelector('.btn'));
//     });
//   });
// }

Notiflix.Notify.init({
  width: '340px',
  distance: '15px',
  timeout: 5000,
  messageMaxLength: 150,

  fontFamily: 'DM Sans',
  fontSize: '16px',
  cssAnimationStyle: 'from-top',

  info: {
    background: 'rgba(79, 46, 232, 0.9)',
  },
});
