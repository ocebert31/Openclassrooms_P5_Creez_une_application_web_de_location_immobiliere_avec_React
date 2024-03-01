import React from 'react';
import Dropdowns from "../pageApropos/dropdown";
import "./dropdownLogement.scss"
import { useParams } from 'react-router-dom'; // Importer useParams pour récupérer les paramètres d'URL
import jsonData from '../recuperation-donnee/logement.json';

function Dropdown () {
    const { id } = useParams(); // Récupérer l'ID de l'URL

    // Filtrer les données JSON pour récupérer uniquement l'élément correspondant à l'ID de l'URL
    const selectedItem = jsonData.find(item => item.id === id);

    // Vérifier si l'élément sélectionné existe
    if (!selectedItem) {
        return <div>Aucun logement trouvé pour cet ID.</div>;
    }
    
    return (
        <div className='container-dropdown'>
            <Dropdowns title="Description" options={[selectedItem.description]} />
            <div className="dropdown-spacing"></div>
            <Dropdowns title="Equipements" options={selectedItem.equipments} />
        </div>
    )
}

export default Dropdown;
