import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import { Image } from '../../components/Image';
import { Modal } from '../../components/Modal';
import { ModalImage } from '../../components/ModalImage';

import './style.scss';

//uncomment if you need static data with unsplash query="nature"
// const urlAPIdummy = 'API/natureData.json';

const Results = () => {
  const { clientId, search, handleValidate, acceptSearch } = useContext(
    StoreContext
  );

  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [showedModal, setShowedModal] = useState(false);
  const [imageClicked, setImageClicked] = useState({});
  const [resultsName, setResultsName] = useState('');

  const urlAPI = ` https://api.unsplash.com/search/photos?&client_id=${clientId}&query=${search}`;

  useEffect(() => {
    if (acceptSearch) {
      fetch(urlAPI)
        .then((response) => {
          if (response.ok) return response.json();
          throw new Error(response.status);
        })
        .then((data) => {
          setImages(data.results);
          handleValidate(false);
          setResultsName(search);
          setError(false);
        })
        .catch((error) => setError(error.message));
    }
  }, [acceptSearch, urlAPI, handleValidate, search]);

  const showModal = () => {
    setShowedModal(true);
  };

  const handleImageClick = (imageData) => {
    setImageClicked(imageData);
  };

  const toggleModal = () => {
    setShowedModal(!showedModal);
  };

  const showResultsList = () => {
    if (images.length > 0) {
      return images.map((data) => (
        <Image
          key={data.id}
          data={data}
          showModal={showModal}
          handleImageClick={handleImageClick}
        />
      ));
    }
  };

  const showTitle = () => {
    if (error)
      return `We have some problems with server (error: ${error}). Please, wait 5 minutes and try again.`;
    else if (!error && images.length > 0)
      return `Your results for: ${resultsName}`;
    else
      return `Sorry, we couldn't find it. Please try again with a different phrase.`;
  };

  return (
    <div className="Results">
      <div className="Results__wrapper">
        <h3 className="Results__title">{showTitle()}</h3>
        <div className="Results__list"> {showResultsList()}</div>
        {showedModal && (
          <Modal>
            <ModalImage imageClicked={imageClicked} toggleModal={toggleModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Results;
