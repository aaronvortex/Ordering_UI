import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { menuData } from '../data/menuData';

export default function FavoritesPage() {
  const { favorites, cartCount, cartTotal, toggleFavorite, addToCart, t } = useApp();

  const favoriteItems = Object.values(menuData)
    .flat()
    .filter(item => favorites.has(item.id));

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />
      <Header cartTotal={cartTotal} cartCount={cartCount} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft size={20} />
            {t.backToMenu}
          </Link>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{t.myFavorites}</h1>
        <p className="text-gray-500 mb-8">{favoriteItems.length} {t.itemsSaved}</p>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart size={64} className="mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.noFavorites}</h2>
            <p className="text-gray-500 mb-8">{t.noFavoritesDesc}</p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              {t.browseMenu}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {favoriteItems.map(item => (
              <ProductCard
                key={item.id}
                item={item}
                isFavorite={favorites.has(item.id)}
                onToggleFavorite={() => toggleFavorite(item.id)}
                onAddToCart={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
