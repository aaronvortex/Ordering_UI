import { Search, ShoppingCart, Utensils, X, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  cartTotal: number;
  cartCount: number;
};

const navItems = [
  { label: 'Mains', icon: '🍽️' },
  { label: 'Grill', icon: '🥩' },
  { label: 'Specials', icon: '⭐', active: true },
  { label: 'Drinks', icon: '🥤' },
  { label: 'Alcohol', icon: '🍷' },
];

const allItems = [
  { id: 1, name: 'Grilled Chicken', category: 'Chicken', price: 650 },
  { id: 2, name: 'Club Sandwich', category: 'Sandwich', price: 380 },
  { id: 3, name: 'Caesar Salad', category: 'Salad', price: 290 },
  { id: 4, name: 'Full English Breakfast', category: 'Breakfast', price: 480 },
];

export default function Header({ cartTotal, cartCount }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery
    ? allItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 min-w-fit hover:opacity-80 transition-opacity">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow">
            <Utensils size={20} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-blue-700 text-sm leading-tight">Tewodros Belay Int.</div>
            <div className="text-gray-500 text-xs">Hotel & Spa</div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <button
              key={item.label}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                item.active
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors hover:text-blue-600"
              title="Search"
            >
              <Search size={18} />
            </button>

            {showSearch && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50 p-3">
                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    placeholder="Search items..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    autoFocus
                  />
                  <button onClick={() => setShowSearch(false)}>
                    <X size={18} className="text-gray-400 hover:text-gray-600" />
                  </button>
                </div>

                {searchResults.length > 0 ? (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {searchResults.map(item => (
                      <div key={item.id} className="p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors">
                        <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                        <p className="text-gray-500 text-xs">{item.category}</p>
                        <p className="text-blue-600 font-bold text-sm">${item.price}</p>
                      </div>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <p className="text-gray-500 text-sm text-center py-4">No items found</p>
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">Type to search...</p>
                )}
              </div>
            )}
          </div>

          <Link
            to="/favorites"
            className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center hover:bg-amber-200 transition-colors text-amber-600"
            title="My Favorites"
          >
            <Heart size={18} />
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all shadow-md shadow-blue-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <ShoppingCart size={16} />
            {cartCount > 0 && <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
            <span className="hidden sm:inline">${cartTotal.toLocaleString()}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
