import React,{useContext} from 'react'

import EditMovieFormContainer from '../components/EditMovieFormContainer'
import MovieContext from '../context/MovieContext'

const EditMoviePage = () => {

    const {movies,setMovies} = useContext(MovieContext)
    
    return (
        <>
            <EditMovieFormContainer />  
        </>
    )
}

export default EditMoviePage
