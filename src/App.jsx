import { useState } from 'react'
import Navbar    from './components/Navbar'
import Inicio    from './components/Inicio'
import Servicios from './components/Servicios'
import Cotizar   from './components/Cotizar'
import Footer    from './components/Footer'

/* ============================================================
   App.jsx — Componente raíz
   Controla qué página se muestra usando el estado 'pagina'.
   No hay react-router: es una verdadera SPA de una sola página.
   ============================================================ */

function App() {
  // Estado que decide qué sección se muestra
  const [pagina, setPagina] = useState('inicio')

  return (
    <div>
      {/* Navbar fijo arriba, recibe la página actual y la función para cambiarla */}
      <Navbar paginaActual={pagina} onNavegar={setPagina} />

      {/* Renderiza solo la sección activa */}
      {pagina === 'inicio'    && <Inicio    onNavegar={setPagina} />}
      {pagina === 'servicios' && <Servicios onNavegar={setPagina} />}
      {pagina === 'cotizar'   && <Cotizar />}

      {/* Footer siempre visible */}
      <Footer onNavegar={setPagina} />
    </div>
  )
}

export default App
