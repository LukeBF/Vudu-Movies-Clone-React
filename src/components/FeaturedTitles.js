import React, {useState,useEffect} from 'react'

//Components
import MovieCard from './MovieCard'

const FeaturedContainer = ({title}) => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/movies/featured?isFeatured=true")
        
        .then(res=>res.json())
        .then(data=>{
          
          // console.log(data)
          setMovies(data.data)
        })
    
      },[]);

    return (
        <div>
            <div className="row-container">
                <h2>{title}</h2>
                <div className="grid grid-col-6 grid-column-gap-2">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} id={movie.id} poster={movie.imgPath} title={movie.title} genre={movie.genre} rating={movie.rating} length={movie.length}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedContainer
