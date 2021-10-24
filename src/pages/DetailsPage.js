import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import  {useParams} from "react-router-dom";

const DetailsPage = (props) => {

    const [movieDetails, setMovieDetails] = useState({
        imgPath:"",
        title:"",
        genre:"",
        overview:""
    })

    const  {id} =useParams();

    useEffect(()=>{
        fetch("http://localhost:5000/movies/"+id)
        
        .then(res=>res.json())
        .then(data=>{
          
          // console.log(data)
          setMovieDetails(data.data)
        })
    
      },[]);

    //console.log(movies)

    return (
        <div>
            <Header />

            <section className="columns section is-medium has-text-white">
                <div className="column is-one-quarter">
                    <figure className="image" style={{width:"80%"}}>
                        <img src={movieDetails.imgPath}/>
                    </figure>
                </div>
                
                <div className="column">
                    <h1 className="title has-text-white">{movieDetails.title}</h1>
                    <p className="has-text-white mt-2"> {movieDetails.genre} </p>
                    <h2 className="title has-text-white mt-6">Overview</h2>
                    <p className="has-text-white"> {movieDetails.overview} </p>
                </div>
            </section>
        </div>
    )
}

export default DetailsPage
