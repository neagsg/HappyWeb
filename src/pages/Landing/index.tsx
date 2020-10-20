import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import '../../styles/global.css';
import './styles.css';
import logoImg from '../../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia
  de muitas crianças.</p>
        </main>
      
        <div className="location">
          <strong>Pará</strong>
          <span>Ulianópolis</span>
        </div>
        
        <a href="" className="enter-app">
          <FiArrowRight size={24} color="rgba(0, 0, 0, 0.6)"/>
        </a>
      </div>
    </div>
  );
}

export default Landing;
