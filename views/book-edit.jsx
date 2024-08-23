const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"


export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        if (params.bookId)
            loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId).then(setBookToEdit).catch((err) => {
            console.log('Had issued in car edit', err)
            navigate('/book')
        })
    }

    function handleChange({ target }) {
        const field = target.name
        const val = target.type === "number" ? (+target.value || '') : target.value
        setBookToEdit((prevBookToEdit) => {
            if (field === 'amount') {
                return {
                    ...prevBookToEdit,
                    listPrice: {
                        ...prevBookToEdit.listPrice,
                        amount: val,
                    }
                }
            } else {
                return { ...prevBookToEdit, [field]: val }
            }
        })
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit).then(() => {

            navigate('/book')
            showSuccessMsg('The operation was successful')
        }).catch(() => {
            showErrorMsg('The operation failed')
        })

    }


    const { title, listPrice: { amount } } = bookToEdit

    return <section className="book-edit">
        <h2>{params.bookId ? 'Edit' : 'Add'} Book</h2>
        <form onSubmit={onSaveBook}>
            <section className="book-edit-inputs flex">
                <label htmlFor="title">Book name:</label>
                <input onChange={handleChange} value={title} type="text" name="title" id="title" />
                <label htmlFor="amount">Price:</label>
                <input onChange={handleChange} value={amount || 0} type="number" name="amount" id="amount" />
            </section>
        </form>
        <button>{params.bookId ? 'Save' : 'Add'}</button>

    </section>

}