import React from 'react'

const LogInContainer = () => {
    return (
        <div className="login-wrapper grid">
            <form action="" className="form grid">
                <h2>Login</h2>
                <div className="form-input">
                    <input type="text" name="login-user" id="login-user"></input>
                    <label for="login-user">User Name</label>
                </div>
                <div className="form-input">
                    <input type="password" name="login-password" id="login-password"></input>
                    <label for="login-password">Password</label>
                </div>
                <button>Sign In</button>
            </form>
        </div>
    )
}

export default LogInContainer
