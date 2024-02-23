import React from 'react';
import './header.scss'; // Importez le fichier Sass pour le style
import {Link} from "react-router-dom"
import Kasa from "./logo-kasa.png"

function Bouton() {
  return (
    <header className="header">
        <div className="header__left">
          <img src= {Kasa} alt="logo Kasa"/>
        </div>
        <nav className="header__right">
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A propos</Link>
        </nav>
    </header>

  );
}

export default Bouton;



