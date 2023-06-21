import { BooksAPIService } from '../booksAPIService';
import renderModal from '../modal';

const loader = document.querySelector('.best-sellers-loader');

const bookApi = new BooksAPIService();
let booksContainer = document.querySelector('.books_container');

export async function renderTopBooks() {
  let topBooks = await bookApi.getTopBooks();
  loader.style.display = 'none';
  renderTitlePage();
  topBooks.forEach(group => {
    let books = group.books.slice(0, 5).map(renderCard);
    let groupEl = document.createElement('div');
    groupEl.className = 'group';
    groupEl.innerHTML = `
        <div class="group_title">${group.list_name}</div>
    `;

    let card_list = document.createElement('div');
    card_list.className = 'card_list';
    card_list.append(...books);

    let seeMoreBtn = document.createElement('button');
    seeMoreBtn.className = 'btn-main';
    seeMoreBtn.textContent = 'See More';
    groupEl.append(card_list, seeMoreBtn);

    booksContainer.append(groupEl);
  });
}

renderTopBooks();

function renderCard(card) {
  let cardEl = document.createElement('div');
  cardEl.className = 'card';

  cardEl.onclick = function () {
    renderModal(card);
  };
  cardEl.innerHTML = `
        <img class="book_image" src="${card.book_image}" alt="${card.title}">
        <div class="book-info">
        <p class="book_title">${card.title}</p>
        <p class="book_author">${card.author}</p>
      </div>
    `;
  return cardEl;
}

function renderTitlePage() {
  const titlePage = `<h1 class="section-books-header">
  Best Sellers <span class="section-books-header-span">Books</span>
</h1>`;
  booksContainer.insertAdjacentHTML('beforeend', titlePage);
}
