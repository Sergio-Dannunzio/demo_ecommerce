export default function LookbookPage() {
  return (
    <div className="px-6 md:px-20 py-16 mx-auto" style={{ maxWidth: 'var(--spacing-container-max)' }}>
      <h1
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '40px',
          fontWeight: '500',
          color: 'var(--color-on-surface)',
          marginBottom: '8px',
        }}
      >
        Lookbook
      </h1>
      <p style={{ fontFamily: 'var(--font-hanken)', color: 'var(--color-on-surface-variant)' }}>
        Próximamente — colecciones editoriales.
      </p>
    </div>
  )
}
