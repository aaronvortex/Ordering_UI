import { ShoppingCart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-[420px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-gray-100 mb-6">
            <span className="text-amber-400 text-base">✨</span>
            <span className="text-gray-600 text-sm font-medium">Welcome to Excellence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Our <br />
            <span className="text-blue-600">Delicious</span> Menu
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            A fine selection of meals crafted with the freshest ingredients and the perfect blend of flavors.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5">
              Order Now <ShoppingCart size={16} />
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-7 py-3 rounded-full font-semibold text-sm transition-all bg-white hover:-translate-y-0.5">
              <span className="text-amber-400">✨</span> View Specials
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl blur-3xl opacity-60" />
            <img
              src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grilled chicken plate"
              className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
