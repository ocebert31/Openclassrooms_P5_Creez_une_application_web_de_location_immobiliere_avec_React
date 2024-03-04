import React, { useState } from 'react';
import './dropdown.scss';
import arrowImage from './fleche.png';

const Dropdown = ({ title, options }) => {
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
        {options.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
