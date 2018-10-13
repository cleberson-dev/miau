import React from 'react';
import logo from "../img/logo.svg";

const Header = props => {

  return (
    <header>
      <h2>miau!</h2>
      <img src={logo} alt="Logo" />
    </header>
  );
};


export default Header;