import { BookPreview } from '../cmps/book-preview.jsx'


const { Link } = ReactRouterDOM


export function BookList({ books, onRemoveBook }) {
    return <ul className="book-list">
        {books.map((book) => <li key={book.id}>
            <BookPreview book={book} />
            <section>
                <button onClick={() => {
                    onRemoveBook(book.id)
                }}>remove</button>

                <button>
                    <Link to={`/book/${book.id}`}>select</Link>
                </button>

                <button>
                    <Link to= {`/book/edit/${book.id}`}>edit</Link>
                </button>
            </section>
        </li>)}
    </ul>
}