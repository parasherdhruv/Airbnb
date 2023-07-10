import React from 'react'
import "./SearchBar.css"
import { Search } from "react-bootstrap-icons";
const SearchBar = () => {


  return (
    <div className="searchbar colorGrey ">
      <p className="colorBlack weight flex">Anywhere </p>|
      <p className="colorBlack weight flex">Any week</p>|<p> Add guests</p>
      <div className="searchIconDiv ">
        <Search size={14} />
      </div>
    </div>
  );
}

export default SearchBar
