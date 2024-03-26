// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import WhatsAppButton from './WhatsAppButton'; // Importe o componente do botão do WhatsApp

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
        <footer>
          <WhatsAppButton /> {/* Adicione o botão do WhatsApp no rodapé */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
