import React,{useState,useEffect} from 'react'

import jwt_decode from "jwt-decode"

// Components
import ProtectedRoute from '../components/ProtectedRoute';

// Pages
import DetailsPage from '../pages/DetailsPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import ShowsPage from '../pages/ShowsPage';
import LogInPage from '../pages/LogInPage';
import AdminPage from '../pages/AdminPage';
import UserDashboard from '../pages/UserDashboard';
import CreateMoviePage from '../pages/CreateMoviePage';
import EditMoviePage from '../pages/EditMoviePage';
import SearchPage from '../pages/SearchPage';


// import FeaturedContainer from './FeaturedTitles'

// bulma css
import "bulma/css/bulma.css"

// .css file generated from .scss 
import '../assets/css/main.css'
import '../assets/App.css'
import '../assets/Utilities.css'

//Context
import MovieContext from '../context/MovieContext';
import UserFormContext from '../context/UserFormContext';
import TableDataContext from '../context/TableDataContext';
import DisplayContext from '../context/displayContext';
import MovieFormDataContext from '../context/FormDataContext';
import MovieFormUpdateContext from '../context/FormUpdateContext';
import ViewUpdateFormContext from '../context/ViewUpdateFormContext';
import LoginContext from '../context/LoginContext'
// import FeaturedContext from '../context/FeaturedContext'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


const App = () => {

  // Users
  const [userFormData,setUserFormData] = useState({
    fname:"",
    lname:"",
    email:"",
    username:"",
    password:"",
    isAdmin:false
  })

  const [display,setDisplay] = useState(true);
  //Form to update if true
  const [movieFormUpdate,setMovieFormUpdate] = useState(false);
  // View update form
  const [viewUpdateForm,setViewUpdateForm] = useState({show:false, id:0})
  const [movies, setMovies] = useState([]);
  const [rows, setRows] = useState([
    {
      title: movies.title,
      rating: movies.rating,
      length: movies.length,
      release: movies.release,
      poster: movies.imgPath
    }
  ]);
  const [movieFormData,setMovieFormData] = useState({
    id:"",
    title:"",
    genre:"",
    type:"",
    rating:"",
    length:"",
    release:"",
    rentalPrice:"",
    purchasePrice:"",
    imgPath:"",
    isFeatured:"",
    overview:""
  })

  const [isLogin, setIsLogin] = useState({
    status:false,
    isAdmin:false,
    user:{

    }
  });
  console.log(isLogin)

  //new code
  useEffect(()=>{
    if(localStorage.getItem('token'))
    {
      try
      {
          const token =localStorage.getItem("token");
          const currentLoggedInUser = jwt_decode(token);
          setIsLogin({ user:currentLoggedInUser, status:true});
      }
      catch(err){}
    }
  },[])


  // old code

  // useEffect(()=>{
  //   try
  //   {
  //       const token =localStorage.getItem("token");
  //       const currentLoggedInUser = jwt_decode(token);
  //       setIsLogin({ user:currentLoggedInUser, status:true});
  //   }
  //   catch(err){}

  // },[])

  
  // const [featuredShows, setFeaturedShows] = useState([]);
  // console.log(movies)

  useEffect(()=>{
    fetch("http://localhost:5000/movies")
    
    .then(res=>res.json())
    .then(data=>{
      
      // console.log(data)
      setMovies(data.data)
    })

  },[]);

  return (

    <div>
      <Router>
        <MovieContext.Provider value={{movies,setMovies}}>
        <UserFormContext.Provider value={{userFormData,setUserFormData}}>
        <TableDataContext.Provider value={{rows,setRows}}>
        <DisplayContext.Provider value={{display,setDisplay}}>
        <MovieFormDataContext.Provider value={{movieFormData,setMovieFormData}}>
        <MovieFormUpdateContext.Provider value={{movieFormUpdate,setMovieFormUpdate}}>
        <ViewUpdateFormContext.Provider value={{viewUpdateForm,setViewUpdateForm}}>
        <LoginContext.Provider value={{isLogin,setIsLogin}}>
          <Switch>
              <Route exact path="/">
                    <HomePage />  
              </Route>
              
              <Route path="/movies">
                  <MoviesPage />
              </Route>

              <Route path="/tvshows">
                  <ShowsPage />
              </Route>
              {/* <Route path="/users/login">
                  <LogInPage />
              </Route> */}
              <Route path="/login">
                  <LogInPage />
              </Route>

              {/* <Route path="/users/register">
                  <SignupPage />
              </Route> */}

              <Route path="/register">
                  <SignupPage />
              </Route>

              {/* <Route path="/admin">
                  <AdminPage />
              </Route> */}
              <ProtectedRoute path="/admin/dashboard" isAdmin={true} component={<AdminPage/>}/>

              {/* <ProtectedRoute path="/user/dashboard" isAdmin={false} component={(<h1>User Dashboard</h1>)}/> */}
              <ProtectedRoute path="/user/dashboard" isAdmin={false} component={<UserDashboard />}/>
              
              {/* <Route path="/update-movie">
                  <EditMoviePage />
              </Route> */}
              <Route path="/admin/dashboard/updatemovie">
                  <EditMoviePage />
              </Route>
              {/* <Route path="/register-movie">
                  <CreateMoviePage />
              </Route> */}
              <Route path="/admin/dashboard/addmovie">
                  <CreateMoviePage />
              </Route>

              <Route path="/card/details/:id">
                  <DetailsPage />
              </Route>

              {/* <Route>
                  <SearchPage path="/search"/>
              </Route> */}
          </Switch>
        </LoginContext.Provider>
        </ViewUpdateFormContext.Provider>
        </MovieFormUpdateContext.Provider>
        </MovieFormDataContext.Provider>
        </DisplayContext.Provider>
        </TableDataContext.Provider>
        </UserFormContext.Provider>
        </MovieContext.Provider>
      </Router>
    </div>
  )
}

export default App

