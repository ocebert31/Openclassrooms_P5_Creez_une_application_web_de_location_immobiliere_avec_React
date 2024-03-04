import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from './logement.json';

function DataFetcher({ children }) {
    // Récupérer l'ID de l'URL
    const { id } = useParams();
    const selectedItem = jsonData.find(item => item.id === id);

     // Vérifier si l'élément sélectionné existe
    if (!selectedItem) {
        return <div>Aucun logement trouvé pour cet ID.</div>;
    }

    return children(selectedItem);
}

export default DataFetcher;
