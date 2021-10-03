import React,{useState,useEffect} from 'react'

// Components
import HomePage from '../pages/HomePage'
import MoviesPage from '../pages/MoviesPage'
import ShowsPage from '../pages/ShowsPage'
import LogInPage from '../pages/LogInPage'
import AdminPage from '../pages/AdminPage'
// import FeaturedContainer from './FeaturedTitles'

// CSS
import "bulma/css/bulma.css"
import '../assets/App.css'
import '../assets/Utilities.css'

//Context
import MovieContext from '../context/MovieContext'
// import FeaturedContext from '../context/FeaturedContext'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


const App = () => {

  const [movies, setMovies] = useState([]);
  // const [featuredShows, setFeaturedShows] = useState([]);
  // console.log(movies)

  useEffect(()=>{
    fetch("http://localhost:3000/movies")
    
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
              <Route path="/login">
                  <LogInPage />
              </Route>
              <Route path="/admin">
                  <AdminPage />
              </Route>
          </Switch>
        </MovieContext.Provider>
      </Router>
    </div>
  )
}

export default App

