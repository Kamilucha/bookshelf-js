import { BooksAPIService } from '../booksAPIService';
import renderModal from '../modal'
import fetchBooksByCategories from './booksByCategories'

const loader = document.querySelector('.best-sellers-loader');

const bookApi = new BooksAPIService();
let booksContainer = document.querySelector('.books_container');

export async function renderTopBooks() {
  let topBooks = await bookApi.getTopBooks();
  loader.style.display = 'none';
  console.log(topBooks);
  renderTitlePage()
  topBooks.forEach(group => {
    let books = group.books.slice(0,5).map(renderCard)
    let groupEl = document.createElement("div")
    groupEl.className = "book-group"
    groupEl.innerHTML = `
        <div class="book-group_title">${group.list_name}</div>
    `

    let card_list = document.createElement("div")
    card_list.className = "book-card_list"
    card_list.append(...books)

    let seeMoreBtn = document.createElement("button")
    seeMoreBtn.className = "btn-main"
    seeMoreBtn.textContent = "See More"
    groupEl.append(card_list,seeMoreBtn)

    booksContainer.append(groupEl)
  })
}

renderTopBooks();

function renderCard(card) {
    let cardEl = document.createElement("div")
    cardEl.className = "book-card";

    let quickView = document.createElement("button")
    quickView.className = "quick_view"
    quickView.textContent = "QUICK VIEW"
    
    function renderImg(card) {
      if(card.book_image) {
        return `<img class="book_image" src="${card.book_image}" alt="${card.title}"></img>`
      } else {
        return `<div class="empty_img"></div>`
      }
    }

    cardEl.innerHTML = `
        ${renderImg(card)}
        <div class="book-info">
        <p class="book_title">${card.title}</p>
        <p class="book_author">${card.author}</p>
      </div>
    `;
    cardEl.append(quickView)
    cardEl.onclick = function() {
      renderModal(card)
  }

    return cardEl
}

function renderTitlePage() {
  const titlePage = 
  `<h1 class="section-books-header">
  Best Sellers <span class="section-books-header section-books-header-span">Books</span>
</h1>`
booksContainer.insertAdjacentHTML('beforeend', titlePage)
}

// function seeMoreFunction() {
//   var seeMore = fetchBooksByCategories(selectedCategory);

//   if (seeMoreBtn.isActive) {
//     seeMoreBtn.innerHTML = "See more";
//     seeMore.classList.add(isHidden) ;
//   } else {
//     seeMoreBtn.innerHTML = "See less";
// seeMore.classList.remove(isHidden) ;
//   }
// }