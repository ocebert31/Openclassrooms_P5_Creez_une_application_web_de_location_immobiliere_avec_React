import React, { useState } from 'react';
import "./containerImageLogement.scss";
import ArrowBack from "./arrow_back.png";
import ArrowNext from "./arrow_next.png";
import DataFetcher from '../../recuperation-donnee/dataFetcher';

function ContainerLogement() {
    // Utiliser useState pour stocker l'index de l'image actuellement affichée
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? picturesLength - 1 : prevIndex - 1));
    };

    const goToNextImage = (picturesLength) => {
        setCurrentImageIndex(prevIndex => (prevIndex === picturesLength - 1 ? 0 : prevIndex + 1));
    };

    return (
        <DataFetcher>
            {selectedItem => {
                const picturesLength = selectedItem.pictures.length;

                return (
                    <div className='style-image'>
                        <div className="arrow-container back" onClick={() => goToPreviousImage(picturesLength)}>
                            <img src={ArrowBack} alt="flèche précédente" className="arrow back"/>
                        </div>
                        <img src={selectedItem.pictures[currentImageIndex]} alt="logement" className="main-image"/>
                        <div className="arrow-container next" onClick={() => goToNextImage(picturesLength)}>
                            <img src={ArrowNext} alt="flèche suivante" className="arrow next"/>
                        </div>
                        {picturesLength > 1 && <div className="counter">{currentImageIndex + 1} / {picturesLength}</div>}
                    </div>
                );
            }}
        </DataFetcher>
    );
}

export default ContainerLogement;
