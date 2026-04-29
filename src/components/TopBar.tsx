import { Phone, MapPin, Clock, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-blue-600" />
            +251 91 123 4567
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-blue-600" />
            Addis Ababa, Ethiopia
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-blue-600" />
            07:00 AM – 11:00 PM
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Facebook size={15} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Instagram size={15} />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <MessageCircle size={15} />
            </a>
          </div>
          <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
            EN <ChevronDown size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
