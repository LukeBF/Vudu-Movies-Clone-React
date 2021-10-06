import React,{useState} from 'react'

import AdminHeader from './AdminHeader'

// const movieService = require("../services/MovieService.js")

const MovieForm = () => {

    const [movie, setMovie] = useState({
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

    const createMovie = (e) => {

       e.preventDefault();
       fetch("http://localhost:3000/movies",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(movie)
              
       })
       .then(res=>res.json())
       .then((data)=>{
           alert(`${movie.title} was added to the database.`)
           console.log(data)
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

            <form className="container" action="/movies" onSubmit={createMovie}>
                <div className="movie-form-container columns">
                    <div className="column">
                        <div className="field">
                            <label className="label has-text-white">Title</label>
                            <div className="control">
                                <input className="input has-text-light" placeholder="e.g. Titanic" value={movie.title} onChange={(e)=>{
                                    
                                    setMovie({...movie,title:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div className="field">
                            <label class="label has-text-white">Genre</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. Action" value={movie.genre} onChange={(e)=>{
                                    
                                    setMovie({...movie,genre:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Type</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. Movie/Tv-Show" value={movie.type} onChange={(e)=>{
                                    
                                    setMovie({...movie,type:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Rating</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. PG-13" value={movie.rating} onChange={(e)=>{
                                    
                                    setMovie({...movie,rating:e.target.value})
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

                        <div class="field">
                            <label class="label has-text-white">Length(xh xxm)</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. 1hr 30mins" value={movie.length} onChange={(e)=>{
                                    
                                    setMovie({...movie,length:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Release</label>
                            <div class="control">
                                <input class="input has-text-white" placeholder="e.g. 2021" value={movie.release} onChange={(e)=>{
                                    
                                    setMovie({...movie,release:e.target.value})
                                }}/>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label has-text-white">Poster Image</label>
                            <div class="control">
                                <input class="input has-text-white" type="file" value={movie.poster} onChange={(e)=>{
                                    
                                    setMovie({...movie,poster:e.target.value})
                                }}/>
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
                    
                        <button className="button has-text-white" type="submit" onClick={createMovie}>Save</button>
                    </div>
                </div>
            </form>
            
        </>
    )
}

export default MovieForm
