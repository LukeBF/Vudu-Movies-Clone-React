import React,{useContext,useEffect} from 'react'

// Components
import Header from '../components/Header'
import MovieRowContainer from '../components/MovieRowContainer'

// Context
import MovieContext from '../context/MovieContext'

const MoviesPage = () => {

    const {setMovies} = useContext(MovieContext)

    useEffect(()=>{
        fetch("http://localhost:3000/movies/allmovies?type=movies")
        
        .then(res=>res.json())
        .then(json=>{
        setMovies(json.data)    
        }) 

        
    },[]);

    return (
        <>
            <Header />
            <div id="page-container">
                <section id="movie-list-section">
                    <h2>Movies</h2>
                    <MovieRowContainer />
                </section>
            </div>
        </>
        
            
        
    )
}

export default MoviesPage
