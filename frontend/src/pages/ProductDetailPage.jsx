import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import imgTops    from '../assets/products/tops.jpg'
import imgTejidos from '../assets/products/tejidos.jpg'
import imgBano    from '../assets/products/bano.jpg'
import imgHero    from '../assets/brand/hero.jpg'

const RELATED = [
  { slug: 'top-crochet',   name: 'Top Tejido Crochet',      price: 'ARS 44.900', brand: 'Alison', img: imgTejidos, colors: [{ hex: '#f0ece5' }, { hex: '#c4bdb6' }], extra: 2 },
  { slug: 'bikini-verde',  name: 'Bikini Brillo Esmeralda', price: 'ARS 62.900', brand: 'Alison', img: imgBano,    colors: [{ hex: '#2e7a5a' }, { hex: '#c4816a' }], extra: 3 },
  { slug: 'buzo-terry',    name: 'Buzo Terry Gris',         price: 'ARS 54.900', brand: 'Alison', img: imgHero,    colors: [{ hex: '#8a8a88' }, { hex: '#b07050' }], extra: 2 },
  { slug: 'top-basico',    name: 'Top Básico Estampado',    price: 'ARS 32.900', brand: 'Alison', img: imgTops,    colors: [{ hex: '#f0ece5' }, { hex: '#d4b896' }], extra: 4 },
]

const MOCK_PRODUCT = {
  name:         'Top Estampado Floral',
  brand:        'Alison',
  tag:          'Nueva Colección',
  price:        'ARS 38.900',
  category:     'Tops & Remeras',
  categorySlug: 'tops',
  colors: [
    { label: 'Natural', value: 'natural', hex: '#f0ece5', img: imgTops    },
    { label: 'Tejido',  value: 'tejido',  hex: '#d4c8b8', img: imgTejidos },
  ],
  sizes:       ['XS', 'S', 'M', 'L', 'XL'],
  unavailable: ['XS'],
  delivery: [
    { icon: 'local_shipping',    text: 'Envío a todo el país en 4-6 días hábiles' },
    { icon: 'assignment_return', text: 'Devoluciones gratuitas en 30 días' },
    { icon: 'lock',              text: 'Pago seguro garantizado' },
  ],
}

export default function ProductDetailPage() {
  const product = MOCK_PRODUCT
  const allImages = product.colors.map(c => c.img)

  const [activeIndex,   setActiveIndex]   = useState(0)
  const touchStartX  = useRef(0)
  const touchDeltaX  = useRef(0)
  const sliderRef    = useRef(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0].value)
  const [selectedSize,  setSelectedSize]  = useState(null)
  const [added,         setAdded]         = useState(false)
  const [wished,        setWished]        = useState(false)

  const pct = idx => `translateX(${-idx * (100 / allImages.length)}%)`

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'none'
      sliderRef.current.style.transform  = pct(0)
    }
  }, [])

  function goTo(idx) {
    setActiveIndex(idx)
    if (sliderRef.current) {
      sliderRef.current.style.transition = 'transform 0.35s ease'
      sliderRef.current.style.transform  = pct(idx)
    }
  }

  function handleColorSelect(color, idx) {
    setSelectedColor(color.value)
    goTo(idx)
  }

  function handleAddToBag() {
    if (!selectedSize) return
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const selectedColorLabel = product.colors.find(c => c.value === selectedColor)?.label
  const activeImg = allImages[activeIndex]

  function InfoPanel({ mobile = false }) {
    return (
      <div style={{ padding: mobile ? '24px 20px 40px' : '48px 48px 64px', borderLeft: mobile ? 'none' : '1px solid var(--color-outline-variant)', minHeight: mobile ? 'auto' : 'calc(100vh - 80px)' }}>

        {!mobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <Link to="/" style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ color: 'var(--color-outline)', fontSize: '12px' }}>›</span>
            <Link to={`/categoria/${product.categorySlug}`} style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'none' }}>{product.category}</Link>
          </nav>
        )}

        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', margin: '0 0 6px 0' }}>
          {product.tag}
        </p>

        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: mobile ? '13px' : '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-on-surface-variant)', margin: '0 0 4px 0' }}>
          {product.brand}
        </p>

        <h1 style={{ fontFamily: 'var(--font-barlow)', fontSize: mobile ? '26px' : '32px', fontWeight: '500', lineHeight: '1.15', color: 'var(--color-on-surface)', margin: '0 0 10px 0' }}>
          {product.name}
        </h1>

        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: mobile ? '17px' : '20px', fontWeight: '600', color: 'var(--color-on-surface)', margin: '0 0 28px 0' }}>
          {product.price}
        </p>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-outline-variant)', marginBottom: '24px' }} />

        {/* Color */}
        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', fontWeight: '400', color: 'var(--color-on-surface)', margin: '0 0 12px 0' }}>
            Color: <strong>{selectedColorLabel}</strong>
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {product.colors.map((color, idx) => (
              <button
                key={color.value}
                onClick={() => handleColorSelect(color, idx)}
                title={color.label}
                style={{
                  width: '34px', height: '34px',
                  backgroundColor: color.hex,
                  border: selectedColor === color.value ? '2px solid var(--color-on-surface)' : '2px solid transparent',
                  outline: '1px solid var(--color-outline-variant)',
                  outlineOffset: selectedColor === color.value ? '2px' : '0px',
                  cursor: 'pointer',
                  transition: 'outline-offset 0.15s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Talle */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface)', margin: 0 }}>
              Talle: <strong>{selectedSize ?? '—'}</strong>
            </p>
            <button style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
              Guía de talles
            </button>
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {product.sizes.map(size => {
              const unavailable = product.unavailable.includes(size)
              const active = selectedSize === size
              return (
                <button
                  key={size}
                  onClick={() => !unavailable && setSelectedSize(size)}
                  disabled={unavailable}
                  style={{
                    minWidth: mobile ? '72px' : '56px',
                    height: '44px',
                    padding: '0 8px',
                    fontFamily: 'var(--font-hanken)',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: unavailable ? 'var(--color-outline)' : active ? '#fff' : 'var(--color-on-surface)',
                    backgroundColor: active ? 'var(--color-on-surface)' : 'transparent',
                    border: active ? '1px solid var(--color-on-surface)' : '1px solid var(--color-outline-variant)',
                    cursor: unavailable ? 'not-allowed' : 'pointer',
                    textDecoration: unavailable ? 'line-through' : 'none',
                    transition: 'background-color 0.15s, color 0.15s',
                  }}
                >
                  {size}
                </button>
              )
            })}
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--color-outline-variant)', margin: '24px 0' }} />

        {/* Agregar al carrito */}
        <button
          onClick={handleAddToBag}
          disabled={!selectedSize}
          style={{
            width: '100%', padding: '16px',
            backgroundColor: !selectedSize ? 'var(--color-outline-variant)' : added ? '#1a5c1a' : 'var(--color-on-surface)',
            color: !selectedSize ? 'var(--color-outline)' : '#fff',
            fontFamily: 'var(--font-hanken)', fontSize: '14px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
            border: 'none', cursor: !selectedSize ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            transition: 'background-color 0.2s ease', marginBottom: '12px',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{added ? 'check' : 'shopping_bag'}</span>
          {added ? 'Agregado al carrito' : 'Agregar al carrito'}
        </button>

        {/* Agregar a favoritos */}
        <button
          onClick={() => setWished(w => !w)}
          style={{
            width: '100%', padding: '15px',
            backgroundColor: 'transparent',
            color: wished ? 'var(--color-accent)' : 'var(--color-on-surface)',
            fontFamily: 'var(--font-hanken)', fontSize: '14px', fontWeight: '500',
            border: '1px solid var(--color-outline-variant)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: 'color 0.2s, border-color 0.2s', marginBottom: mobile ? '24px' : '32px',
          }}
        >
          <span className={`material-symbols-outlined${wished ? ' fill' : ''}`} style={{ fontSize: '20px' }}>favorite</span>
          {wished ? 'Guardado en favoritos' : 'Agregar a favoritos'}
        </button>

        {!mobile && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {product.delivery.map(({ icon, text }) => (
              <div key={icon} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '22px', color: 'var(--color-on-surface-variant)', flexShrink: 0 }}>{icon}</span>
                <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)' }}>{text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)', paddingTop: '80px' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--spacing-container-max)' }}>

        {/* ── MOBILE layout ── */}
        <div className="block md:hidden">
          <div
            style={{ position: 'relative', width: '100%', aspectRatio: '3/4', overflow: 'hidden', backgroundColor: 'var(--color-surface-container-low)' }}
            onTouchStart={e => {
              touchStartX.current = e.touches[0].clientX
              touchDeltaX.current = 0
            }}
            onTouchMove={e => {
              touchDeltaX.current = e.touches[0].clientX - touchStartX.current
              if (sliderRef.current) {
                sliderRef.current.style.transition = 'none'
                sliderRef.current.style.transform = `translateX(calc(${-activeIndex * (100 / allImages.length)}% + ${touchDeltaX.current}px))`
              }
            }}
            onTouchEnd={() => {
              const dx = touchDeltaX.current
              let next = activeIndex
              if (dx < -50 && activeIndex < allImages.length - 1) next = activeIndex + 1
              if (dx >  50 && activeIndex > 0)                    next = activeIndex - 1
              goTo(next)
            }}
          >
            <div
              ref={sliderRef}
              style={{ display: 'flex', width: `${allImages.length * 100}%`, height: '100%' }}
            >
              {allImages.map((img, i) => (
                <div key={i} style={{ width: `${100 / allImages.length}%`, flexShrink: 0, height: '100%' }}>
                  <img src={img} alt={`Vista ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                </div>
              ))}
            </div>

            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 12px', pointerEvents: 'none' }}>
              <button
                onClick={() => goTo(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.85)', border: 'none', cursor: activeIndex === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIndex === 0 ? 0.3 : 1, transition: 'opacity 0.2s', pointerEvents: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-on-surface)' }}>chevron_left</span>
              </button>
              <button
                onClick={() => goTo(Math.min(allImages.length - 1, activeIndex + 1))}
                disabled={activeIndex === allImages.length - 1}
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.85)', border: 'none', cursor: activeIndex === allImages.length - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: activeIndex === allImages.length - 1 ? 0.3 : 1, transition: 'opacity 0.2s', pointerEvents: 'auto', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--color-on-surface)' }}>chevron_right</span>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', padding: '14px 0' }}>
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === activeIndex ? '20px' : '8px', height: '8px', borderRadius: '4px',
                  backgroundColor: i === activeIndex ? 'var(--color-on-surface)' : 'var(--color-outline-variant)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'width 0.2s, background-color 0.2s',
                }}
              />
            ))}
          </div>

          <InfoPanel mobile={true} />
        </div>

        {/* ── DESKTOP layout ── */}
        <div
          className="hidden md:grid"
          style={{ gridTemplateColumns: '1fr 480px', minHeight: 'calc(100vh - 80px)', alignItems: 'start' }}
        >
          <div style={{ position: 'sticky', top: '80px', height: 'calc(100vh - 80px)', display: 'grid', gridTemplateColumns: '80px 1fr' }}>
            {/* Thumbnails */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px', borderRight: '1px solid var(--color-outline-variant)', overflowY: 'auto' }}>
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: '56px', height: '72px', padding: 0,
                    border: activeIndex === i ? '2px solid var(--color-on-surface)' : '2px solid transparent',
                    outline: '1px solid var(--color-outline-variant)',
                    outlineOffset: activeIndex === i ? '2px' : '0',
                    cursor: 'pointer', background: 'none', flexShrink: 0, overflow: 'hidden',
                    transition: 'outline-offset 0.15s',
                  }}
                >
                  <img src={img} alt={`Vista ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                </button>
              ))}
            </div>
            {/* Imagen principal */}
            <div style={{ overflow: 'hidden' }}>
              <img src={activeImg} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'opacity 0.25s ease' }} />
            </div>
          </div>

          <InfoPanel mobile={false} />
        </div>

        {/* ── También te puede gustar ── */}
        <div style={{ borderTop: '1px solid var(--color-outline-variant)', padding: '48px 0 80px' }}>
          <h2 style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', color: 'var(--color-on-surface)', margin: '0 0 32px 0' }}>
            También te puede gustar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: '2px' }}>
            {RELATED.map(item => <RelatedCard key={item.slug} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

function RelatedCard({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link to={`/producto/${item.slug}`} style={{ textDecoration: 'none', display: 'block' }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{ overflow: 'hidden', aspectRatio: '3/4', backgroundColor: 'var(--color-surface-container)' }}>
        <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s ease' }} />
      </div>
      <div style={{ padding: '14px 10px 8px' }}>
        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', fontWeight: '400', color: 'var(--color-on-surface)', margin: '0 0 4px 0', lineHeight: '1.4' }}>{item.name}</p>
        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface)', margin: '0 0 4px 0' }}>{item.price}</p>
        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-on-surface-variant)', margin: '0 0 10px 0' }}>{item.brand}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {item.colors.map((c, i) => <span key={i} style={{ width: '18px', height: '18px', backgroundColor: c.hex, border: '1px solid var(--color-outline-variant)', display: 'inline-block', flexShrink: 0 }} />)}
          {item.extra > 0 && <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)' }}>+{item.extra}</span>}
        </div>
      </div>
    </Link>
  )
}
