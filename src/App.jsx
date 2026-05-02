import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [servicio, setServicio] = useState('Impresión Gran Formato')
  const [detalles, setDetalles] = useState('')
  const [mostrarTodo, setMostrarTodo] = useState(false) // Control para la galería

  const enviarWhatsApp = () => {
    const telefono = "50688243336" 
    const mensaje = "Hola Gema Gráfica, mi nombre es " + nombre + ". Requiero una cotización para: " + servicio + ". Detalles: " + detalles
    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje)
    window.open(url, '_blank')
  }

  // Lista de sus 18 archivos (extraídos de su imagen)
  const proyectos = [
    { img: "/clinica.jpg", t: "Clínicas" }, { img: "/bus.jpg", t: "Buses" },
    { img: "/toldo.jpg", t: "Toldos" }, { img: "/eka.jpg", t: "EKA" },
    { img: "/colombia.jpg", t: "Radio Colombia" }, { img: "/artecreativo.jpg", t: "Arte Creativo" },
    { img: "/toldo2.jpg", t: "Toldos Pro" }, { img: "/gastrobar.jpg", t: "Gastrobar" },
    { img: "/expoauto.jpg", t: "Expo Auto" }, { img: "/camionverdura.jpg", t: "Rotulación Móvil" },
    { img: "/ucimed.jpg", t: "UCIMED" }, { img: "/elgallo.jpg", t: "El Gallo" },
    { img: "/husspuppies.jpg", t: "Hush Puppies" }, { img: "/camion mbs.jpg", t: "MBS" },
    { img: "/llantas.jpg", t: "Llantas" }, { img: "/bmi.jpg", t: "BMI" },
    { img: "/riteve.jpg", t: "Riteve" }, { img: "/columbia.jpg", t: "Columbia" }
  ];

  const visibles = mostrarTodo ? proyectos : proyectos.slice(0, 6);

  return (
    <div className="container">
      <nav className="navbar"><div className="nav-links"><a href="#inicio">Inicio</a><a href="#galeria">Proyectos</a><a href="#cotizacion">Cotizar</a></div></nav>

      <header id="inicio" className="header">
        <img src="/logo.jpg" alt="Logo" className="logo-main" />
        <h1 className="title">GEMA GRÁFICA</h1>
        <p className="subtitle">DISEÑO Y SOLUCIONES VISUALES</p>
      </header>

      <main className="content">
        <section id="galeria" className="gallery-section">
          <h2 className="section-title">Portafolio de Proyectos</h2>
          <div className="gallery-grid">
            {visibles.map((p, i) => (
              <div key={i} className="gallery-item">
                <img src={p.img} alt={p.t} />
                <div className="item-info"><h3>{p.t}</h3></div>
              </div>
            ))}
          </div>
          <button className="expand-button" onClick={() => setMostrarTodo(!mostrarTodo)}>
            {mostrarTodo ? "VER MENOS" : "VER GALERÍA COMPLETA (" + proyectos.length + ")"}
          </button>
        </section>

        <section id="cotizacion" className="card">
          <h2 className="form-title">Asistente de Cotización</h2>
          <div className="form-group"><label>Tu Nombre</label><input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></div>
          <div className="form-group"><label>Servicio</label><select value={servicio} onChange={(e) => setServicio(e.target.value)}><option>Impresión Gran Formato</option><option>Diseño de Logo</option><option>Vallas Publicitarias</option></select></div>
          <div className="form-group"><label>Detalles</label><textarea value={detalles} onChange={(e) => setDetalles(e.target.value)}></textarea></div>
          <button className="whatsapp-button" onClick={enviarWhatsApp}>Enviar por WhatsApp</button>
        </section>
      </main>

     <footer className="footer">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href={`https://wa.me`} target="_blank" rel="noreferrer">WhatsApp Directo</a>
        </div>
        <p>Naranjo, Alajuela | San José, Costa Rica</p>
        <p>&copy; 2026 Gema Gráfica - Soluciones Visuales</p>
      </footer>
    </div>
  )
}

export default App
