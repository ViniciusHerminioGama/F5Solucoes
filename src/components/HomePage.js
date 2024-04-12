import React from 'react';
import contrato1 from '../Contracts/CONTRATO01.pdf';
import contrato2 from '../Contracts/CONTRATO02.pdf';
import contrato3 from '../Contracts/CONTRATO03.pdf';

function HomePage() {
  return (
    <div className="main-content">
      <h2>Contratos</h2>
      <div>
        <a href={contrato1} target="_blank" rel="noopener noreferrer">Contrato de Prestação de Serviços de Telecomunicações</a>
        <br />
        <a href={contrato2} target="_blank" rel="noopener noreferrer">Contrato de Comodato de Equipamentos</a>
        <br />
        <a href={contrato3} target="_blank" rel="noopener noreferrer">Contrato de Prestação de Serviços de Valor Adicionado</a>
      </div>
    </div>
  );
}

export default HomePage;
