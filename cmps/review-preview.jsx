import { FarStar } from '../cmps/far-star.jsx'


export function ReviewPreview({ review, onRemoveReview }) {
    return <section className="review-preview">
        <h1>{review.fullName}</h1>
        <h2>{review.readAt}</h2>
        <FarStar rating={review.rating}></FarStar>
        <p>{review.description}</p>
        <button onClick={() => {
            onRemoveReview(review.id)
        }}>remove</button>

    </section>
}