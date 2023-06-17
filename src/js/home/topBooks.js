import { BooksAPIService } from '../booksAPIService';

const bookApi = new BooksAPIService();
let booksContainer = document.querySelector('.books_container');

async function renderTopBooks() {
  let topBooks = await bookApi.getTopBooks();
  console.log(topBooks);
  topBooks.forEach(group => {
    let books = group.books.slice(0,5).map(renderCard).join('')
    let groupEl = `
    <div class="group">
        <div class="group_title">${group.list_name}</div>
        <div class="card_list">${books}</div>
        <button>See More</button>
    </div>
    `
    booksContainer.innerHTML += groupEl;
  })
}
renderTopBooks();

function renderCard(card) {
  return `
    <div class="card">
        <img src="${card.book_image}" alt="${card.title}">
        <div class="book_title">${card.title}</div>
        <div class="book_author">${card.author}</div>
    </div>
    `;
}
