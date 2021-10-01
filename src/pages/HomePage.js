import React,{useContext,useEffect} from 'react'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import FeaturedContainer from '../components/FeaturedTitles'

// CSS
import '../assets/App.css'
import '../assets/Utilities.css'

// Images
import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'

// Context
import MovieContext from '../context/MovieContext'


const HomePage = () => {

    const {movies,setMovies} = useContext(MovieContext)

    useEffect(()=>{
        fetch("http://localhost:3000/movies/")
        
        .then(res=>res.json())
        .then(data=>{
          
        // console.log(data)
        setMovies(data.data)    
        }) 

        
    },[]);

    return (
        <div id="page-container">
            <Header />
            <section id="hero-section">
                <Hero image={BannerImage}/>
            </section>
            <section id="movie-genres">
                <Genres />
            </section>
            <section id="movie-list-section">
                <FeaturedContainer heading="Featured"/>
                <MovieRowContainer heading="Browse All Titles"/>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
