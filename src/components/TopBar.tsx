import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { LangCode } from '../i18n/translations';

const PHONE_NUMBER = '+251911234567';

const languages: { code: LangCode; name: string }[] = [
  { code: 'am', name: 'Amharic' },
  { code: 'en', name: 'English' },
  { code: 'er', name: 'Eritrean' },
  { code: 'fr', name: 'French' },
  { code: 'hi', name: 'Hindi' },
  { code: 'it', name: 'Italian' },
  { code: 'om', name: 'Oromo' },
  { code: 'es', name: 'Spanish' },
  { code: 'ti', name: 'Tigrigna' },
];

export default function TopBar() {
  const { language, setLanguage, t } = useApp();
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
            title={t.callUs}
          >
            <Phone size={13} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">+251 91 123 4567</span>
          </button>
          <span className="flex items-center gap-1.5 hidden md:flex">
            <MapPin size={13} className="text-blue-600" />
            {t.location}
          </span>
          <span className="flex items-center gap-1.5 hidden lg:flex">
            <Clock size={13} className="text-blue-600" />
            {t.hours}
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
              {language.toUpperCase()} <ChevronDown size={13} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      language === lang.code
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
