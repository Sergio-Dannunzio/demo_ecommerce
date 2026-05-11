import { Link } from 'react-router-dom'
import { editorialBanner } from '../../brand.config'
import { imgEditorial } from '../../assets/brand-assets'

export default function EditorialBanner() {
  return (
    <section className="py-24">
      <div
        className="relative w-full flex items-center overflow-hidden"
        style={{
          height: '680px',
          backgroundColor: 'var(--color-surface-container)',
          border: '1px solid var(--color-outline-variant)',
        }}
      >
        {/* Imagen — derecha */}
        <img
          src={imgEditorial}
          alt={editorialBanner.heading}
          className="absolute inset-0 md:left-auto md:w-2/3"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '75% top',
          }}
        />

        {/* Texto — izquierda */}
        <div
          className="relative z-10 flex flex-col justify-center h-full p-10 md:p-16"
          style={{
            maxWidth: '520px',
            background: 'linear-gradient(to right, var(--color-surface-container) 55%, transparent 100%)',
          }}
        >
          <span
            className="block mb-4 uppercase"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.2em',
              color: 'var(--color-on-surface)',
            }}
          >
            {editorialBanner.tag}
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-barlow)',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: '500',
              lineHeight: '1.2',
              color: 'var(--color-on-surface)',
              margin: '0 0 32px 0',
            }}
          >
            {editorialBanner.heading}
          </h2>
          <Link
            to={editorialBanner.ctaTo}
            className="btn-slide-gold"
            style={{
              display: 'inline-block',
              width: 'fit-content',
              fontFamily: 'var(--font-hanken)',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '16px 32px',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            {editorialBanner.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
