import React from 'react'

// Components
import Header from '../components/Header'
import LogInContainer from '../components/LogInContainer'

const LogIn = () => {


    return (
        <>
            <Header />
            <div className="login-bg">
                <div id="page-container">
                    <LogInContainer />
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
