import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      name: 'Bespoke Face',
      items: ['Skin Boosters', 'Facials', 'Post-Op Recovery', 'Synthesis Organics']
    },
    {
      name: 'Bespoke Body',
      items: ['Body Contouring', 'Lymphatic Drainage', 'Spa Massages', 'Spa Packages', 'Infrared Sauna', 'Pelvic Pain', 'C Section Recovery']
    },
    {
      name: 'Post-Op Recovery',
      items: []
    },
    {
      name: 'Advanced Technology',
      items: ['Ultraformer MPT']
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

  const handleServiceClick = (item: string) => {
    let route;
    if (item === 'Skin Boosters') {
      route = '/concerns/skin-boosters';
    } else if (item === 'Facials') {
      route = '/facials';
    } else if (item === 'Post-Op Recovery') {
      route = '/post-op-recovery';
    } else if (item === 'Synthesis Organics') {
      route = '/facials/synthesis-organics';
    } else if (item === 'Body Contouring') {
      route = '/treatments/body-contouring';
    } else if (item === 'Lymphatic Drainage') {
      route = '/treatments/spa-massages/lymphatic-drainage';
    } else if (item === 'Spa Massages') {
      route = '/treatments/spa-massages';
    } else if (item === 'Spa Packages') {
      route = '/treatments/spa-massages';
    } else if (item === 'Infrared Sauna') {
      route = '/infrared-sauna';
    } else if (item === 'Pelvic Pain') {
      route = '/pelvic-pain';
    } else if (item === 'C Section Recovery') {
      route = '/c-section-recovery';
    } else if (item === 'Ultraformer MPT') {
      route = '/ultraformer-mpt';
    } else {
      route = `/services/${item.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return route;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
      {/* Top Bar - Black Background */}
      <div className="bg-black text-white py-2">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0415 588 449</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>4 Cross Street, Double Bay, NSW 2028</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - White Background */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-4">
              <div className="header-logo"></div>
              <div className="flex flex-col">
                <span className="text-black font-bold text-lg tracking-wide">FUTURE</span>
                <span className="text-black font-bold text-lg tracking-wide">CLINIC</span>
                <span className="text-black font-medium text-sm tracking-wide">MODERN</span>
                <span className="text-black font-medium text-sm tracking-wide">BEAUTY</span>
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {services.map((service) => (
                <div key={service.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(service.name)}
                    className="flex items-center space-x-1 text-black font-medium hover:text-gray-600 transition-colors duration-200"
                  >
                    <span>{service.name}</span>
                    {service.comingSoon && <span className="text-xs text-gray-500">(coming soon)</span>}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === service.name && service.items.length > 0 && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      {service.items.map((item) => (
                        <Link
                          key={item}
                          to={handleServiceClick(item)}
                          className="block px-4 py-2 text-black hover:bg-gray-50 transition-colors duration-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/appointments"
                className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
              >
                BOOK NOW
              </Link>
              <Link
                to="/contact"
                className="border border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-colors duration-200 text-sm"
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container-custom py-4">
            <nav className="space-y-4">
              {services.map((service) => (
                <div key={service.name}>
                  <button
                    onClick={() => toggleDropdown(service.name)}
                    className="flex items-center justify-between w-full text-left text-black font-medium py-2"
                  >
                    <span>{service.name}</span>
                    {service.comingSoon && <span className="text-xs text-gray-500">(coming soon)</span>}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {activeDropdown === service.name && service.items.length > 0 && (
                    <div className="ml-4 space-y-2">
                      {service.items.map((item) => (
                        <Link
                          key={item}
                          to={handleServiceClick(item)}
                          className="block py-2 text-gray-600 hover:text-black transition-colors duration-200"
                          onClick={() => {
                            setActiveDropdown(null);
                            setIsMenuOpen(false);
                          }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-2">
                <Link
                  to="/appointments"
                  className="block w-full bg-black text-white px-6 py-3 rounded-full font-medium text-center hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK NOW
                </Link>
                <Link
                  to="/contact"
                  className="block w-full border border-black text-black px-6 py-3 rounded-full font-medium text-center hover:bg-black hover:text-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GET IN TOUCH
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;