import React from 'react';
import Dropdowns from "../../../components/common/dropdown";
import "./housingDropdown.scss";

function Dropdown(props) {
    if (!props.item.description) {
        // Si props.item ou props.item.tags est undefined ou n'est pas un tableau, affichez un message d'erreur ou renvoyez null
        return null; 
    }

    const equipments = props.item.equipments.map((elem, index) => (
        <li key={index}>{elem}</li>
    ));

    return (
        <div className='container-dropdown'>
            <Dropdowns title="Description" options={[props.item.description]} />
            <div className="dropdown-spacing"></div>
            <Dropdowns title="Equipements" options={[equipments]}/>
        </div>
    );
}

export default Dropdown;

