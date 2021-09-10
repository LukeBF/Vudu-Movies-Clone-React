import React from 'react'

// import Avengers from '../img/poster/Avengers.jpg'
import DefaultPoster from '../img/poster/default-movie.jpg'

const MovieCard = (props) => {

    // const defaultPoster = require(`../img/poster/default-movie.jpg`).default

    return (
        <div  class="movie-card">
            <a href = ""> 
                <img src={DefaultPoster} alt="default poster image"/>   
            </a>
            <div class="card-content">
                <h3>Avengers</h3>
                <p>Action/Adventure</p>
                <p>PG-13</p>
                <p>2h 23min</p>
                <p>2012</p>
            </div>
        </div>
    )
}

export default MovieCard
