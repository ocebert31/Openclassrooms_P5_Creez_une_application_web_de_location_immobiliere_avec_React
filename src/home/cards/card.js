import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ id, title, cover, onClick }) {
  return (
    <div className="style-card" onClick={onClick}>
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default Card;
