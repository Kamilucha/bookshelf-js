export default class ShoppingList {
  constructor(book, linkToBtn) {
    this.book = book;
    this.currentShoppingListItems = localStorage.getItem('shoppingList');
    if (this.currentShoppingListItems == null) {
      this.currentShoppingListItems = [];
    } else {
      this.currentShoppingListItems = JSON.parse(this.currentShoppingListItems);
    }
    this.index = this.currentShoppingListItems.findIndex(
      item => item._id == book._id
    );
    this.isBookAlreadyInShoppingList = this.index > -1;
    this.linkToBtn = linkToBtn;
    this.linkToBtn.textContent =
      (this.isBookAlreadyInShoppingList ? 'Remove from the ' : 'Add to ') +
      'Shopping List';
    this.linkToBtn.setAttribute(
      'data-action',
      this.isBookAlreadyInShoppingList ? 'toAdd' : 'toRemove'
    );
    this.notification = document.createElement('div');
    this.notification.textContent =
      'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
    this.notification.className = 'notification';
    if (this.isBookAlreadyInShoppingList) {
      linkToBtn.insertAdjacentElement('afterend', this.notification);
    }
  }

  handleBook(linkToBtn) {
    if (this.isBookAlreadyInShoppingList) {
      this.currentShoppingListItems.splice(this.index, 1);
      this.index = -1;
      this.isBookAlreadyInShoppingList = false;
      this.notification.remove();
    } else {
      this.index = this.currentShoppingListItems.length;
      this.currentShoppingListItems.push(this.book);
      this.isBookAlreadyInShoppingList = true;
      this.linkToBtn.insertAdjacentElement('afterend', this.notification);
    }
    localStorage.setItem(
      'shoppingList',
      JSON.stringify(this.currentShoppingListItems)
    );
    this.linkToBtn.textContent =
      (this.isBookAlreadyInShoppingList ? 'Remove from the ' : 'Add to ') +
      'Shopping List';
    this.linkToBtn.setAttribute(
      'data-action',
      this.isBookAlreadyInShoppingList ? 'toAdd' : 'toRemove'
    );
  }
}
