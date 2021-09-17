import React from 'react'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'
import Genres from '../components/Genres'
import FeaturedContainer from '../components/FeaturedTitles'

// Images
import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'
import FeaturedTitles from '../components/FeaturedTitles'

const HomePage = () => {
    return (
        <div>
            <Header />
            <section id="hero-section">
                <Hero image={BannerImage}/>
            </section>
            <section id="movie-genres">
                <Genres />
            </section>
            <section id="movie-list-section">
                <FeaturedContainer title="Featured"/>
                <MovieRowContainer title="Browse All Titles"/>
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
