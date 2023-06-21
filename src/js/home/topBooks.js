import { BooksAPIService } from '../booksAPIService';
import renderModal from '../modal';
import Notiflix from 'notiflix';

const loader = document.querySelector('.best-sellers-loader');

const bookApi = new BooksAPIService();
const booksContainer = document.querySelector('.books_container');
const categoryBooksCount = {};

export async function renderTopBooks() {
  loader.style.display = 'block';

  try {
    const topBooks = await bookApi.getTopBooks();
    loader.style.display = 'none';
    renderTitlePage();

    if (topBooks.length === 0) {
      Notiflix.Notify.info(
        'Sorry, but no books on all categories were found. Please choose another category.'
      );
      return;
    }

    topBooks.forEach(group => {
      const groupEl = document.createElement('div');
      groupEl.className = 'book-group';
      groupEl.innerHTML = `
        <div class="book-group_title">${group.list_name}</div>
        <div class="book-card_list"></div>
        <button class="btn-main see-more-btn" data-category="${group.list_name}">See More</button>
      `;

      const seeMoreBtn = groupEl.querySelector('.see-more-btn');
      seeMoreBtn.addEventListener('click', seeMoreBtnHandler);

      booksContainer.appendChild(groupEl);

      const booksGroupContainer = groupEl.querySelector('.book-card_list');
      const existingBooks = booksGroupContainer.querySelectorAll('.book-card');

      group.books.forEach((book, index) => {
        const cardEl = createBookElement(book);
        if (index < existingBooks.length) {
          booksGroupContainer.insertBefore(cardEl, existingBooks[index]);
        } else {
          booksGroupContainer.appendChild(cardEl);
        }
      });

      categoryBooksCount[group.list_name] = group.books.length;
    });
  } catch (error) {
    console.log(error);
    loader.style.display = 'none';
    Notiflix.Notify.failure(
      'Failed to fetch top books. Please try again later.'
    );
  }
}

renderTopBooks();

async function seeMoreBtnHandler(e) {
  if (e.target.classList.contains('see-more-btn')) {
    const target = e.target;
    const category = target.dataset.category;
    const booksContainer = target
      .closest('.book-group')
      .querySelector('.book-card_list');

    try {
      const start = categoryBooksCount[category] || 0;
      const books = await bookApi.getBooksByCategory(category);
      const booksToShow = books.slice(start);

      booksToShow.forEach(book => {
        const cardEl = createBookElement(book);
        booksContainer.appendChild(cardEl);
      });

      categoryBooksCount[category] = start + booksToShow.length;
    } catch (error) {
      console.log(error);
      Notiflix.Notify.failure(
        'Failed to fetch books for this category. Please try again later.'
      );
    }
  }
}

function createBookElement(book) {
  const cardEl = document.createElement('div');
  cardEl.className = 'book-card';

  const quickView = document.createElement('button');
  quickView.className = 'quick_view';
  quickView.textContent = 'QUICK VIEW';
  quickView.addEventListener('click', () => renderModal(book));

  let bookImg = '';
  if (book.book_image) {
    bookImg = `<img class="book_image" src="${book.book_image}" alt="${book.title}">`;
  } else {
    bookImg = `<div class="empty_img"></div>`;
  }

  cardEl.innerHTML = `
    ${bookImg}
    <div class="book-group">
      <p class="book_title">${book.title}</p>
      <p class="book_author">${book.author}</p>
    </div>
  `;
  cardEl.append(quickView);
  cardEl.addEventListener('click', () => renderModal(book));

  return cardEl;
}

function renderTitlePage() {
  const titlePage = `
    <h1 class="section-books-header">
      Best Sellers <span class="section-books-header-span">Books</span>
    </h1>
  `;
  booksContainer.insertAdjacentHTML('beforeend', titlePage);
}
