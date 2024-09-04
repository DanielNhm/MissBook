const { Outlet, NavLink } = ReactRouterDOM

export function About() {
    return <section className="about">
        <h1>
            about us...
        </h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sed assumenda qui? Rem aut omnis sed temporibus explicabo qui aliquam dolores nisi, nihil numquam ex impedit ut debitis doloremque. Repellendus.
        </p>
        <nav>
            <NavLink to='/about/team'>Team </NavLink> |
            <NavLink to='/about/vision'> Vision </NavLink>
        </nav>
        <section className="nested-routs">
            <Outlet/>
        </section>
    </section>
}