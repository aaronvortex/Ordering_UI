import { ArrowRight, Truck, Flame } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PromoCards() {
  const { t } = useApp();

  const promos = [
    {
      id: 1,
      title: t.chefsSpecial,
      description: t.chefsSpecialDesc,
      cta: t.discoverNow,
      icon: Flame,
      bgGradient: 'from-blue-900 to-blue-800',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: t.happyHours,
      description: t.happyHoursDesc,
      cta: t.orderDrinks,
      timer: { hours: '02', minutes: '45', seconds: '30' },
      bgGradient: 'from-amber-50 to-orange-50',
      image: 'https://images.pexels.com/photos/3407142/pexels-photo-3407142.jpeg?auto=compress&cs=tinysrgb&w=600',
      isDark: false,
    },
    {
      id: 3,
      title: t.weDeliver,
      description: t.weDeliverDesc,
      cta: t.orderNow,
      icon: Truck,
      bgGradient: 'from-blue-900 to-blue-800',
      image: 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promos.map(promo => {
          const Icon = promo.icon;
          return (
            <div
              key={promo.id}
              className={`relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 h-64 flex items-end`}
            >
              <img
                src={promo.image}
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${promo.bgGradient} opacity-70 group-hover:opacity-75 transition-opacity`}
              />

              <div className="relative z-10 w-full p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
                    <p className="text-sm text-blue-100">{promo.description}</p>
                  </div>
                  {Icon && <Icon size={24} className="flex-shrink-0" />}
                </div>

                {promo.timer && (
                  <div className="flex items-center gap-4 mb-4 text-sm font-semibold">
                    <span>{promo.timer.hours} {t.hoursUnit}</span>
                    <span>{promo.timer.minutes} {t.minsUnit}</span>
                    <span>{promo.timer.seconds} {t.secsUnit}</span>
                  </div>
                )}

                <button className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 font-semibold px-5 py-2 rounded-full transition-all text-sm">
                  {promo.cta}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
