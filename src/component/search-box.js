import React from "react";
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className="pa2">         
          <input 
          className="pa3 ba b--green bg-lightest-blue"
          type='text' placeholder="search" 
          onChange={searchChange} // the same as DOM events we defined the function and then every time the event happens we call it
          /> 
        </div>
    )
}

export default SearchBox;