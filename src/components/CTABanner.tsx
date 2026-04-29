import { ShoppingCart, Headphones } from 'lucide-react';

type Props = {
  cartCount: number;
  cartTotal: number;
};

export default function CTABanner({ cartCount, cartTotal }: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500 border-2 border-blue-400 flex items-center justify-center flex-shrink-0">
            <Headphones size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl leading-tight">
              Hungry? Let's Order Your <br className="hidden sm:block" />Favorite Meal
            </h3>
            <p className="text-blue-200 text-sm mt-1">Delicious food delivered to your table with love</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 flex-shrink-0">
          <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-7 py-3 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
            <ShoppingCart size={16} />
            View Cart ({cartCount})
          </button>
          <span className="text-blue-200 text-xs font-medium">Total: ${cartTotal.toLocaleString()}</span>
        </div>
      </div>
    </section>
  );
}
