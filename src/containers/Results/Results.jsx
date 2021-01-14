import React, { useState, useEffect } from 'react';
import { InputSearch } from '../../components/InputSearch';
import { Image } from '../../components/Image';
import { ModalImage } from '../../components/ModalImage';

const urlAPIdummy = 'API/natureData.json';

const Results = ({
  clientId,
  handleSearch,
  search,
  handleValidate,
  acceptSearch,
}) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [showedModal, setShowedModal] = useState(false);
  const [imageClicked, setImageClicked] = useState({});

  const urlAPI = ` https://api.unsplash.com/search/photos?&client_id=${clientId}&query=${search}`;

  useEffect(() => {
    if (acceptSearch) {
      fetch(urlAPIdummy)
        .then((response) => response.json())
        .then((data) => {
          setImages(data.results);
          handleValidate(false);
          console.log(urlAPI);
        })
        .catch((error) => setError(true));
    }
  }, [acceptSearch, urlAPI, handleValidate]);

  const handleModal = (boolean) => {
    setShowedModal(boolean);
  };

  const showModal = () => {
    setShowedModal(true);
  };

  const hideModal = () => {
    setShowedModal(false);
  };

  const handleImageClick = (imageData) => {
    console.log(imageData);
    setImageClicked(imageData);
  };

  return (
    <div className="Results">
      <InputSearch
        handleSearch={handleSearch}
        search={search}
        handleValidate={handleValidate}
      />
      <div className="Results__wrapper">
        <h1 className="Results__title">Your results</h1>
        <div className="ResultsList">
          {images.map((data) => (
            <Image
              key={data.id}
              data={data}
              showModal={showModal}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>
        {showedModal && (
          <ModalImage
            show={showedModal}
            handleClose={hideModal}
            imageClicked={imageClicked}>
            <p>Modal</p>
          </ModalImage>
        )}
      </div>
    </div>
  );
};

export default Results;
