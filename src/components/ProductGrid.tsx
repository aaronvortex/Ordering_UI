import { useState } from 'react';
import { Heart, Plus } from 'lucide-react';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge: string;
  extra: string;
};

type Props = {
  activeCategory: string;
  onAddToCart: (item: { id: number; name: string; price: number }) => void;
};

const menuData: Record<string, MenuItem[]> = {
  Chicken: [
    {
      id: 1,
      name: 'Grilled Chicken',
      description: 'Juicy grilled chicken breast seasoned to perfection',
      price: 650,
      image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+12',
    },
    {
      id: 2,
      name: 'Chicken Breast',
      description: 'Pan-seared chicken breast with herbs & spices',
      price: 650,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+12',
    },
    {
      id: 3,
      name: 'Chicken Stir Fried',
      description: 'Stir-fried chicken with fresh vegetables',
      price: 650,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+10',
    },
    {
      id: 4,
      name: 'Chicken Leg (3 pcs)',
      description: 'Three crispy chicken legs grilled to perfection',
      price: 650,
      image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+10',
    },
    {
      id: 5,
      name: 'Chicken With Rice',
      description: 'Delicious chicken with steamed rice',
      price: 700,
      image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+15',
    },
    {
      id: 6,
      name: 'BBQ Chicken Wings',
      description: 'Spicy BBQ wings with special sauce',
      price: 600,
      image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+09',
    },
    {
      id: 7,
      name: 'Creamy Chicken',
      description: 'Creamy garlic chicken with mushrooms',
      price: 750,
      image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+08',
    },
    {
      id: 8,
      name: 'Lemon Chicken',
      description: 'Zesty lemon chicken with herbs and butter',
      price: 680,
      image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+11',
    },
  ],
  Sandwich: [
    {
      id: 9,
      name: 'Club Sandwich',
      description: 'Triple-decker with chicken, bacon and fresh veggies',
      price: 380,
      image: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+06',
    },
    {
      id: 10,
      name: 'Veggie Sandwich',
      description: 'Fresh garden vegetables on artisan bread',
      price: 320,
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+08',
    },
  ],
  Salad: [
    {
      id: 11,
      name: 'Caesar Salad',
      description: 'Crispy romaine with parmesan and croutons',
      price: 290,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+05',
    },
  ],
  Breakfast: [
    {
      id: 12,
      name: 'Full English Breakfast',
      description: 'Eggs, bacon, sausage, toast and beans',
      price: 480,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      badge: 'Available',
      extra: '+07',
    },
  ],
};

export default function ProductGrid({ activeCategory, onAddToCart }: Props) {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const items = menuData[activeCategory] || [];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-extrabold text-gray-900">{activeCategory}</h2>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {items.length} Items
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Sort by:</span>
          <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(item => (
          <ProductCard
            key={item.id}
            item={item}
            isFavorite={favorites.has(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onAddToCart={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
          />
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  item,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}: {
  item: MenuItem;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onAddToCart: () => void;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100">
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
        <button
          onClick={onToggleFavorite}
          className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
        >
          <Heart
            size={15}
            className={isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-base mb-1">{item.name}</h3>
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
              'Added!'
            ) : (
              <>
                <Plus size={14} /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
