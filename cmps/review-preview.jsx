import { FarStar } from '../cmps/far-star.jsx'


export function ReviewPreview({ review, onRemoveReview }) {
    return <section className="review-preview">
        <article><span className='bold'> {review.fullName} </span></article>
        <article><span className='bold'>{review.readAt}</span></article>
        <FarStar rating={review.rating}></FarStar>
        <p>{review.description}</p>
        <button className='rmv-preview' onClick={() => {
            onRemoveReview(review.id)
        }}>remove</button>

    </section>
}