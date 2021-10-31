import React,{useState,useContext,useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"

//Components
import EditMovieFormContainer from './EditMovieFormContainer';
import EditMovieForm from './EditMovieForm';

// Context
import MovieContext from '../context/MovieContext';
import DisplayContext from '../context/displayContext';
import MovieFormDataContext from '../context/FormDataContext'

//Context-update form
// import FormDataContext from '../context/FormDataContext';
// import MovieFormUpdateContext from '../context/FormUpdateContext';
// import ViewUpdateFormContext from '../context/ViewUpdateFormContext';

// Icons
import { FaEdit,FaTrashAlt } from "react-icons/fa";
import AddMovieFormContainer from './AddMovieFormContainer';


import {Link} from 'react-router-dom'



const TableRow = (props) => {
   
    const {display,setDisplay} = useContext(DisplayContext)
    const {movies,setMovies} = useContext(MovieContext)
   

    // Delete Movie
    const deleteMovie = () => {

        const movieList = [...movies];
        const index = movieList.findIndex(movie=>{return movie._id === props.id})

        if (window.confirm(`Are you sure you want to delete ${movieList[index].title}?`)) {

            fetch(`http://localhost:5000/movies/${props.id}`,{
                method:'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            movieList.splice(index,1)
            setMovies(movieList)
        }
    }


    return (
        <>
            {
                display?
                <tr>
                    {/* <td>{props.number}</td> */}
                    <td>{props.id}</td>
                    <td>{props.title}</td>
                    <td>{props.genre}</td>
                    <td>{props.rating}</td>
                    <td>{props.length}</td>
                    <td>{props.release}</td>
                    {/* <td>{props.isFeatured}</td> */}
                    <td className="is-flex is-justify-content-center"><img src={props.poster}></img></td>
                    <td className="mx-2 is-size-5">
                        <Link to="/update-movie">
                            <button className="button has-background-white is-small" onClick={()=>{
                                        setDisplay(!display)
                                    }}>
                                <FaEdit />
                            </button>
                        </Link>
                    </td>
                    <td className="mx-2 is-size-5">
                        <button className="button has-background-white is-small" onClick={(e)=>{deleteMovie(e)}}>
                            <FaTrashAlt />
                        </button>
                    </td>
                </tr>
                :
                <EditMovieFormContainer />         
                 
            }
            
        </>
    )
}

export default TableRow
