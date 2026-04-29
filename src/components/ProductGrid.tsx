import { useState } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';
import { menuData } from '../data/menuData';

type Props = {
  activeCategory: string;
  onAddToCart: (item: { id: number; name: string; price: number; image: string }) => void;
};

export default function ProductGrid({ activeCategory, onAddToCart }: Props) {
  const { isFavorited, toggleFavorite } = useApp();
  const [sortBy, setSortBy] = useState('popular');
  const items = menuData[activeCategory] || [];

  const getSortedItems = () => {
    const itemsCopy = [...items];
    switch (sortBy) {
      case 'price-low':
        return itemsCopy.sort((a, b) => a.price - b.price);
      case 'price-high':
        return itemsCopy.sort((a, b) => b.price - a.price);
      case 'popular':
      default:
        return itemsCopy;
    }
  };

  const sortedItems = getSortedItems();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10" id="products">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-extrabold text-gray-900">{activeCategory}</h2>
          <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            {items.length} Items
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer hover:border-blue-300 transition-colors"
          >
            <option value="popular">Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedItems.map(item => (
          <ProductCard
            key={item.id}
            item={item}
            isFavorite={isFavorited(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
            onAddToCart={() => onAddToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
          />
        ))}
      </div>
    </section>
  );
}
