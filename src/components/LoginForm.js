import React,{useState,useContext} from 'react'

import {useHistory,useParams,useLocation} from "react-router-dom";

// JWT
import jwt_decode from "jwt-decode";

import logo from "../assets/img/logos/streamee-no-bg.png"

// Context
import LoginContext from "../context/LoginContext";
// import UserFormContext from '../context/UserFormContext';

import {Link} from 'react-router-dom'


const LoginForm = () => {

    const {isLogin,setIsLogin} = useContext(LoginContext);

    const [loginFormData, setLoginFormData] = useState({
        email : "",
        password :""
    });

    const redirect = useHistory();

    const loginUser = (e) =>{
        e.preventDefault()

        fetch('http://localhost:5000/users/auth',{
            method :"POST",
            headers : {
                'Content-Type': 'application/json',  
            },
            body : JSON.stringify(loginFormData)
        })
        .then(res=>res.json())
        .then((json)=>{

            /**
             * this is when the user has been authenticated
             * store token sent back from the server
             */
            console.log(json.token)
            localStorage.setItem("token",json.token);
            const token =localStorage.getItem("token");
            const currentLoggedInUser = jwt_decode(token);
            console.log(currentLoggedInUser)
            setIsLogin({user:currentLoggedInUser, status:true});

            /**
             * redirect
             */
           
             if(currentLoggedInUser.isAdmin===true)
            {
                alert("You are an admin")
                redirect.push("/admin/dashboard");  
            }
            else if (currentLoggedInUser.isAdmin===false)
            {

                alert("You are a user")
                redirect.push("/user/dashboard"); 
            }
        })
    }
    // const [errorData , setErrorData] = useState({
    //     email : "",
    //     password : "",
    //     bothEmailAndPass : ""
    // })

    const onHandleChange = (e)=>
    {
        const {id,value} = e.target;
        
        setLoginFormData({...loginFormData, [id] : value});
    }

    //const onLogin = async (e)=>{


        //alert("atest")

        //old code
        //try


        // {
        //     const res=  await fetch("http://localhost:5000/users/auth",{
        //             method :"POST",
        //             headers : {
        //                 'Content-Type': 'application/json',  
        //             },
        //             body : JSON.stringify(loginFormData)
        //         })

            //old code
            // const json = await res.json();
            
            // if(res.status!=200)
            // {
            //     const newError = new Error();
            //     newError.error =json.error;
            //     newError.status=res.status;

            //     throw newError;
                
            // }
           
            //login in

            ///copying this code into your .then() for your handler when the user hit the login
            //alert(json.message);

        //     localStorage.setItem("token",json.token);
        //     const token =localStorage.getItem("token");
        //     const currentLoggedInUser = jwt_decode(token);
        //     setIsLogin({ user:currentLoggedInUser, status:true});

        //     setErrorData({});

        //     if(currentLoggedInUser.isAdmin===true)
        //     {
        //         alert("You are an admin")
        //         redirect.push("/admin/dashboard");  
        //     }
        //     else if (currentLoggedInUser.isAdmin===false)
        //     {

        //         alert("You are a user")
        //         redirect.push("/user/dashboard"); 
        //     }
                   
        // }

        // catch(err)
        // {

            // if(err.status===400)
            // {

            //     const errors = {}
              
            //     for(let i=0; i<err.error.length; i++)
            //     {
            
            //         const {key,message} = err.error[i];

            //          if (key ==="email")
            //         {
            //            errors.email = message;
            //         }

            //         if (key ==="password")
            //         {
            //             errors.password=message
            //         }

            //         if(key==="bothEmailPassword")
            //         {
            //             errors.bothEmailAndPass=message;
            //         }
 
            //     }

            //     setErrorData(errors)   
            // }
        
        // }

    // }





    // const {userFormData,setUserFormData} = useContext(UserFormContext)
    //console.log(userFormData)

    // const handleSubmit = (e) => {
    //     // Prevents th default behavious of the browser to refresh with a form submit
    //     e.preventDefault();
    //     console.log(userFormData)
    // }

    // const handleChange = (e) => {
    //     setUserFormData({...userFormData,[e.target.name]:e.target.value})
    // }

    
    return (
        <div className="is-flex is-align-items-center is-justify-content-center">
            <div className="main-wrapper mt-6">
                <Link to="/">
                    <img className="logo" src={logo} style={{width:"70%",marginLeft:"60px"}}/>
                </Link>
                <div>
                    <h2 className="title" style={{textAlign:"center"}}>Sign in</h2>
                </div>
                
                <form onSubmit={loginUser} className="form-wrapper box mt-5 px-5">

                    <div className="field mt-4">
                        <div className="error"></div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input className="input has-text-black has-background-white" type="text" id="email" value={loginFormData.email} onChange={onHandleChange} />
                            <div class="error"></div>
                        </div>
                    </div>

                    <div className="field mt-4">
                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input className="input has-text-black has-background-white" type="password" id="password" value={loginFormData.password} onChange={onHandleChange}/>
                            <div class="error"></div>
                        </div>
                    </div>
                </form>

                <div className="form-control">
                    <button type="submit" className="button mt-4" style={{width:"100%"}} onClick={loginUser}>Login</button>
                    <p className="mt-4 has-text-white">Don't have an account?<Link className="ml-3"><Link to="/register" style={{color:"#FFC947"}}>Register here</Link></Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
