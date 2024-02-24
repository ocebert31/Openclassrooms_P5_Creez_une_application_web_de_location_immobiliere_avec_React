import React from 'react';
import PhotoAccueil from "./image-o.png"
import './banner.scss';

function Banner() {
  return (
    <div className='style-banner'>
      <img className="photo-desktop" src={PhotoAccueil} alt="Bannière de la page d'accueil" />
    </div>
  );
}

export default Banner;