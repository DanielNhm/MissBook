import { BookPreview } from '../cmps/book-preview.jsx'


const { Link } = ReactRouterDOM


export function BookList({ books, onRemoveBook }) {
    return <ul className="book-list flex justify-center">
        {books.map((book) => <li key={book.id}>
            <BookPreview book={book} />
            <section>
                <a onClick={() => {
                    onRemoveBook(book.id)
                }}>remove</a>

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