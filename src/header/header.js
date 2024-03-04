import React from 'react';
import './header.scss';
import {Link} from "react-router-dom"
import Kasa from "./logo-kasa.png"

function header() {
  return (
    <header className="header">
        <div className="header__left">
          <img src= {Kasa} alt="logo Kasa"/>
        </div>
        <nav>
            <Link to="/" className="style-accueil">Accueil</Link>
            <Link to="/a-propos" className="style-apropos">A propos</Link>
        </nav>
    </header>

  );
}

export default header;



