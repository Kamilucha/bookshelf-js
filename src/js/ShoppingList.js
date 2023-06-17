export default class ShoppingList {
  constructor(book) {
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
  }

  handleBook(linkToBtn) {
    if (this.isBookAlreadyInShoppingList) {
      this.currentShoppingListItems.splice(this.index, 1);
      this.index = -1;
      this.isBookAlreadyInShoppingList = false;
    } else {
      this.index = this.currentShoppingListItems.length;
      this.currentShoppingListItems.push(this.book);
      this.isBookAlreadyInShoppingList = true;
    }
    localStorage.setItem(
      'shoppingList',
      JSON.stringify(this.currentShoppingListItems)
    );
    linkToBtn.textContent =
      (this.isBookAlreadyInShoppingList ? 'Remove from the ' : 'Add to ') +
      'Shopping List';
  }
}
