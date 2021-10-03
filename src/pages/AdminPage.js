import React from 'react'

import Logo from "../assets/img/logos/logoipsum-logo-34.svg"

const AdminPage = () => {
    return (
        <div className="columns sidebar" style={{color:"#ffffff"}}>
            <div className="column is-one-quarter sidebar-brand">
                <div className="rows">
                    <div className="row">
                        <h1>
                            <span className="">
                                <img src={Logo}></img>
                            </span>
                        </h1>
                    </div>
                </div>
                
            </div>
            <div className="sidebar-menu">
                <ul>
                    <li>
                        <a href="">
                            <span className=""></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="column">
                <h1>Main Content</h1>
            </div>
            
        </div>
    )
}

export default AdminPage
