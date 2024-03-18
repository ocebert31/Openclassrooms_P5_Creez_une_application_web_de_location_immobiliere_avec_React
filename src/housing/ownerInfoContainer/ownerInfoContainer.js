import React from 'react';
import InfoProprietaire from './owner/infoOwner';
import StarRating from './Star/StarRating';
import "./ownerInfoContainer.css";

function ContainerInfoProprietaire(props) {
    if (!props.item || !props.item.host) {
        return null;
    }

    return (
        <div className="container-info-proprietaire" key={props.item.id}>
            <div className="owner">
                <InfoProprietaire name={props.item.host.name} picture={props.item.host.picture} />
            </div>
            <div className="star">
                <StarRating rating={props.item.rating} />
            </div>
        </div>
    );
}

export default ContainerInfoProprietaire;



