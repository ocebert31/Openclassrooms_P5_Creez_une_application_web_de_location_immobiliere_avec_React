import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";
import LogoKasa from "./logoKasa.png";

function header() {
  return (
    <header className="header">
        <div className="header-left">
          <img src= {LogoKasa} alt="logo Kasa"/>
        </div>
        <nav>
            <Link to="/" className="style-home">Accueil</Link>
            <Link to="/a-propos" className="style-about">A propos</Link>
        </nav>
    </header>

  );
}

export default header;



