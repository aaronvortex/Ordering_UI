import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Clock, Utensils, CreditCard } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { t } = useApp();

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: `https://wa.me/251911234567`,
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center">
                <Utensils size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{t.footerBrand}</div>
                <div className="text-xs text-gray-400">{t.footerBrandSub}</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footerBrandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">{t.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{t.home}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{t.aboutUs}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{t.ourMenu}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{t.gallery}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{t.contactUs}</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">{t.information}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+251 94 221 9997</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 break-all">info@tewodrosbelay.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{t.hours}</span>
              </li>
            </ul>
          </div>

          {/* Follow Us & Payments */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">{t.followUs}</h4>
            <div className="flex items-center gap-3 mb-6">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-400 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-all"
              >
                <Facebook size={16} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-400 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-all"
              >
                <Instagram size={16} />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-amber-400 flex items-center justify-center text-gray-300 hover:text-gray-900 transition-all"
              >
                <MessageCircle size={16} />
              </a>
            </div>

            <h4 className="font-bold text-white mb-3 text-sm">{t.weAccept}</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center text-xs font-bold text-blue-600">
                VISA
              </div>
              <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
                <CreditCard size={14} className="text-white" />
              </div>
              <div className="w-10 h-6 bg-gray-800 rounded flex items-center justify-center border border-gray-600">
                <span className="text-xs text-gray-400">•••</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
