import { useState } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Plus, Check, Star } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  duration: string;
  description: string;
  price: string;
  category: string;
  bundle?: {
    text: string;
    price: string;
  };
}

const Booking = () => {
  const [selectedCategory, setSelectedCategory] = useState('COSMETOLOGY + FACIALS');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const categories = [
    'COSMETOLOGY + FACIALS',
    'FACE AND BODY PEELS',
    'HEALITE II LED',
    'SKIN BOOSTERS',
    'MASSAGE',
    'DETOX THERAPIES',
    'POST-OP RECOVERY',
    'ADVANCED TECHNOLOGY'
  ];

  const services: Record<string, Service[]> = {
    'COSMETOLOGY + FACIALS': [
      {
        id: 'detox-facial',
        name: 'DETOX Facial',
        duration: '1 hr, 15 mins',
        description: 'Immerse yourself in 90 minutes of skin heaven. Our intensive detox facial will leave your skin feeling refreshed, renewed and radiant.',
        price: 'A$350',
        category: 'COSMETOLOGY + FACIALS'
      },
      {
        id: 'acne',
        name: 'ACNE',
        duration: '1 hr',
        description: 'Break your acne cycle and restore confidence in your skin with our Acne Treatment. Professional care for clear, healthy skin.',
        price: 'A$290',
        category: 'COSMETOLOGY + FACIALS',
        bundle: {
          text: 'Get 5 sessions for A$1,305 with Acne Facial ✨',
          price: 'A$1,305'
        }
      },
      {
        id: 'lip-treatment',
        name: 'LIP Treatment (Anti-Ageing & Volumising)',
        duration: '30 mins',
        description: 'Our luxury lip treatment targets wrinkles, hyperpigmentation, volume and dehydration for plump, youthful lips.',
        price: 'A$150',
        category: 'COSMETOLOGY + FACIALS'
      }
    ],
    'FACE AND BODY PEELS': [
      {
        id: 'chemical-peel',
        name: 'Chemical Peel',
        duration: '45 mins',
        description: 'Professional chemical peel treatment for skin renewal and texture improvement.',
        price: 'A$200',
        category: 'FACE AND BODY PEELS'
      }
    ],
    'HEALITE II LED': [
      {
        id: 'healite-led',
        name: 'HEALITE II LED Treatment',
        duration: '25 mins',
        description: 'Advanced LED therapy for skin rejuvenation and healing.',
        price: 'A$80',
        category: 'HEALITE II LED'
      }
    ],
    'SKIN BOOSTERS': [
      {
        id: 'rejurub-skin-booster',
        name: 'Rejurub Skin Booster Face',
        duration: '45 mins',
        description: 'Advanced skin booster treatment with Salmon DNA technology.',
        price: 'A$670',
        category: 'SKIN BOOSTERS'
      }
    ],
    'MASSAGE': [
      {
        id: 'spa-massage',
        name: 'Spa Massage',
        duration: '1 hr - 1 hr, 30 mins',
        description: 'Relaxing spa massage therapy for complete body relaxation.',
        price: 'from A$190',
        category: 'MASSAGE'
      }
    ],
    'DETOX THERAPIES': [
      {
        id: 'lymphatic-drainage',
        name: 'Manual Lymphatic Drainage',
        duration: '1 hr',
        description: 'Professional lymphatic drainage for detoxification and recovery.',
        price: 'A$250',
        category: 'DETOX THERAPIES'
      }
    ],
    'POST-OP RECOVERY': [
      {
        id: 'post-op-recovery',
        name: 'Post-Op Body Recovery with INDIBA',
        duration: '1 hr',
        description: 'Comprehensive post-operative recovery treatment with advanced technology.',
        price: 'A$350',
        category: 'POST-OP RECOVERY'
      }
    ],
    'ADVANCED TECHNOLOGY': [
      {
        id: 'ultraformer-mpt',
        name: 'Ultraformer MPT HIFU Elite Full Face Rejuvenation',
        duration: '2 hrs',
        description: 'Latest HIFU technology for non-invasive face lifting and tightening.',
        price: 'A$2,500',
        category: 'ADVANCED TECHNOLOGY'
      }
    ]
  };

  const currentServices = services[selectedCategory as keyof typeof services] || [];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleCategoryChange = (direction: 'left' | 'right') => {
    const currentIndex = categories.indexOf(selectedCategory);
    if (direction === 'left' && currentIndex > 0) {
      setSelectedCategory(categories[currentIndex - 1]);
      setCurrentTabIndex(Math.max(0, currentTabIndex - 1));
    } else if (direction === 'right' && currentIndex < categories.length - 1) {
      setSelectedCategory(categories[currentIndex + 1]);
      setCurrentTabIndex(Math.min(categories.length - 3, currentTabIndex + 1));
    }
  };

  const getSelectedServicesData = () => {
    return selectedServices.map(serviceId => {
      for (const categoryServices of Object.values(services)) {
        const service = categoryServices.find(s => s.id === serviceId);
        if (service) return service;
      }
      return null;
    }).filter(Boolean);
  };

  const selectedServicesData = getSelectedServicesData();
  const totalPrice = selectedServicesData.reduce((sum, service) => {
    const price = service?.price.replace(/[^0-9]/g, '') || '0';
    return sum + parseInt(price);
  }, 0);

  const handleContinue = () => {
    const freshaUrl = 'https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true';
    window.open(freshaUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">Services</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Panel - Service Selection */}
        <div className="flex-1 border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            {/* Category Tabs */}
            <div className="relative mb-6">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleCategoryChange('left')}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  disabled={currentTabIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                
                <div className="flex space-x-1 overflow-hidden">
                  {categories.slice(currentTabIndex, currentTabIndex + 3).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        selectedCategory === category
                          ? 'bg-black text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => handleCategoryChange('right')}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  disabled={currentTabIndex >= categories.length - 3}
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">from A$50</p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {currentServices.map((service) => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{service.duration}</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {service.description.length > 100 
                          ? `${service.description.substring(0, 100)}...` 
                          : service.description
                        }
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900">{service.price}</span>
                      <button
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-2 rounded-full transition-all ${
                          selectedServices.includes(service.id)
                            ? 'bg-purple-100 text-purple-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {selectedServices.includes(service.id) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  {/* Bundle Offer */}
                  {service.bundle && (
                    <div className="mt-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <button className="flex items-center justify-between w-full text-left">
                        <span className="text-sm font-medium text-purple-800">{service.bundle.text}</span>
                        <ChevronRight className="w-4 h-4 text-purple-600" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Booking Summary */}
        <div className="w-96 bg-gray-50 p-6 overflow-y-auto">
          {/* Clinic Information */}
          <div className="flex items-center space-x-3 mb-6 p-4 bg-white rounded-lg">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Future Clinic Modern Beauty</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <span>5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>(154)</span>
              </div>
              <p className="text-sm text-gray-600">4 Cross St, Double Bay, NSW</p>
            </div>
          </div>

          {/* Selected Services */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Selected Services</h3>
            {selectedServicesData.length === 0 ? (
              <p className="text-sm text-gray-500">No services selected</p>
            ) : (
              <div className="space-y-3">
                {selectedServicesData.map((service) => (
                  <div key={service?.id} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{service?.name}</p>
                      <p className="text-sm text-gray-600">{service?.duration} with any professional</p>
                    </div>
                    <span className="font-semibold text-gray-900">{service?.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Total */}
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-900">Total</span>
              <span className="font-bold text-xl text-gray-900">A${totalPrice}</span>
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={selectedServicesData.length === 0}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all ${
              selectedServicesData.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-black hover:bg-gray-800 transform hover:scale-105'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking; 