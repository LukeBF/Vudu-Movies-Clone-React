import React,{useContext} from 'react'
import Header from '../components/Header'
import MovieContext from '../context/MovieContext'

const DetailsPage = () => {

    const {movies,setMovies} = useContext(MovieContext) 
    console.log(movies)

    return (
        <div>
            <Header />
            <section class="section is-medium has-text-white">
                <figure className="image">
                    <img />
                </figure>
                <h1 className="title has-text-white"></h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
                </h2>
            </section>
        </div>
    )
}

export default DetailsPage
