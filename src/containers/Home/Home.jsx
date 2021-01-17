import React from 'react';
import { InputSearch } from '../../components/InputSearch';
import './style.scss';

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__wrapper">
        <h1 className="Home__title">PhotoSearch</h1>
        <p className="Home__paragraph">
          Find your perfect image from Unsplash!
        </p>
        <InputSearch />
      </div>
    </div>
  );
};

export default Home;
