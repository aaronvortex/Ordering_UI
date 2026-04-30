import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { LangCode } from '../i18n/translations';

const PHONE_NUMBER = '+251911234567';

const pinnedLanguages: { code: LangCode; name: string }[] = [
  { code: 'en', name: 'EN' },
  { code: 'am', name: 'አማ' },
];

const moreLanguages: { code: LangCode; name: string }[] = [
  { code: 'er', name: 'Eritrean' },
  { code: 'fr', name: 'Français' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'it', name: 'Italiano' },
  { code: 'om', name: 'Afaan Oromo' },
  { code: 'es', name: 'Español' },
  { code: 'ti', name: 'ትግርኛ' },
];

export default function TopBar() {
  const { language, setLanguage, t } = useApp();
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: `https://wa.me/251911234567`,
  };

  const isMoreActive = moreLanguages.some(l => l.code === language);
  const activeMoreLang = moreLanguages.find(l => l.code === language);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowMoreMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
        {/* Left: contact info */}
        <div className="flex items-center gap-5">
          <button
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 hover:text-blue-700 transition-colors cursor-pointer group"
            title={t.callUs}
          >
            <Phone size={13} className="text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">+251 94 221 9997</span>
          </button>
          <span className="items-center gap-1.5 hidden md:flex">
            <MapPin size={13} className="text-blue-600" />
            {t.location}
          </span>
          <span className="items-center gap-1.5 hidden lg:flex">
            <Clock size={13} className="text-blue-600" />
            {t.hours}
          </span>
        </div>

        {/* Right: social + language switcher */}
        <div className="flex items-center gap-4">
          {/* Social icons */}
          <div className="items-center gap-3 hidden sm:flex">
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

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {/* Pinned: EN and Amharic always visible */}
            {pinnedLanguages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === lang.code
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {lang.name}
              </button>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowMoreMenu(prev => !prev)}
                className={`flex items-center gap-0.5 px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  isMoreActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isMoreActive && activeMoreLang
                  ? activeMoreLang.name.split(' ')[0].slice(0, 4)
                  : 'More'}
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-200 ${showMoreMenu ? 'rotate-180' : ''}`}
                />
              </button>

              {showMoreMenu && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                  <div className="py-1">
                    {moreLanguages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowMoreMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                          language === lang.code
                            ? 'bg-blue-600 text-white font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span>{lang.name}</span>
                        {language === lang.code && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
