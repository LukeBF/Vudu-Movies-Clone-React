import React,{useState,useContext} from 'react'

import AdminHeader from '../components/AdminHeader'

import MovieContext from '../context/MovieContext'
// import { useHistory } from 'react-router'

// const movieService = require("../services/MovieService.js")

const MovieForm = () => {

    // const history = useHistory()

    const {movies,setMovies} = useContext(MovieContext)

    const [movieData, setMovieData] = useState({
        title:"",
        genre:"",
        type:"",
        rating:"",
        length:"",
        release:"",
        // imgPath:"",
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
       const movieForm = new movieData()
       movieForm.append("title",movieData.title)
       movieForm.append("genre",movieData.genre)
       movieForm.append("type",movieData.type)
       movieForm.append("rating",movieData.rating)
       movieForm.append("length",movieData.length)
       movieForm.append("release",movieData.release)
       movieForm.append("rentalPrice",movieData.rentalPrice)
       movieForm.append("purchasePrice",movieData.purchasePrice)
       movieForm.append("isFeatured",movieData.isFeatured)
       movieForm.append("overview",movieData.overview)

       fetch("http://localhost:3000/movies",{
            method:"POST",
            // headers: {
            //     'Content-Type': 'application/json',
            //     // 'Content-Type': 'application/x-www-form-urlencoded',
            //   },
            //   body: JSON.stringify(movieData)
                body: movieForm
             
       })

       .then(res=>res.json())
       .then(json=>{
            // alert(json.message)
            // alert(json.data)
            setMovieData([...movies, json.data])
            // console.log(movieData)
            // console.log(json)
            // history.push("/")
        })
        .catch(err=>{
            console.log(`Error: ${err}`)
        })

    }

    return (
        <>
            <AdminHeader />
           
            {/* <section className="hero is-black">
                    <div className="hero-body">
                        <p className="title">
                            Create Movie
                        </p>
                    </div>
            </section> */}

            <form className="container" onSubmit={formHandler}>
                <div className="movie-form-container columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-white">Title</label>
                            <div className="control">
                                <input className="input has-text-light" placeholder="e.g. Titanic" value={movieData.title} onChange={(e)=>{
                                
                                    setMovieData({...movieData,title:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Genre</label>
                            <div className="control">
                                <input className="input has-text-white" placeholder="e.g. Action" value={movieData.genre} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,genre:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Type</label>
                            <div className="control">
                                <input className="input has-text-white" placeholder="e.g. Movie/Tv-Show" value={movieData.type} onChange={(e)=>{
                                
                                    setMovieData({...movieData,type:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Rating</label>
                            <div className="control">
                                <input className="input has-text-white" placeholder="e.g. PG-13" value={movieData.rating} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,rating:e.target.value})
                                }}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column">
                        {/* <div class="field">
                            <label class="label has-text-white">Rental Price</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. $5.99" value={movie.rentalPrice} onChange={(e)=>{
                                    
                                    setMovie({...movie,rentalPrice:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Purchase Price</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. $7.99" value={movie.purchasePrice} onChange={(e)=>{
                                    
                                    setMovie({...movie,purchasePrice:e.target.value})
                                }}/>
                            </div>
                        </div> */}

                        <div className="field">
                            <label className="label has-text-white">Length(xh xxm)</label>
                            <div className="control">
                                <input className="input has-text-white" placeholder="e.g. 1hr 30mins" value={movieData.length} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,length:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Release</label>
                            <div className="control">
                                <input className="input has-text-white" placeholder="e.g. 2021" value={movieData.release} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,release:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label has-text-white">Poster Image</label>
                            <div className="control">
                                {/* <input className="input has-text-white" type="file" value={movieData.imgPath} onChange={(e)=>{
                                    
                                    setMovieData({...movieData,imgPath:e.target.value})
                                }}/> */}
                            </div>
                        </div>
                    
                        {/* <div class="field">
                            <label class="label has-text-white">Overview</label>
                            <div class="control">
                                <textarea rows="10"cols="108" value={movie.overview} onChange={(e)=>{
                                    
                                    setMovie({...movie,overview:e.target.value})
                                }}/>
                            </div>
                        </div> */}
                    
                        <button className="button has-text-white" type="submit">Save</button>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default MovieForm