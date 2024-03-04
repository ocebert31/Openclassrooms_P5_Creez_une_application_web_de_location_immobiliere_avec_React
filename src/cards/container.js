import React from "react";
import "./container.scss";
import Card from "./cards";
import jsonData from "../recuperation-donnee/logement.json";

function Container() {
    return (
        <article className="container">
            <div className="alignement">
                {jsonData.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </article>
    );
}

export default Container;
