import React from 'react';
import Dropdown from "../../../components/common/dropdown";
import "./housingDropdown.scss";

function HousingDropdown(props) {
  if (!props.item.description) {
    return null; // Si props.item ou props.item.tags est undefined ou n'est pas un tableau, affichez un message d'erreur ou renvoyez null
  }

  return (
    <div className='container-dropdown'>
      <Dropdown title="Description" content={props.item.description} />
      <div className="dropdown-spacing"></div>
      <Dropdown title="Equipements" content={props.item.equipments}/>
    </div>
  );
}

export default HousingDropdown;
