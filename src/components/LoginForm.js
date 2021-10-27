import React,{useContext} from 'react'

import UserFormContext from '../context/UserFormContext';

import {Link} from 'react-router-dom'


const LoginForm = () => {

    const isRegister = false;

    const {userFormData,setUserFormData} = useContext(UserFormContext)
    //console.log(userFormData)

    const handleSubmit = (e) => {
        // Prevents th default behavious of the browser to refresh with a form submit
        e.preventDefault();
        console.log(userFormData)
    }

    const handleChange = (e) => {
        setUserFormData({...userFormData,[e.target.name]:e.target.value})
    }

    // const handleSubmit = () => {

    // }
    
    return (
        <div className="is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title" style={{textAlign:"center"}}>Sign in</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="form-wrapper box mt-5 px-5">
                    <div className="field mt-4">
                        <label className="label">Username</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" type="text" placeholder="Username" id={userFormData.username} value={userFormData.username} onChange={handleChange}></input>
                        </div>
                        
                    </div>

                    <div className="field mt-4">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" type="password" placeholder="Password" id={userFormData.password} value={userFormData.password} onChange={handleChange}></input>
                        </div>
                    </div>
                </form>

                <button type="submit" className="button mt-4" style={{width:"100%"}} onClick={handleSubmit}>{isRegister?'Sign up':'Sign in'}</button>
                <p className="mt-4 has-text-white">Don't have an account?<a className="ml-3"><Link to="/users/register" style={{color:"#FFC947"}}>Register here</Link></a></p>
            </div>
        </div>
    )
}

export default LoginForm
