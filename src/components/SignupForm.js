import React from 'react'

const SignupForm = () => {
    return (
        <div className="container form-container is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title">Create Account</h2>
                </div>
                <form className="form-wrapper box mt-5 px-5">
                    <div className="fname mt-4">
                        <label className="labeL">First Name</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="lname mt-4">
                        <label className="label">Last Name</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="email mt-4">
                        <label className="label">Email</label>
                        <input className="input has-text-black has-background-white" type="email"></input>
                    </div>

                    <div className="usrname mt-4">
                        <label className="label">Username</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="email mt-4">
                        <label className="label">Password</label>
                        <input className="input has-text-black has-background-white" type="password"></input>
                    </div>
                </form>
                <button className="button mt-4">SIGN UP</button>
            </div>
        </div>
    )
}

export default SignupForm