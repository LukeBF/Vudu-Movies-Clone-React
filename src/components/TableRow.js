import React,{useContext} from 'react'

import MovieContext from '../context/MovieContext';

import { FaEdit,FaPeriscope,FaTrashAlt } from "react-icons/fa";

import {Link} from 'react-router-dom'

const TableRow = (props) => {

    const {movies,setMovies} = useContext(MovieContext)
    
    const updateCard = () => {
        alert("Edit")
    }

    const deleteCard = () => {
        alert("Delete")
    }

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
                    <Link to="">
                        <FaEdit onClick={(e)=>{
                                    
                            updateCard()
                        }}/>
                    </Link>
                    <Link to=""><span className="mx-2 is-size-5"><FaTrashAlt onClick={(e)=>{
                                    
                        deleteCard()
                    }}/></span>
                    </Link>
                </td>
            </tr>
        </>
    )
}

export default TableRow
