import React from 'react';
import "./titleInfo.css";

function TitleInfo({title, location }) { 
    return (
        <div>
            <h1 className='style-title'>{title}</h1>
            <p className='style-location'>{location}</p>
        </div> 
    )
}

export default TitleInfo;
