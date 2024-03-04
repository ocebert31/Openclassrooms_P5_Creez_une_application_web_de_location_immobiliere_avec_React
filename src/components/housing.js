import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContainerImageLogement from "../pageLogement/containerImageLogement";
import ContainerInfoLogement from "../pageLogement/containerInfoLogement";
import { useParams } from 'react-router-dom';
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
            <ContainerImageLogement />
            <ContainerInfoLogement />
        </div>
    );
}

export default Housing;