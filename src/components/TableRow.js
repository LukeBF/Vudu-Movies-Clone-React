import React,{useContext} from 'react'

import MovieContext from '../context/MovieContext';

import { FaEdit,FaTrashAlt } from "react-icons/fa";

import {Link} from 'react-router-dom'

const TableRow = (props) => {

    const {movies,setMovies} = useContext(MovieContext)
    console.log(movies)

    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{props.genre}</td>
                <td>{props.rating}</td>
                <td>{props.length}</td>
                <td>{props.release}</td>
                {/* <td>{props.isFeatured}</td> */}
                <td>{props.poster}</td>
                <td className="mx-2 is-size-5">
                    <Link to="">
                    <FaEdit />
                    </Link>
                    <Link to=""><span className="mx-2 is-size-5"><FaTrashAlt /></span></Link>
                </td>
            </tr>
        </>
    )
}

export default TableRow
