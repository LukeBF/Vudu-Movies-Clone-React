import React,{useContext,useEffect} from 'react'

// Components
import Header from '../components/Header'
import MovieRowContainer from '../components/MovieRowContainer'

// Context
import MovieContext from '../context/MovieContext'

const MoviesPage = () => {

    const {movies,setMovies} = useContext(MovieContext)

    useEffect(()=>{
        fetch("http://localhost:3000/movies/allmovies?type=movies")
        
        .then(res=>res.json())
        .then(data=>{
          
        // console.log(data)
        setMovies(data.data)    
        }) 

        
    },[]);

    return (
        
        <div id="page-container">
            <Header />
            <section id="movie-list-section">
                <h2>Movies</h2>
                <MovieRowContainer />
            </section>
        </div>
        
    )
}

export default MoviesPage
