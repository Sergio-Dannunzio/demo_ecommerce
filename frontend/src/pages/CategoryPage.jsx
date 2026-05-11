import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import imgTops    from '../assets/products/tops.jpg'
import imgTejidos from '../assets/products/tejidos.jpg'
import imgBano    from '../assets/products/bano.jpg'
import imgHero    from '../assets/brand/hero.jpg'

const PRODUCTS = [
  { slug: 'top-estampado', name: 'Top Estampado Floral',    price: 38900,  img: imgTops,    tag: 'Nueva colección' },
  { slug: 'top-crochet',   name: 'Top Tejido Crochet',      price: 44900,  originalPrice: 54000, img: imgTejidos, tag: 'Destacado' },
  { slug: 'bikini-verde',  name: 'Bikini Brillo Esmeralda', price: 62900,  img: imgBano,    tag: 'Nueva colección' },
  { slug: 'buzo-terry',    name: 'Buzo Terry Gris',         price: 54900,  img: imgHero,    tag: 'Nueva colección' },
  { slug: 'top-fango',     name: 'Buzo Terry Fango',        price: 54900,  img: imgHero,    tag: 'Nueva colección' },
  { slug: 'tejido-liviano',name: 'Tejido Liviano Crochet',  price: 39900,  originalPrice: 48000, img: imgTejidos, tag: 'Oferta' },
  { slug: 'bikini-clasico',name: 'Bikini Clásico',          price: 58900,  img: imgBano,    tag: 'Nueva colección' },
  { slug: 'top-basico',    name: 'Top Básico Estampado',    price: 32900,  img: imgTops,    tag: 'Nueva colección' },
]

const SORT_OPTIONS = ['Relevancia', 'Precio: menor a mayor', 'Precio: mayor a menor', 'Novedades']

const CATEGORY_LABELS = {
  tops:      'Tops & Remeras',
  tejidos:   'Tejidos',
  bano:      'Trajes de Baño',
  buzos:     'Buzos & Conjuntos',
  remeras:   'Remeras',
  bikinis:   'Bikinis',
  conjuntos: 'Conjuntos Terry',
  crochet:   'Crochet & Calados',
  palazos:   'Palazos',
}

function fmt(n) {
  return 'ARS ' + n.toLocaleString('es-AR')
}

function ProductCard({ product }) {
  const [wished, setWished] = useState(false)
  const [hovered, setHovered] = useState(false)
  const hasDiscount = !!product.originalPrice

  return (
    <div style={{ position: 'relative' }}>
      {/* Imagen */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--color-surface-container-low)',
          aspectRatio: '3/4',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Link to={`/producto/${product.slug}`} style={{ display: 'block', height: '100%' }}>
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 0.6s ease',
            }}
          />
        </Link>

        {/* Badge descuento */}
        {hasDiscount && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'var(--color-header-bg)',
              color: 'var(--color-nav-text)',
              fontFamily: 'var(--font-hanken)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.05em',
              padding: '4px 8px',
            }}
          >
            -{Math.round((1 - product.price / product.originalPrice) * 100)}% off
          </span>
        )}

        {/* Favorito */}
        <button
          onClick={() => setWished(w => !w)}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: wished ? 'var(--color-accent)' : 'var(--color-on-surface-variant)',
            transition: 'color 0.2s',
          }}
          aria-label="Agregar a favoritos"
        >
          <span
            className={`material-symbols-outlined${wished ? ' fill' : ''}`}
            style={{ fontSize: '22px' }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 12px 8px' }}>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            margin: '0 0 4px 0',
          }}
        >
          {product.tag}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--color-on-surface)',
            margin: '0 0 2px 0',
          }}
        >
          Alison
        </p>
        <Link
          to={`/producto/${product.slug}`}
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '13px',
            fontWeight: '400',
            color: 'var(--color-on-surface-variant)',
            textDecoration: 'none',
            display: 'block',
            margin: '0 0 10px 0',
          }}
        >
          {product.name}
        </Link>

        {/* Precios */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          {hasDiscount && (
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                color: 'var(--color-outline)',
                textDecoration: 'line-through',
              }}
            >
              {fmt(product.originalPrice)}
            </span>
          )}
          <span
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '15px',
              fontWeight: '600',
              color: hasDiscount ? '#b91c1c' : 'var(--color-on-surface)',
            }}
          >
            {fmt(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function CategoryPage() {
  const { slug } = useParams()
  const [sortOpen,    setSortOpen]    = useState(false)
  const [sortLabel,   setSortLabel]   = useState('Relevancia')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const categoryLabel = CATEGORY_LABELS[slug] ?? slug?.replace(/-/g, ' ') ?? 'Catálogo'

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-background)',
        paddingTop: '80px',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--spacing-container-max)', padding: '32px 0 80px' }}>

        {/* Breadcrumb + Título */}
        <div style={{ padding: '0 20px 24px' }}>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}>
              Inicio
            </Link>
            <span style={{ color: 'var(--color-outline)', fontSize: '12px' }}>›</span>
            <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface)' }}>
              {categoryLabel}
            </span>
          </nav>
          <h1
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: '36px',
              fontWeight: '500',
              color: 'var(--color-on-surface)',
              margin: 0,
            }}
          >
            {categoryLabel}
          </h1>
        </div>

        {/* Barra de filtros */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--color-outline-variant)',
            borderBottom: '1px solid var(--color-outline-variant)',
            padding: '10px 20px',
            marginBottom: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setFiltersOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--color-on-surface)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                {filtersOpen ? 'remove_circle' : 'add_circle'}
              </span>
              Filtrar
            </button>
            <span style={{ color: 'var(--color-outline-variant)' }}>|</span>
            <span
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                color: 'var(--color-accent)',
                fontWeight: '500',
              }}
            >
              {PRODUCTS.length} resultados
            </span>
          </div>

          {/* Ordenar */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSortOpen(o => !o)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'var(--font-hanken)',
                fontSize: '13px',
                fontWeight: '500',
                color: 'var(--color-on-surface)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {sortLabel}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '18px', transition: 'transform 0.2s', transform: sortOpen ? 'rotate(180deg)' : 'rotate(0)' }}
              >
                keyboard_arrow_down
              </span>
            </button>

            {sortOpen && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 'calc(100% + 4px)',
                  backgroundColor: 'var(--color-surface-container-lowest)',
                  border: '1px solid var(--color-outline-variant)',
                  minWidth: '200px',
                  zIndex: 20,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                }}
              >
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => { setSortLabel(opt); setSortOpen(false) }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '11px 16px',
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '13px',
                      fontWeight: sortLabel === opt ? '600' : '400',
                      color: sortLabel === opt ? 'var(--color-accent)' : 'var(--color-on-surface)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      borderBottom: '1px solid var(--color-outline-variant)',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: '24px 8px', padding: '0 8px' }}
        >
          {PRODUCTS.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
