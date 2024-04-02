// Navbar.js
import React from 'react';
import Logo from './images/logof5att.png';

function Navbar() {
  return (
    <header className='clear-mode'>
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
      </div>
    </header>
  );
}

export default Navbar;
