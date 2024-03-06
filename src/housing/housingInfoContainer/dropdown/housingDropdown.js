import React from 'react';
import Dropdowns from "../../../components/common/dropdown";
import DropdownContent from "./dropdownContent";
import "./housingDropdown.scss";

function Dropdown(props) {
  if (!props.item.description) {
    return null; // Si props.item ou props.item.tags est undefined ou n'est pas un tableau, affichez un message d'erreur ou renvoyez null
  }

  return (
    <div className='container-dropdown'>
      <Dropdowns title="Description" options={[<DropdownContent option={props.item.description} />]} />
      <div className="dropdown-spacing"></div>
      <Dropdowns title="Equipements" options={[<DropdownContent option={props.item.equipments} />]}/>
    </div>
  );
}

export default Dropdown;
