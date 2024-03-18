import React, {useState, useEffect} from "react";
import "./cardsContainer.css";
import Card from "./card";
import getDataFromAPI from '../../data/dataFetch';

function Container() {
    const [data, setdata] = useState([]);

    useEffect ( () => {
        getDataFromAPI().then(setdata)
    }, [])

    return (
        <article className="container">
            <div className="alignment">
                { data.map((item) => (
                    <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
                ))}
            </div>
        </article>
    );
}

export default Container;
