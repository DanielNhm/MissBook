const { useRef, useEffect } = React


export function StarRating({ handleChange }) {
    const starsContainerRef = useRef(null)

    useEffect(() => {
        if (starsContainerRef.current) {
            const stars = starsContainerRef.current.querySelectorAll('.fa-star')
            console.log(stars) // Do something with the stars NodeList
            stars.forEach((star, index1) => {
                // Example: Add an event listener to each star
                star.addEventListener('click', () => {
                    stars.forEach((star, index2) => {
                        index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
                    })
                    const rate = {target:{ name: 'rating', value: index1, type: 'number'} }
                    handleChange(rate)
                })
            })
        }

        // Clean up event listeners when component unmounts
        return () => {
            if (starsContainerRef.current) {
                const stars = starsContainerRef.current.querySelectorAll('.fa-star')
                stars.forEach((star) => {
                    star.removeEventListener('click', () => { })
                })
            }
        }
    }, [])

    return (
        <div ref={starsContainerRef} className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
    )
}
