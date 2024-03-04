import React from 'react';
import "./containerInfoLogement.scss";
import ContainerTitleInfo from "./Title/containerTitleInfo";
import ContainerTag from "./Tag/container-tags";
import ContainerInfoProprietaire from '../containerInfoProprietaire/containerInfoProprietaire';
import Dropdown from './Dropdown/dropdownLogement';

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


            