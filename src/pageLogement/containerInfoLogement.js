import React from 'react';
import "./containerInfoLogement.scss";
import ContainerTitleInfo from "./containerTitleInfo";
import ContainerTag from "./container-tags";
import Dropdown from "../pageApropos/dropdown";
import ContainerInfoProprietaire from '../pageLogement/containerInfoProprietaire';

function ContainerInfoLogement () {
    return(
        <div className="style-container">
            <div className='position-info'>
                <div>
                    <ContainerTitleInfo />
                    <div className='position-tag'>
                        <ContainerTag />
                        <ContainerTag />
                        <ContainerTag />
                    </div>
                </div>
                <div className="position-info-proprietaire">
                    <ContainerInfoProprietaire />
                </div>
            </div>
            <div className='container-dropdown'>
                <Dropdown title="Description" options={["Vous serez...."]} />
                <div className="dropdown-spacing"></div>
                <Dropdown title="Equipements" options={["Climatisation", "WI-Fi", "Cuisine", "Espace de travail"]} />
            </div>
        </div>
    )
}

export default ContainerInfoLogement;


            