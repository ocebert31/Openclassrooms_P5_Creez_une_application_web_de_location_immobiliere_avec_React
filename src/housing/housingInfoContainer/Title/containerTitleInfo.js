import React from 'react';
import "./containerTitleInfo.scss";
import TitleInfo from './titleInfo';

function ContainerTitleInfo(props) {
    return (
        <div className='style-container' key={props.item.id}>
            <TitleInfo title={props.item.title} location={props.item.location} />
        </div>
    );
}

export default ContainerTitleInfo;


                