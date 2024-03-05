import React from 'react';
import "./titleInfo.scss";

function TitleInfo({title, location }) { 
    return (
        <div>
            <h1 className='style-title'>{title}</h1>
            <p>{location}</p>
        </div> 
    )
}

export default TitleInfo;
