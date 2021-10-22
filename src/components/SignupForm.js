import React from 'react'

const SignupForm = () => {
    return (
        <div className="is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title" style={{textAlign:"center"}}>Create Account</h2>
                </div>
                <form className="form-wrapper box mt-5 px-5">
                    <div className="field fname mt-4">
                        <label className="label">First Name</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="field lname mt-4">
                        <label className="label">Last Name</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="field email mt-4">
                        <label className="label">Email</label>
                        <input className="input has-text-black has-background-white" type="email"></input>
                    </div>

                    <div className="field usrname mt-4">
                        <label className="label">Username</label>
                        <input className="input has-text-black has-background-white" type="text"></input>
                    </div>

                    <div className="field email mt-4">
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
