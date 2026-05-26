/* ============================================================
   precios.js — Datos de servicios y precios
   Angela's Chill Art
   ============================================================
   INSTRUCCIONES PARA AÑADIR TUS IMÁGENES:
   1. Copia tus dibujos a la carpeta /public/images/
   2. Reemplaza las URLs de picsum.photos por rutas como:
      '/images/retrato1.jpg'
   ============================================================ */

export const TAMANIOS = [
  { k: '20x20',   label: '20×20 cm',   base: 12000 },
  { k: '20x30',   label: '20×30 cm',   base: 18000 },
  { k: '30x40',   label: '30×40 cm',   base: 26000 },
  { k: '40x50',   label: '40×50 cm',   base: 35000 },
  { k: '50x60',   label: '50×60 cm',   base: 45000 },
  { k: '50x70',   label: '50×70 cm',   base: 52000 },
  { k: '60x80',   label: '60×80 cm',   base: 65000 },
  { k: '100x100', label: '100×100 cm', base: 95000 },
]

export const TECNICAS = [
  { k: 'carbon', label: 'Carboncillo',      extra: 0     },
  { k: 'pastel', label: 'Lápices pastel',   extra: 5000  },
  { k: 'rotu',   label: 'Rotuladores',      extra: 3000  },
  { k: 'acril',  label: 'Acrílico',         extra: 8000  },
  { k: 'acua',   label: 'Acuarela',         extra: 6000  },
]

export const PERSONAS = [
  { k: '1',   label: '1 persona',  extra: 0     },
  { k: '2',   label: '2 personas', extra: 8000  },
  { k: '3',   label: '3 personas', extra: 15000 },
  { k: 'fam', label: 'Familiar',   extra: 22000 },
]

export const TIPOS = [
  {
    k: 'retrato',
    label: 'Retratos',
    conPersonas: true,
    desc: 'Para ti, para tu pareja y para tu familia. Un recuerdo para toda la vida.',
    overlay: 'rosa',
    /* ↓ REEMPLAZA con tus imágenes reales: '/images/retrato1.jpg' */
    imgs: [
      '/images/retrato1.jpg',
      '/images/retrato2.jpg',
      '/images/retrato3.jpg',
    ],
  },
  {
    k: 'persona',
    label: 'Dibujos con fondo',
    conPersonas: true,
    desc: 'Tu historia, con todo el detalle del mundo que te rodea.',
    overlay: 'rosa',
    /* ↓ REEMPLAZA con tus imágenes reales: '/images/dibujo1.jpg' */
    imgs: [
      '/images/dibujo1.jpg',
      '/images/dibujo2.jpg',
      '/images/dibujo3.jpg',
    ],
  },
  {
    k: 'paisaje',
    label: 'Paisajes y lienzos',
    conPersonas: false,
    desc: 'Guarda esos paisajes que te dejaron pasmada para siempre.',
    overlay: 'verde',
    /* ↓ REEMPLAZA con tus imágenes reales: '/images/paisaje1.jpg' */
    imgs: [
      '/images/paisaje1.jpg',
      '/images/paisaje2.jpg',
      '/images/paisaje3.jpg',
    ],
  },
]

/* Formatea número como precio chileno: 12000 → '$12.000' */
export const fmt = (n) => '$' + Math.round(n).toLocaleString('es-CL')
