import { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import CTABanner from './components/CTABanner';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('Chicken');

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />
      <Header cartTotal={cartTotal} cartCount={cartCount} />
      <Hero />
      <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <ProductGrid activeCategory={activeCategory} onAddToCart={addToCart} />
      <Features />
      <CTABanner cartCount={cartCount} cartTotal={cartTotal} />
    </div>
  );
}

export default App;
