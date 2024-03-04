import React from 'react';
import Dropdowns from "../pageApropos/dropdown";
import "./dropdownLogement.scss";
import DataFetcher from './dataFetcher';

function Dropdown() {
    return (
        <DataFetcher>
            {selectedItem => {
                return (
                    <div className='container-dropdown'>
                        <Dropdowns title="Description" options={[selectedItem.description]} />
                        <div className="dropdown-spacing"></div>
                        <Dropdowns title="Equipements" options={selectedItem.equipments} />
                    </div>
                );
            }}
        </DataFetcher>
    );
}

export default Dropdown;
