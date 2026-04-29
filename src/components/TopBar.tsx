import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const PHONE_NUMBER = '+251911234567';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'am', name: 'Amharic' },
  { code: 'om', name: 'Affan Oromo' },
  { code: 'ti', name: 'Tigrigna' },
  { code: 'fr', name: 'French' },
  { code: 'hi', name: 'Hindi' },
  { code: 'es', name: 'Spanish' },
  { code: 'it', name: 'Italian' },
  { code: 'er', name: 'Eritrean' },
];

export default function TopBar() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [showLangMenu, setShowLangMenu] = useState(false);

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: `https://wa.me/251911234567`,
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-5">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors cursor-pointer group"
            title="Call us"
          >
            <Phone size={13} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">+251 91 123 4567</span>
          </button>
          <span className="flex items-center gap-1.5 hidden md:flex">
            <MapPin size={13} className="text-blue-600" />
            Addis Ababa, Ethiopia
          </span>
          <span className="flex items-center gap-1.5 hidden lg:flex">
            <Clock size={13} className="text-blue-600" />
            07:00 AM – 11:00 PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors hover:scale-110 transform"
              title="Facebook"
            >
              <Facebook size={15} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition-colors hover:scale-110 transform"
              title="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600 transition-colors hover:scale-110 transform"
              title="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-1"
            >
              {selectedLang.toUpperCase()} <ChevronDown size={13} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      selectedLang === lang.code
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
