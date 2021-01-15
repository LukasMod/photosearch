import React, { useState, useEffect } from 'react';
import { InputSearch } from '../../components/InputSearch';
import { Image } from '../../components/Image';
import { Modal } from '../../components/Modal';
import { ModalImage } from '../../components/ModalImage';

import './style.scss';

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

  const showModal = () => {
    setShowedModal(true);
  };

  const handleImageClick = (imageData) => {
    console.log(imageData);
    setImageClicked(imageData);
  };

  const toggleModal = () => {
    setShowedModal(!showedModal);
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
        <div className="Results__list">
          {images.map((data) => (
            <Image
              key={data.id}
              data={data}
              showModal={showModal}
              handleImageClick={handleImageClick}
            />
          ))}
        </div>

        {showedModal ? (
          <Modal>
            <ModalImage imageClicked={imageClicked} toggleModal={toggleModal} />
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
