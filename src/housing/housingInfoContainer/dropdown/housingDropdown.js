import React from 'react';
import Dropdown from "../../../components/common/dropdown";
import "./housingDropdown.scss";

function HousingDropdown(props) {
  if (!props.item.description) {
    return null;
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
