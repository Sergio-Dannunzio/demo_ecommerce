import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import BottomNav from '../components/layout/BottomNav'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const cartCount = 0

  return (
    <>
      <Header cartCount={cartCount} />

      <main className="pb-16 md:pb-0" style={{ paddingTop: '80px' }}>
        <Outlet />
      </main>

      <Footer />
      <BottomNav />
    </>
  )
}
