import React from 'react';
import './index.css';
import logo from '../../assets/super-store.svg';

function Logo() {
  return (
    <div className={"logo-root"}>
      <img src={logo} alt="Super Store"/>
    </div>
  );
}

export default Logo;
