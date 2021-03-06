import React, {useState,useEffect} from 'react'

//Components
import MovieCard from './MovieCard'

const FeaturedMovies = ({heading}) => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/movies/featured?isFeatured=true")
        
        .then(res=>res.json())
        .then(data=>{
          
          // console.log(data)
          setMovies(data.data)
        })
    
      },[]);
    
    

    return (
        <div>
            <div className="row-container">
                <h2>{heading}</h2>
                <div className="grid grid-col-6 grid-column-gap grid-row-gap">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} id={movie._id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length} release={movie.release.substring(0,10)}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedMovies
