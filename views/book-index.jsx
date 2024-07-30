const { useEffect, useRef, useState } = React
const { Link } = ReactRouterDOM


import { bookService } from '../services/book.service.js'
import { BookList } from '../cmps/book-list.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookDetails } from './book-details.jsx'
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"



export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilterBY())


    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).then(setBooks)

    }
    console.log(books)

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updateBooks = books.filter(book => book.id != bookId)
            setBooks(updateBooks)
            showSuccessMsg(`book ${bookId} removed`)

        }).catch(()=>{
            showErrorMsg('Operation failed')
        })
    }

    function onSetFilterBy(filterBy){
        setFilterBy(prevFilterBy=>({...prevFilterBy,...filterBy}))
    }
  
    return <section className="book-index">

        <h1>books...</h1>
        <Link to="/book/edit">Add book</Link>
        <BookFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy}/>
        <BookList books={books} onRemoveBook={onRemoveBook} />
        
          
        
    </section>
}