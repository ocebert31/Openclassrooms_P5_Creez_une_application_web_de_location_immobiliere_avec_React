import React from 'react';
import DataFetcher from '../../../recuperation-donnee/dataFetcher';
import "./container-tags.scss";

function ContainerTags() {
    return (
        <DataFetcher>
            {selectedItem => (
                <div>
                    {selectedItem.tags.map((tag, index) => (
                        <span key={index} className='container-tag'>{tag}</span>
                    ))}
                </div>
            )}
        </DataFetcher>
    );
}

export default ContainerTags;
