/* ============================================================
   CotizarServicio.jsx — Calculadora de cotización individual
   Estado interno:
     tipo       — tipo de obra seleccionado (retrato / persona / paisaje)
     tamanio    — tamaño del lienzo seleccionado
     tecnica    — técnica seleccionada
     personas   — cantidad de personas (solo si aplica)
     items      — lista de ítems agregados a la cotización
     resumen    — true cuando el usuario pidió ver el resumen final
   ============================================================ */

import { useState } from 'react'
import { TIPOS, TAMANIOS, TECNICAS, PERSONAS, fmt } from '../data/precios'

function CotizarServicio() {
  const [tipo,    setTipo]    = useState(TIPOS[0].k)
  const [tamanio, setTamanio] = useState(TAMANIOS[0].k)
  const [tecnica, setTecnica] = useState(TECNICAS[0].k)
  const [personas,setPersonas]= useState(PERSONAS[0].k)
  const [items,   setItems]   = useState([])
  const [resumen, setResumen] = useState(false)

  // Busca el objeto completo para cada selección
  const tipoData    = TIPOS.find(t => t.k === tipo)
  const tamanioData = TAMANIOS.find(t => t.k === tamanio)
  const tecnicaData = TECNICAS.find(t => t.k === tecnica)
  const personasData= tipoData?.conPersonas
    ? PERSONAS.find(p => p.k === personas)
    : { k: '-', label: '', extra: 0 }

  // Precio total = base + extra técnica + extra personas
  const totalItem =
    (tamanioData?.base   || 0) +
    (tecnicaData?.extra  || 0) +
    (personasData?.extra || 0)

  // Agrega el ítem actual a la lista
  const agregarItem = () => {
    setItems(prev => [...prev, {
      tipo:     tipoData?.label,
      tamanio:  tamanioData?.label,
      tecnica:  tecnicaData?.label,
      personas: tipoData?.conPersonas ? personasData?.label : null,
      total:    totalItem,
    }])
  }

  const eliminarItem = (i) =>
    setItems(prev => prev.filter((_, j) => j !== i))

  const totalGeneral = items.reduce((acc, it) => acc + it.total, 0)

  // ── Vista de resumen final ──
  if (resumen) {
    return (
      <div style={{ padding: '2rem' }}>
        <h5 style={{ color: 'var(--rosa-oscuro)', marginBottom: '1.5rem' }}>
          Resumen de tu cotización
        </h5>

        {items.map((it, i) => (
          <div className="desglose" key={i} style={{ marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700 }}>{it.tipo} — {it.tamanio}</div>
            <div style={{ color: 'var(--texto)', opacity: 0.7, fontSize: '0.9rem' }}>
              {it.tecnica}{it.personas ? ` · ${it.personas}` : ''}
            </div>
            <div style={{ color: 'var(--rosa)', fontWeight: 700, marginTop: '4px', fontSize: '1.1rem' }}>
              {fmt(it.total)}
            </div>
          </div>
        ))}

        <div className="resumen-total">
          <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>Total a pagar</span>
          <span style={{ fontFamily: "'Pacifico', cursive", fontSize: '1.6rem' }}>
            {fmt(totalGeneral)}
          </span>
        </div>

        <p style={{ color: 'var(--texto)', opacity: 0.6, fontSize: '0.9rem', marginTop: '1rem' }}>
          ¡Gracias por tu interés! Para confirmar tu encargo escríbeme por
          Instagram o WhatsApp mencionando los detalles de esta cotización.
        </p>

        <button
          className="btn-outline-rosa"
          style={{ marginTop: '0.5rem' }}
          onClick={() => { setResumen(false); setItems([]) }}
        >
          Nueva cotización
        </button>
      </div>
    )
  }

  // ── Vista de la calculadora ──
  return (
    <div style={{ padding: '2rem' }}>

      {/* TIPO */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontWeight: 700, display: 'block', marginBottom: '8px' }}>
          Tipo de obra
        </label>
        {TIPOS.map(t => (
          <button
            key={t.k}
            className={`selector-btn ${tipo === t.k ? 'sel' : ''}`}
            onClick={() => {
              setTipo(t.k)
              if (!t.conPersonas) setPersonas(PERSONAS[0].k)
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TAMAÑO */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontWeight: 700, display: 'block', marginBottom: '8px' }}>
          Tamaño del lienzo
        </label>
        {TAMANIOS.map(t => (
          <button
            key={t.k}
            className={`selector-btn ${tamanio === t.k ? 'sel' : ''}`}
            onClick={() => setTamanio(t.k)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* TÉCNICA */}
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ fontWeight: 700, display: 'block', marginBottom: '8px' }}>
          Técnica
        </label>
        {TECNICAS.map(t => (
          <button
            key={t.k}
            className={`selector-btn ${tecnica === t.k ? 'sel' : ''}`}
            onClick={() => setTecnica(t.k)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* PERSONAS (solo para retratos y dibujos con fondo) */}
      {tipoData?.conPersonas && (
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontWeight: 700, display: 'block', marginBottom: '8px' }}>
            Cantidad de personas
          </label>
          {PERSONAS.map(p => (
            <button
              key={p.k}
              className={`selector-btn ${personas === p.k ? 'sel' : ''}`}
              onClick={() => setPersonas(p.k)}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}

      {/* DESGLOSE DEL PRECIO */}
      <div className="desglose" style={{ marginBottom: '1.5rem' }}>
        <div className="desglose-fila">
          <span style={{ color: 'var(--texto)', opacity: 0.65 }}>
            Base ({tamanioData?.label})
          </span>
          <span style={{ fontWeight: 600 }}>{fmt(tamanioData?.base || 0)}</span>
        </div>
        <div className="desglose-fila">
          <span style={{ color: 'var(--texto)', opacity: 0.65 }}>
            Técnica ({tecnicaData?.label})
          </span>
          <span style={{ fontWeight: 600 }}>
            {tecnicaData?.extra ? '+' + fmt(tecnicaData.extra) : 'incluido'}
          </span>
        </div>
        {tipoData?.conPersonas && (
          <div className="desglose-fila">
            <span style={{ color: 'var(--texto)', opacity: 0.65 }}>
              Personas ({personasData?.label})
            </span>
            <span style={{ fontWeight: 600 }}>
              {personasData?.extra ? '+' + fmt(personasData.extra) : 'incluido'}
            </span>
          </div>
        )}
        <div className="desglose-fila" style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #e8c0cc' }}>
          <span style={{ fontWeight: 700 }}>Total estimado</span>
          <span className="precio-total">{fmt(totalItem)}</span>
        </div>
      </div>

      {/* BOTONES */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <button className="btn-outline-rosa" onClick={agregarItem}>
          + Agregar a cotización
        </button>
        {items.length > 0 && (
          <button className="btn-rosa" onClick={() => setResumen(true)}>
            Solicitar cotización ({items.length} ítem{items.length > 1 ? 's' : ''})
          </button>
        )}
      </div>

      {/* LISTA DE ÍTEMS AGREGADOS */}
      {items.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--texto)', opacity: 0.6, marginBottom: '8px' }}>
            Ítems en tu cotización:
          </p>
          {items.map((it, i) => (
            <div className="item-cotizacion" key={i}>
              <span>
                <strong>{it.tipo}</strong> · {it.tamanio} · {it.tecnica}
                {it.personas ? ` · ${it.personas}` : ''}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--rosa)', fontWeight: 700 }}>{fmt(it.total)}</span>
                <button className="btn-eliminar" onClick={() => eliminarItem(i)} aria-label="Eliminar ítem">
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default CotizarServicio
