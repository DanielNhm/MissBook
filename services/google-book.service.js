import { utilService } from './util.service.js'
import gBooks from '../books.json' assert {type: 'json'}

const PAGE_SIZE = 5
const GOOGLE_KEY = 'googleDB'

var gFilterBy = { txt: '', minSpeed: 0 }
// var gSortBy = { vendor: 1 }
// var gPageIdx

console.log('gBooks', gBooks)


export const googleBookService = {
    query,

}
const googleCache = utilService.loadFromStorage(GOOGLE_KEY) || {}

window.googleBookService = googleBookService

function query(txt) {
    if (googleCache[txt]) return Promise.resolve(googleCache[txt])
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${txt}`
    return fetch(url).then(res => res.json()).then(res => {
        const books = res.items.map(book => ({
            id: book.id,
            title: book.volumeInfo.title,
            "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
            "authors": [
                "Barbara Cartland"
            ],
            "publishedDate": 1999,
            "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
            "pageCount": 713,
            "categories": [
                "Computers",
                "Hack"
            ],
             "thumbnail": (book.volumeInfo.imageLinks.thumbnail)?book.volumeInfo.imageLinks.thumbnail:'../assets/img/default-book.jpg',
            "language": "en",
            "listPrice": {
                "amount": 109,
                "currencyCode": "EUR",
                "isOnSale": false
            }
        }))
        googleCache[txt] = books
        utilService.saveToStorage(GOOGLE_KEY, googleCache)
        return books
    })
}
