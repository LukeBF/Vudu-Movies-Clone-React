import React from 'react'

// import Avengers from '../img/poster/Avengers.jpg'
// import DefaultPoster from '../img/poster/default-movie.jpg'

const MovieCard = (props) => {

    // const defaultPoster = require(`../img/poster/default-movie.jpg`).default
    const moviePoster = require(`../assets/img/poster/${props.poster}`).default

    return (
        <div  className="movie-card">
            <div className="card-poster">
                <a href = "/"> 
                    {/* <img src={DefaultPoster} alt="default poster image"/>    */}
                    <img src={moviePoster} alt={`props.title`}poster image/>
                </a>
            </div>
            
            <div className="card-content">
                <h3>{props.title}</h3>
                {/* <p>{props.genre}</p> */}
                <div>
                    <p>{props.rating}</p>
                </div>
                <p>{props.length}</p>
                <p>2012</p>   
            </div>
        </div>
    )
}

export default MovieCard
