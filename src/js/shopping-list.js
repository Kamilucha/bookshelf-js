// Import Image, svg

// const bookElList = document.querySelector('.shoplist-add');
// const listIsEmpty = document.querySelector('.shoplist-empty');

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
    .map(({ _id, title, author, description, list_name, book_image }) => {
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
          <button class="shopping-card-btn" type="button" data-book-id="${_id} aria-label="Remove book from shopping list">
            <svg class="icon-trash" data-book-id="${_id}" width="17" height="17">
              <use href="${svgRemove}#icon-trash"></use>
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
      <p class="empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="books-images"></div>
    `;
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
