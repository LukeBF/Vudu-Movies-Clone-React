import React from 'react'
import SearchTitles from '../components/SearchTitles'
import Header from '../components/Header'
import MovieRowContainer from '../components/MovieRowContainer'

const SearchPage = () => {
    return (
        <div>
            <Header />
            <SearchTitles placeholder="Search"/>
            <MovieRowContainer />
        </div>
    )
}

export default SearchPage
