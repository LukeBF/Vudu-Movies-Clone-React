import React, {useContext} from 'react'

//Components
import TableRow from './TableRow';

//Context
import MovieContext from '../context/MovieContext';
import TableDataContext from '../context/TableDataContext';
import DisplayContext from '../context/displayContext';

//Icons
import { FaEdit,FaTrashAlt,FaPlusCircle } from "react-icons/fa"; 

//Router
// import { getByDisplayValue } from '@testing-library/dom';


// const movieNumber = (index) => {
//     let item = parseInt(index)
//     item = item++
//     return item
// }

const MovieTable = () => {
    
    const {display,setDisplay} = useContext(DisplayContext)
    const {movies,setMovies} = useContext(MovieContext)
    const {rows, setRows}= useContext(TableDataContext)

    return (
        <div className="container mr-5">
            {/* <Link to="/register-movie">
                <button className="button is-small mb-4 has-text-white">
                    <FaPlusCircle className="mr-2"/>Add Movie
                </button>
            </Link> */}


         
            <table className="table">
                <thead>
                    <tr>
                        {/* <th><h3 className="title is-5">Number</h3></th> */}
                        {/* <th><h3 className="title is-5">ID</h3></th> */}
                        <th><h3 className="title is-5">Title</h3></th>
                        <th><h3 className="title is-5">Genre</h3></th>
                        <th><h3 className="title is-5">Rating</h3></th>
                        <th><h3 className="title is-5">Length</h3></th>
                        <th><h3 className="title is-5">Release Date</h3></th>
                        {/* <th><h3 className="title is-5">Featured</h3></th> */}
                        <th style={{width:"7%"}}><h3 className="title is-5">Poster</h3></th>
                        <th><h3 className="title is-5">Update</h3></th>
                        <th><h3 className="title is-5">Delete</h3></th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((movie)=>(
                        <TableRow key={movie.id} id={movie._id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length} release={movie.release.substring(0,10)} edit={FaEdit} delete={FaTrashAlt}/>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}

export default MovieTable
