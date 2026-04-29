import { Leaf, ChefHat, Zap, Star } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest and highest quality',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: ChefHat,
    title: 'Expert Chefs',
    description: 'Our chefs create magic in every dish',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Zap,
    title: 'Fast Service',
    description: 'Quick delivery and excellent service',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Star,
    title: 'Best Quality',
    description: 'Premium quality meals at affordable prices',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

export default function Features() {
  return (
    <section className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map(feat => {
            const Icon = feat.icon;
            return (
              <div key={feat.title} className="flex items-start gap-4 group">
                <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className={feat.color} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{feat.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
