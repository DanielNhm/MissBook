const { NavLink } = ReactRouterDOM


export function AppHeader() {

    return (
    <header className="main-header main-layout">
        <div className="header-container">

            <h1>Miss Book</h1>
            <nav className='main-nav'>
                <ul>
                    <li>
                <NavLink to="/">Home</NavLink>

                    </li>
                    <li>
                <NavLink to="/about">About</NavLink>

                    </li>
                    <li>
                <NavLink to="/book">Books</NavLink>

                    </li>
                </ul>
            </nav>
        </div>

    </header>)

}
