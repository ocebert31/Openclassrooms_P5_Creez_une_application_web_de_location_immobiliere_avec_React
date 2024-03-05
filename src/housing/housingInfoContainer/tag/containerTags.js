import React from 'react';
import "./containerTags.scss";

function ContainerTags(props) {
    if (!props.item.tags) {
        // Si props.item ou props.item.tags est undefined ou n'est pas un tableau, affichez un message d'erreur ou renvoyez null
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

