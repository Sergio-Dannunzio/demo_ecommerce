import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CategoryPage from './pages/CategoryPage'
import LookbookPage from './pages/LookbookPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/categoria/:slug" element={<CategoryPage />} />
          <Route path="/producto/:slug" element={<ProductDetailPage />} />
          <Route path="/carrito" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
