import { bookService } from "../services/book.service.js"

const { useEffect, useRef, useState } = React

export function BookFilter({filterBy,onSetFilterBy}) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(()=>{
        onSetFilterBy(filterByToEdit)
    },[filterByToEdit])

    function handleChange({target}){
        const field = target.name
        const val = target.type ==="number"? (+target.value||'') : target.value
        setFilterByToEdit((prevFilterBy)=>({...prevFilterBy,[field]:val}))
    }
    const {txt,price} = filterByToEdit

    return <section className="book-filter">
        <h1>filter our books...</h1>
        <form>
            <label htmlFor="txt">by name:</label>
            <input onChange={handleChange} value = {txt} type="txt" name="txt" id='txt' placeholder="by name" />
            <label htmlFor="price">by price:</label>
            <input onChange={handleChange} value = {price} type="number" name='price' id='price' placeholder="by price" />
        </form>

    </section>
}