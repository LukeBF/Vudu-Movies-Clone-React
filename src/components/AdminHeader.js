import React from 'react'

//Icons
import { FaEdit,FaTrashAlt,FaPlusCircle, FaCircle } from "react-icons/fa"; 

//Router
import {Link} from 'react-router-dom'


const AdminHeader = ({heading}) => {
    return (
        <div>
            {/* <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">

                    </div>

                    <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <button className="control mt-2 mr-2">
                                <Link to="/register-movie" className="button is-primary" >
                                    <FaPlusCircle className="mr-2"/>
                                    <span>Add Movie</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </nav> */}

            
            {/* <nav className="navbar">
                <div className="navbar-brand">
                    <a href="" className="navbar-burger toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <a href="" className="navbar-item has-text-white">{heading}</a>
                    <a href="" className="navbar-burger nav-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item has-text-white">Home</a>
                        <a href="" className="navbar-item has-text-white"></a>
                    </div>
                    <div className="navbar-end">
                    <Link to="/register-movie">
                        <button className="button is-small mb-4 has-text-white">
                            <FaPlusCircle className="mr-2"/>Add Movie
                        </button>
                    </Link>
                        <a href="" className="navbar-item has-text-white">Welcome</a>
                        <a href="/admin" className="navbar-item has-text-white">Admin</a>
                    </div>
                    
                </div>
            </nav> */}
        </div>
    )
}

export default AdminHeader
