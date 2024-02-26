import React from "react";
import "./container.scss";
import Card from "./cards";

function container () {
    return (
        <article className="container">
            <div className="alignement">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </article>
    )
}

export default container;