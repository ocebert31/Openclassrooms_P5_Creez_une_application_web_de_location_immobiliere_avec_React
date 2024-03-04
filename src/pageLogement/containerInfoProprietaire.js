import React from 'react';
import InfoProprietaire from './infoProprietaire';
import StarRating from './StarRating'; 
import DataFetcher from './dataFetcher';

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
