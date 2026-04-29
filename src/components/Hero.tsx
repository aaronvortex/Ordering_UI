import { ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Excellence', 'Quality', 'Flavor', 'Experience'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white min-h-[420px] flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text */}
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow-sm border border-gray-100 mb-6 animate-fade-in">
            <span className="text-amber-400 text-base inline-block animate-pulse">✨</span>
            <span className="text-gray-600 text-sm font-medium">Welcome to {words[wordIndex]}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Discover Our <br />
            <span className="text-blue-600">Delicious</span> Menu
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
            A fine selection of meals crafted with the freshest ingredients and the perfect blend of flavors.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 active:scale-95"
            >
              Order Now <ShoppingCart size={16} />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('specials');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 border border-gray-300 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-7 py-3 rounded-full font-semibold text-sm transition-all bg-white hover:-translate-y-0.5 active:scale-95"
            >
              <span className="inline-block animate-bounce">✨</span> View Specials
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-50 rounded-3xl blur-3xl opacity-60 animate-pulse" />
            <img
              src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Grilled chicken plate"
              className="relative z-10 w-full h-80 object-cover rounded-3xl shadow-2xl hover:shadow-blue-300/50 transition-shadow duration-500"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
