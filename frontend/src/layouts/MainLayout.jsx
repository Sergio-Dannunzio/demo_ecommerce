import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const cartCount = 0

  return (
    <>
      <Header cartCount={cartCount} />

      <main style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
