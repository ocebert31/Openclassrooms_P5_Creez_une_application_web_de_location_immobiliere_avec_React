import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres d'URL
import "./container-tags.scss";
import jsonData from '../recuperation-donnee/logement.json';

function ContainerTags() {
    const { id } = useParams(); // Récupérer l'ID de l'URL

    // Filtrer les données JSON pour récupérer uniquement l'élément correspondant à l'ID de l'URL
    const selectedItem = jsonData.find(item => item.id === id);

    // Vérifier si l'élément sélectionné existe
    if (!selectedItem) {
        return <div>Aucun logement trouvé pour cet ID.</div>;
    }

    // Rendre les balises correspondant à l'ID de l'URL
    return (
        <div>
            {selectedItem.tags.map((tag, index) => (
                <span key={index} className='container-tag'>{tag}</span>
            ))}
        </div>
    );
}

export default ContainerTags;

