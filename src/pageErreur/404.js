import React from "react";
import "./404.scss";
import {Link} from "react-router-dom"

function erreur404 () {
    return (
        <div>
            <p className="style">404</p>
            <p className="style-information-erreur">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="style-lien-retour">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default erreur404;