import React from 'react'

import MovieContext from '../context/MovieContext';
import {Link} from 'react-router-dom'

import AdminHeader from '../components/AdminHeader'
import MovieForm from '../components/MovieForm'
import MovieTable from '../components/MovieTable'


// import AdminSidebar from '../components/AdminSidebar'
// import Logo from "../assets/img/logos/logoipsum-logo-34.svg"

const AdminPage = (props) => {


    return (
        <>
            <AdminHeader heading="Admin Panel"/>

            <div class="columns">
                <div className="column is-one-fifth has-background-white has-text-centered pt-6">
                    <h2 className="title is-4">Dashboard</h2>

                    <div className="admin-titles">
                        <h2 className="title is-4">Customers</h2>
                        <a className="py-3">Add Customer</a>
                        <a className="py-3">Add Customer</a>
                    </div>

                    <div className="admin-titles">
                        <h2 className="title is-4">Movies</h2>
                        <a className="py-3">Add Movies</a>
                        <a className="py-3">View Movies</a>
                    </div>

                    <div className="admin-titles">
                        <h2 className="title is-4">TV-Shows</h2>
                        <a className="py-3">Add TV-Shows</a>
                        <a className="py-3">View TV-Shows</a>
                    </div> 
                        {/* <div class="select">
                            <select className="has-text-white lp-title">
                                <option className="has-text-white">Users</option>
                                <option>Add Customer</option>
                                <option>View Customers</option>
                            </select>
                        </div> */}

                        {/* <div class="select">
                            <select className="has-text-white lp-title">
                                <option className="has-text-white">Movies</option>
                                <option>Add Movie</option>
                                <option>View Movies</option>
                            </select>
                        </div> */}

                        {/* <div class="select">
                            <select className="has-text-white lp-title">
                                <option className="has-text-white">TV-Shows</option>
                                <option>Add TV-Show</option>
                                <option>View TV-Shows</option>
                            </select>
                        </div> */}
                    
                </div>
                <div class="column px-6 py-6">
                    <MovieForm />
                </div>
                <div class="column px-6 py-6 hide">
                    <MovieTable />
                </div>
            </div>
            {/* <section className="admin-main-container is-flex is-justify-content-center mt-6">
                <Link to="/register-movie" className="box manage-entities is-flex is-justify-content-center is-align-items-center is-size-4">
                    <p>Manage Movies</p>
                </Link>
                <Link to="" className="box manage-entities is-flex is-justify-content-center is-align-items-center is-size-4 ml-5">
                    <p>Manage Customers</p>
                </Link>
            </section> */}
        </>
        
    )
}

export default AdminPage
