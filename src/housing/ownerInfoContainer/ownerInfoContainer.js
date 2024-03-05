import React from 'react';
import InfoProprietaire from './owner/infoOwner';
import StarRating from './Star/StarRating';

function ContainerInfoProprietaire(props) {
    if (!props.item || !props.item.host) {
        return null;
    }

    return (
        <div className="container-info-proprietaire" key={props.item.id}>
            <InfoProprietaire name={props.item.host.name} picture={props.item.host.picture} />
            <StarRating rating={props.item.rating} />
        </div>
    );
}

export default ContainerInfoProprietaire;



