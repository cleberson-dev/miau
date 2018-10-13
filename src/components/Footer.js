import React from 'react';

import gitIcon from '../img/gitIcon.svg';
import emailIcon from '../img/emailIcon.svg';
import linkedinIcon from '../img/linkedinIcon.svg';

const Footer = props => {
  return (
    <footer>
      <span>By Cleberson Jr</span>
      <address>
        <a href="https://github.com/cleberson-dev">
          <img src={gitIcon} alt="Meu Github" />
        </a>
        <a href="mailto:cleberson.dev@gmail.com">
          <img src={emailIcon} alt="Meu Email" />
        </a>
        <a href="https://www.linkedin.com/in/clebersondev/">
          <img src={linkedinIcon} alt="Meu Linkedin" />
        </a>
      </address>
    </footer>
  );
}

export default Footer;