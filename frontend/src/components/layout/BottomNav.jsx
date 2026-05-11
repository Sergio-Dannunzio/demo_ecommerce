import { Link, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/',        icon: 'home',        label: 'Inicio' },
  { to: '/shop',    icon: 'grid_view',   label: 'Catálogo' },
  { to: '/lookbook', icon: 'photo_album', label: 'Lookbook' },
  { to: '/cuenta',  icon: 'person',      label: 'Cuenta' },
  { to: '/carrito', icon: 'shopping_bag', label: 'Carrito' },
]

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 border-t"
      style={{
        backgroundColor: 'var(--color-surface-container-low)',
        borderColor: 'var(--color-outline-variant)',
      }}
    >
      <div className="flex justify-around items-center h-16">
        {NAV.map(({ to, icon, label }) => {
          const active = pathname === to
          return (
            <Link
              key={to}
              to={to}
              className="flex flex-col items-center gap-1 flex-1 py-2"
              style={{ textDecoration: 'none', color: active ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)' }}
            >
              <span className={`material-symbols-outlined${active ? ' fill' : ''}`} style={{ fontSize: '22px' }}>{icon}</span>
              <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '10px', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
