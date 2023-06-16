import {BooksAPIService} from '../booksAPIService'

const list = document.querySelector('.list-js')
const listGenres = new BooksAPIService()

async function fetchBookCategories() {
    try {
        const data = await listGenres.getBookCategories()
        renderMarkupList(data)
    }
    catch(error) {
        console.log(error)
    }
}

fetchBookCategories()

function renderMarkupList(genres) {
    const markup = genres.map((genre) =>{
        return `<li class='genres-item'><button type='button' class='genres-btn genres-btn-js'>${genre.list_name}</button></li>`
    }).join('')
    list.insertAdjacentHTML('beforeend', markup)
}