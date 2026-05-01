import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [servicio, setServicio] = useState('Impresión Gran Formato')
  const [detalles, setDetalles] = useState('')

  const enviarWhatsApp = () => {
    const telefono = "50688243338" // Tu número
    const mensaje = "Hola Gema Gráfica, mi nombre es " + nombre + ". Requiero una cotización para: " + servicio + ". Detalles: " + detalles
    const url = "https://wa.me" + telefono + "?text=" + encodeURIComponent(mensaje)
    window.open(url, '_blank')
  }

  return (
    <div className="container">
      {/* NUEVO: Barra de Navegación */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#cotizacion">Cotizar</a>
        </div>
      </nav>

      <header id="inicio" className="header">
        <img src="/logo.jpg" alt="Gema Gráfica Logo" className="logo-main" />
        <h1 className="title">GEMA GRÁFICA</h1>
        <p className="subtitle">DISEÑO Y SOLUCIONES VISUALES</p>
      </header>

      <main className="content">
        {/* NUEVA: Sección de Bienvenida/Servicios */}
        <section id="servicios" className="hero-section">
          <h2>Nuestros Servicios</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Gran Formato</h3>
              <p>Vallas, rótulos y gigantografías de alta calidad.</p>
            </div>
            <div className="service-card">
              <h3>Identidad Visual</h3>
              <p>Diseño de logos y manuales de marca profesionales.</p>
            </div>
          </div>
        </section>

        {/* El Asistente de Cotización que ya teníamos */}
        <section id="cotizacion" className="card">
          <h2 className="form-title">Asistente de Cotización</h2>
          <div className="form-group">
            <label>Tu Nombre</label>
            <input type="text" placeholder="Ej. Juan Pérez" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="form-group">
            <label>¿Qué servicio necesitas?</label>
            <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
              <option>Impresión Gran Formato</option>
              <option>Diseño de Logo</option>
              <option>Gestión de Redes Sociales</option>
              <option>Publicidad Impresa</option>
            </select>
          </div>
          <div className="form-group">
            <label>Detalles de tu proyecto</label>
            <textarea placeholder="Describe medidas, cantidades..." value={detalles} onChange={(e) => setDetalles(e.target.value)}></textarea>
          </div>
          <button className="whatsapp-button" onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
        </section>
      </main>

      <footer className="footer">
        <p>San José, Costa Rica | info@gemagrafica.com</p>
        <p>&copy; 2024 Gema Gráfica</p>
      </footer>
    </div>
  )
}

export default App

