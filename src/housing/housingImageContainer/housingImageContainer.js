import React, { useState } from 'react';
import "./housingImageContainer.css";
import ArrowBack from "./arrow_back.png";
import ArrowNext from "./arrow_next.png";

function ContainerLogement(props) {
    // Utiliser useState pour stocker l'index de l'image actuellement affichée
    const [currentImageIndex, setCurrentImageIndex] = useState(1);

    const goToPreviousImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === 1 ? picturesLength : prevIndex - 1));
    };

    const goToNextImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === picturesLength ? 1 : prevIndex + 1));
    };

    // Vérifiez si props.item.pictures est défini 
    if (!props.item.pictures) {
        return <div>Aucune image à afficher</div>;
    }

    const picturesLength = props.item.pictures.length;
    const counter = `${currentImageIndex} / ${picturesLength}`;
    
    return (
        <div className='style-image'>
            <div className="arrow-container back" onClick={() => goToPreviousImage(picturesLength)}>
                <img src={ArrowBack} alt="flèche précédente" className="arrow back"/>
            </div>
            <img src={props.item.pictures[currentImageIndex - 1]} alt="logement" className="main-image"/>
            <div className="arrow-container next" onClick={() => goToNextImage(picturesLength)}>
                <img src={ArrowNext} alt="flèche suivante" className="arrow next"/>
            </div>
            {picturesLength > 1 && <div className="counter">{counter}</div>}
        </div>
    );
}

export default ContainerLogement;