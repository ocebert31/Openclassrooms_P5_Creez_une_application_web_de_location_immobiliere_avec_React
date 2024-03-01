import React from 'react';
import InfoProprietaire from './infoProprietaire';
import StarRating from './StarRating'; // Importer le composant StarRating
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres d'URL
import jsonData from '../recuperation-donnee/logement.json';

function ContainerInfoProprietaire () {
    const { id } = useParams(); // Récupérer l'ID de l'URL

    // Filtrer les données JSON pour récupérer uniquement l'élément correspondant à l'ID de l'URL
    const selectedItem = jsonData.find(item => item.id === id);

    // Vérifier si l'élément sélectionné existe
    if (!selectedItem) {
        return <div>Aucun logement trouvé pour cet ID.</div>;
    }

    return (
        <div>
            <InfoProprietaire id={selectedItem.id} name={selectedItem.host.name} picture={selectedItem.host.picture}/>
            <StarRating rating={selectedItem.rating} />
        </div>
    )
}

export default ContainerInfoProprietaire;
