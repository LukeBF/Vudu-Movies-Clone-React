import React from 'react'

import UserHeader from '../components/UserHeader'


const UserDashboard = () => {
    return (
        <div>
            <UserHeader />
            <h1 className="title has-text-white" style={{marginTop:"50px",textAlign:"center"}}>Welcome to the User Dashboard</h1>
        </div>
    )
}

export default UserDashboard
