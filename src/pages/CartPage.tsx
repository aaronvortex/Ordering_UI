import { Trash2, ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CartPage() {
  const { cartItems, cartTotal, removeFromCart, updateCartQuantity, cartCount, t } = useApp();

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

        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">{t.shoppingCart}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.cartEmpty}</h2>
            <p className="text-gray-500 mb-8">{t.cartEmptyDesc}</p>
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              {t.continueShopping}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div
                    key={item.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex items-center gap-6 hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{item.name}</h3>
                      <p className="text-blue-600 font-semibold">${item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-lg mb-2">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-red-500 hover:text-red-700 transition-colors text-sm font-semibold"
                      >
                        <Trash2 size={14} />
                        {t.remove}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 sticky top-24">
                <h2 className="font-bold text-gray-900 text-lg mb-4">{t.orderSummary}</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-blue-200">
                  <div className="flex justify-between text-gray-700">
                    <span>{t.subtotal}</span>
                    <span className="font-semibold">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>{t.delivery}</span>
                    <span className="font-semibold">{t.free}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>{t.tax}</span>
                    <span className="font-semibold">${(cartTotal * 0.1).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-gray-900">{t.totalLabel}</span>
                  <span className="font-bold text-2xl text-blue-600">
                    ${(cartTotal * 1.1).toLocaleString()}
                  </span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition-all shadow-lg shadow-blue-200 hover:shadow-xl">
                  {t.proceedCheckout}
                </button>

                <Link
                  to="/"
                  className="block w-full mt-3 border border-blue-300 text-blue-600 hover:bg-blue-50 font-semibold py-3 rounded-full transition-all text-center"
                >
                  {t.continueShopping}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
