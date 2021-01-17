import React from 'react';
import { InputSearch } from '../../components/InputSearch';

import './style.scss';

const Header = () => {
  return (
    <header className="Header">
      <InputSearch />
    </header>
  );
};

export default Header;
