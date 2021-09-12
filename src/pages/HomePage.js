import React from 'react'

// Components
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieRowContainer from '../components/MovieRowContainer'
import Footer from '../components/Footer'

// Images
import BannerImage from '../assets/img/banner/Pets-1920x900.jpg'

const HomePage = () => {
    return (
        <div>
            <Header />
            <section id="hero-section">
                <Hero image={BannerImage}/>
            </section>
            <section id="movie-list-section">
                <MovieRowContainer />
            </section>
            <Footer />
        </div>
    )
}

export default HomePage
