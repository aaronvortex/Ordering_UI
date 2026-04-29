import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LangCode } from '../i18n/translations';

const PHONE_NUMBER = '+251911234567';

const allLanguages: { code: LangCode; name: string }[] = [
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

const langLabel = (code: LangCode) => {
  const lang = allLanguages.find(l => l.code === code);
  return lang ? lang.name : code.toUpperCase();
};

export default function TopBar() {
  const { language, setLanguage, t } = useApp();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    };
    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLangMenu]);

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: `https://wa.me/251911234567`,
  };

  // Determine which 2 languages to show inline
  const isDefaultLang = language === 'en' || language === 'am';
  const visibleLangs: LangCode[] = isDefaultLang
    ? ['en', 'am']
    : [language, language === 'en' ? 'am' : 'en'];

  // Dropdown languages: everything except the two visible ones
  const dropdownLangs = allLanguages.filter(l => !visibleLangs.includes(l.code));

  const handleSelect = (code: LangCode) => {
    setLanguage(code);
    setShowLangMenu(false);
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

          {/* Language Selector - 2 visible + dropdown */}
          <div className="relative flex items-center gap-1" ref={dropdownRef}>
            {visibleLangs.map(code => (
              <button
                key={code}
                onClick={() => handleSelect(code)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  language === code
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200 hover:text-blue-600'
                }`}
              >
                {code === 'en' ? 'EN' : langLabel(code)}
              </button>
            ))}

            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-0.5 text-gray-500 hover:text-blue-600 transition-colors px-1 py-1"
            >
              <ChevronDown size={13} className={`transition-transform duration-200 ${showLangMenu ? 'rotate-180' : ''}`} />
            </button>

            {showLangMenu && (
              <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
                {dropdownLangs.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
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
