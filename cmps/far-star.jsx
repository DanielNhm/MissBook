const { useRef, useEffect } = React


export function FarStar({ rating }) {
    const starsContainerRef = useRef(null)

    useEffect(() => {
        if (starsContainerRef.current) {
            const stars = starsContainerRef.current.querySelectorAll('.fa-star')
            stars.forEach((star) => {
                    stars.forEach((star, index) => {
                        rating >= index ? star.classList.add("active") : star.classList.remove("active")
                    })
                   
                })
            
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
