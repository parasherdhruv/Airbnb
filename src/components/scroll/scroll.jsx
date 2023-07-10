import React, { useRef } from 'react'
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';
 import "./scroll.css"
const Scroll = (props) => {
  const contentRef = useRef(null);
  const scrollLeft = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft -= 700; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (contentRef.current) {
      contentRef.current.scrollLeft += 700; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="flex gap25 ">
      <div className="container">
        <button className="scroll-button scroll-left" onClick={scrollLeft}>
          <ArrowLeftShort />
        </button>
        <div ref={contentRef} className="content data">
          {props.Data}
        </div>

        <button className="scroll-button scroll-right" onClick={scrollRight}>
          <ArrowRightShort />
        </button>
      </div>
    </div>
  );
};

export default Scroll;
