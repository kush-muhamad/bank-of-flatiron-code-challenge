import React from "react"

function Search({handleSearch}){
    return (
        <div className="search-area">
            <input type="text" placeholder="Search..." onChange={handleSearch} />

        </div>
    )


}
export default Search;