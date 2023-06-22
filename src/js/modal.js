import ShoppingList from './ShoppingList';
import {
  addBookData,
  removeBookData,
  checkState,
} from './authAndDataProcessing/firebaseService';
import getIconPath from './shopRefs';
const { appleBooksIconPath, bookShopIconPath, amazonIconPath, svgTrashIcon } =
  getIconPath();

export default function renderModal(card) {
  document.body.style.overflow = 'hidden';

  let modalBackground = document.createElement('div');
  modalBackground.className = 'modal_background';

  let modalBody = document.createElement('div');
  modalBody.className = 'modal_body';

  modalBackground.append(modalBody);

  let buyLinks = card.buy_links
    .map(({ url, name }) => {
      let imageUrl;
      if (name === 'Amazon') {
        imageUrl = `${amazonIconPath}`;
      } else if (name === 'Apple Books') {
        imageUrl = `${appleBooksIconPath}`;
      } else if (name === 'Bookshop') {
        imageUrl = `${bookShopIconPath}`;
      } else return;

      let urlMarkup = `
        <li class="shoplist-url-item">
          <a class="shoplist_url" href="${url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="${name} link">
            <img class="modal_img" src="${imageUrl}" alt="${name} link" width="48px" height="15px" />
          </a>
        </li>
    `;
      return urlMarkup;
    })
    .join('');

  const textFish = "The description of the book can be viewed on the seller's website.";
  const descr = card.description || textFish;

  modalBody.innerHTML = `
        <div class="modal_container">
            <img class="modal_image" src="${card.book_image}" alt="">
            <ul>
                <li>
                  <div class="card_title">${card.title}</div></li>
                <li>
                  <div class="card_author">${card.author}</div></li>
                <li>
                  <div class="card_description">${descr}</div></li>
                <li>
                  <div>
                  <ul class="modal_links">${buyLinks}</ul></div></li>
            </ul>
        </div>
        `;
  let closeBtn = document.createElement('button');
  closeBtn.className = 'close_btn';
  closeBtn.innerHTML = `<svg class="icon_close" width="24" height="24">
  <use href="${svgTrashIcon}#icon-close"></use></svg>`;
  closeBtn.addEventListener('click', closeHandler);

  modalBackground.addEventListener('click', closeHandler);

  modalBody.onclick = function (event) {
    event.stopPropagation();
  };

  function closeHandler() {
    modalBackground.remove();
    cleanEventListeners();
    document.body.removeAttribute('style');
  }

  function escapeHandler(event) {
    if (event.key == 'Escape') {
      closeHandler();
    }
  }

  function cleanEventListeners() {
    closeBtn.removeEventListener('click', closeHandler);
    modalBackground.removeEventListener('click', closeHandler);
    document.removeEventListener('keydown', escapeHandler);
  }

  let shoppingListEl = document.createElement('button');
  shoppingListEl.className = 'btn';
  shoppingListEl.type = 'button';
  shoppingListEl.setAttribute('data-book-id', card._id);
  shoppingListEl.setAttribute('data-is-auth-btn', 'false');
  modalBody.append(closeBtn, shoppingListEl);
  modalBody.insertAdjacentElement('afterbegin', closeBtn);
  modalBody.append(shoppingListEl);
  let currentBook = new ShoppingList(card, shoppingListEl);
  shoppingListEl.onclick = () => {
    currentBook.handleBook();

    if (shoppingListEl.getAttribute('data-action') === 'toAdd') {
      addBookData(card);
    } else if (shoppingListEl.getAttribute('data-action') === 'toRemove') {
      removeBookData(card);
    }
  };

  document.addEventListener('keydown', escapeHandler);
  document.body.append(modalBackground);

  const addRemoveBtn = document.querySelector('[data-is-auth-btn]');
  checkState(addRemoveBtn);
}
