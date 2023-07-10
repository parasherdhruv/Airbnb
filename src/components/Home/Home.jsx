import React, { useState } from 'react'
import {  Check2 } from 'react-bootstrap-icons';
import Switch from "react-switch";
import photo from "./New folder/photo"
import "./Home.css"
import Scroll from '../scroll/scroll';
const Home = () => {
          const [checked, setChecked] = useState(false);
 
         

           const handleChange = () => {
             setChecked(!checked);
           };
           const ListArray = photo.map((item) => (
             <div key={item.src}>
               {" "}
               <img className="image" src={item.src} alt="hello" />
               <div className="flex gap25 spacebetween ">
                 <h5 className="margin-0">{item.location}</h5>
                 <h5 className="margin-0">{item.rating}</h5>
               </div>
               <h5 className="margin-0 colorGrey">{item.distance} km away</h5>
               <div className="flex gap10 colorGrey">
                 {checked && (
                   <h5 className="margin-0">{item.nights} nights .</h5>
                 )}
                 <h5 className="margin-0">
                   {item.dayfrom} - {item.dayto}
                 </h5>
               </div>
               {checked ? (
                 <p className="margin-0 flex gap10 fontSmall">
                   {" "}
                   <p className="margin-0 weight">
                     {" "}
                     Rs {item.perNight * item.nights}{" "}
                   </p>{" "}
                   total before taxes{" "}
                 </p>
               ) : (
                 <p className="margin-0 flex gap10 fontSmall ">
                   {" "}
                   <p className="margin-0 weight">Rs {item.perNight}</p>
                   night
                 </p>
               )}
             </div>
           ));
  return (
    <div className="main">
      <div className="containerToggle  colorGrey">
        <div className="flex gap25 toggle">
          <p className="colorBlack weight">Display total price</p>|
          <p>includes all fees, before taxes </p>
          <Switch
            onChange={handleChange}
            onColor="#232223"
            offColor="#717171"
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            checkedHandleIcon={<Check2 size={30} />}
            height={32}
          />
        </div>
      </div>

      <div className="grid-container">
    {ListArray}
         </div>
    </div>
  );
}

export default Home
