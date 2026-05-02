import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [servicio, setServicio] = useState('Impresión Gran Formato')
  const [detalles, setDetalles] = useState('')

  const enviarWhatsApp = () => {
    const telefono = "50688243338" 
    const mensaje = "Hola Gema Gráfica, mi nombre es " + nombre + ". Requiero una cotización para: " + servicio + ". Detalles: " + detalles
    const url = "https://wa.me" + telefono + "?text=" + encodeURIComponent(mensaje)
    window.open(url, '_blank')
  }

  return (
    <div className="container">
      {/* BARRA DE NAVEGACIÓN */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#galeria">Proyectos</a>
          <a href="#cotizacion">Cotizar</a>
        </div>
      </nav>

      <header id="inicio" className="header">
        <img src="/logo.jpg" alt="Logo" className="logo-main" />
        <h1 className="title">GEMA GRÁFICA</h1>
        <p className="subtitle">DISEÑO Y SOLUCIONES VISUALES</p>
      </header>

      <main className="content">
        {/* SECCIÓN DE GALERÍA */}
        <section id="galeria" className="gallery-section">
          <h2 className="section-title">Nuestros Proyectos</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src="/clinica.jpg" alt="Clínica" /><div className="item-info"><h3>Clínicas</h3></div></div>
            <div className="gallery-item"><img src="/bus.jpg" alt="Buses" /><div className="item-info"><h3>Rotulación de Buses</h3></div></div>
            <div className="gallery-item"><img src="/toldo.jpg" alt="Toldos" /><div className="item-info"><h3>Toldos</h3></div></div>
            <div className="gallery-item"><img src="/eka.jpg" alt="EKA" /><div className="item-info"><h3>EKA</h3></div></div>
            <div className="gallery-item"><img src="/colombia.jpg" alt="Colombia" /><div className="item-info"><h3>Radio Colombia</h3></div></div>
            <div className="gallery-item"><img src="/artecreativo.jpg" alt="Arte" /><div className="item-info"><h3>Arte Creativo</h3></div></div>
          </div>
        </section>

        {/* ASISTENTE DE COTIZACIÓN */}
        <section id="cotizacion" className="card">
          <h2 className="form-title">Asistente de Cotización</h2>
          <div className="form-group">
            <label>Tu Nombre</label>
            <input type="text" placeholder="Ej. Juan Pérez" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Servicio</label>
            <select value={servicio} onChange={(e) => setServicio(e.target.value)}>
              <option>Impresión Gran Formato</option>
              <option>Diseño de Logo</option>
              <option>Gestión de Redes Sociales</option>
            </select>
          </div>
          <div className="form-group">
            <label>Detalles</label>
            <textarea placeholder="Describe tu idea..." value={detalles} onChange={(e) => setDetalles(e.target.value)}></textarea>
          </div>
          <button className="whatsapp-button" onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Gema Gráfica | San José, Costa Rica</p>
      </footer>
    </div>
  )
}

export default App
