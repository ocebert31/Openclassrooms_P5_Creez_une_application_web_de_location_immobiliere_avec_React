import React, { useState } from 'react';
import './dropdown.css';
import arrowImage from './arrow.png';
import DropdownContent from './dropdownContent';

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title} <img src={arrowImage} alt="une flèche" className={`arrow ${isArrowRotated ? 'rotated' : ''}`} />
      </div>
      <div className="dropdown-content">
        <DropdownContent content={content}/>
      </div>
    </div>
  );
};

export default Dropdown;
