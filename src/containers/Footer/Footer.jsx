import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './style.scss';

const linkToGitHub = 'https://github.com/LukasMod';
const linkToLinkedIn = 'https://www.linkedin.com/in/lukasz-modzelewski/';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__media-wrapper">
        <a className="Footer__media-wrapper-link" href={linkToGitHub}>
          <FontAwesomeIcon icon={faGithub} className="Footer__media" />
        </a>
        <a className="Footer__media-wrapper-link" href={linkToLinkedIn}>
          <FontAwesomeIcon icon={faLinkedin} className="Footer__media" />
        </a>
      </div>
      <div className="Footer__rights">
        <FontAwesomeIcon icon={faHeart} className="Footer__media--small" />
        <span>by LukasMod. Cheers!</span>
      </div>
    </footer>
  );
};

export default Footer;
