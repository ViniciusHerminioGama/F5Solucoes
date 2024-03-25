// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
