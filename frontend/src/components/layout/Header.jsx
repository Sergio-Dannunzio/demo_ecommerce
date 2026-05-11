import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { brand, nav } from '../../brand.config'
import { logo } from '../../assets/brand-assets'
import AnnouncementBar from './AnnouncementBar'

export default function Header({ cartCount = 0 }) {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [openDropdown, setOpenDropdown]     = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const closeTimer = useRef(null)

  function handleMouseEnter(label) {
    clearTimeout(closeTimer.current)
    setOpenDropdown(label)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120)
  }

  function toggleMobileItem(label) {
    setMobileExpanded(prev => (prev === label ? null : label))
  }

  return (
    <header
      className="fixed top-0 w-full z-40"
      style={{ backgroundColor: 'var(--color-header-bg)', borderColor: 'var(--color-header-border)' }}
    >
      <AnnouncementBar />

      {/* ── Main bar ── */}
      <div
        className="flex items-center justify-between w-full px-6 md:px-20 h-20 mx-auto border-b"
        style={{ borderColor: 'var(--color-outline-variant)', maxWidth: 'var(--spacing-container-max)' }}
      >
        {/* Hamburger — mobile */}
        <button
          className="md:hidden p-2 -ml-2"
          style={{ color: 'var(--color-nav-text)', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Abrir menú"
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>

        {/* Desktop nav — left */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {nav.map(({ label }) => (
            <div
              key={label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: openDropdown === label ? 'var(--color-accent)' : 'var(--color-nav-text)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderBottom: openDropdown === label ? '1px solid var(--color-accent)' : '1px solid transparent',
                }}
              >
                {label}
              </button>

              {openDropdown === label && (
                <DropdownPanel
                  item={nav.find(i => i.label === label)}
                  onClose={() => setOpenDropdown(null)}
                  onMouseEnter={() => clearTimeout(closeTimer.current)}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Logo — centro */}
        <Link
          to="/"
          aria-label={`${brand.name} — Inicio`}
          style={{ flexShrink: 0, alignSelf: 'stretch', width: '160px', overflow: 'hidden', borderRadius: '160px 160px 0 0' }}
        >
          <img
            src={logo}
            alt={brand.name}
            style={{ width: '160px', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
          />
        </Link>

        {/* Iconos — derecha */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <button
            style={{ color: 'var(--color-nav-text)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Buscar"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
          <button
            style={{ color: 'var(--color-nav-text)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            aria-label="Mi cuenta"
          >
            <span className="material-symbols-outlined">person</span>
          </button>
          <Link
            to="/carrito"
            className="relative"
            style={{ color: 'var(--color-nav-text)', display: 'flex', alignItems: 'center' }}
            aria-label="Carrito"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4"
                style={{
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-on-secondary)',
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '10px',
                  fontWeight: '700',
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="md:hidden border-t overflow-y-auto"
          style={{
            backgroundColor: 'var(--color-header-bg-dark)',
            borderColor: 'var(--color-header-border)',
            maxHeight: 'calc(100dvh - 80px)',
          }}
        >
          {nav.map(({ label, groups }) => (
            <div key={label} style={{ borderBottom: '1px solid var(--color-header-border)' }}>
              <button
                className="w-full flex items-center justify-between px-6 py-4"
                style={{
                  fontFamily: 'var(--font-hanken)',
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  color: 'var(--color-nav-text)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleMobileItem(label)}
              >
                {label}
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '20px', color: 'var(--color-nav-text)', transition: 'transform 0.15s', transform: mobileExpanded === label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {mobileExpanded === label && (
                <div style={{ backgroundColor: 'var(--color-header-bg-deep)', paddingBottom: '8px' }}>
                  {groups.map(group => (
                    <div key={group.title}>
                      <span
                        className="block px-6 pt-4 pb-2 uppercase"
                        style={{
                          fontFamily: 'var(--font-hanken)',
                          fontSize: '11px',
                          fontWeight: '600',
                          letterSpacing: '0.12em',
                          color: 'var(--color-accent)',
                        }}
                      >
                        {group.title}
                      </span>
                      {group.links.map(({ to, label: linkLabel }) => (
                        <Link
                          key={to}
                          to={to}
                          onClick={() => setMobileOpen(false)}
                          className="block px-6 py-2"
                          style={{
                            fontFamily: 'var(--font-hanken)',
                            fontSize: '15px',
                            color: 'var(--color-nav-text-muted)',
                            textDecoration: 'none',
                          }}
                        >
                          {linkLabel}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/lookbook"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-6 py-4"
            style={{
              fontFamily: 'var(--font-hanken)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.15em',
              color: 'var(--color-nav-text)',
              textDecoration: 'none',
              borderBottom: '1px solid var(--color-header-border)',
            }}
          >
            LOOKBOOK
            <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-nav-text)' }}>chevron_right</span>
          </Link>
        </div>
      )}
    </header>
  )
}

function DropdownPanel({ item, onClose, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute top-full left-0 border-t border-b"
      style={{
        backgroundColor: 'var(--color-header-bg)',
        borderTopColor: 'var(--color-accent)',
        borderBottomColor: 'var(--color-outline-variant)',
        minWidth: '320px',
        padding: '28px 32px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
        zIndex: 50,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex gap-10">
        {item.groups.map(group => (
          <div key={group.title}>
            <span
              className="block mb-4 uppercase"
              style={{
                fontFamily: 'var(--font-hanken)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                color: 'var(--color-accent)',
              }}
            >
              {group.title}
            </span>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {group.links.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={onClose}
                    style={{
                      fontFamily: 'var(--font-hanken)',
                      fontSize: '15px',
                      color: 'var(--color-nav-text-muted)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-nav-text)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-nav-text-muted)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
