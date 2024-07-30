const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM

import { AppHeader} from "./cmps/app-header.jsx"
import { AddReview} from "./cmps/add-review.jsx"
import { Home } from './views/home.jsx'
import { About } from './views/about.jsx'
import { BookIndex } from './views/book-index.jsx'
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"


export function App(){ 
    return (
        <Router>
        <section className="app main-layout">
        <AppHeader></AppHeader>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book" element={<BookIndex />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/book/:bookId" element={<BookDetails/>}/>
                    <Route path="/book/:bookId/review" element={<AddReview/>}/>
                    <Route path="/book/edit" element={<BookEdit/>}/>
                    <Route path="/book/edit/:bookId" element={<BookEdit/>}/>
                </Routes>
            </main>
            <UserMsg/>
        </section>
        </Router>
    )
    
}
