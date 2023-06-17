import { BooksAPIService } from '../booksAPIService';
import renderModal from '../modal'

const bookApi = new BooksAPIService();
let booksContainer = document.querySelector('.books_container');

async function renderTopBooks() {
  let topBooks = await bookApi.getTopBooks();
  console.log(topBooks);
  topBooks.forEach(group => {
    let books = group.books.slice(0,5).map(renderCard)
    let groupEl = document.createElement("div")
    groupEl.className = "group"
    groupEl.innerHTML = `
        <div class="group_title">${group.list_name}</div>
    `

    let card_list = document.createElement("div")
    card_list.className = "card_list"
    card_list.append(...books)

    let seeMoreBtn = document.createElement("button")
    seeMoreBtn.textContent = "See More"
    groupEl.append(card_list,seeMoreBtn)

    booksContainer.append(groupEl)
  })
}
renderTopBooks();

function renderCard(card) {
    let cardEl = document.createElement("div")
    cardEl.className = "card";
    
    cardEl.onclick = function() {
        renderModal(card)
    }
    cardEl.innerHTML = `
        <img src="${card.book_image}" alt="${card.title}">
        <div class="book_title">${card.title}</div>
        <div class="book_author">${card.author}</div>
    `;
    return cardEl
}
