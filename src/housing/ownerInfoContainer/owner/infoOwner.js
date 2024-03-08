import React from 'react';
import "./infoOwner.scss";

function InfoProprietaire({name, picture }) {
    return (
        <div className='position-profile'>
            <p>{name}</p>
            <img src={picture} alt="propriétaire"/>
        </div>
    );
}

export default InfoProprietaire;