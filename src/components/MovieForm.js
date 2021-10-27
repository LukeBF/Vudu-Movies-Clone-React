import React,{useState,useContext} from 'react'

//Components
import Header from '../components/Header';
import MovieFormButton from './MovieFormButton';
import AdminLeftPanel from './AdminLeftPanel';

//Context
import MovieContext from '../context/MovieContext';
import FormUpdateContext from '../context/FormUpdateContext';
import DisplayContext from '../context/displayContext';

 import {Link} from 'react-router-dom'

//Icons
import { AiOutlineEye } from "react-icons/ai";

const MovieForm = () => {

    const [display,setDisplay] = useState(true);

    //const history = useHistory()

    // const {movies,setMovies} = useContext(MovieContext)

    const [movieData, setMovieData] = useState({
        title:"",
        genre:"",
        type:"",
        rating:"",
        length:"",
        release:"",
        imgPath:"",
        rentalPrice:"",
        purchasePrice:"",
        isFeatured:false,
        overview:""

    })

    const formHandler = (e) => {
        
        // const newData = {...movieData}
        // newData[e.target.id] = e.target.value
        // setMovieData(newData)
        // console.log(newData)


       e.preventDefault();

       //alert("test")

        const formData = new FormData();
    //    const fileField = document.querySelector('input[type="file"]');

        formData.append('title', movieData.title);
        formData.append('genre', movieData.genre);
        formData.append('rating', movieData.rating);
        formData.append('length', movieData.length);
        formData.append('imgPath', movieData.imgPath.files[0]);
        // formData.append('imgPath', fileField.files[0])
        formData.append('isFeatured', movieData.isFeatured);
        formData.append('rentalPrice', movieData.rentalPrice);
        formData.append('purchasePrice', movieData.purchasePrice);
        formData.append('type', movieData.type);
        formData.append('release', movieData.release);
        formData.append('overview', movieData.overview);
        //console.log(formData)

       fetch("http://localhost:5000/movies",{
            method:"POST",
            body:formData
       })

       .then(res=>res.json())
       .then(json=>{
            
            alert(json.message)
            setMovieData([...movieData, json.data])
            // console.log(movieData)
            // console.log(json)
            
            //history.push("/")
        })
        .catch(err=>{
            console.log(`Error: ${err}`)
        })
    }

    return (
        <>
            <Header />
    
            <form className="container mr-5" onSubmit={formHandler}>
                <div className="movie-form-container columns">
                    <div className="column">
                        <div className="field mt-6">
                            <label className="label has-text-white">Title</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. Titanic" value={movieData.title} onChange={(e)=>{
                                
                                    setMovieData({...movieData,title:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Genre</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. Action" value={movieData.genre} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,genre:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Type</label>
                            <div className="control">
                                <select className="select is-medium" value={movieData.type} onChange={(e)=>{

                                    setMovieData({...movieData,type:e.target.value})
                                }}>
                                    <option value="">Please Select:</option>
                                    <option value="movies">Movies</option>
                                    <option value="tv-shows">TV Shows</option> 
                                </select>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Rating</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. PG-13" value={movieData.rating} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,rating:e.target.value})
                                }}/>
                            </div>
                        </div>

                        {/* copied second column */}
                        <div className="field">
                            <label className="label has-text-white">Length(xh xxm)</label>
                            <div className="control">
                                <input className="input" placeholder="e.g. 1hr 30mins" value={movieData.length} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,length:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Release</label>
                            <div className="control">
                                <input type="date" className="input" value={movieData.release} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,release:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Rental Price</label>
                            <div className="control">
                                <input type="number" className="input" placeholder="0.00" value={movieData.rentalPrice} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,rentalPrice:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Purchase Price</label>
                            <div className="control">
                                <input type="number" className="input" placeholder="0.00" value={movieData.purchasePrice} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,purchasePrice:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Poster Image</label>
                            <div className="control">
                                <input className="input" type="file" onChange={(e)=>{
                                    
                                    setMovieData({...movieData,imgPath:e.target})
                                }}/>
                            </div>
                        </div>

                        <div>
                            <label className="has-text-white">Featured:</label>
                            <label className="mx-4 has-text-white">Yes</label>
                            <input className="mx-4" type="radio" name="featured" value={true} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,isFeatured:e.target.value})
                                }}/>
                            <label className="mx-4 has-text-white">No</label>
                            <input className="mx-4" type="radio" name="featured" value={false} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,isFeatured:e.target.value})
                                }}/>
                        </div>
                    
                         <div className="field mt-4">
                            <label className="label has-text-white">Overview</label>
                            <div className="control">
                                <textarea rows="10"cols="108" value={movieData.overview} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,overview:e.target.value})
                                }}/>
                            </div>
                        </div>
                        <MovieFormButton />
                        {/* <button className="button has-text-white" type="submit">Save</button> */}
                    </div>
                    
                </div>
            </form>
            
        </>
    )
}

export default MovieForm
