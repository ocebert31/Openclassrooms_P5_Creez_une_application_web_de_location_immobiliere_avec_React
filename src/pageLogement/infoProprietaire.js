import React from 'react';
import "./infoProprietaire.scss"

function InfoProprietaire({name, picture }) {
    return (
        <div className='position-profile'>
            <p>{name}</p>
            <img src={picture} alt="Photo du propriétaire"/>
        </div>
    );
}

export default InfoProprietaire;