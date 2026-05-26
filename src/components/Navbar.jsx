/* ============================================================
   Navbar.jsx — Barra de navegación
   Props:
     paginaActual (string) — página activa para marcar el link
     onNavegar (función)   — cambia la página en App.jsx
   ============================================================ */

function Navbar({ paginaActual, onNavegar }) {
  const links = [
    { key: 'inicio',    label: 'Inicio'    },
    { key: 'servicios', label: 'Servicios' },
    { key: 'cotizar',   label: 'Cotizar'   },
  ]

  const navegar = (key) => {
    onNavegar(key)
    // Cierra el menú móvil al navegar
    const menu = document.getElementById('navMenu')
    if (menu && menu.classList.contains('show')) {
      menu.classList.remove('show')
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
      <div className="container">
        {/* Logo / Nombre del estudio */}
        <a
          className="navbar-brand"
          href="#"
          onClick={(e) => { e.preventDefault(); navegar('inicio') }}
        >
          Angela's Chill Art
        </a>

        {/* Botón hamburguesa (móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            {links.map(({ key, label }) => (
              <li className="nav-item" key={key}>
                <a
                  className={`nav-link ${paginaActual === key ? 'activo' : ''}`}
                  href="#"
                  onClick={(e) => { e.preventDefault(); navegar(key) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
