// Import Image, svg
import getIconPath from './shop-refs';
const {
  appleBooksIconPath,
  bookShopIconPath,
  amazonIconPath,
  svgTrashIcon,
  emptyListStubImage,
} = getIconPath();

const SHOPPING_LIST_STORAGE_KEY = 'shoppingList';
const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

let activePage = 1;
const pageSize = 3;

function renderShoppingList() {
  const shoppingListContainer = document.getElementById(
    'shoppingListContainer'
  );
  shoppingListContainer.innerHTML = '';

  if (shoppingList.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.textContent =
      'This page is empty, add some books and proceed to order.';
    shoppingListContainer.appendChild(emptyMessage);
  } else {
    const list = document.createElement('ul');
    shoppingListContainer.appendChild(list);

    shoppingList.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;

      list.appendChild(listItem);
    });
  }
}

function renderBooks() {
  const allBooksInShopList = shoppingList;
  const booksContainer = document.getElementById('shoppingListContainer');

  if (allBooksInShopList && allBooksInShopList.length > 0) {
    booksContainer.innerHTML = allBooksInShopList
      .map(({ _id, title, author, description, list_name, book_image }) => {
        return `<article class="shopping__card">
          <div class="shoplist-url">
            <ul class="shoplist-url-list">
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${amazon_product.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
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
  } else {
    booksContainer.innerHTML = `
        <div class="shop-card-empty">
      <p class="shop-card-empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img class="shop-card-empty-picture" src="${emptyListStubImage}" alt="Shop is Empty">
      </div>
    `;
  }
  const deleteButtons = document.querySelectorAll('.shopping-card-btn');
  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const bookId = event.target.getAttribute('data-book-id');
      deleteBook(bookId);
      renderShoppingList();
      renderBooks();
    });
  });
}

function deleteBook(id) {
  const updatedShoppingList = shoppingList.filter(item => item._id !== id);
  localStorage.setItem(
    SHOPPING_LIST_STORAGE_KEY,
    JSON.stringify(updatedShoppingList)
  );
  shoppingList.splice(0, shoppingList.length, ...updatedShoppingList);
  renderBooks();
}

renderShoppingList();
renderBooks();
