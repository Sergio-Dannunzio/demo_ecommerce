import { announcement } from '../../brand.config'

export default function AnnouncementBar() {
  return (
    <div
      className="w-full py-2 text-center z-50"
      style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-on-secondary)' }}
    >
      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        {announcement}
      </p>
    </div>
  )
}
