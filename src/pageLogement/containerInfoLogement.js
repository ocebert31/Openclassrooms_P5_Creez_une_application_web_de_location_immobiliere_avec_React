import React from 'react';
import "./containerInfoLogement.scss";
import ContainerTitleInfo from "./containerTitleInfo";
import ContainerTag from "./container-tags";
import ContainerInfoProprietaire from '../pageLogement/containerInfoProprietaire';
import Dropdown from './dropdownLogement';

function ContainerInfoLogement () {
    return(
        <div className="style-container">
            <div className='position-info'>
                <div>
                    <ContainerTitleInfo />
                    <div className='position-tag'>
                        <ContainerTag />
                    </div>
                </div>
                <div className="position-info-proprietaire">
                    <ContainerInfoProprietaire />
                </div>
            </div>
            <Dropdown />
        </div>
    )
}

export default ContainerInfoLogement;


            