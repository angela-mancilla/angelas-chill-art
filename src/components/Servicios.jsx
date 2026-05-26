/* ============================================================
   Servicios.jsx — Carrusel de servicios
   Estado interno:
     servicioIdx — qué tarjeta de servicio se muestra (0, 1, 2)
     imgIdx      — qué imagen de fondo se muestra (0, 1, 2)
   Las imágenes de fondo cambian solas cada 3 segundos (useEffect).
   ============================================================ */

import { useState, useEffect } from 'react'
import { TIPOS } from '../data/precios'

function Servicios({ onNavegar }) {
  const [servicioIdx, setServicioIdx] = useState(0)  // servicio activo
  const [imgIdx,      setImgIdx]      = useState(0)  // imagen de fondo activa

  const servicio = TIPOS[servicioIdx]

  // Cada vez que cambia el servicio, reinicia la imagen y arranca el ciclo
  useEffect(() => {
    setImgIdx(0)
    const timer = setInterval(() => {
      setImgIdx(prev => (prev + 1) % servicio.imgs.length)
    }, 3000)
    return () => clearInterval(timer)  // limpia al desmontar o cambiar servicio
  }, [servicioIdx, servicio.imgs.length])

  const anterior = () =>
    setServicioIdx(prev => (prev - 1 + TIPOS.length) % TIPOS.length)

  const siguiente = () =>
    setServicioIdx(prev => (prev + 1) % TIPOS.length)

  return (
    <div className="seccion-padding">
      <div className="servicio-card">

        {/* Imágenes de fondo — todas apiladas, solo una visible a la vez */}
        {servicio.imgs.map((img, i) => (
          <div
            key={i}
            className="servicio-bg"
            style={{
              backgroundImage: `url(${img})`,
              opacity: i === imgIdx ? 1 : 0,
            }}
          />
        ))}

        {/* Overlay de color según el tipo de servicio */}
        <div className={servicio.overlay === 'rosa' ? 'overlay-rosa' : 'overlay-verde'} />

        {/* Flechas de navegación entre servicios */}
        <button className="flecha flecha-izq" onClick={anterior} aria-label="Servicio anterior">
          &#8249;
        </button>
        <button className="flecha flecha-der" onClick={siguiente} aria-label="Siguiente servicio">
          &#8250;
        </button>

        {/* Puntos indicadores de imagen de fondo */}
        <div className="dots-img">
          {servicio.imgs.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === imgIdx ? 'activo' : ''}`}
              onClick={() => setImgIdx(i)}
              aria-label={`Imagen ${i + 1}`}
            >
              {i === imgIdx ? '♥' : '♡'}
            </button>
          ))}
        </div>

        {/* Contenido central */}
        <div className="servicio-content">
          <div className="servicio-titulo">{servicio.label}</div>
          <p className="servicio-desc">{servicio.desc}</p>
          {onNavegar && (
            <button
              className="btn-rosa"
              style={{ marginTop: '1.5rem' }}
              onClick={() => onNavegar('cotizar')}
            >
              Cotizar este servicio
            </button>
          )}
        </div>

        {/* Tabs de servicio abajo */}
        <div className="servicio-tabs">
          {TIPOS.map((t, i) => (
            <button
              key={t.k}
              className={`servicio-tab ${i === servicioIdx ? 'activo' : ''}`}
              onClick={() => setServicioIdx(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Servicios
