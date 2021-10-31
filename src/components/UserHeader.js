import React,{useContext} from 'react'
import {Link} from 'react-router-dom'

// Icons
import { BiUserCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/img/logos/streamee-no-bg.png"

//Context
import LoginContext from "../context/LoginContext";

const UserHeader = () => {

    const {isLogin,setIsLogin} = useContext(LoginContext);

    let user = null;

    const logOut = () => {
        if(localStorage.getItem("token"))
        {
            localStorage.removeItem("token");
            alert("You're logged out. Come again!")

            setIsLogin({user:null,status:false});
        }
    }

    return (
        <>
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
                            {isLogin.status ?
                                <>
                                    {/* This block of code executes when the user is logged in */}
                                    <a className="navbar-item">
                                        <Link to="/search">
                                            <span className="is-size-3 mr-4 has-text-white is-flex is-justify-content-center is-align-items-center">
                                                <FaSearch />
                                            </span>
                                        </Link>
                                    </a>

                                    <a className="navbar-item">
                                        <span className="is-size-3 mr-2 has-text-white is-flex is-justify-content-center is-align-items-center">
                                            <BiUserCircle />
                                        </span>
                                        <Link to="/login" onClick={logOut}>
                                             Logout
                                         </Link>
                                     </a>
                                     <a className="navbar-item">
                                        <Link to="/user/dashboard">
                                             Dashboard
                                         </Link>
                                     </a>
                                </>
                                
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
                            {/* <a className="navbar-item">
                                <Link to="/admin/dashboard">
                                    Admin
                                </Link>
                            </a> */}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default UserHeader
