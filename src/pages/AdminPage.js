import React from 'react'
import {Link} from 'react-router-dom'

import AdminHeader from '../components/AdminHeader'
import Logo from "../assets/img/logos/logoipsum-logo-34.svg"

const AdminPage = () => {
    return (
        <>
            <AdminHeader heading="Admin Panel"/>
            <section className="admin-main-container is-flex is-justify-content-center mt-6">
                <Link to="/register-movie" className="box manage-entities is-flex is-justify-content-center is-align-items-center is-size-4">
                    <p>Manage Movies</p>
                </Link>
                <Link to="" className="box manage-entities is-flex is-justify-content-center is-align-items-center is-size-4 ml-6">
                    <p>Manage Customers</p>
                </Link>
            </section>
        </>
        
    )
}

export default AdminPage
