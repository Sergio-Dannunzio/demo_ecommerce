import { trustBar } from '../../brand.config'

export default function TrustBar() {
  return (
    <section
      id="segunda-seccion"
      className="py-12 px-6 md:px-20 border-y"
      style={{
        backgroundColor: 'var(--color-surface-container-high)',
        borderColor: 'var(--color-outline-variant)',
      }}
    >
      <div
        className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        style={{ maxWidth: 'var(--spacing-container-max)' }}
      >
        {trustBar.map(({ icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-3">
            <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-on-surface)' }}>{icon}</span>
            <p
              className="uppercase"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.12em',
                color: 'var(--color-on-surface)',
                margin: 0,
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
