import React,{useContext,useEffect} from "react";

// Components
import Header from "../components/Header";
import MovieRowContainer from '../components/MovieRowContainer'
import MovieCard from '../components/MovieCard'

// Context
import MovieContext from '../context/MovieContext'

const ShowsPage = () => {

    const {movies,setMovies} = useContext(MovieContext)

    useEffect(()=>{
        fetch("http://localhost:3000/movies/tvshows?type=tv-shows")
        
        .then(res=>res.json())
        .then(data=>{
          
          setMovies(data.data)
        })
    },[]);

    return (
        <div>
            <Header />
            <section id="movie-list-section">
                <h2>TV-Shows</h2>
                <MovieRowContainer />
            </section>
        </div>
    )
}

export default ShowsPage
