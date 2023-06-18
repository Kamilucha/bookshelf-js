// Import Image, svg
import getIconPath from './shop-refs'
// const bookElList = document.querySelector('.shoplist-add');
// const listIsEmpty = document.querySelector('.shoplist-empty');
const { appleBooksIconPath,
  bookShopIconPath,
  amazonIconPath,
  svgTrashIcon,
  emptyListStubImage,
} = getIconPath();
// Получаем значение из хранилища по ключу (по id) и преобразовываем в массив

let booksInShopList = localStorage.getItem('books');
booksInShopList = booksInShopList ? JSON.parse(booksInShopList) : [];

let currentPage = 1;
let numberPage = 3;
let totalPages = Math.ceil(booksInShopList.length / numberPage);
let startIndex = (currentPage - 1) * numberPage;
let endIndex = startIndex + numberPage;

let allBooksInShopList = booksInShopList.slice(startIndex, endIndex);
// Нужно написать функцию renderBooks

function renderBooks(allBooksInShopList) {
  return allBooksInShopList
    .map(({ _id, title, author, description, list_name, book_image, amazon_product_url,
        buy_links: [apple, bookshop], }) => {
      return `<article class="shopping__card">
          <div class="about-img">
            <img class="shopping-card-img" src="${book_image}" alt="${title}" />
          </div>
          <div class="about-title">
            <h3 class="shopping-card-title">${title}</h3>
            <p class="shopping-card-category">${list_name}</p>
          </div>
         <div class="about-description">
            <p class="shopping-card-description">${description}</p>
          </div >
          <div class="about-author">
            <p class="shopping-card-author">${author}</p>
          </div>

          <div class="shoplist-url">
            <ul class="shoplist-url-list">
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
                  <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" alt="Amazon live page"/>
                </a>
              </li>
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${apple.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
                  <img class="modal-shop-img shopping-shopimg apple" src="${appleBooksIconPath}" alt="Apple Books link" />
                </a>
              </li>
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${bookshop.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
                  <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" />
                </a>
              </li>
            </ul>
          </div>

          <button class="shopping-card-btn" type="button" data-book-id="${_id} aria-label="Remove book from shopping list">
            <svg class="icon-trash" data-book-id="${_id}" width="17" height="17">
              <use href="${svgTrashIcon}#icon-trash"></use>
            </svg>
          </button>
        </article>
        `;
    })
    .join('');
}

//  Код проверяет условия, по которым будут отображаться книги.
// Если booksInShopList будет равен нулю, то список покупок будет пуст.
// В таком случае будет соответсвующая разметка с сообщением, что список покупок пуст.

function isEmpty() {
  if (booksInShopList.length > 0) {
    window.onload = function () {
      renderBooks(booksInShopList.slice(0, numberPage));
    };
    window.onresize = function () {
      renderBooks(booksInShopList.slice(0, numberPage));
    };
  } else {
    listIsEmpty.innerHTML = `
      <div class="shop-card-empty">
      <p class="shop-card-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img class="shop-card-empty-picture" src="${emptyListStubImage}" alt="Shop is Empty">
      </div>`
      
  }
}

isEmpty();

function removeBook(bookId) {
  const index = booksInShopList.findIndex(book => book._id === bookId);
  if (index !== -1) {
    booksInShopList.splice(index, 1);
    renderBooks(booksInShopList);
    localStorage.setItem('books', JSON.stringify(booksInShopList));
  }
}
