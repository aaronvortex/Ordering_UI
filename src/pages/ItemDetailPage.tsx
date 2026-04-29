import { ArrowLeft, Heart, Plus, Minus } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { menuData } from '../data/menuData';

export default function ItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartCount, cartTotal, toggleFavorite, isFavorited, addToCart, t } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const itemId = parseInt(id || '0');
  const item = Object.values(menuData)
    .flat()
    .find(i => i.id === itemId);

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <TopBar />
        <Header cartTotal={cartTotal} cartCount={cartCount} />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.itemNotFound}</h1>
            <Link to="/" className="text-blue-600 hover:text-blue-700">
              {t.backToMenu}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ id: item.id, name: item.name, price: item.price, image: item.image });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>
      <TopBar />
      <Header cartTotal={cartTotal} cartCount={cartCount} />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          {t.back}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div>
            <div className="relative bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl overflow-hidden h-96">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{item.name}</h1>
              <p className="text-2xl font-bold text-blue-600">${item.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">{item.description}</p>

            {/* Availability */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-2">{t.availability}</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 font-semibold">{t.availableNow}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-4">{t.quantity}</h3>
              <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 rounded-full font-semibold text-white transition-all ${
                  added
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
                }`}
              >
                {added ? t.addedToCart : t.addToCart}
              </button>
              <button
                onClick={() => toggleFavorite(item.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  isFavorited(item.id)
                    ? 'bg-red-100 text-red-500 shadow-lg shadow-red-100'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                <Heart
                  size={20}
                  className={isFavorited(item.id) ? 'fill-current' : ''}
                />
              </button>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">{t.whyChoose}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> {t.freshIngredientsItem}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> {t.chefsSpecialty}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> {t.premiumQuality}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600 font-bold">✓</span> {t.fastDelivery}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
