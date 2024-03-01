import React from 'react';
import "./infoProprietaire.scss"

function InfoProprietaire({name, picture }) {
    return (
        <div className='position-profile'>
            <p className='style-name'>{name}</p>
            <img src={picture} alt="Photo du propriétaire" className='style-image-profile'/>
        </div>
    );
}

export default InfoProprietaire;