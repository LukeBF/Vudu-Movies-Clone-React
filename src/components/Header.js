import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                </a>
                    <a class="navbar-burger" id="burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" id="nav-links">
                    <div class="navbar-start">
                        <a class="navbar-item">
                            <Link to="/">
                                Home
                            </Link>
                        </a>

                        <a class="navbar-item">
                            <Link to="/movies">
                                Movies
                            </Link>
                        </a>

                        <a class="navbar-item">
                            <Link to="/tvshows">
                                TV-Shows
                            </Link>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <a class="navbar-item">
                                <Link to="/users/login">
                                    Sign In
                                </Link>
                            </a>
                            <a class="navbar-item">
                                <Link to="/admin">
                                    Admin
                                </Link>
                            </a>
                        </div>
                    </div>
                    
                </div>
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tvshows">TV-Shows</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul> */}
            </nav>
        </header>

    )
}

export default Header
