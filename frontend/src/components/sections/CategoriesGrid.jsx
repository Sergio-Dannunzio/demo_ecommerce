import { Link } from 'react-router-dom'
import { categoriesSection } from '../../brand.config'
import { categoryImages } from '../../assets/brand-assets'

function CategoryCard({ slug, label, img, pos }) {
  return (
    <Link
      to={`/categoria/${slug}`}
      className="relative group overflow-hidden block"
      style={{ textDecoration: 'none', height: '100%' }}
    >
      <img
        src={img}
        alt={label}
        className="group-hover:scale-105"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: pos,
          display: 'block',
          transition: 'transform 0.7s ease',
        }}
      />

      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)' }}
      />

      <div className="absolute bottom-6 left-6" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '22px',
            fontWeight: '500',
            color: '#fff',
            letterSpacing: '0.01em',
          }}
        >
          {label}
        </span>
        <span
          className="ver-detalle"
          style={{
            fontFamily: 'var(--font-hanken)',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-secondary)',
            paddingBottom: '2px',
            width: 'fit-content',
          }}
        >
          Ver detalle
        </span>
      </div>
    </Link>
  )
}

export default function CategoriesGrid() {
  const items = categoriesSection.items.map(item => ({
    ...item,
    img: categoryImages[item.slug],
  }))

  return (
    <section className="py-24">
      <h2
        style={{
          fontFamily: 'var(--font-barlow)',
          fontSize: '40px',
          fontWeight: '500',
          lineHeight: '1.2',
          color: 'var(--color-on-surface)',
          margin: '0 0 32px 0',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        {categoriesSection.heading}
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-4 h-[420px] md:h-[680px]"
        style={{ gap: '8px' }}
      >
        {items.map((cat, i) => (
          <div key={cat.slug} className={i >= 2 ? 'hidden md:block' : ''} style={{ height: '100%' }}>
            <CategoryCard {...cat} />
          </div>
        ))}
      </div>
    </section>
  )
}
