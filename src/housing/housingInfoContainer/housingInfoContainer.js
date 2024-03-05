import React from 'react';
import "./housingInfoContainer.scss";
import ContainerTitleInfo from "./Title/containerTitleInfo";
import ContainerTag from "./tag/containerTags";
import ContainerInfoProprietaire from '../ownerInfoContainer/ownerInfoContainer';
import Dropdown from './dropdown/housingDropdown';

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
                <div className="position-info-owner">
                    <ContainerInfoProprietaire />
                </div>
            </div>
            <Dropdown />
        </div>
    )
}

export default ContainerInfoLogement;


            