import React,{useState,useEffect} from 'react'

// Components
import HomePage from '../pages/HomePage'

// CSS
import '../assets/App.css'
import '../assets/Utilities.css'

//Context
import MovieContext from '../context/MovieContext'

const App = () => {

  const [movies, setMovies] = useState([]);
  

  useEffect(()=>{
    fetch("http://localhost:3000/movies")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setMovies(data)
    })

  },[]);

  return (
    <div id="page-container">
      <MovieContext.Provider value={{movies,setMovies}}>
        <HomePage />  
      </MovieContext.Provider>
    </div>
  )
}

export default App

