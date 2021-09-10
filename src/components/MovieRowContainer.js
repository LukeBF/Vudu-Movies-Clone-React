import React, { useContext } from 'react'

import MovieCard from './MovieCard'

import MovieContext from '../context/MovieContext'

const MovieRowContainer = () => {

    const {movies} = useContext(MovieContext)

    return (
        <div class="row-container">
            <div class="row-container">
                <h2>Browse All Titles</h2>
                <div class="grid grid-col-8 grid-row-gap-2">
                    {movies.map((card)=>(
                        <MovieCard key={card.id} id={card.id} title={card.title} genre={card.genre} rating={card.rating} length={card.length}/>
                    ))}
                    
                    {/* <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard /> */}
                </div>
            </div>
        </div>
    )
}

export default MovieRowContainer
