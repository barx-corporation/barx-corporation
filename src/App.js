import React from 'react';
import './App.css'; // Estilo em pixel e cores do Game Boy

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Barx Corporation</h1>
      </header>
      <main>
        <section className="services">
          <h2>Nossas Soluções</h2>
          <div className="service-item">AWS Cloud</div>
          <div className="service-item">DevOps</div>
          <div className="service-item">SRE</div>
        </section>
        <section className="about">
          <h2>Sobre Nós</h2>
          <p>Fornecendo soluções em Cloud, DevOps e SRE com foco em AWS.</p>
        </section>
      </main>
      <footer className="footer">
        <p>Contato: contato@barxcorporation.com</p>
      </footer>
    </div>
  );
}

export default App;

