import React from 'react';

const SearchBar = ({ handleInputChange }) => {
    return (
        <form>
            <input text="text" onChange={handleInputChange}/>
        </form>
    )
}

export default SearchBar;