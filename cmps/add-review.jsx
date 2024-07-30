const {useState,useRef} = React
const {useParams,useNavigate} = ReactRouterDOM

import { StarRating} from './star-rating.jsx'
import { bookService } from "../services/book.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"



export function AddReview() {
    const [reviewToEdit,setReviewToEdit] = useState(bookService.getEmptyReview())
    const navigate = useNavigate()
    const params = useParams()
    const stars = useRef()

    console.log('stars',stars)


    function handleChange({target}){
        const field = target.name
        const val = target.type ==="number"? (+target.value||'') : target.value
        setReviewToEdit((prevReviewToEdit)=>({...prevReviewToEdit,[field]:val}))
    }
    function onSaveReview(ev){
        ev.preventDefault()
        console.log('rev',reviewToEdit)
        bookService.addReview(params.bookId,reviewToEdit)
        showSuccessMsg('Review saved')
    }
    console.log(reviewToEdit)

    function onBack(){
        navigate(`/book/${params.bookId}`)
    }


    const  {fullName, rating, readAt, description} = reviewToEdit

    return (
        <section className= 'add-review'>
            <form onSubmit = {onSaveReview}>
                <label htmlFor="fullName">Full name:</label>
                <input required onChange={handleChange} value={fullName} type="text" name="fullName" id="fullName" />
                  <label htmlFor="rating">Rating:</label> 
                  <StarRating handleChange={handleChange}>

                  </StarRating>
                  <label htmlFor="readAt"> Read at:</label>
                  <input onChange= {handleChange} value = {readAt} type="date" id="date" name="date"/>
                  <label htmlFor="description">Share details of your own experience:</label>
                  <textarea onChange= {handleChange} value = {description} type="text" id="description" name="description"/>
                  <button>Add review</button>
             </form>
                  <button onClick ={onBack }>Back</button>
        </section>

    )
    
}