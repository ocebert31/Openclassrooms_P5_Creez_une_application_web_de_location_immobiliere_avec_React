import React from 'react';
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres d'URL
import jsonData from '../recuperation-donnee/logement.json';
import "./containerTitleInfo.scss";
import TitleInfo from './titleInfo';

function ContainerTitleInfo() {
    const { id } = useParams(); // Récupérer l'ID de l'URL

    // Filtrer les données JSON pour récupérer uniquement l'élément correspondant à l'ID de l'URL
    const selectedItem = jsonData.find(item => item.id === id);

    // Vérifier si l'élément sélectionné existe
    if (!selectedItem) {
        return <div>Aucun logement trouvé pour cet ID.</div>;
    }


    // Rendre le titre et les conteneurs de tags correspondant à l'ID de l'URL
    return (
        <div className='style-container'>
            <TitleInfo title={selectedItem.title} location={selectedItem.location}/>
        </div> 
    );
}

export default ContainerTitleInfo;



