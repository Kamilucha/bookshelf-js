import ShoppingList from './ShoppingList';
import {
  addBookData,
  removeBookData,
} from './authAndDataProcessing/firebaseService';

export default function renderModal(card) {
  document.body.style.overflow = 'hidden';

  let modalBackground = document.createElement('div');
  modalBackground.className = 'modal_background';

  let modalBody = document.createElement('div');
  modalBody.className = 'modal_body';

  modalBackground.append(modalBody);

  let buyLinks = card.buy_links
    .filter(link => ['Amazon', 'Apple Books', 'Bookshop'].includes(link.name))
    .map(link => {
      let url = `<a href="${link.url}" title="${link.name}">SVG</a>`;
      return url;
    })
    .join('');

  modalBody.innerHTML = `
        <div class="modal_container">
            <img class="modal_image" src="${card.book_image}" alt="">
            <ul>
                <li>
                  <div class="card_title">${card.title}</div>
                </li>
                <li>
                  <div class="card_author">${card.author}</div>
                </li>
                <li>
                  <div class="card_description">${card.description}</div></li>
                <li>
                  <div class="modal_links">${buyLinks}</div></li>
            </ul>
        </div>
        `;
  let closeBtn = document.createElement('button');
  closeBtn.className = 'close_btn';
  closeBtn.textContent = 'x';
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
  shoppingListEl.setAttribute('data-is-auth', 'false');
  modalBody.append(closeBtn, shoppingListEl);
  let currentBook = new ShoppingList(card, shoppingListEl);
  shoppingListEl.onclick = () => {
    currentBook.handleBook();
    console.log(shoppingListEl.getAttribute('data-action'));
    if (shoppingListEl.getAttribute('data-action') === 'toAdd') {
      addBookData(card);
    } else if (shoppingListEl.getAttribute('data-action') === 'toRemove') {
      removeBookData(card);
    }
  };

  document.addEventListener('keydown', escapeHandler);
  document.body.append(modalBackground);
}
