import React from 'react';
import Star from "./star-active.png"
import InactiveStar from "./star-inactive.png";

function StarRating({ rating }) {
    // Convertir la note en nombre entier
    const ratingValue = parseInt(rating);

    // Créer un tableau d'étoiles en fonction de la note
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < ratingValue) {
            stars.push(<img key={i} src={Star} alt="étoile active" />);
        } else {
            stars.push(<img key={i} src={InactiveStar} alt="étoile inactive" />);
        }
    }

    return (
        <div>
            {stars}
        </div>
    );
}

export default StarRating;
