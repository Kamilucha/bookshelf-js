import {BooksAPIService} from '../booksAPIService'

const bookApi = new BooksAPIService()
async function renderTopBooks() {
let topBooks = await bookApi.getTopBooks()
console.log(topBooks)
}
renderTopBooks()