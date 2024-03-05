import React from 'react';
import "./containerTitleInfo.scss";
import TitleInfo from './titleInfo';
import DataFetcher from '../../../recuperation-donnee/dataFetcher';

function ContainerTitleInfo() {
    return (
        <DataFetcher>
            {selectedItem => (
                <div className='style-container'>
                    <TitleInfo title={selectedItem.title} location={selectedItem.location} />
                </div>
            )}
        </DataFetcher>
    );
}

export default ContainerTitleInfo;
