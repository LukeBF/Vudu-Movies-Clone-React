import React, { useContext } from 'react'

//Components
import MovieCard from './MovieCard'

//Context
import MovieContext from '../context/MovieContext'

const MovieRowContainer = () => {

    const {movies} = useContext(MovieContext)

    return (
        <div>
            <div className="row-container">
                <h2>Browse All Titles</h2>
                <div className="grid grid-col-8 grid-column-gap-2">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} id={movie.id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRowContainer
