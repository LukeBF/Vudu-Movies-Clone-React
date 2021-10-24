import React,{useState,useContext,useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';


// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import FeaturedMovies from '../components/FeaturedMovies'
import FeaturedTvShows from '../components/FeaturedTvShows';
import SearchTitles from '../components/SearchTitles'

// CSS

// Images
// import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'
import AvengersBanner from '../assets/img/banner/avengers.jpg'
import SquidGameBanner from '../assets/img/banner/squid-game.jpg'



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
                    <section className="hero">
                        
                            <Splide>
                                {/* <img src={AvengersBanner}/> */}
                                <SplideSlide>
                                    <img className="banner-image" src={AvengersBanner}/>
                                </SplideSlide>
                                
                                <SplideSlide>
                                    <img className="banner-image" src={SquidGameBanner}/>
                                </SplideSlide>
                            </Splide>
                    </section>
                    {/* Start Hero Carousel */}
        
                    {/* End Hero Carousel */}

                    {/* <section id="hero-section" className="banner">
                        <Hero image={AvengersBanner}/>
                    </section> */}
                    <section id="title-search">
                        <SearchTitles placeholder="Search"/>
                    </section>
                    <section id="movie-genres">
                        <Genres />
                    </section>
                    <section id="movie-list-section">
                        <FeaturedMovies heading="Featured Movies"/>
                        <FeaturedTvShows heading="Featured TV-Shows"/>
                        <MovieRowContainer heading="Browse All"/>
                    </section>
                    <Footer />
            </div>
        </>
    )
}

export default HomePage
