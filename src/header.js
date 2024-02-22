import React from 'react';
// import { Link } from 'react-router-dom';
// import KasaLogo from "logo-kasa.png"
import './header.scss'; // Importez le fichier Sass pour le style

const Header = () => {
    // Gestionnaires d'événements pour les boutons (identiques à l'exemple précédent)

    return (
        <header className="header">
            <div className="header__left">
                <img src="logo-kasa.png" alt="Kasa" />
            </div>
            <div className="header__right">
                {/* <Link to="/">Accueil</Link>
                <Link to="/a-propos">A propos</Link> */}
                <button onClick="/">Accueil</button>
                <button onClick="/a-propos">A propos</button>
            </div>
        </header>
    );
};

export default Header;
