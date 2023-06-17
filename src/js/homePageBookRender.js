import { BooksAPIService } from "./booksAPIService";

const bookGalleryContainer = document.querySelector('.books-categories-list');

const booksService = new BooksAPIService();


function renderGallery(array) {

    const markup = array.map(({ list_name, books  }) => {
  
        const markup = `
    <li class="books-category-item">
        <h2 clas="books-category-title">${list_name}</h2>
    <ul class="books-category-elements list">
    <li class="book-card">
    <img class="book-image" src="${books[0].book_image}" alt="" loading = "lazy" /></a>
    <div class="book-info">
        <p class="book-title">
            ${books[0].title}
        </p>
        <p class="book-author">
            ${books[0].author}
        </p>
    </div>
</li>
<li class="book-card">
    <img class="book-image" src="${books[1].book_image}" alt="" loading = "lazy" /></a>
    <div class="book-info">
        <p class="book-title">
            ${books[1].title}
        </p>
        <p class="book-author">
            ${books[1].author}
        </p>
    </div>
</li>
<li class="book-card">
    <img class="book-image" src="${books[2].book_image}" alt="" loading = "lazy" /></a>
    <div class="book-info">
        <p class="book-title">
            ${books[2].title}
        </p>
        <p class="book-author">
            ${books[2].author}
        </p>
    </div>
</li>
<li class="book-card">
    <img class="book-image" src="${books[3].book_image}" alt="" loading = "lazy" /></a>
    <div class="book-info">
        <p class="book-title">
            ${books[3].title}
        </p>
        <p class="book-author">
            ${books[3].author}
        </p>
    </div>
</li>
<li class="book-card">
    <img class="book-image" src="${books[4].book_image}" alt="" loading = "lazy" /></a>
    <div class="book-info">
        <p class="book-title">
            ${books[4].title}
        </p>
        <p class="book-author">
            ${books[4].author}
        </p>
    </div>
</li>
</ul>
<button
        class="books-category-button"
        data-action="load-more"
        type="button"
      >
        See more
      </button>
</li>`

        return markup;
    }).join("");

    bookGalleryContainer.insertAdjacentHTML('beforeend', markup);
}

booksService.getTopBooks().then(topBooks => {
    console.log(topBooks);
    renderGallery(topBooks);
}).catch(error => console.log(`Error:`, error));
