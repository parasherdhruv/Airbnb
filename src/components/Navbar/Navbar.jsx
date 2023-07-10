import React from 'react'
import "./Navbar.css"
import logo from "../../Airbnb_logo.png"
import SearchBar from './SearchBar/SearchBar';
import { Funnel, Globe, List,  PersonCircle } from "react-bootstrap-icons";
import  data from  "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scroll from '../scroll/scroll';



const Navbar = () => {


const Data = data.map((item)=>{
  return (
    <div key={item.name} className="types">
      <FontAwesomeIcon className='icons' icon={item.icon} />
      <p className="dataText"> {item.name} </p>
    </div>
  );
})
 

  return (
    <div className='fixed'>
      {" "}
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <SearchBar />
        <div className="flex gap25 user">
          <p className="weight">Airbnb your home</p>
          <Globe />
          <div className="div3 flex gap10">
            <List size={20} />
            <PersonCircle size={25} color="gray" />
          </div>
        </div>
      </div>
      <div className="divider"></div>{" "}
      <div className="flex gap25 ">
        {" "}
      <Scroll Data={Data}/>
        <div className=" flex gap10 shadow filter">
          <Funnel />
          <p> Filters</p>
        </div>
      </div>

    </div>
  );
}

export default Navbar
