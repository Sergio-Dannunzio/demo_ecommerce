import { brand, footer as footerConfig } from '../../brand.config'

export default function Footer() {
  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: 'var(--color-surface-container-lowest)',
        color: 'var(--color-on-surface)',
        borderTopColor: 'var(--color-outline-variant)',
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-20 py-20 mx-auto"
        style={{ maxWidth: 'var(--spacing-container-max)' }}
      >
        {/* Brand */}
        <div>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-playfair)',
              fontSize: '22px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              color: 'var(--color-on-surface)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {brand.name}
          </span>
          <p
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '15px',
              lineHeight: '1.6',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '240px',
            }}
          >
            {footerConfig.tagline}
          </p>
          <div className="flex gap-4 mt-6">
            {footerConfig.social.instagram && (
              <a
                href={footerConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: 'var(--color-on-surface-variant)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            )}
            {footerConfig.social.facebook && (
              <a
                href={footerConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: 'var(--color-on-surface-variant)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-on-surface)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-on-surface-variant)'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerConfig.links).map(([title, items]) => (
          <div key={title}>
            <h5
              className="mb-6 uppercase"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                color: 'var(--color-on-surface)',
              }}
            >
              {title}
            </h5>
            <ul className="space-y-3 list-none p-0 m-0">
              {items.map(({ label }) => (
                <li key={label}>
                  <span
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '15px',
                      color: 'var(--color-on-surface-variant)',
                      cursor: 'pointer',
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
        <div
          className="px-6 md:px-20 py-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ maxWidth: 'var(--spacing-container-max)' }}
        >
          <span
            className="uppercase"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: 'var(--color-on-surface-variant)',
            }}
          >
            © {brand.year} {brand.name}. Todos los derechos reservados.
          </span>
          <div className="flex gap-6">
            {['Términos', 'Privacidad'].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  color: 'var(--color-on-surface-variant)',
                  cursor: 'pointer',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
