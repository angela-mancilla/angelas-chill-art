/* ============================================================
   CotizarPaquete.jsx — Formulario de cotización personalizada
   Estado interno:
     form    — objeto con los campos del formulario
     enviado — true cuando el usuario hizo submit
   ============================================================ */

import { useState } from 'react'

const FORM_INICIAL = { nombre: '', email: '', telefono: '', mensaje: '' }

function CotizarPaquete() {
  const [form,    setForm]    = useState(FORM_INICIAL)
  const [enviado, setEnviado] = useState(false)

  // Actualiza solo el campo que cambió
  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  // ── Vista de confirmación ──
  if (enviado) {
    return (
      <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
        <h4 style={{ color: 'var(--rosa-oscuro)', fontFamily: "'Pacifico', cursive" }}>
          ¡Solicitud enviada!
        </h4>
        <p style={{ marginTop: '1rem', color: 'var(--texto)', opacity: 0.75, maxWidth: '380px', margin: '1rem auto' }}>
          Su solicitud ha sido enviada. Nos pondremos en contacto con usted a la brevedad.
        </p>
        <button
          className="btn-rosa"
          style={{ marginTop: '1.5rem' }}
          onClick={() => { setEnviado(false); setForm(FORM_INICIAL) }}
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  // ── Vista del formulario ──
  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>

      <div style={{ marginBottom: '1.25rem' }}>
        <label className="form-label" style={{ fontWeight: 700 }}>
          Nombre completo *
        </label>
        <input
          className="form-control"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          required
        />
      </div>

      <div className="row g-3" style={{ marginBottom: '1.25rem' }}>
        <div className="col-md-6">
          <label className="form-label" style={{ fontWeight: 700 }}>
            Correo electrónico *
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@correo.com"
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" style={{ fontWeight: 700 }}>
            Teléfono
          </label>
          <input
            className="form-control"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+56 9 XXXX XXXX"
          />
        </div>
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <label className="form-label" style={{ fontWeight: 700 }}>
          Cuéntame tu encargo *
        </label>
        <textarea
          className="form-control"
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          rows={6}
          placeholder="¿Para quién es? ¿Cuántas personas? ¿Tienes fotos de referencia? ¿Qué técnica te gusta? ¿Tienes alguna fecha límite?"
          required
        />
      </div>

      <button type="submit" className="btn-rosa">
        Enviar cotización
      </button>

    </form>
  )
}

export default CotizarPaquete
