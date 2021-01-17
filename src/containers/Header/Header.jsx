import React from 'react';

import { InputSearch } from '../../components/InputSearch';

import './style.scss';

const Header = ({ handleSearch, search, handleValidate }) => {
  return (
    <header className="Header">
      <InputSearch
        handleSearch={handleSearch}
        search={search}
        handleValidate={handleValidate}
      />
    </header>
  );
};

export default Header;
