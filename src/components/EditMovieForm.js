import React,{useState,useContext, useEffect} from 'react'
import {useHistory,useParams} from "react-router-dom"

//Components
import MovieFormButton from './MovieFormButton'

// Context
import MovieFormDataContext from '../context/FormDataContext'
import MovieContext from '../context/MovieContext'

// Components
import Header from './Header'


const EditMovieForm = () => {

    const {movieFormData,setMovieFormData} = useContext(MovieFormDataContext)

    const {movies,setMovies} = useContext(MovieContext)

    const {id} = useParams();

    const history = useHistory();

    useEffect(()=>{
        fetch("http://localhost:5000/movies/"+id)
        .then(res=>res.json())
        .then(json=>{
            setMovieFormData(json.data);
           
        })
        .catch(err=>{
            console.log(`Error ${err}`)
        })
    },[])

    const editFormHandler = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/movies/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(movieFormData)
        })
        .then(res=>res.json())
        .then((json)=>{

            //Create a new array with a copy of the values from the current state
            const updatedMovies = [...movies];
            const index = updatedMovies.findIndex(movie=>movie._id === id);
            const newMovie = json.data
            setMovieFormData({
                title:updatedMovies.title
            })


            //Replace the old movie data with the updated data
            updatedMovies.splice(index,1,newMovie);

            history.push("/admin")
        })
        .catch(err=>{
            console.log(`Err:${err}`)
        })
    }

    return (
        <>
            <Header />
            <form className="container mr-5" onSubmit={editFormHandler}>
                <h2 className="has-text-white form-title">Edit Movie</h2>
                <div className="movie-form-container columns">
                    <div className="column">
                        <h1 classame="title">Edit Movie</h1>
                        <div className="field mt-6">
                            <label className="label has-text-white">Title</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. Titanic" value={movieFormData.title} onChange={(e)=>{
                                
                                    setMovieFormData({...movieFormData,title:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Genre</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. Action" value={movieFormData.genre} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,genre:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Type</label>
                            <div className="control">
                                <select className="select is-medium" value={movieFormData.type} onChange={(e)=>{

                                    setMovieFormData({...movieFormData,type:e.target.value})
                                }}>
                                    <option value="">Please Select</option>
                                    <option value="movies">Movies</option>
                                    <option value="tv-shows">TV Shows</option> 
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Rating</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. PG-13" value={movieFormData.rating} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,rating:e.target.value})
                                }}/>
                            </div>
                        </div>

                        {/* copied second column */}
                        <div className="field">
                            <label className="label has-text-white">Length(xh xxm)</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. 1hr 30mins" value={movieFormData.length} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,length:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Release</label>
                            <div className="control">
                                <input type="date" className="input" value={movieFormData.release} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,release:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Rental Price</label>
                            <div className="control">
                                <input type="number" className="input" placeholder="0.00" value={movieFormData.rentalPrice} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,rentalPrice:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Purchase Price</label>
                            <div className="control">
                                <input type="number" className="input" placeholder="0.00" value={movieFormData.purchasePrice} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,purchasePrice:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Poster Image</label>
                            <div className="control">
                                <input className="input" type="file" onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,imgPath:e.target})
                                }}/>
                            </div>
                        </div>

                        <div>
                            <label className="has-text-white">Featured:</label>
                            <label className="mx-4 has-text-white">Yes</label>
                            <input className="mx-4" type="radio" name="featured" value={true} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,isFeatured:e.target.value})
                                }}/>
                            <label className="mx-4 has-text-white">No</label>
                            <input className="mx-4" type="radio" name="featured" value={false} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,isFeatured:e.target.value})
                                }}/>
                        </div>
                    
                         <div className="field mt-4">
                            <label className="label has-text-white">Overview</label>
                            <div className="control">
                                <textarea rows="10"cols="108" value={movieFormData.overview} onChange={(e)=>{
                                    
                                    setMovieFormData({...movieFormData,overview:e.target.value})
                                }}/>
                            </div>
                        </div>
                        <MovieFormButton />
                        {/* <button className="button has-text-white" type="submit">Save</button> */}
                    </div>
                    
                </div>
            </form>   
            {/* <EditMovieFormContainer />   */}
        </>
    )
}

export default EditMovieForm

