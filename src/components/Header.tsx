import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const services = [
    {
      name: 'Bespoke Face',
      items: ['Skin Boosters', 'Facials', 'Post-Op Recovery', 'Synthesis Organics'],
      comingSoon: false
    },
    {
      name: 'Bespoke Body',
      items: ['Body Contouring', 'Lymphatic Drainage', 'Spa Massages', 'Infrared Sauna', 'Pelvic Pain', 'C Section Recovery'],
      comingSoon: false
    },
    {
      name: 'Post-Op Recovery',
      items: [],
      comingSoon: false
    },
    {
      name: 'Advanced Technology',
      items: ['Ultraformer MPT', 'INDIBA Therapy', 'truFlex Muscle'],
      comingSoon: false
    },
    {
      name: 'Future Bathe',
      items: [],
      comingSoon: true
    }
  ];

  const toggleDropdown = (serviceName: string) => {
    setActiveDropdown(activeDropdown === serviceName ? null : serviceName);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Black Top Bar with Contact Info */}
      <div className="bg-black text-white py-2">
        <div className="container-custom">
          <div className="flex justify-end items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0415 588 449</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">4 Cross Street, Double Bay, NSW 2028</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Section */}
      <div className="bg-white shadow-md border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 sm:py-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg sm:text-2xl">C</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-black leading-tight tracking-wide">FUTURE CLINIC</h1>
                <p className="text-xs sm:text-sm text-gray-600 leading-tight">MODERN BEAUTY</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
              {services.map((service) => (
                <div key={service.name} className="relative group">
                  <button
                    className="flex items-center space-x-2 text-black hover:text-gray-700 transition-colors duration-300 font-semibold text-base xl:text-lg"
                    onClick={() => toggleDropdown(service.name)}
                  >
                    <span>{service.name}</span>
                    {service.comingSoon && <span className="text-xs text-gray-500">(coming soon)</span>}
                    {service.items.length > 0 && <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5" />}
                  </button>
                  
                  {service.items.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-sm">
                      <div className="py-2">
                        {service.items.map((item) => (
                          <Link
                            key={item}
                            to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/appointments" className="bg-black text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-800 transition-all duration-300 text-sm tracking-wide">
                BOOK NOW
              </Link>
              <Link to="/contact" className="border-2 border-black text-black px-6 py-3 rounded-none font-semibold hover:bg-black hover:text-white transition-all duration-300 bg-white text-sm tracking-wide">
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <div className="py-6 space-y-6 px-4">
                {services.map((service) => (
                  <div key={service.name}>
                    <button
                      className="flex items-center justify-between w-full text-left text-black hover:text-gray-600 transition-colors duration-300 font-medium"
                      onClick={() => toggleDropdown(service.name)}
                    >
                      <span>{service.name}</span>
                      {service.comingSoon && <span className="text-xs text-gray-500">(coming soon)</span>}
                      {service.items.length > 0 && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === service.name ? 'rotate-180' : ''}`} />}
                    </button>
                    
                    {activeDropdown === service.name && service.items.length > 0 && (
                      <div className="mt-2 ml-4 space-y-2">
                        {service.items.map((item) => (
                          <Link
                            key={item}
                            to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-black">0415 588 449</p>
                    <p className="text-gray-600">4 Cross Street, Double Bay, NSW 2028</p>
                  </div>
                  <div className="space-y-2">
                    <Link to="/appointments" className="bg-black text-white px-6 py-3 rounded-none font-semibold hover:bg-gray-800 transition-all duration-300 text-sm tracking-wide block text-center" onClick={() => setIsMenuOpen(false)}>
                      BOOK NOW
                    </Link>
                    <Link to="/contact" className="border-2 border-black text-black px-6 py-3 rounded-none font-semibold hover:bg-black hover:text-white transition-all duration-300 bg-white text-sm tracking-wide block text-center" onClick={() => setIsMenuOpen(false)}>
                      GET IN TOUCH
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;