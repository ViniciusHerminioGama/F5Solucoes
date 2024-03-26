// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/logof5att.png';

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <header className={darkMode ? 'dark-mode' : 'clear-mode'}>
      <div className="logo">
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto', marginRight: '10px' }} />
      </div>
      <nav>
        <ul>
          <li><Link to="/"  className={darkMode ? 'lidark' : 'liclear'}>Home</Link></li>
          <li><Link to="/sobre" className={darkMode ? 'lidark' : 'liclear'}>Sobre</Link></li>
          <li><Link to="/servicos" className={darkMode ? 'lidark' : 'liclear'}>Serviços</Link></li>
          <li><Link to="/contratos" className={darkMode ? 'lidark' : 'liclear'}>Contratos</Link></li>
        </ul>
      </nav>
      <button className={darkMode ? 'dark-mode-toggle' : 'clear-mode-toggle'} onClick={toggleDarkMode}>
        {darkMode ? '🌞' : '🌜'} {/* Usando emojis como ícones estilizados */}
      </button>
    </header>
  );
}

export default Navbar;
