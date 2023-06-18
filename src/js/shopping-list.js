const SHOPPING_LIST_STORAGE_KEY = 'shoppingList';
const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];

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
        </article>`;
      })
      .join('');
  } else {
    booksContainer.innerHTML = `
      <p class="empty-text">
        This page is empty, add some books and proceed to order.
      </p>
      <div class="books-images"></div>
    `;
  }
}

renderShoppingList();
renderBooks();
