/* ============================================================
   Inicio.jsx — Sección principal (hero + misión + promo)
   Props:
     onNavegar (función) — para los botones CTA
   ============================================================ */

function Inicio({ onNavegar }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Texto */}
            <div className="col-lg-6">
              <p style={{ color: 'var(--rosa)', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Arte hecho a mano · Osorno, Chile
              </p>
              <h1 className="display-4 mb-3" style={{ color: 'var(--rosa-oscuro)', lineHeight: 1.2 }}>
                Angela's Chill Art
              </h1>
              <p className="mb-4" style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--texto)' }}>
                Dar memoria a lo que queremos recordar, con una pizca de humanidad.
                Las fotos son reales — pero mi mano es lo que hace recordar los sentimientos,
                lo que se siente por esa persona especial.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <button className="btn-rosa" onClick={() => onNavegar('servicios')}>
                  Ver mis servicios
                </button>
                <button className="btn-outline-rosa" onClick={() => onNavegar('cotizar')}>
                  Cotizar encargo
                </button>
              </div>
            </div>

            {/* Imagen hero */}
            <div className="col-lg-6">
              <img
                src="/images/hero.jpg"
                alt="Angela's Chill Art"
                style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', maxHeight: '420px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Misión y Visión ── */}
      <section style={{ background: 'var(--crema)', padding: '5rem 0' }}>
        <div className="container">
          <h2 className="text-center mb-2" style={{ color: 'var(--rosa-oscuro)' }}>¿Quién soy?</h2>
          <p className="text-center text-muted mb-5">
            Una artista sola, haciendo lo que ama desde Osorno.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="info-card">
                <h3>Mi misión</h3>
                <p>
                  Entregar recuerdos bonitos y valiosos de lo que son los seres queridos, con una pizca de humanidad.
                  Una foto puede reemplazar al humano e incluso la IA puede generar un dibujo — pero mi mano
                  es lo que les hace recordar nuestros sentimientos, lo carnal, lo que se siente de verdad.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card" style={{ borderLeft: '4px solid var(--verde)' }}>
                <h3 style={{ color: 'var(--verde-oscuro)' }}>Mi visión</h3>
                <p>
                  Ahora me desarrollo en Osorno, pero espero que más gente pueda conocerme a nivel nacional
                  e incluso internacional. Quiero hacer que mi arte llegue a todas partes
                  y compartir lo humano de nosotros.
                </p>
              </div>
            </div>
          </div>

          {/* Galería de muestra (3 placeholders) */}
          <div className="row g-3 mt-4">
            {[
              { seed: 'art1', label: '/images/muestra1.jpg' },
              { seed: 'art2', label: '/images/muestra2.jpg' },
              { seed: 'art3', label: '/images/muestra3.jpg' },
            ].map(({ seed, label }) => (
              <div className="col-md-4" key={seed}>
                <img
                  src={label}
                  alt="Muestra de arte"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '12px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner promocional ── */}
      <section style={{ background: 'var(--rosa-oscuro)', padding: '4.5rem 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Pacifico', cursive", marginBottom: '1rem' }}>
            ¡Encargos abiertos!
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '500px', margin: '0 auto 2rem' }}>
            Cada obra es única, irrepetible y hecha con amor. Pide la tuya.
          </p>
          <button
            className="btn-rosa"
            style={{ background: 'white', color: 'var(--rosa-oscuro)' }}
            onClick={() => onNavegar('cotizar')}
          >
            Pide tu obra ahora
          </button>
        </div>
      </section>
    </>
  )
}

export default Inicio
