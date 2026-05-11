import { useState } from 'react'
import { Link } from 'react-router-dom'
import { hero } from '../../brand.config'
import { heroBg } from '../../assets/brand-assets'

export default function Hero() {
  const [lookbookHover, setLookbookHover] = useState(false)

  function scrollToNext() {
    const el = document.getElementById('segunda-seccion')
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY + 100
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: '90vh', minHeight: '600px' }}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center calc(50% - 180px)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: hero.overlayColor }}
        />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8" style={{ maxWidth: '900px' }}>
        <span
          className="uppercase"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.2em',
            color: 'var(--color-accent)',
          }}
        >
          {hero.badge}
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
            color: '#ffffff',
            margin: 0,
          }}
        >
          {hero.heading}
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(255,255,255,0.80)',
            maxWidth: '560px',
            margin: 0,
          }}
        >
          {hero.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link
            to="/shop"
            style={{
              display: 'block',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-accent-text)',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '16px 32px',
              textAlign: 'center',
            }}
          >
            {hero.ctaPrimary}
          </Link>
          <button
            onClick={scrollToNext}
            onMouseEnter={() => setLookbookHover(true)}
            onMouseLeave={() => setLookbookHover(false)}
            style={{
              display: 'block',
              border: '1px solid rgba(255,255,255,0.8)',
              color: lookbookHover ? '#1a1613' : '#ffffff',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '16px 32px',
              textAlign: 'center',
              backgroundColor: lookbookHover ? '#ffffff' : 'transparent',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, color 0.3s ease',
            }}
          >
            {hero.ctaSecondary}
          </button>
        </div>
      </div>

      {/* Línea de acento inferior */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '2px', backgroundColor: 'var(--color-accent)', opacity: 0.3 }}
      />
    </section>
  )
}
