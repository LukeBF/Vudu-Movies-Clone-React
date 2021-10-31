import React,{useState,useContext} from 'react'

import UserFormContext from '../context/UserFormContext';

import {useHistory} from "react-router-dom"

const SignupForm = () => {

    const [showPassword,setShowPassword] = useState(false);
    
    const {userFormData,setUserFormData} = useContext(UserFormContext)
    
    const history = useHistory();
    //console.log(userFormData)

    const createUser = (e) => {

        // Prevent default behaviour of the page to jump on form submit
        e.preventDefault();
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(userFormData)
       })

       .then(res=>res.json())
       .then(()=>{
            
            alert(`An account was created for ${userFormData.fname} ${userFormData.lname}`)     
            history.push("/")
        })
        .catch(err=>{
            console.log(`Error: ${err}`)
        })
    

        setUserFormData({
            fname:"",
            lname:"",
            email:"",
            username:"",
            password:"",
            isAdmin:false
        })
    }

    const handleShowPassword = () => {
        // Toggle the show password
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }

    // const handleSubmit = (e) => {
    //     // Prevents th default behavious of the browser to refresh with a form submit
    //     e.preventDefault();
    //     console.log(userFormData)
    // }

    // const handleChange = (e) => {
    //     setUserFormData({...userFormData,[e.target.id]:e.target.value})
    // }

    

    // const registerUser = (e) => {
    //     e.preventDefault()

    //     const response = fetch("http://localhost:5000/users/register",{
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json',
    //         },    
    //         body: JSON.stringify({
    //             fname:"",
    //             lname:"",
    //             email:"",
    //             username:"",
    //             password:"",
    //         })
    //     })

    //     const data = response.json()
    //     alert("User created successfully")
    //     console.log(data)

    // }


    return (
        <div className="is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <div>
                    <h2 className="title" style={{textAlign:"center"}}>Create Account</h2>
                </div>

                <form onSubmit={createUser} className="form-wrapper box mt-5 px-5">
                    <div className="field mt-4">
                        <label htmlFor={userFormData.fname} className="label">First Name</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" name={userFormData.fname} type="text" id={userFormData.fname} value={userFormData.fname} placeholder="First Name" onChange={(e)=>{
                            setUserFormData({...userFormData,fname:e.target.value})
                            }}></input>
                        </div>
                        
                    </div>

                    <div className="field mt-4">
                        <label htmlFor={userFormData.lname} className="label">Last Name</label>
                         <div className="control">
                            <input className="input has-text-black has-background-white" type="text" name={userFormData.lname} id={userFormData.lname} value={userFormData.lname} placeholder="Last Name" onChange={(e)=>{
                            setUserFormData({...userFormData,lname:e.target.value})
                            }}></input>
                        </div>
                        
                    </div>

                    <div className="field mt-4">
                        <label htmlFor={userFormData.email} className="label">Email</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" type="email" name={userFormData.email} id={userFormData.email} value={userFormData.email} placeholder="Email" onChange={(e)=>{
                                setUserFormData({...userFormData,email:e.target.value})
                            }}></input>
                        </div>
                        
                    </div>

                    <div className="field mt-4">
                        <label htmlFor={userFormData.username} className="label">Username</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" type="text" name={userFormData.username} id={userFormData.username} value={userFormData.username} placeholder="Username" onChange={(e)=>{
                                setUserFormData({...userFormData,username:e.target.value})
                            }}></input>
                        </div>
                        
                    </div>

                    <div className="field mt-4">
                        <label htmlFor={userFormData.password} className="label">Password</label>
                        <div className="control">
                            <input className="input has-text-black has-background-white" type={showPassword ? "text" : "password"} name={userFormData.password} id={userFormData.password} value={userFormData.password} placeholder="Password" onChange={(e)=>{
                                setUserFormData({...userFormData,password:e.target.value})
                            }}
                            handleShowPassword={handleShowPassword}>
                            </input>
                        </div>
                        
                    </div>
                </form>

                <button type="submit" className="button mt-4" style={{width:"100%"}} onClick={createUser}>Register</button>
            </div>
        </div>
    )
}

export default SignupForm
