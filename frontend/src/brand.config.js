// =============================================================================
// BRAND CONFIG — fuente única de verdad para todo lo que cambia por marca.
// =============================================================================

export const brand = {
  name:        'Alison',
  tagline:     'Moda femenina. Estilo a tu alcance.',
  description: 'Indumentaria femenina en Coronel Suárez y Posadas. Tops, tejidos, trajes de baño y conjuntos.',
  year:        '2026',
}

// ── Fuentes ──────────────────────────────────────────────────────────────────
export const fonts = {
  googleUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Hanken+Grotesk:wght@400;600&family=Cormorant+Garamond:wght@500&display=swap',
  heading:   "'Playfair Display', serif",
  body:      "'Hanken Grotesk', sans-serif",
  editorial: "'Cormorant Garamond', serif",
}

// ── Paleta ───────────────────────────────────────────────────────────────────
export const colors = {
  background:              '#f5f1ec',
  onBackground:            '#1a1613',
  surface:                 '#f5f1ec',
  surfaceDim:              '#ebe5df',
  surfaceContainerLowest:  '#faf8f5',
  surfaceContainerLow:     '#f0ebe4',
  surfaceContainer:        '#ebe5df',
  surfaceContainerHigh:    '#e2dcd5',
  onSurface:               '#1a1613',
  onSurfaceVariant:        '#5c5248',
  outlineVariant:          '#d0c9c2',

  secondary:               '#c4bdb6',
  onSecondary:             '#1a1613',

  accent:                  '#c4816a',
  accentText:              '#3a1409',

  headerBg:                '#ffffff',
  headerBgDeep:            '#f5f1ec',
  headerBgDark:            '#f0ebe4',
  headerBorder:            '#e0d9d1',
  navText:                 '#1a1613',
  navTextMuted:            '#6b5e55',
}

// ── Announcement bar ─────────────────────────────────────────────────────────
export const announcement = 'Envío gratis en compras mayores a $100.000 — Coronel Suárez y Posadas'

// ── Navegación ───────────────────────────────────────────────────────────────
export const nav = [
  {
    label: 'TOPS',
    groups: [
      {
        title: 'Tops & Remeras',
        links: [
          { to: '/categoria/tops',       label: 'Tops Estampados' },
          { to: '/categoria/remeras',    label: 'Remeras' },
          { to: '/categoria/musculosas', label: 'Musculosas' },
        ],
      },
    ],
  },
  {
    label: 'TEJIDOS',
    groups: [
      {
        title: 'Tejidos',
        links: [
          { to: '/categoria/crochet',  label: 'Crochet & Calados' },
          { to: '/categoria/sweaters', label: 'Sweaters' },
          { to: '/categoria/tejidos',  label: 'Tejidos Livianos' },
        ],
      },
    ],
  },
  {
    label: 'BAÑO',
    groups: [
      {
        title: 'Trajes de Baño',
        links: [
          { to: '/categoria/bikinis', label: 'Bikinis' },
          { to: '/categoria/mallas',  label: 'Mallas' },
          { to: '/categoria/pareos',  label: 'Pareos & Accesorios' },
        ],
      },
    ],
  },
  {
    label: 'BUZOS',
    groups: [
      {
        title: 'Buzos & Conjuntos',
        links: [
          { to: '/categoria/buzos',     label: 'Buzos' },
          { to: '/categoria/conjuntos', label: 'Conjuntos Terry' },
          { to: '/categoria/palazos',   label: 'Palazos' },
        ],
      },
    ],
  },
]

// ── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  badge:        'Nueva Colección 2026',
  heading:      'Vestite como querés.',
  sub:          'Moda femenina accesible. Cada prenda, a tu manera.',
  ctaPrimary:   'Ver Colección',
  ctaSecondary: 'Novedades',
  overlayColor: 'rgba(26,22,19,0.40)',
}

// ── Trust bar ────────────────────────────────────────────────────────────────
export const trustBar = [
  { icon: 'local_shipping',    label: 'Envío a todo el país' },
  { icon: 'assignment_return', label: 'Devoluciones en 30 días' },
  { icon: 'lock',              label: 'Pago seguro' },
  { icon: 'support_agent',     label: 'Atención personalizada' },
]

// ── Grilla de categorías ──────────────────────────────────────────────────────
export const categoriesSection = {
  heading: 'Encontrá tu estilo',
  items: [
    { slug: 'tops',    label: 'Tops',             pos: 'center top' },
    { slug: 'tejidos', label: 'Tejidos',           pos: 'center top' },
    { slug: 'bano',    label: 'Baño',             pos: 'center top' },
    { slug: 'buzos',   label: 'Buzos & Conjuntos', pos: 'center top' },
  ],
}

// ── Banner editorial ──────────────────────────────────────────────────────────
export const editorialBanner = {
  tag:     'Colección',
  heading: 'Terry en gris y fango.',
  cta:     'Ver conjuntos',
  ctaTo:   '/categoria/conjuntos',
}

// ── Footer ───────────────────────────────────────────────────────────────────
export const footer = {
  tagline: 'Moda femenina. Estilo a tu alcance. Coronel Suárez y Posadas.',
  social: {
    instagram: 'https://www.instagram.com/alison_indumentaria',
    facebook:  '',
  },
  links: {
    'Atención al Cliente': [
      { label: 'Envíos y Entregas' },
      { label: 'Cambios y Devoluciones' },
      { label: 'Guía de Talles' },
      { label: 'Contacto' },
    ],
    Colecciones: [
      { label: 'Tops & Remeras' },
      { label: 'Tejidos' },
      { label: 'Trajes de Baño' },
      { label: 'Buzos & Conjuntos' },
    ],
    Legal: [
      { label: 'Términos y Condiciones' },
      { label: 'Política de Privacidad' },
    ],
  },
}
