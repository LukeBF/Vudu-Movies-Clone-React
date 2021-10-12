import React from 'react'

import {Link} from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="container form-container is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title">Log In</h2>
                </div>
                <form className="form-wrapper box mt-5 px-5">
                    <div className="usrname mt-4">
                        <label className="label">Username</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="email mt-4">
                        <label className="label">Password</label>
                        <input className="input has-text-black has-background-white" type="password"></input>
                    </div>
                </form>
                <button className="button mt-4">LOG IN</button>
                <p className="mt-4">Don't have an account?<a><Link to="/signup">Sign up</Link></a></p>
            </div>
            
        </div>
    )
}

export default LoginForm
