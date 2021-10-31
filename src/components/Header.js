import React from 'react'
import {Link} from 'react-router-dom'

// Icons
import { BiUserCircle } from "react-icons/bi";


const Header = () => {

    let user = null;

    return (
        <header>
            <nav className="navbar is-fixed-top">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/> */}
                    </a>
                    <p></p>
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
                    {/* Navbar end */}
                    <div className="navbar-menu">
                        <div className="navbar-end">

                            {/* Ternary operator */}
                            {user ?
                                <>
                                    {/* This block of code executes when the user is logged in */}
                                    <a className="navbar-item">
                                        <span className="is-size-3 mr-2 has-text-white is-flex is-justify-content-center is-align-items-center">
                                            <BiUserCircle />
                                        </span>
                                        <Link to="/login">
                                             Logout
                                         </Link>
                                     </a>
                                </>
                                // <a className="navbar-item">
                                //     <Link to="/users/login">
                                //         Sign In
                                //     </Link>
                                // </a>
                            : 
                                <>
                                    <a className="navbar-item is-flex">
                                        {/* Direct the visitor to the login page */}
                                        <Link to="/login">
                                             Sign in
                                         </Link>
                                     </a>
                                </>
                                // <a className="navbar-item">
                                //     <Link to="">
                                //         Logout
                                //     </Link>
                                // </a>
                            }
                            <a className="navbar-item">
                                <Link to="/admin/dashboard">
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
