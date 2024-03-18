import React from "react";
import "./404.css";
import {Link} from "react-router-dom";

function error404 () {
    return (
        <div>
            <p className="style">404</p>
            <p className="style-info-error">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="style-link-back">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default error404;