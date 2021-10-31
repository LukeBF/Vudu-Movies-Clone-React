import {useEffect,useContext}from 'react';
import {useHistory} from "react-router-dom"
import LoginContext from "../context/LoginContext";

import {Route} from "react-router-dom";

const ProtectedRoute = (props) => {
   
    const {isLogin,setIsLogin} = useContext(LoginContext);
    console.log(isLogin)
    
    const redirect = useHistory();
   

    return (
        <>
            {!isLogin.status ? redirect.push("/login") 
            :
            isLogin.user.isAdmin==props.isAdmin ?
            (
                <Route exact path={props.path}>
                {props.component}
                </Route>
            ) : redirect.push("/") 

            }
           
        </>
    )
}

export default ProtectedRoute
