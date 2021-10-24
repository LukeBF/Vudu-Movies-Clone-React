import React,{useContext} from 'react'

import MovieContext from '../context/MovieContext';

import { FaEdit,FaTrashAlt } from "react-icons/fa";

import {Link} from 'react-router-dom'

const TableRow = (props) => {


    const {movies,setMovies} = useContext(MovieContext)
    


    return (
        <>
            <tr>
                {/* <td>{props.number}</td> */}
                <td>{props.title}</td>
                <td>{props.genre}</td>
                <td>{props.rating}</td>
                <td>{props.length}</td>
                <td>{props.release}</td>
                {/* <td>{props.isFeatured}</td> */}
                <td className="is-flex is-justify-content-center"><img src={props.poster}></img></td>
                <td className="mx-2 is-size-5">
                    <Link to={`/register-movie/${movies.id}`}>
                        <button className="button has-background-white is-small mr-2">
                            <FaEdit />
                        </button>
                    </Link>
                </td>
                <td className="mx-2 is-size-5">
                    <Link href="">
                        <button className="button has-background-white is-small">
                            <FaTrashAlt />
                        </button>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default TableRow
