import React from 'react';
import './VerticalContainer.css';

const VerticalContainer = ({ children }) => {
  return (
    <div className="vertical-container">
      {children}
    </div>
  );
};

export default VerticalContainer;
