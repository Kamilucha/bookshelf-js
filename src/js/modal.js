import ShoppingList from './ShoppingList';

export default function renderModal(card) {
  let modalBackground = document.createElement('div');
  modalBackground.className = 'modal_background';

  let modalBody = document.createElement('div');
  modalBody.className = 'modal_body';

  modalBackground.append(modalBody);

  modalBody.innerHTML = `
        <div class="flex gap-24 mb-40">
            <img src="${card.book_image}" alt="">
            <div>
                <div class="card_title">${card.title}</div>
                <div class="card_author">${card.author}</div>
                <div class="card_description">${card.description}</div>
                <div class="flex gap-20"></div>

            </div>
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
  modalBody.append(closeBtn, shoppingListEl);
  let currentBook = new ShoppingList(card, shoppingListEl);
  shoppingListEl.onclick = function () {
    currentBook.handleBook();
  };

  document.addEventListener('keydown', escapeHandler);
  document.body.append(modalBackground);
}
