import React,{useState,useContext,useEffect} from 'react'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import FeaturedContainer from '../components/FeaturedTitles'
import SearchTitles from '../components/SearchTitles'

// CSS

// Images
// import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'
import AvengersBanner from '../assets/img/banner/avengers.jpg'

// Context
import MovieContext from '../context/MovieContext'


const HomePage = () => {

    const {movies,setMovies} = useContext(MovieContext)
    const [banner,setBanner] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/movies/")
        
        .then(res=>res.json())
        .then(data=>{
            
        // console.log(data)
        setMovies(data.data)
        setBanner(data.data[Math.floor(Math.random() * data.data.length - 1)])    
        }) 
    },[]);
    
    //console.log(banner)

    return (
        <>
            {/* Nav */}
            <Header />
                <div id="page-container">
                {/* Hero Banner */}
                <section id="hero-section" className="banner">
                    <Hero image={AvengersBanner}/>
                    {/* <div className="hero-contents">
                        <h1></h1>
                        <Hero image={AvengersBanner}/>
                    </div> */}
                </section>
                <section id="title-search">
                    <SearchTitles placeholder="Search"/>
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
