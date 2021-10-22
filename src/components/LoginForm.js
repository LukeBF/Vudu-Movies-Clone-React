import React from 'react'

import {Link} from 'react-router-dom'

const LoginForm = () => {
    return (
        <div className="is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title" style={{textAlign:"center"}}>Log In</h2>
                </div>
                <form className="form-wrapper box mt-5 px-5">
                    <div className="field mt-4">
                        <label className="label">Username</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="field mt-4">
                        <label className="label">Password</label>
                        <input className="input has-text-black has-background-white" type="password"></input>
                    </div>
                </form>
                <button className="button mt-4">LOG IN</button>
                <p className="mt-4 has-text-white">Don't have an account?<a className="ml-3"><Link to="/users/register" style={{color:"#FFC947"}}>Sign up</Link></a></p>
            </div>
        </div>
    )
}

export default LoginForm
