import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '60vh' }}
    >
      <span
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.2em',
          color: 'var(--color-secondary)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}
      >
        Error 404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '56px',
          fontWeight: '600',
          color: 'var(--color-on-surface)',
          margin: '0 0 16px 0',
        }}
      >
        Página no encontrada
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-hanken)',
          fontSize: '16px',
          color: 'var(--color-on-surface-variant)',
          marginBottom: '40px',
        }}
      >
        La página que buscás no existe o fue movida.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: 'var(--color-secondary)',
          color: 'var(--color-on-secondary)',
          fontFamily: 'var(--font-hanken)',
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '16px 32px',
        }}
      >
        Volver al inicio
      </Link>
    </div>
  )
}
