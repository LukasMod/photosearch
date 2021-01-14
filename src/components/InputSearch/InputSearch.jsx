import React from 'react';
import { useHistory } from 'react-router-dom';

const InputSearch = ({ handleSearch, search, handleValidate }) => {
  const history = useHistory();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && search.length > 2) {
      handleValidate(true);
      history.push('/results');
      console.log('Enter');
    }
  };

  return (
    <input
      className="Home__input"
      type="text"
      placeholder="Type and press Enter"
      onKeyDown={handleKeyDown}
      onChange={handleSearch}
    />
  );
};

export default InputSearch;
