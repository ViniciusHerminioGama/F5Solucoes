import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import WhatsAppButton from './WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} /> {/* Rota para a página inicial */}
        </Routes>
        <footer>
          <WhatsAppButton /> {/* Adicione o botão do WhatsApp no rodapé */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
