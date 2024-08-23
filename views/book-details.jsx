const { useEffect, useState } = React
const { Link, useParams, useNavigate } = ReactRouterDOM



import { LongTxt } from '../cmps/long-txt.jsx'
import { ReviewList } from '../cmps/review-list.jsx'
import { bookService } from '../services/book.service.js'


export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()




    useEffect(() => {
        bookService.get(params.bookId).then(setBook)
            .catch(err => {
                console.log('Had issued in book details', err)
                navigate('/book')
            })
    }, [])


    function getColorTxt() {
        const colorTxt = (book.listPrice.amount > 150) ? 'red' : ''
            || (book.listPrice.amount < 20) ? 'green' : ''
        return colorTxt
    }

    function getPriceSymbol() {
        const priceSymbol = book.listPrice.currencyCode === 'EUR' ? '€' : ''
            || book.listPrice.currencyCode === 'USD' ? '$' : ''
                || (book.listPrice.currencyCode === 'ILS') ? '₪' : ''
        return priceSymbol
    }
    function onRemoveReview(reviewId) {
        bookService.removeReview(book.id, reviewId).then(() => {
            const updateReview = book.reviews.filter(review => review.id != reviewId)
            setBook(prevBook => ({ ...prevBook, reviews: updateReview }))
            showSuccessMsg(`review ${reviewId} removed`)

        }).catch(() => {
            showErrorMsg('Operation failed')
        })
    }
    console.log(book)

    function onBack() {
        navigate('/book')
    }


    if (!book) return <div>Loading...</div>

    return <section>
        <section className="book-details">
            <section className='details'>

                <article>
                    <span className='bold'>Name : </span> {book.title}

                </article>
                <article>

                    <span className='bold'>Authors :</span> {book.authors}
                </article>
                <span className='bold'>Description :</span>
                <LongTxt txt={book.description}></LongTxt>
                <article className={getColorTxt()}> <span className='bold'> price:</span> {`${getPriceSymbol()} ${book.listPrice.amount}`}</article>

            </section>
            <div className='img-details'>

            <img src={book.thumbnail} />
            {(book.listPrice.isOnSale) && <img className='svg-sale' src="../svg/sale-svgrepo-com.svg"></img>}
            </div>
        </section>
            {book.reviews && <ReviewList book={book} onRemoveReview={onRemoveReview} />}
        <section className='flex align-center column-direction'>


            <Link to={`/book/${book.id}/review`}>Add review</Link>
            <div>
                <button onClick={onBack} >back</button>
            </div>
        </section>


    </section>

}