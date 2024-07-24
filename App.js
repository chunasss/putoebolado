// src/App.js

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-text">Meu Site</div>
        <button className="login-button">Login</button>
      </header>

      <div className="header-separator"></div> {/* Nova div para separar o cabeçalho */}

      <section className="gradient-section">
        <div className="gradient-content">
          <div className="question-text">O que é?</div>
          <div className="answer-text">Texto explicativo sobre o que é.</div>
          <button className="schedule-button">Agende já</button>
        </div>
      </section>

      <div className="content-wrapper">
        <section className="propositos-section">
          <div className="propositos-content">
            <div className="propositos-title">PROPOSITOS</div>
            <div className="propositos-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec vehicula ante nec est euismod, a gravida felis malesuada.
            </div>
          </div>
        </section>

        <div className="rectangle">
          <div className="rectangle-title">DIFERENCIAIS</div>
          <div className="rectangle-text">
            <p>Diferencial 1</p>
            <p>Diferencial 2</p>
            <p>Diferencial 3</p>
            <p>Diferencial 4</p>
            <p>Diferencial 5</p>
          </div>
        </div>
      </div>

      <div className="new-rectangle">
        <div className="new-title">CONTRIBUIÇÕES</div>
        <div className="new-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Vivamus lacinia odio vitae vestibulum.</p>
          <p>Donec vehicula ante nec est euismod, a gravida felis malesuada.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
