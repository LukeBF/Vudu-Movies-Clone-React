import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                </a>
                    <a className="navbar-burger" id="burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div className="navbar-menu" id="nav-links">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            <Link to="/">
                                Home
                            </Link>
                        </a>

                        <a className="navbar-item">
                            <Link to="/movies">
                                Movies
                            </Link>
                        </a>

                        <a className="navbar-item">
                            <Link to="/tvshows">
                                TV-Shows
                            </Link>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item">
                                <Link to="/users/login">
                                    Sign In
                                </Link>
                            </a>
                            <a className="navbar-item">
                                <Link to="/admin">
                                    Admin
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header
