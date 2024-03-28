import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContractsPage from './components/ContractsPage';
import WhatsAppButton from './WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} /> {/* Rota para a página inicial */}
          <Route path="/sobre" element={<AboutPage />} /> {/* Rota para a página Sobre */}
          <Route path="/servicos" element={<ServicesPage />} /> {/* Rota para a página de Serviços */}
          <Route path="/contratos" element={<ContractsPage />} /> {/* Rota para a página de Contratos */}
        </Routes>
        <footer>
          <WhatsAppButton /> {/* Adicione o botão do WhatsApp no rodapé */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
