import React from 'react';

const Image = ({ data, showModal, handleModal, handleImageClick }) => {
  const handleClick = (data) => {
    showModal();
    handleImageClick(data);
  };

  return (
    <div className="Image" onClick={() => handleClick(data)}>
      <p>{data.description}</p>
      <img src={data.urls.small} alt="" />
    </div>
  );
};

export default Image;
