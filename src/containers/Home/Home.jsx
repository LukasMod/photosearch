import React from 'react';
import { InputSearch } from '../../components/InputSearch';
import './style.scss';

const Home = ({ search, handleSearch, handleValidate }) => {
  return (
    <div className="Home">
      <div className="Home__wrapper">
        <h1 className="Home__title">photosearch</h1>
        <p className="Home__paragraph">
          Find your perfect image from Unsplash!
        </p>
        <InputSearch
          handleSearch={handleSearch}
          search={search}
          handleValidate={handleValidate}
        />
      </div>
    </div>
  );
};

export default Home;
