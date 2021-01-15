import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './style.scss';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
  const element = document.createElement('div');
  element.classList.add('Modal');

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [element]);

  return createPortal(children, element);
};

export default Modal;
