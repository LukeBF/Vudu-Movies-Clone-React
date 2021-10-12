import React from 'react'

// Components
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const LogIn = () => {


    return (
        <>
            {/* <Header /> */}
            <div className="login-bg hero is-fullheight has-text-white">
                <div id="page-container">
                    <LoginForm />
                </div>
            </div>
        </>
        // <div className="login-bg">
        //     <div id="page-container">
        //         <Header />
        //         <LogInContainer />
        //     </div>
            
        // </div>
    )
}

export default LogIn
