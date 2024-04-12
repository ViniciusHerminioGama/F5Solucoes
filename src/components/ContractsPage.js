import React from 'react';
import contrato1 from '../Contracts/CONTRATO01.pdf';
import contrato2 from '../Contracts/CONTRATO02.pdf';
import contrato3 from '../Contracts/CONTRATO03.pdf';

function ContractsPage() {
  return (
    <div className="main-content">
      <h2>Contratos</h2>
      <div>
        <a href={contrato1} target="_blank" rel="noopener noreferrer">Contrato 1</a>
        <br />
        <a href={contrato2} target="_blank" rel="noopener noreferrer">Contrato 2</a>
        <br />
        <a href={contrato3} target="_blank" rel="noopener noreferrer">Contrato 3</a>
      </div>
    </div>
  );
}

export default ContractsPage;
