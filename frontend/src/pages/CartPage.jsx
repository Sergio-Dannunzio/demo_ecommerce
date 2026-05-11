import { useState } from 'react'
import { Link } from 'react-router-dom'
import imgCamisa from '../assets/products/tops.jpg'

const INITIAL_ITEMS = [
  {
    id: 1,
    brand: 'Alison',
    name: 'Top Estampado Floral',
    color: 'Natural',
    talle: 'M',
    price: 89900,
    img: imgCamisa,
    qty: 1,
  },
]

function fmt(n) {
  return 'ARS ' + n.toLocaleString('es-AR')
}

function QtyControl({ qty, onInc, onDec }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[['−', onDec], [qty, null], ['+', onInc]].map(([label, fn], i) => (
        <div
          key={i}
          onClick={fn || undefined}
          style={{
            width: i === 1 ? '44px' : '32px',
            height: '32px',
            border: '1px solid var(--color-outline-variant)',
            borderLeft: i > 0 ? 'none' : '1px solid var(--color-outline-variant)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-hanken)', fontSize: i === 1 ? '13px' : '16px',
            fontWeight: i === 1 ? '600' : '400',
            color: 'var(--color-on-surface)',
            cursor: fn ? 'pointer' : 'default',
            userSelect: 'none',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  )
}

function CartItem({ item, onRemove, onChangeQty, mobile }) {
  return (
    <div style={{ borderBottom: '1px solid var(--color-outline-variant)', padding: mobile ? '20px 0' : '28px 0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '80px 1fr' : '120px 1fr auto', gap: mobile ? '14px' : '24px', alignItems: 'start' }}>

        {/* Imagen */}
        <Link to="/producto/camisa">
          <img
            src={item.img}
            alt={item.name}
            style={{ width: '100%', height: mobile ? '100px' : '150px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </Link>

        {/* Info */}
        <div>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '11px', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-on-surface-variant)', margin: '0 0 3px 0' }}>
            {item.brand}
          </p>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: mobile ? '14px' : '16px', fontWeight: '500', color: 'var(--color-on-surface)', margin: '0 0 6px 0', lineHeight: '1.3' }}>
            {item.name}
          </p>

          {/* mobile: color • talle • qty en línea */}
          {mobile ? (
            <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', margin: '0 0 8px 0' }}>
              {item.color} · Talle {item.talle} · Cant. {item.qty}
            </p>
          ) : (
            <>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)', margin: '0 0 2px 0' }}>Color: {item.color}</p>
              <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)', margin: '0 0 16px 0' }}>Talle: {item.talle}</p>
            </>
          )}

          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: mobile ? '15px' : '16px', fontWeight: '600', color: 'var(--color-on-surface)', margin: '0 0 12px 0' }}>
            {fmt(item.price * item.qty)}
          </p>

          {!mobile && (
            <QtyControl qty={item.qty} onInc={() => onChangeQty(item.id, 1)} onDec={() => onChangeQty(item.id, -1)} />
          )}
        </div>

        {/* Botón eliminar — solo desktop */}
        {!mobile && (
          <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface-variant)', padding: '4px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
          </button>
        )}
      </div>

      {/* Acciones debajo — mobile */}
      {mobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
          <QtyControl qty={item.qty} onInc={() => onChangeQty(item.id, 1)} onDec={() => onChangeQty(item.id, -1)} />
          <div style={{ width: '1px', height: '16px', backgroundColor: 'var(--color-outline-variant)' }} />
          <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'underline', padding: 0 }}>
            Eliminar
          </button>
          <span style={{ color: 'var(--color-outline-variant)' }}>·</span>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'underline', padding: 0 }}>
            Mover a favoritos
          </button>
        </div>
      )}

      {/* Mover a favoritos — desktop */}
      {!mobile && (
        <button style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-hanken)', fontSize: '12px', color: 'var(--color-on-surface-variant)', textDecoration: 'underline', padding: 0 }}>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>favorite</span>
          Mover a favoritos
        </button>
      )}
    </div>
  )
}

function OrderSummary({ items, subtotal, envio, total, mobile }) {
  const [promo, setPromo] = useState('')

  return (
    <div style={mobile ? {} : { position: 'sticky', top: '104px' }}>
      <h2 style={{ fontFamily: 'var(--font-barlow)', fontSize: mobile ? '22px' : '24px', fontWeight: '500', color: 'var(--color-on-surface)', margin: mobile ? '0 0 20px 0' : '0 0 24px 0' }}>
        Resumen del pedido
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>Subtotal</span>
          <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface)' }}>{fmt(subtotal)}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: 'var(--color-on-surface-variant)' }}>Envío</span>
          <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', color: envio === 0 ? '#1a5c1a' : 'var(--color-on-surface)' }}>
            {envio === 0 ? 'Gratis' : fmt(envio)}
          </span>
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: 'var(--color-outline-variant)', marginBottom: '16px' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
        <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '15px', fontWeight: '700', color: 'var(--color-on-surface)' }}>Total</span>
        <span style={{ fontFamily: 'var(--font-hanken)', fontSize: '18px', fontWeight: '700', color: 'var(--color-on-surface)' }}>{fmt(total)}</span>
      </div>

      {/* Promo code */}
      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '14px', fontWeight: '600', color: 'var(--color-on-surface)', margin: '0 0 10px 0' }}>
        Código de descuento
      </p>
      <div style={{ display: 'flex', gap: '0', marginBottom: '20px' }}>
        <input
          type="text"
          value={promo}
          onChange={e => setPromo(e.target.value)}
          placeholder="Ingresá el código"
          style={{
            flex: 1, padding: '11px 14px',
            fontFamily: 'var(--font-hanken)', fontSize: '13px',
            border: '1px solid var(--color-outline-variant)',
            borderRight: 'none',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-on-surface)',
            outline: 'none',
          }}
        />
        <button
          style={{
            padding: '11px 18px',
            fontFamily: 'var(--font-hanken)', fontSize: '13px', fontWeight: '600',
            backgroundColor: 'transparent',
            color: 'var(--color-on-surface)',
            border: '1px solid var(--color-outline-variant)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Aplicar
        </button>
      </div>

      {/* CTA */}
      <Link
        to="/checkout"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
          width: '100%',
          backgroundColor: items.length === 0 ? 'var(--color-outline-variant)' : 'var(--color-on-surface)',
          color: '#fff',
          fontFamily: 'var(--font-hanken)', fontSize: '14px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '17px', textAlign: 'center', textDecoration: 'none',
          pointerEvents: items.length === 0 ? 'none' : 'auto',
          marginBottom: '14px',
        }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>lock</span>
        Continuar con la compra
      </Link>

      {/* Envío gratis nudge */}
      {envio > 0 && (
        <div style={{ backgroundColor: 'var(--color-surface-container)', padding: '14px', marginBottom: '12px' }}>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface)', margin: 0, lineHeight: '1.5' }}>
            Agregá {fmt(150000 - subtotal)} más para obtener <strong>envío gratis</strong>.
          </p>
        </div>
      )}

      <div style={{ border: '1px solid var(--color-outline-variant)', padding: '14px' }}>
        <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
          Devoluciones gratis por 30 días | Hacemos la recolección en tu domicilio.
        </p>
      </div>
    </div>
  )
}

export default function CartPage() {
  const [items, setItems] = useState(INITIAL_ITEMS)

  function changeQty(id, delta) {
    setItems(prev => prev.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
  }

  function removeItem(id) {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0)
  const envio    = subtotal >= 150000 ? 0 : 9900
  const total    = subtotal + envio

  const emptyState = (
    <div style={{ padding: '64px 0', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '16px', color: 'var(--color-on-surface-variant)', marginBottom: '24px' }}>Tu carrito está vacío.</p>
      <Link to="/shop" style={{ display: 'inline-block', backgroundColor: 'var(--color-on-surface)', color: '#fff', fontFamily: 'var(--font-hanken)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none' }}>
        Ir a la tienda
      </Link>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-background)', paddingTop: '80px' }}>
      <div className="mx-auto" style={{ maxWidth: 'var(--spacing-container-max)' }}>

        {/* ── MOBILE ── */}
        <div className="block md:hidden" style={{ padding: '24px 16px 60px' }}>
          <h1 style={{ fontFamily: 'var(--font-barlow)', fontSize: '28px', fontWeight: '500', color: 'var(--color-on-surface)', margin: '0 0 4px 0' }}>
            Bolsa de compras
          </h1>
          <p style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)', margin: '0 0 16px 0' }}>
            {items.length} {items.length === 1 ? 'producto' : 'productos'}
          </p>
          <div style={{ height: '1px', backgroundColor: 'var(--color-outline-variant)', marginBottom: '0' }} />

          {items.length === 0 ? emptyState : items.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeItem} onChangeQty={changeQty} mobile={true} />
          ))}

          {items.length > 0 && (
            <div style={{ marginTop: '32px' }}>
              <OrderSummary items={items} subtotal={subtotal} envio={envio} total={total} mobile={true} />
            </div>
          )}
        </div>

        {/* ── DESKTOP ── */}
        <div className="hidden md:block" style={{ padding: '48px 48px 80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px' }}>
            <h1 style={{ fontFamily: 'var(--font-barlow)', fontSize: '36px', fontWeight: '500', color: 'var(--color-on-surface)', margin: 0 }}>
              Bolsa de compras
            </h1>
            <Link to="/shop" style={{ fontFamily: 'var(--font-hanken)', fontSize: '13px', color: 'var(--color-on-surface-variant)', textDecoration: 'underline' }}>
              Seguir comprando
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', alignItems: 'start' }}>
            <div>
              <div style={{ height: '1px', backgroundColor: 'var(--color-outline-variant)' }} />
              {items.length === 0 ? emptyState : items.map(item => (
                <CartItem key={item.id} item={item} onRemove={removeItem} onChangeQty={changeQty} mobile={false} />
              ))}
            </div>
            <OrderSummary items={items} subtotal={subtotal} envio={envio} total={total} mobile={false} />
          </div>
        </div>

      </div>
    </div>
  )
}
