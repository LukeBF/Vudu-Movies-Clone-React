import React, {useContext} from 'react'

import TableRow from './TableRow';

import MovieContext from '../context/MovieContext';
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import TableDataContext from '../context/TableDataContext';

const movieNumber = (index) => {
    let item = parseInt(index)
    item = item++
    return item
}

const MovieTable = () => {

    const {movies,setMovies} = useContext(MovieContext)
    const {rows, setRows}= useContext(TableDataContext)

    return (
        <div>
            <table className="table is-fullwidth">
                <thead>
                    <tr>
                        {/* <th><h3 className="title is-5">Number</h3></th> */}
                        <th><h3 className="title is-5">Title</h3></th>
                        <th><h3 className="title is-5">Genre</h3></th>
                        <th><h3 className="title is-5">Rating</h3></th>
                        <th><h3 className="title is-5">Length</h3></th>
                        <th><h3 className="title is-5">Release Date</h3></th>
                        {/* <th><h3 className="title is-5">Featured</h3></th> */}
                        <th style={{width:"7%"}}><h3 className="title is-5">Poster</h3></th>
                        <th><h3 className="title is-5">Update/Delete</h3></th>
                    </tr>
                </thead>

                <tbody>
                    {movies.map((movie)=>(
                        <TableRow key={movie.id} id={movie.id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length} release={movie.release} edit={FaEdit} delete={FaTrashAlt}/>
                    ))}
                    {/* <tr>
                        <td></td>
                        <td>Title</td>
                        <td>Rating</td>
                        <td>Length</td>
                        <td>Release Date</td>
                        <td>Yes</td>
                        <td></td>
                        <td className="mx-2 is-size-5"><FaEdit /><span className="mx-2 is-size-5"><FaTrashAlt /></span></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>Title</td>
                        <td>Rating</td>
                        <td>Length</td>
                        <td>Release Date</td>
                        <td>Yes</td>
                        <td></td>
                        <td className="mx-2 is-size-5"><FaEdit /><span className="mx-2 is-size-5"><FaTrashAlt /></span></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable
