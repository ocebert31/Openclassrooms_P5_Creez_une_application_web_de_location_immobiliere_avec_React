import React from 'react';
import "./housingInfoContainer.scss";
import ContainerTitleInfo from "./title/containerTitleInfo";
import ContainerTag from "./tag/containerTags";
import ContainerInfoProprietaire from '../ownerInfoContainer/ownerInfoContainer';
import HousingDropdown from './dropdown/housingDropdown';

function ContainerInfoLogement (props) {
    return(
        <div className="style-container">
            <div className='position-info'>
                <div>
                    <ContainerTitleInfo item={props.item}/>
                    <div className='position-tag'>
                        <ContainerTag item={props.item}/>
                    </div>
                </div>
                <div className="position-info-owner">
                    <ContainerInfoProprietaire item={props.item}/>
                </div>
            </div>
            <HousingDropdown item={props.item}/>
        </div>
    )
}

export default ContainerInfoLogement;


            