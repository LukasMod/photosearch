import React from 'react';
import './style.scss';

const AutoCompleteItem = ({ item, handleSelectItem, isHighLighted }) => {
  return (
    <li
      className={`AutoCompleteItem--${isHighLighted ? 'active' : ''}`}
      onClick={handleSelectItem}>
      <p className="AutoCompleteItem__result">
        {item || `can't find anything similar`}
      </p>
    </li>
  );
};

export default AutoCompleteItem;
