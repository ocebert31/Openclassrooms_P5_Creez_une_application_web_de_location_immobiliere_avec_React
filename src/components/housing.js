import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HousingImageContainer from "../housing/housingImageContainer/housingImageContainer";
import HousingInfoContainer from "../housing/housingInfoContainer/housingInfoContainer";
import jsonData from '../recuperation-donnee/logement.json';

function Housing() {
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Recherche de l'ID dans le fichier JSON
        const logement = jsonData.find(item => item.id === id);

        // Si l'ID n'existe pas dans le fichier JSON, on redirige vers la page d'erreur
        if (!logement) {
            navigate('/error');
        }
    }, [id, navigate]);

    // Si l'ID existe, on affiche le composant Housing normal
    return (
        <div>
            <HousingImageContainer />
            <HousingInfoContainer />
        </div>
    );
}

export default Housing;