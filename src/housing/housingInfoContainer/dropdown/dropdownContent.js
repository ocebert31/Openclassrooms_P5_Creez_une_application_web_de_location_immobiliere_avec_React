import React from 'react';

function dropdownContent ({ option }) {
  if (typeof option === 'string') {
    return <p>{option}</p>;
  } else if (Array.isArray(option)) {
    return (
      <ul>
        {option.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    return <p>Option non reconnue</p>;
  }
}

export default dropdownContent;
