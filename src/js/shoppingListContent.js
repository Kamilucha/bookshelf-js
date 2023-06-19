import getIconPath from './shopRefs';

import Pagination from 'tui-pagination';

const {
  appleBooksIconPath,
  bookShopIconPath,
  amazonIconPath,
  svgTrashIcon,
  emptyListStubImage,
} = getIconPath();

const SHOPPING_LIST_STORAGE_KEY = 'shoppingList';
let shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
const itemsPerPage = 3;

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
    hidePagination();
  } else {
    const list = document.createElement('ul');
    shoppingListContainer.appendChild(list);

    shoppingList.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;

      list.appendChild(listItem);
    });
    showPagination();
  }
  renderBooks(1);
}

function renderBooks(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const booksOnPage = shoppingList.slice(startIndex, endIndex);
  const booksContainer = document.getElementById('shoppingListContainer');

  if (booksOnPage.length > 0) {
    booksContainer.innerHTML = booksOnPage
      .map(
        ({
          _id,
          title,
          author,
          description,
          list_name,
          book_image,
          amazon_product_url,
          buy_links: [apple, bookshop],
        }) => {
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
          </div>
          <div class="about-author">
            <p class="shopping-card-author">${author}</p>
          </div>
          <div class="shoplist-url">
            <ul class="shoplist-url-list">
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${amazon_product_url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
                  <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" />
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
          <button class="shopping-card-btn" type="button" data-book-id="${_id}" aria-label="Remove book from shopping list">
            <svg class="icon-trash" data-book-id="${_id}" width="17" height="17">
              <use href="${svgTrashIcon}#icon-trash"></use>
            </svg>
          </button>
        </article>
        `;
        }
      )
      .join('');
    const deleteButtons = document.querySelectorAll('.shopping-card-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.getAttribute('data-book-id');
        deleteBook(bookId);
      });
    });
  } else {
    booksContainer.innerHTML = `
        <div class="shop-card-empty">
          <p class="shop-card-empty-text">
            This page is empty, add some books and proceed to order.
          </p>
          <img class="shop-card-empty-picture" src="${emptyListStubImage}" alt="Shop is Empty">
        </div>
      `;
    hidePagination();
  }
}

function deleteBook(id) {
  const updatedShoppingList = shoppingList.filter(item => item._id !== id);
  localStorage.setItem(
    SHOPPING_LIST_STORAGE_KEY,
    JSON.stringify(updatedShoppingList)
  );
  shoppingList = updatedShoppingList;
  renderShoppingList();
  renderBooks(pagination.getCurrentPage());
}

function showPagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.style.display = 'block';
}

function hidePagination() {
  const paginationElement = document.getElementById('pagination');
  paginationElement.style.display = 'none';
}

renderShoppingList();
renderBooks(1);

// Pagination IF?????
if (shoppingList.length > 0) {
  const container = document.getElementById('pagination');
  const options = {
    totalItems: shoppingList.length,
    itemsPerPage,
    visiblePages: 15,
    page: 1,
    centerAlign: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected current-page-button">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} move-button">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-first tui-{{type}} disabled-move-button">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip more-button">{{type}}</a>',
    },
  };

  const pagination = new Pagination(container, options);

  pagination.on('afterMove', eventData => {
    const currentPage = eventData.page;
    renderBooks(currentPage);
  });
}
