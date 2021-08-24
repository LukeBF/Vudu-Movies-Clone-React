import React from 'react'

import Header from './Header'
import Hero from './Hero'
import MovieRowContainer from './MovieRowContainer'
import Footer from './Footer'

const HomePage = () => {
    return (
        <div>
            <h1>Home Page Component</h1>
            <Header />
            <Hero />
            <MovieRowContainer />
            <Footer />
        </div>
    )
}

export default HomePage
