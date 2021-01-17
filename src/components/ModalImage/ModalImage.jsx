import React, { useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const ModalImage = ({ imageClicked, toggleModal }) => {
  const { user, alt_description, description, urls, tags } = imageClicked;
  const modalImageContainer = useRef(null);

  const tagsWords = tags.map((data) => {
    return ` ${data.title} `;
  });
  const handleClickOutside = useCallback(
    (event) => {
      if (
        modalImageContainer.current &&
        !modalImageContainer.current.contains(event.target)
      ) {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="ModalImage" ref={modalImageContainer}>
      <FontAwesomeIcon
        icon={faWindowClose}
        className={'ModalImage__closeButton'}
        onClick={toggleModal}
      />
      <div className="ModalImage__wrapper">
        <div className="ModalImage__image-container">
          <img
            className="ModalImage__image"
            src={urls.regular}
            alt={alt_description}
          />
        </div>

        <div className="ModalImage__info">
          <h3 className="ModalImage__description">
            {description ? description : 'Untitled'}
          </h3>
          <p className="ModalImage__user">
            by {user.name ? user.name : 'unknown'} from{' '}
            {user.location
              ? user.location.charAt(0).toUpperCase() + user.location.slice(1)
              : 'somewhere'}
          </p>
          <p className="ModalImage__tags">
            Tags: {tagsWords.length !== 0 ? tagsWords : 'none'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalImage;
