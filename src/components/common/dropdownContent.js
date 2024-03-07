import React from 'react';

const DropdownContent = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  } else {
    return <p>{content}</p>;
  }
}

export default DropdownContent;
