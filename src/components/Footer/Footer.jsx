import React from 'react'
import { CaretUp, Globe } from 'react-bootstrap-icons';
import "./Footer.css"
const Footer = () => {
  return (
    <div className="fixedFooter">
      {" "}
      <div className="flex justify padding footer">
        <div className="flex gap10 terms">
          {" "}
          <div className='flex'>
            {" "}
            <p>© 2023 Airbnb, Inc.</p>.<p>Privacy</p>.<p>Terms</p>
          </div>
          <div className='flex'>
            .<p>Sitemap</p>.<p>Company details</p>.<p>Destinations</p>
          </div>
        </div>
        <div className="flex gap10">
          {" "}
          <Globe />
          <h5>English(IN)</h5>
          <h5>₹ INR </h5>
          <h5>Support & resourtces</h5>
          <CaretUp />
        </div>
      </div>
    </div>
  );
}

export default Footer
