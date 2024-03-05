import React from "react";
import "./cardsContainer.scss";
import Card from "./card";
import jsonData from "../../recuperation-donnee/logement.json";

function Container() {
    return (
        <article className="container">
            <div className="alignment">
                {jsonData.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </article>
    );
}

export default Container;
