import { ReviewPreview } from '../cmps/review-preview.jsx'


export function ReviewList({ book, onRemoveReview }) {
    return <section className="review-list">
        <ul className="book-list">
            {book.reviews.map((review) => <li key={review.id}>
                <ReviewPreview review={review} onRemoveReview = {onRemoveReview} />
               
            </li>)}
        </ul>
    </section>
}