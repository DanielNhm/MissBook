const { NavLink } = ReactRouterDOM


export function AppHeader() {

    function toggleMenu() {
        document.body.classList.toggle('menu-open')
    }

    return (
        <header className="main-header full main-layout">
            <div className="header-container flex space-between align-center ">

                <div className="logo"><span>M</span>iss<span>B</span>ook<img className='svg-book' src="svg\student-person-part-2-svgrepo-com (1).svg"></img></div>
                <nav className='main-nav-container'>
                    <div className='main-nav-container'>

                    <ul className="main-nav flex clean-list">
                        <li>
                            <NavLink className='flex align-center' to="/">Home</NavLink>

                        </li>
                        <li>
                            <NavLink className='flex align-center' to="/about">About</NavLink>

                        </li>
                        <li>
                            <NavLink className='flex align-center' to="/book">Books</NavLink>

                        </li>
                    </ul>
                    </div>
                </nav>
                    <button className="btn-toggle-menu" onClick={toggleMenu}>☰</button>
            </div>

        </header>)

}
