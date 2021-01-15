import React from 'react';
import './style.scss';
const Image = ({ data, showModal, handleImageClick }) => {
  const handleClick = (data) => {
    showModal();
    handleImageClick(data);
  };

  return (
    <div className="Image" onClick={() => handleClick(data)}>
      <img
        className="Image__img"
        src={data.urls.small}
        alt={data.alt_description}
      />
    </div>
  );
};

export default Image;
