import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchTitles = ({placeholder}) => {
    return (
        <div className="columns">
            <form className="column is-half is-offset-one-quarter control">
                <input className="input is-medium has-background-white my-4" type="text" placeholder={placeholder} />
            </form>
        </div>
    )
}

export default SearchTitles
  