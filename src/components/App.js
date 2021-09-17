import React,{useState,useEffect} from 'react'

// Components
import HomePage from '../pages/HomePage'
import FeaturedContainer from './FeaturedTitles'

// CSS
import '../assets/App.css'
import '../assets/Utilities.css'

//Context
import MovieContext from '../context/MovieContext'
// import FeaturedContext from '../context/FeaturedContext'


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
    <div id="page-container">
      <MovieContext.Provider value={{movies,setMovies}}>
        {/* <FeaturedContainer.Provider value={{featuredShows,setFeaturedShows}}> */}
          <HomePage />  
        {/* </FeaturedContainer.Provider> */}
      </MovieContext.Provider>
    </div>
  )
}

export default App

