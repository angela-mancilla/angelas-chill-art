/* ============================================================
   Footer.jsx — Pie de página
   Props:
     onNavegar (función) — para los links rápidos
   ============================================================ */

function Footer({ onNavegar }) {
  const links = [
    { key: 'inicio',    label: 'Inicio'    },
    { key: 'servicios', label: 'Servicios' },
    { key: 'cotizar',   label: 'Cotizar'   },
  ]

  return (
    <footer className="py-5">
      <div className="container">
        <div className="row g-4">

          {/* Columna 1 — Info del negocio */}
          <div className="col-md-4">
            <h5 style={{ color: 'white', marginBottom: '1rem' }}>Angela's Chill Art</h5>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, lineHeight: 1.7 }}>
              Arte hecho a mano con amor y memoria.<br />
              Osorno, Chile.
            </p>
            <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              Solo retratos, dibujos y lienzos personalizados.
            </p>
          </div>

          {/* Columna 2 — Navegación rápida */}
          <div className="col-md-4">
            <h6 style={{ marginBottom: '1rem' }}>Navegación rápida</h6>
            <ul className="list-unstyled">
              {links.map(({ key, label }) => (
                <li key={key} style={{ marginBottom: '6px' }}>
                  <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onNavegar(key) }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto y referencias */}
          <div className="col-md-4">
            <h6 style={{ marginBottom: '1rem' }}>Contacto</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '6px' }}>📍 Osorno, Chile</li>
              <li style={{ marginBottom: '6px' }}>
                {/* REEMPLAZA con tu usuario real de Instagram */}
                <a href="https://www.instagram.com/retratos_lopez/" target="_blank" rel="noreferrer">
                  📸 Instagram
                </a>
              </li>
              <li style={{ marginBottom: '6px' }}>
                {/* REEMPLAZA +56900000000 con tu número real */}
                <a href="https://wa.me/56986599468" target="_blank" rel="noreferrer">
                  💬 WhatsApp
                </a>
              </li>
            </ul>

            <h6 style={{ marginBottom: '0.75rem' }}>Sitios de referencia</h6>
            <ul className="list-unstyled" style={{ fontSize: '0.85rem' }}>
              <li><a href="https://divina.cl"       target="_blank" rel="noreferrer">divina.cl</a></li>
              <li><a href="https://www.antuka.cl"   target="_blank" rel="noreferrer">antuka.cl</a></li>
            </ul>
          </div>

        </div>

        <hr style={{ borderColor: 'rgba(255,255,255,0.15)', margin: '3rem 0 1.5rem' }} />

        <p className="text-center mb-0" style={{ fontSize: '0.85rem', opacity: 0.5 }}>
          © 2026 Angela's Chill Art · Hecho con amor en Osorno 🌿
        </p>
      </div>
    </footer>
  )
}

export default Footer
