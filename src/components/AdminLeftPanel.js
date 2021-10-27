import React from 'react'

// React icons
import {FaUserFriends} from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi"; 
// import { AiOutlineEye } from "react-icons/ai";

const AdminLeftPanel = () => {
    return (
        <>
            {/* <div class="columns"> */}
            {/* Left panel to navigate the different components*/}
                <div className="column column-lp is-one-fifth has-background-white has-text-centered pt-6">
                    <a href="">
                        <h2 className="title is-3">Dashboard</h2>
                    </a>

                    <div className="lp-menu">
                        <a href="">
                            <div className="admin-titles mt-6 is-flex">
                                <span><FaUserFriends className="mr-2 lp-icon is-size-4"/></span><h2 className="title is-5 has-text-left">Customers</h2>
                            </div>
                        </a>

                        <a href="">
                            <div className="admin-titles mt-6 is-flex">
                                <span><BiMoviePlay className="mr-2 lp-icon is-size-4"/></span><h2 className="title is-5 has-text-left">Movies</h2>
                            </div>
                        </a>

                        <a href="">
                            <div className="admin-titles mt-6 is-flex">
                                <span><RiMovie2Fill className="mr-2 lp-icon is-size-4"/></span><h2 className="title is-5 has-text-left">TV-Shows</h2>
                            </div>
                        </a>
                    </div>                    
                </div>
            {/* </div> */}
        </>
    )
}

export default AdminLeftPanel
