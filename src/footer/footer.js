import React from 'react';
import './footer.scss'; 
import KasaFooter from "./kasaFooter.png"

function footer() {
  return (
    <footer className="footer">
        <div className='footer_top'>
          <img src= {KasaFooter} alt="logo Kasa"/>
        </div>
        <div className='footer_bottom'>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
  );
}

export default footer;