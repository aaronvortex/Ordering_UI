import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: 'The best dining experience in Addis! The food was absolutely amazing and the service was top-notch. Highly recommended!',
    author: 'Fitsum Alemu',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    text: 'Exceptional quality and attention to detail in every dish. The atmosphere is perfect for both casual and special occasions.',
    author: 'Sarah Johnson',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    text: 'Outstanding service and delicious food. Every visit is memorable. This is now my favorite restaurant in the city!',
    author: 'Michael Chen',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">What Our Guests Say</h2>

      <div className="relative flex items-center gap-6">
        <button
          onClick={prev}
          className="absolute -left-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-blue-300 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex gap-1">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-4xl text-amber-100">"</span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 text-base">{testimonials[current].text}</p>

          <div className="flex items-center gap-4">
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{testimonials[current].author}</p>
              <p className="text-sm text-gray-500">Verified Guest</p>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="absolute -right-4 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 hover:border-blue-300 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
