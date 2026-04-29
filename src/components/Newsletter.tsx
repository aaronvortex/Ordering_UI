import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-amber-400 bg-blue-800 flex items-center justify-center flex-shrink-0">
              <Mail size={28} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">Stay Updated with Our Latest Offers</h3>
              <p className="text-blue-200 text-sm">Subscribe to get special offers, new menu items, and updates.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-shrink-0 w-full max-w-sm">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-blue-950 text-white placeholder-blue-300 border border-blue-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                required
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all whitespace-nowrap ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-amber-400 hover:bg-amber-300 text-gray-900 shadow-lg hover:shadow-xl'
                }`}
              >
                {submitted ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
