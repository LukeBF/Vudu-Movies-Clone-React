import React,{useState,useContext} from 'react'

// Context
import MovieContext from '../context/MovieContext';
import DisplayContext from '../context/displayContext';
//Context-update form
import FormDataContext from '../context/FormDataContext';
import MovieFormUpdateContext from '../context/FormUpdateContext';
import ViewUpdateFormContext from '../context/ViewUpdateFormContext';

// Icons
import { FaEdit,FaTrashAlt } from "react-icons/fa";

import {Link} from 'react-router-dom'



const TableRow = (props) => {

    const {movies,setMovies} = useContext(MovieContext)
    const [display,setDisplay] = useState(DisplayContext);
    const {updatedItem,setUpdatedItem} = useContext(FormDataContext)
    const {formUpdate,setFormUpdate} = useContext(MovieFormUpdateContext)
    const {viewUpdateForm,setViewUpdateForm} = useContext(ViewUpdateFormContext)
    const {formInputData,setFormInputData} = useContext(FormDataContext)
    
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

    const updateMovie = (e) => {

        let updatedMovie = [...movies];
        
        // updatedMovie = updatedMovie.findIndex((movie)=>{return movie._id === movie.id})

        // setFormInputData({
        //     title:updatedMovie.title,
        //     genre:updatedMovie.genre,
        //     type:updatedMovie.type,
        //     rating:updatedMovie.rating,
        //     length:updatedMovie.length,
        //     release:updatedMovie.release,
        //     rentalPrice:updatedMovie.rentalPrice,
        //     purchasePrice:updatedMovie.purchasePrice,
        //     imgPath:updatedMovie.imgPath,
        //     isFeatured:updatedMovie.isFeatured,
        //     overview:updatedMovie.overview
        // })

        // setFormUpdate(true)
        // setViewUpdateForm({show:true, id:updatedMovie.id})
        // alert("Edit button clicked")
        
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
                    <Link to="/register-movie">
                        <button className="button has-background-white is-small" onClick={(e)=>{
                            updateMovie()
                            
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
        </>
    )
}

export default TableRow
