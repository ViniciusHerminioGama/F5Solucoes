// MainContent.js
import React from 'react';
import Banner from './images/bannerSite.png'
import './App.css';

function MainContent() {
  return (
    <div>
    <div>
      <img src={Banner} alt='bannerSite' className='bannerSite'></img>
    </div>
    </div>
  );
}

export default MainContent;
