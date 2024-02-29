import React from 'react';
import "./containerInfoProprietaire.scss";
import Image from "./profile-picture.jpg";
import Star from "./star-active.png"

function containerInfoProprietaire () {
    return (
        <div>
            <div className='position-profile'>
                <p className='style-name'>Alexandre Dumas</p>
                <img src={Image} alt="place tête" className='style-image-profile'/>
            </div>
            <div>
                <img src={Star} alt="étoile" />
                <img src={Star} alt="étoile" />
                <img src={Star} alt="étoile" />
                <img src={Star} alt="étoile" />
                <img src={Star} alt="étoile" />
            </div>
        </div>
    )
}

export default containerInfoProprietaire;