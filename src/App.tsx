import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import CTABanner from './components/CTABanner';
import PromoCards from './components/PromoCards';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartPage from './pages/CartPage';
import FavoritesPage from './pages/FavoritesPage';
import ItemDetailPage from './pages/ItemDetailPage';

function HomePage() {
  const { addToCart, cartCount, cartTotal } = useApp();
  const [activeCategory, setActiveCategory] = useState('Chicken');

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />
      <Header cartTotal={cartTotal} cartCount={cartCount} />
      <Hero />
      <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ProductGrid
        activeCategory={activeCategory}
        onAddToCart={(item) => addToCart({ ...item })}
      />
      <Features />
      <CTABanner cartCount={cartCount} cartTotal={cartTotal} />
      <PromoCards />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/item/:id" element={<ItemDetailPage />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
