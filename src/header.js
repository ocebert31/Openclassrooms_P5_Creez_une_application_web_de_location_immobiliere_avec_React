import React from 'react';
import './header.scss'; // Importez le fichier Sass pour le style


function Bouton() {
  const handleClick = () => {
    // Rediriger vers une autre page
    window.location.href = '/';
  };

  const click = () => {
    // Rediriger vers une autre page
    window.location.href = '/a-propos';
  };

  return (
    <header className="header">
        <div className="header__left">
            <img src="logo-kasa.png" alt="Kasa" />
        </div>
        <div className="header__right">
            <button onClick={handleClick}>Accueil</button>
            <button onClick={click}>A propos</button>
        </div>
    </header>

  );
}

export default Bouton;



