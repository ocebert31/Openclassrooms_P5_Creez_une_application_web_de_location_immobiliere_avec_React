import React, { useState } from 'react';
import './dropdown.scss';
import arrowImage from './arrow.png';

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isArrowRotated, setIsArrowRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsArrowRotated(!isArrowRotated);
  };
  console.log(options);
  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title} <img src={arrowImage} alt="une flèche" className={`arrow ${isArrowRotated ? 'rotated' : ''}`} />
      </div>
      <div className="dropdown-content">
        {options.map((option, index) => (
          <div className='design' key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
