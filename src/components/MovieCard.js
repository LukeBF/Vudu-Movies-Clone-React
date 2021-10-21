import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import MovieRowContainer from './MovieRowContainer'
import MovieContext from '../context/MovieContext'

// import Avengers from '../img/poster/Avengers.jpg'
// import DefaultPoster from '../img/poster/default-movie.jpg'

const MovieCard = (props) => {

    const {movies,setMovies} = useContext(MovieContext) 
    console.log(movies)

    //const baseURL = "https://movies-dynamic-assets.s3.us-east-2.amazonaws.com/"

    // const defaultPoster = require(`../img/poster/default-movie.jpg`).default
    // const moviePoster = require(`../assets/img/poster/${props.poster}`).default
    // const moviePoster = require(`../assets/img/poster/${props.poster}`).default
    // {console.log(props.src)}

    return (
        <div  className="movie-card">
            <div className="card-poster">
                <Link to = "/card/details"> 
                    {/* <img src={DefaultPoster} alt="default poster image"/>    */}
                    {/* <img src={moviePoster} alt={`props.title`}poster image/> */}
                    <img src={props.poster} alt={props.title}/>
                </Link>
            </div>
            
            <div className="card-content">
                <h3>{props.title}</h3>
                {/* <p>{props.genre}</p> */}
                <div>
                    <p>{props.rating}</p>
                </div>
                <p style={{marginBottom:20}}>{props.length}</p>
                <p style={{position:"absolute", bottom:0}}>{props.release}</p>   
            </div>
        </div>
    )
}

export default MovieCard
