import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">GEMA GRÁFICA</h1>
        <p className="subtitle">Diseño y Soluciones Visuales</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Bienvenidos</h2>
          <p>Estamos trabajando en nuestra nueva experiencia digital. Muy pronto podrás conocer todos nuestros servicios de diseño profesional.</p>
        </section>

        <section className="contact">
          <button className="contact-button">Contactar ahora</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Gema Gráfica - San José, Costa Rica</p>
      </footer>
    </div>
  )
}

export default App


