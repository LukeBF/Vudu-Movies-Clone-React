import React from 'react'

const AdminHeader = ({heading}) => {
    return (
        <div>
            <nav className="navbar">
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
                        {/* <a href="" className="navbar-item has-text-white">Welcome</a> */}
                        <a href="/admin" className="navbar-item has-text-white">Admin</a>
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default AdminHeader
