export class BooksAPIService {
  #BASE_URL = 'https://books-backend.p.goit.global';

  #endpoints = {
    categoryList: '/books/category-list',
    topBooks: '/books/top-books',
    category: '/books/category',
    bookInfo: id => `/books/${id}`,
  };
  

  constructor() {
    this.page = 1;
  }

  async getBookCategories() {
    const resp = await fetch(
      `${this.#BASE_URL}${this.#endpoints.categoryList}`
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getTopBooks() {
    const resp = await fetch(`${this.#BASE_URL}${this.#endpoints.topBooks}`);

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getBooksByCategory(query) {
    const resp = await fetch(
      `${this.#BASE_URL}${this.#endpoints.category}?category=${query}`
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }

  async getBookInfo(id) {
    const resp = await fetch(
      `${this.#BASE_URL}${this.#endpoints.bookInfo(id)}`
    );

    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  }
}
