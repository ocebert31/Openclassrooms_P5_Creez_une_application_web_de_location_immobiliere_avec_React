import React from 'react';
import "./containerTags.css";

function ContainerTags(props) {
    if (!props.item.tags) {
        return null; 
    }

    return (
        <div className='alignment'>
            {props.item.tags.map((tag, index) => (
                <div key={index} className='container-tag'>{tag}</div>
            ))}
        </div>
    );
}

export default ContainerTags;
