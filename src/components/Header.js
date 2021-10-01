import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {


    return (
        <header className="nav-container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tvshows">TV-Shows</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header
