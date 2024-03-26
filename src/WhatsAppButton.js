// WhatsAppButton.js
import React from 'react';

function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Redirecionar para o WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=8738358310';
  };

  return (
    <button className="whatsapp-button" onClick={handleWhatsAppClick}>
      <span className="whatsapp-icon"></span>
      Contate-nos no WhatsApp
    </button>
  );
}

export default WhatsAppButton;
