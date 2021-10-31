import React, { useContext } from 'react'

//Components
import MovieCard from './MovieCard'

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
                        <MovieCard key={movie.id} id={movie._id} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length} release={movie.release.substring(0,10)} featured={movie.isFeatured} poster={movie.imgPath}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRowContainer
