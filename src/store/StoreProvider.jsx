import React, { createContext, useState } from 'react';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [acceptSearch, setAcceptSearch] = useState(false);
  const clientId = 'xh3eA0B15NkA-iCPrN_KdhybMqz49n7gxU2D1gjOj0E';

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleValidate = (boolean) => {
    setAcceptSearch(boolean);
  };
  return (
    <StoreContext.Provider
      value={{ clientId, handleSearch, search, handleValidate, acceptSearch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
