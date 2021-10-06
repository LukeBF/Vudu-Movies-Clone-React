import React,{useContext,useEffect} from 'react'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import FeaturedContainer from '../components/FeaturedTitles'

// CSS

// Images
// import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'
import AvengersBanner from '../assets/img/banner/avengers.jpg'

// Context
import MovieContext from '../context/MovieContext'


const HomePage = () => {

    const {setMovies} = useContext(MovieContext)

    useEffect(()=>{
        fetch("http://localhost:3000/movies/")
        
        .then(res=>res.json())
        .then(data=>{
          
        // console.log(data)
        setMovies(data.data)    
        }) 
    },[]);

    return (
        <>
            <Header />
                <div id="page-container">
                <section id="hero-section">
                    <Hero image={AvengersBanner}/>
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
        </>
    )
}

export default HomePage
