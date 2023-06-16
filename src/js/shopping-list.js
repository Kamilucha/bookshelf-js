const bookElList = document.querySelector('.shoplist-add');
const listIsEmpty = document.querySelector('.shoplist-empty');

// Получаем значение из хранилища по ключу (по id) и преобразовываем в массив

let booksInShopList = localStorage.getItem('books');
booksInShopList = booksInShopList ? JSON.parse(booksInShopList) : [];

let currentPage = 1;
let numberPage = 3;

// Нужно написать функцию renderBooks

//  Код проверяет условия, по которым будут отображаться книги.
// Если booksInShopList будет равен нулю, то список покупок будет пуст.
// В таком случае будет соответсвующая разметка с сообщением, что список покупок пуст.

const showData = (arr, startIndex) =>
  renderBooks(arr.slice(startIndex, startIndex + numberPage));

if (booksInShopList.length > 0) {
  window.onload = function () {
    renderBooks(booksInShopList.slice(0, numberPage));
  };
  window.onresize = function () {
    renderBooks(booksInShopList.slice(0, numberPage));
  };
} else if (booksInShopList === 0) {
  listIsEmpty.innerHTML = `<p class="empty-text">
              This page is empty, add some books and proceed to order.
            </p>
            <div class="books-images"></div>
          </div>`;
}
