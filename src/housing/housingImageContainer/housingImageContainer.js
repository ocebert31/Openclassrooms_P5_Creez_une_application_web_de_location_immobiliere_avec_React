import React, { useState } from 'react';
import "./housingImageContainer.scss";
import ArrowBack from "./arrow_back.png";
import ArrowNext from "./arrow_next.png";

function ContainerLogement(props) {
    // Utiliser useState pour stocker l'index de l'image actuellement affichée
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? picturesLength - 1 : prevIndex - 1));
    };

    const goToNextImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === picturesLength - 1 ? 0 : prevIndex + 1));
    };

    // Vérifiez si props.item.pictures est défini 
    if (!props.item.pictures) {
        console.log(props.item.pictures)
        return <div>Aucune image à afficher</div>;
    }

    const picturesLength = props.item.pictures.length;

    return (
        <div className='style-image'>
            <div className="arrow-container back" onClick={() => goToPreviousImage(picturesLength)}>
                <img src={ArrowBack} alt="flèche précédente" className="arrow back"/>
            </div>
            <img src={props.item.pictures[currentImageIndex]} alt="logement" className="main-image"/>
            <div className="arrow-container next" onClick={() => goToNextImage(picturesLength)}>
                <img src={ArrowNext} alt="flèche suivante" className="arrow next"/>
            </div>
            {picturesLength > 1 && <div className="counter">{currentImageIndex + 1} / {picturesLength}</div>}
        </div>
    );
}

export default ContainerLogement;