import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [servicio, setServicio] = useState('Impresión Gran Formato')
  const [detalles, setDetalles] = useState('')

  const enviarWhatsApp = () => {
    const telefono = "50688243336" // <-- AQUÍ PONGA SU NÚMERO REAL
    const mensaje = `Hola Gema Gráfica, mi nombre es ${nombre}. Requiero una cotización para: ${servicio}. Detalles: ${detalles}`
    const url = `https://wa.me{telefono}?text=${encodeURIComponent(mensaje)}`
    window.open(url, '_blank')
  }

  return (
    <div className="container">
      <header className="header">
        <img src="/logo.jpg" alt="Gema Gráfica Logo" className="logo-main" />
        <h1 className="title">GEMA GRÁFICA</h1>
        <p className="subtitle">DISEÑO Y SOLUCIONES VISUALES</p>
      </header>

      <main className="content">
        <section className="card">
          <h2 className="form-title">Asistente de Cotización</h2>
          
          <div className="form-group">
            <label>Tu Nombre</label>
            <input 
              type="text" 
              placeholder="Ej. Juan Pérez" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
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
            <textarea 
              placeholder="Describe medidas, cantidades o cualquier idea..."
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
            ></textarea>
          </div>

          <button className="whatsapp-button" onClick={enviarWhatsApp}>
             Enviar por WhatsApp
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>Llámanos: +506 88243336 | info@gemagrafica.com</p>
        <p>&copy; 2024 Gema Gráfica - San José, Costa Rica</p>
      </footer>
    </div>
  )
}

export default App


