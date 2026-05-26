/* ============================================================
   Cotizar.jsx — Vista de cotización
   Estado interno:
     opcion — 'servicio' | 'paquete' | null
   Muestra primero dos tarjetas para elegir el tipo de cotización,
   luego renderiza el componente correspondiente.
   ============================================================ */

import { useState } from 'react'
import CotizarServicio from './CotizarServicio'
import CotizarPaquete  from './CotizarPaquete'

function Cotizar() {
  const [opcion, setOpcion] = useState(null)

  const opciones = [
    {
      key:   'servicio',
      icono: '🖼️',
      titulo:'Cotizar un servicio',
      desc:  'Elige tipo de obra, tamaño, técnica y personas. El precio se calcula automáticamente.',
    },
    {
      key:   'paquete',
      icono: '✉️',
      titulo:'Cotizar un paquete',
      desc:  '¿Tienes algo especial en mente? Cuéntame los detalles y te contacto a la brevedad.',
    },
  ]

  return (
    <div className="seccion-padding" style={{ minHeight: '100vh', background: 'var(--crema)' }}>
      <div className="container py-5">

        <h2 className="text-center" style={{ color: 'var(--rosa-oscuro)', marginBottom: '0.5rem' }}>
          Cotizar
        </h2>
        <p className="text-center" style={{ color: 'var(--texto)', opacity: 0.6, marginBottom: '3rem' }}>
          ¿Qué tipo de encargo tienes en mente?
        </p>

        {/* Tarjetas de elección */}
        <div className="row justify-content-center g-4 mb-5">
          {opciones.map(({ key, icono, titulo, desc }) => (
            <div className="col-md-5" key={key}>
              <div
                className={`opcion-card ${opcion === key ? 'sel' : ''}`}
                onClick={() => setOpcion(key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setOpcion(key)}
              >
                <div className="icono">{icono}</div>
                <h5>{titulo}</h5>
                <p style={{ color: 'var(--texto)', opacity: 0.65, fontSize: '0.9rem', margin: 0 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulario correspondiente */}
        {opcion && (
          <div
            className="card border-0"
            style={{
              borderRadius: '20px',
              maxWidth: '720px',
              margin: '0 auto',
              boxShadow: '0 4px 24px rgba(200,100,122,0.08)',
            }}
          >
            {opcion === 'servicio'
              ? <CotizarServicio />
              : <CotizarPaquete  />
            }
          </div>
        )}

      </div>
    </div>
  )
}

export default Cotizar
