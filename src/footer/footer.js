import React from 'react';
import './footer.scss'; 
import KasaFooter from "./kasa-footer.png"
import DroitKasaFooter from "./droit-kasa-footer.png"

function footer() {
  return (
    <footer className="footer">
        <div className='footer_top'>
          <img src= {KasaFooter} alt="logo Kasa"/>
        </div>
        <div className='footer_bottom'>
          <img src= {DroitKasaFooter} alt="droit de Kasa"/>
        </div>
    </footer>

  );
}

export default footer;