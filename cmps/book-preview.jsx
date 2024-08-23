export function BookPreview({ book }) {
    const colorTxt = (book.listPrice.amount < 20) ? 'green' : ((book.listPrice.amount > 150) ? 'red' : '')
    const priceSymbol = book.listPrice.currencyCode === 'EUR'? '€':''
    ||book.listPrice.currencyCode === 'USD'?'$':''
    ||(book.listPrice.currencyCode === 'ILS')?'₪':''
    return <article className="book-preview">
        <h1 className="card-title">{book.title}</h1>
        <p className="card-text">{book.description}</p>
        <img  className="card-image" src={`${book.thumbnail}`}></img>
        <h1 className={`card-price ${colorTxt}`}>{`${priceSymbol} ${book.listPrice.amount}`}</h1>
    </article>
}