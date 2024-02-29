import React from 'react';
import Carrousel from "./Carrousel.png";
import "./containerImageLogement.scss";
import ArrowBack from "./arrow_back.png";
import ArrowNext from "./arrow_next.png";

function ContainerLogement() {
    return (
        <div className='style-image'>
            <div className="arrow-container back">
                <img src={ArrowBack} alt="flèche précédente" className="arrow back"/>
            </div>
            <img src={Carrousel} alt="logement" className="main-image"/>
            <div className="arrow-container next">
                <img src={ArrowNext} alt="flèche suivante" className="arrow next"/>
            </div>
        </div>
    )
}

export default ContainerLogement;

