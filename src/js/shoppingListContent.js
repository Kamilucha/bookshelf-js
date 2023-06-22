import getIconPath from './shopRefs';
import Pagination from '/node_modules/tui-pagination';

const booksContainer = document.getElementById('booksContainer');
let pagination = null;

if (booksContainer) {
  renderBooks(1, booksContainer);
}
function renderBooks(page, booksContainer) {
  if (!booksContainer) {
    return;
  }

  const SHOPPING_LIST_STORAGE_KEY = 'shoppingList';
  let shoppingList =
    JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
  const itemsPerPage = 3;
  const {
    appleBooksIconPath,
    bookShopIconPath,
    amazonIconPath,
    svgTrashIcon,
    emptyListStubImage,
  } = getIconPath();

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const booksOnPage = shoppingList.slice(startIndex, endIndex);

  booksContainer.innerHTML = '';

  if (booksOnPage.length === 0) {
    const emptyContainer = document.createElement('div');
    emptyContainer.className = 'shop-card-empty';
    emptyContainer.innerHTML = `
        <p class="shop-card-empty-text">
          This page is empty, add some books and proceed to order.
        </p>
        <img class="shop-card-empty-picture" src="${emptyListStubImage}" alt="Shop is Empty">
      `;
    booksContainer.appendChild(emptyContainer);
    hidePagination();
  } else {
    const cardsHtml = booksOnPage.map(
      ({
        _id,
        title,
        author,
        description,
        list_name,
        book_image,
        buy_links: [amazon, apple, bookmil, barnes, bookshop],
      }) => {
        const textFish = "The description of the book can be viewed on the seller's website.";
        const descr = description || textFish;

        return `<article class="shopping__card">
          <div class="about-img">
            <img class="shopping-card-img" src="${book_image}" alt="${title}" />
          </div>
          <div class="about-content">
              <div class="about-title">
            <h3 class="shopping-card-title">${title}</h3>
            <p class="shopping-card-category">${list_name}</p>
          </div>
          <div class="about-description">
            <p class="shopping-card-description">${descr}</p>
          </div>
          <div class="about-autor-url">
          <div class="about-author">
            <p class="shopping-card-author">${author}</p>
          </div>
          <div class="shoplist-url">
            <ul class="shoplist-url-list">
              <li class="shoplist-url-item">
                <a class="shoplist-url-link" href="${amazon.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
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
          </div></div>
          
          <div>
          <button class="shopping-card-btn" type="button" data-book-id="${_id}" aria-label="Remove book from shopping list">
            <svg class="icon-trash" data-book-id="${_id}" width="17" height="17">
              <use href="${svgTrashIcon}#icon-trash"></use>
            </svg>
          </button>
        </article>`;
      }
    );

    booksContainer.innerHTML = cardsHtml.join('');
    const deleteButtons = booksContainer.querySelectorAll('.shopping-card-btn');
    deleteButtons.forEach(button => {
      button.addEventListener('click', event => {
        const bookId = event.target.getAttribute('data-book-id');
        deleteBook(bookId);
      });
    });
    showPagination();
  }

  function deleteBook(id) {
    const updatedShoppingList = shoppingList.filter(item => item._id !== id);
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(updatedShoppingList)
    );
    shoppingList = updatedShoppingList;
    updatePagination();
    let currentPage = pagination.getCurrentPage();
    const totalPages = Math.ceil(shoppingList.length / itemsPerPage);

    if (currentPage > totalPages) {
      pagination.movePageTo(totalPages);
    }

    const updatedCurrentPage = pagination.getCurrentPage();
    renderBooks(updatedCurrentPage, booksContainer);
  }
  function updatePagination(totalPages) {
    const paginationList = document.querySelector('.tui-pagination');
    const paginationNumbers = paginationList.querySelectorAll('.tui-page-btn');

    paginationNumbers.forEach(number => {
      const pageNumber = parseInt(number.innerText);

      if (pageNumber > totalPages) {
        number.remove();
      }
    });

    // pagination.reset(totalPages);
  }

  function showPagination() {
    const paginationElement = document.getElementById('pagination');
    paginationElement.style.display = 'block';
  }

  function hidePagination() {
    const paginationElement = document.getElementById('pagination');
    paginationElement.style.display = 'none';
  }

  // Pagination
  const container = document.getElementById('pagination');
  const options = {
    totalItems: shoppingList.length,
    itemsPerPage,
    visiblePages: 15,
    page,
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

  pagination = new Pagination(container, options);

  pagination.on('afterMove', eventData => {
    const currentPage = eventData.page;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const booksOnPage = shoppingList.slice(startIndex, endIndex);

    renderBooks(currentPage, booksContainer);

    if (booksOnPage.length === 0 && currentPage > 1) {
      pagination.movePageTo(currentPage - 1);
      renderBooks(currentPage - 1, booksContainer);
    }

    const totalPages = Math.ceil(shoppingList.length / itemsPerPage);
    updatePagination(totalPages);
  });
}
