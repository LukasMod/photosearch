import React from 'react';
import './style.scss';

const AutoCompleteItem = ({
  item,
  handleSelectItem,
  isHighLighted,
  handleHoverItem,
}) => {
  return (
    <li
      className={`AutoCompleteItem--${isHighLighted ? 'active' : ''}`}
      onClick={handleSelectItem}
      onMouseOver={handleHoverItem}>
      <p className="AutoCompleteItem__result">
        {item || `can't find anything similar`}
      </p>
    </li>
  );
};

export default AutoCompleteItem;
