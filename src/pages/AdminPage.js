import React,{useContext} from 'react'

//Context
import MovieContext from '../context/MovieContext';
import DisplayContext from '../context/displayContext';

//Router
import {Link} from 'react-router-dom'

// Components
import AdminHeader from '../components/AdminHeader'
import MovieForm from '../components/MovieForm'
import MovieTable from '../components/MovieTable'

// React icons
import {FaUserFriends, FaPlusCircle} from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi"; 
import { AiOutlineEye } from "react-icons/ai";

// import AdminSidebar from '../components/AdminSidebar'
// import Logo from "../assets/img/logos/logoipsum-logo-34.svg"

const AdminPage = (props) => {

    const {display,setDisplay} = useContext(DisplayContext)

    return (
        <>
            {/* <AdminHeader heading="Admin Panel"/> */}
           
                <div class="columns">
                    {/* Left panel to navigate the different components*/}
                    <div className="column column-lp is-one-fifth has-background-white has-text-centered pt-6">
                        <a href="">
                            <h2 className="title is-3">Dashboard</h2>
                        </a>
                        
                        <div className="lp-menu">
                            <a href="">
                                <div className="admin-titles mt-6">
                                    <h2 className="title is-5 has-text-left"><FaUserFriends className="mr-2 lp-icon"/>Customers</h2>
                                </div>
                            </a>

                            <a href="">
                                <div className="admin-titles mt-6">
                                    <h2 className="title is-5 has-text-left"><BiMoviePlay className="mr-2 lp-icon"/>Movies</h2>
                                </div>
                            </a>

                            <div className="admin-titles mt-6">
                                <a>
                                    <h2 className="title is-5 has-text-left"><RiMovie2Fill className="mr-2 lp-icon"/>TV-Shows</h2>
                                </a>
                            </div> 
                        </div>                    
                    </div>
                    {/* Main area to display data and forms */}
                
                    {/* <AdminHeader /> */}
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

                            </div> */}

                            
                        {/* </div>
                    </nav> */}


                    {
                        display?
                        <div className="column px-6 py-6">
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="field is-grouped">
                                        <button className="button control mt-2 mr-2 has-background-white" onClick={()=>{
                                            setDisplay(!display)
                                        }}>
                                            <FaPlusCircle className="mr-2"/>
                                            <span>Add Movie</span> 
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <MovieTable />
                        </div>
                        :    
                        <div className="column px-6 py-6">
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="field is-grouped">
                                        <button className="button control mt-2 mr-2 has-background-white" onClick={()=>{
                                            setDisplay(!display)
                                        }}>
                                            <AiOutlineEye className="mr-2"/>
                                            <span>View All</span> 
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <MovieForm />
                        </div>
                    }

                    {/* <div className="column px-6 py-6 hide">
                        <MovieForm />
                    </div> */}
                    {/* // <div className="column px-6 py-6">
                    //     <MovieTable />
                    // </div> */}
                
            </div>
        </>
        
    )
}

export default AdminPage
