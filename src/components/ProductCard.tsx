import { Heart, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { MenuItem } from '../data/menuData';

type Props = {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
};

export default function ProductCard({
  item,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: Props) {
  const { t } = useApp();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100 relative">
      <Link to={`/item/${item.id}`}>
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              {item.badge}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {item.extra}
            </span>
          </div>
        </div>
      </Link>

      <button
        onClick={onToggleFavorite}
        className="absolute bottom-16 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
      >
        <Heart
          size={15}
          className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}
        />
      </button>

      <div className="p-4">
        <Link to={`/item/${item.id}`}>
          <h3 className="font-bold text-gray-900 text-base mb-1 hover:text-blue-600 transition-colors">
            {item.name}
          </h3>
        </Link>
        <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-extrabold text-gray-900">${item.price.toLocaleString()}</span>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              added
                ? 'bg-green-500 text-white'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200'
            }`}
          >
            {added ? (
              t.added
            ) : (
              <>
                <Plus size={14} /> {t.add}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
