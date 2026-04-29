import { useApp } from '../context/AppContext';

type Props = {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
};

const categories = [
  { label: 'Chicken', emoji: '🍗' },
  { label: 'Sandwich', emoji: '🥪' },
  { label: 'Salad', emoji: '🥗' },
  { label: 'Breakfast', emoji: '🍳' },
] as const;

const categoryKeyMap: Record<string, string> = {
  Chicken: 'chicken',
  Sandwich: 'sandwich',
  Salad: 'salad',
  Breakfast: 'breakfast',
};

export default function CategoryTabs({ activeCategory, setActiveCategory }: Props) {
  const { t } = useApp();

  return (
    <div className="bg-white border-y border-gray-100 shadow-sm" id="specials">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                activeCategory === cat.label
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                  : 'text-gray-600 hover:bg-gray-100 bg-gray-50'
              }`}
            >
              <span className="text-lg">{cat.emoji}</span>
              {t[categoryKeyMap[cat.label] as keyof typeof t]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
