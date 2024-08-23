import { bookService } from "../services/book.service.js"

const { useEffect, useRef, useState } = React

export function BookFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const val = target.type === "number" ? (+target.value || '') : target.value
        setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: val }))
    }
    const { txt, price } = filterByToEdit

    return <section className="book-filter">
        <form>
            <div className="search">
                <span class="search-icon material-symbols-outlined">
                    search
                </span>
            <input className="search-input" onChange={handleChange} value={txt} type="search" name="txt" id='txt' placeholder="Search" />

            </div>
        </form>

    </section>
}