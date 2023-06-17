class ShoppinList {
  constructor(book) {
    this.book = book;
    this.currentShoppingListItems = localStorage.getItem('shoppingList');
    if (this.currentShoppingListItems == null) {
      this.currentShoppingListItems = [];
    } else {
      this.currentShoppingListItems = JSON.parse(this.currentShoppingListItems);
    }
    this.isBookAlreadyInShoppingList = this.currentShoppingListItems.find(
      item => item._id == book._id
    );
  }
  addToShoppingList() {
    if (!this.isBookAlreadyInShoppingList) {
      this.currentShoppingListItems.push(this.book);
      this.isBookAlreadyInShoppingList = true
      localStorage.setItem("shoppingList", JSON.stringify(this.currentShoppingListItems))
    }
  }

  deleteToShoppingList() {

  }
}
