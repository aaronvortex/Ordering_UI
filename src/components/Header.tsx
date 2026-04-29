import { Search, ShoppingCart, Utensils } from 'lucide-react';

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

export default function Header({ cartTotal, cartCount }: Props) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-fit">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-700 to-blue-500 flex items-center justify-center shadow">
            <Utensils size={20} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-blue-700 text-sm leading-tight">Tewodros Belay Int.</div>
            <div className="text-gray-500 text-xs">Hotel &amp; Spa</div>
          </div>
        </div>

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
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
            <Search size={18} />
          </button>
          <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="text-lg">🌟</span>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors shadow-md shadow-blue-200">
            <ShoppingCart size={16} />
            {cartCount > 0 && <span className="bg-white text-blue-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
            ${cartTotal.toLocaleString()}
          </button>
        </div>
      </div>
    </header>
  );
}
