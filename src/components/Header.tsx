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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      items: ['Post-Op Recovery']
    },
    {
      name: 'Advanced Technology',
      items: ['Ultraformer MPT'],
      directLink: '/treatments/advanced-technology'
    },
    {
      name: 'Future Bathe',
      items: [],
      comingSoon: true,
      comingSoonRoute: '/treatments/future-bathe-coming-soon'
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
    } else if (item === 'Post-Op Aesthetic Face') {
      route = '/post-op-aesthetic-face';
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
    } else if (item === 'Advanced Technology') {
      route = '/treatments/advanced-technology';
    } else if (item === 'INDIBA Therapy') {
      route = '/treatments/indiba-therapy';
    } else if (item === 'truFlex Muscle') {
      route = '/treatments/truflex-muscle';
    } else {
      route = `/services/${item.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return route;
  };

  return (
    <>
      {/* Top Header Wrap */}
      <div className="bg-primary d-flex flex-column justify-content-center align-items-center text-center py-2">
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

      {/* Main Header */}
      <header 
        id="header" 
        className={`bg-white position-sticky top-0 start-0 end-0 w-100 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}
        style={{ zIndex: 1050 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200">
                <img src="/images/logo.svg" alt="Future Clinic Logo" className="h-20 w-auto" />
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {services.map((service) => (
                <div key={service.name} className="relative group dropdown-container">
                  {service.comingSoon ? (
                    <Link
                      to={service.comingSoonRoute || '#'}
                      className="flex items-center space-x-1 text-black font-medium hover:text-gray-600 transition-colors duration-200"
                    >
                      <span>{service.name}</span>
                      <span className="text-xs text-gray-500">(coming soon)</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : service.directLink ? (
                    <Link
                      to={service.directLink}
                      className="flex items-center space-x-1 text-black font-medium hover:text-gray-600 transition-colors duration-200"
                    >
                      <span>{service.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
                className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 text-sm"
              >
                BOOK NOW
              </button>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="container-custom py-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-black">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>
              <nav className="space-y-4">
                {services.map((service) => (
                  <div key={service.name} className="dropdown-container">
                    {service.comingSoon ? (
                      <Link
                        to={service.comingSoonRoute || '#'}
                        className="flex items-center justify-between w-full text-left text-black font-medium py-2 hover:text-gray-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{service.name}</span>
                        <span className="text-xs text-gray-500">(coming soon)</span>
                      </Link>
                    ) : service.directLink ? (
                      <Link
                        to={service.directLink}
                        className="flex items-center justify-between w-full text-left text-black font-medium py-2 hover:text-gray-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{service.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 space-y-2">
                  <button
                    onClick={() => {
                      window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full bg-black text-white px-6 py-3 rounded-full font-medium text-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    BOOK NOW
                  </button>
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
    </>
  );
};

export default Header;