import React, { useContext } from 'react'

//Components
import MovieCard from './MovieCard'
// import HomePage from '../pages/HomePage'

//Context
import MovieContext from '../context/MovieContext'

const MovieRowContainer = ({heading}) => {

    const {movies} = useContext(MovieContext)

    return (
        <div>
            <div className="row-container">
                <h2>{heading}</h2>
                <div className="grid grid-col-6 grid-column-gap grid-row-gap">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} id={movie.id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length} release={movie.release}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRowContainer
