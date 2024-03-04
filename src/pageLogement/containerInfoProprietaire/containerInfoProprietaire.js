import React from 'react';
import InfoProprietaire from './Proprietaire/infoProprietaire';
import StarRating from './Star/StarRating'; 
import DataFetcher from '../../recuperation-donnee/dataFetcher';

function ContainerInfoProprietaire() {
    return (
        <DataFetcher>
            {selectedItem => (
                <div>
                    <InfoProprietaire id={selectedItem.id} name={selectedItem.host.name} picture={selectedItem.host.picture} />
                    <StarRating rating={selectedItem.rating} />
                </div>
            )}
        </DataFetcher>
    );
}

export default ContainerInfoProprietaire;
