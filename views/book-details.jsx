const { useEffect, useState } = React
const {Link, useParams,useNavigate } = ReactRouterDOM



import { LongTxt } from '../cmps/long-txt.jsx'
import { ReviewList } from '../cmps/review-list.jsx'
import { bookService } from '../services/book.service.js'


export function BookDetails() {

    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()




    useEffect(() => {
        bookService.get(params.bookId).then(setBook)
        .catch(err=>{
            console.log('Had issued in book details',err)
            navigate('/book')
        })
    }, [])

    function getPublishedDate() {
        const date = new Date()
        const diff = date.getFullYear() - book.publishedDate
        if (diff > 10) {
            return 'Vintage'
        } else if (diff <= 2) {
            return 'New'
        }
    }
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
        bookService.removeReview(book.id,reviewId).then(() => {
            const updateReview = book.reviews.filter(review => review.id != reviewId)
            setBook(prevBook=>({ ...prevBook ,reviews:updateReview}))
            showSuccessMsg(`review ${reviewId} removed`)

        }).catch(()=>{
            showErrorMsg('Operation failed')
        })
    }
    console.log(book)

    function onBack(){
        navigate('/book')
    }


    if (!book) return <div>Loading...</div>

    return <section className="book-details">
        <h1>Name : {book.title}</h1>
        <h1>Authors : {book.authors}</h1>
        <h1>Description :</h1>
        <LongTxt txt={book.description}></LongTxt>
        <h2>{book.pageCount}</h2>
        {(book.pageCount < 100) && <h2> Light Reading</h2> ||
            (book.pageCount > 500) && <h2> Serious Reading</h2> ||
            (book.pageCount > 100) && <h2> Descent Reading</h2>}
        <h3>{getPublishedDate()}</h3>
        <img src={book.thumbnail} />
        <h1 className={getColorTxt()}>{`${getPriceSymbol()} ${book.listPrice.amount}`}</h1>
        {(book.listPrice.isOnSale) && <img className='svg-sale' src="../svg/sale-svgrepo-com.svg"></img>}
        <Link to={`/book/${book.id}/review`}>Add review</Link>
        {book.reviews && <ReviewList book={book} onRemoveReview={onRemoveReview}/>}

        <div>
            <button onClick={onBack} >back</button>
        </div>


    </section>

}