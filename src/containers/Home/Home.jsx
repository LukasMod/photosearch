import React from 'react';

const Home = () => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter');
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="Home">
      <div className="Home__wrapper">
        <h1 className="Home__title">PhotoSearch from Unsplash</h1>
        <p className="Home__paragraph">Find your perfect image!</p>
        <input
          className="Home__input"
          type="text"
          placeholder="Type and press Enter"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Home;
