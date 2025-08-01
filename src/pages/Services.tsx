import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle, Zap, Sparkles, Target, DollarSign } from 'lucide-react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Services');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [
    'All Services',
    'Featured',
    'MASSAGE',
    'SKIN BOOSTERS',
    'DETOX THERAPIES',
    'COMPLIMENTARY CONSULTATIONS',
    'SCAR THERAPY',
    'INDIBA FACIAL TREATMENTS',
    'INDIBA FACE & BODY SCULPTURE',
    'MANUAL LYMPHATIC DRAINAGE',
    'WISHPRO FACE, NECK & BODY',
    'COSMETOLOGY + FACIALS',
    'FACE AND BODY PEELS',
    'HEALITE II LED',
    'SYNTHESIS ORGANICS',
    'ULTRAFORMER MPT HIFU',
    'INDIBA RADIO FREQUENCY BODY THERAPY AND FAT REDUCTION',
    'TRUFLEX RAPID MUSCLE SCULPTING',
    'POST-OP RECOVERY',
    'INDIBA THERAPEUTIC TREATMENTS',
    'WOMEN\'S HEALTH',
    'INFRARED SAUNA',
    'SPA THERAPY',
    'MAKE-UP WITH CLAUDIA FABIANI'
  ];

  const services = [
    {
      id: 'truflex-rapid-muscle-sculpting',
      name: 'truFlex Rapid Muscle Sculpting',
      duration: '1 hr',
      price: 'A$350',
      category: 'TRUFLEX RAPID MUSCLE SCULPTING',
      description: 'Delivering the equivalent of 54,000 crunches in a single session truFlex is a unique muscle stimulation technology that adjusts to your fitness level, shape and goals to strengthen, firm and tone your body with up to 16 hand pieces targeting small and large muscle groups. Optimal results are seen after 4-6 treatments.',
      benefits: [
        'Achieve fat reduction and muscle toning in one treatment package',
        'Experience the ultimate workout in your lunch break',
        'No downtime',
        'Combine it with other treatments',
        'Suitable for people of all fitness levels',
        'Reduces Cellulite',
        'Achieve up to a 24% reduction in body fat and up to a 30% increase in muscle mass'
      ],
      featured: true
    },
    {
      id: 'post-op-body-recovery-indiba',
      name: 'Post-Op Body Recovery with INDIBA',
      duration: '1 hr',
      price: 'A$350',
      category: 'POST-OP RECOVERY',
      description: 'Surgical interventions cause inflammation, pain, oedema, haematomas and scars. Lymphatic drainage, other massage techniques and scar treatment combined with our Radiofrequency help to accelerate tissue repair, making recovery faster, less painful and less traumatic. With our treatment we promote faster and deeper tissue regeneration, with visible results from the first session.',
      note: '⚠️ We recommend sessions at least 3 times a week for a minimum of 3-4 weeks. This treatment plan is made individually with each patient, observing their condition, evolution and needs. Incorporating customised techniques such as lymphatic drainage, cupping, needles, myofascial massage, hypopressive exercise method, kinesio taping and radio frequency, your recovery is faster, with less pain and an optimised result.',
      featured: true
    },
    {
      id: 'indiba-face',
      name: 'Indiba Face',
      duration: '30 mins',
      price: 'A$250',
      category: 'INDIBA FACIAL TREATMENTS',
      description: 'Firming and Lifting, V shaping, buccal fat reduction, improve facia skin and tissue quality. Indiba Radio Frequency promotes the biological response of the tissue, achieving magnificent results in rejuvenation, revitalization, lifting and hydration of the skin. Total reverse ageing & skin rejuvenation for face, eyes, neck and dec with focus on problem areas. See an instant lift and tighten in one treatment.',
      details: 'The exclusive INDIBA Deep Beauty method rebalances the ions\' cellular exchange, helping cells recover their natural function. This enables the skin tissue to regain lost elasticity, reduce fat and allow oxygen to flow more freely between cells. With microcirculation restored, the skin will be significantly rejuvenated, revived, and healthy.',
      featured: true
    },
    {
      id: 'rejurub-skin-booster-face',
      name: 'Rejurub Skin Booster Face',
      duration: '45 mins',
      price: 'A$670',
      category: 'SKIN BOOSTERS',
      description: 'WRINKLE REDUCTION | ELASTICITY IMPROVEMENT | SKIN BRIGHTENING Rejurub New Skin Boost (Salmon DNA). Rejurub uses biocompatible material "PN" to revive deteriorated skin. Rejurub helps you achieve profound beauty by delivering sodium DNA (Salmon DNA), a bio-complex substance to the epidermis and dermis, improving the physiological conditions of damaged skin from the inside.',
      note: 'Our skin regeneration cycle gets longer with age. With Rejurub your skin regeneration cycle gets back to normal.',
      featured: true
    },
    {
      id: 'healite-ii-led-collagen-mask',
      name: 'HEALITE II with LED Collagen Mask (add on)',
      duration: '25 mins',
      price: 'A$80',
      category: 'HEALITE II LED',
      description: 'Relax under the powerful Healite II whilst the LED Boost mask is activated under the light to improve hydration, brightening and calming of the skin. You will notice the immediate glow and feel the dewy difference.',
      details: 'This mask is created specifically for LED use and will deliver rich beneficial skin nutrients, collagen and moisture while calming the skin and reducing redness. We recommend this treatment after a day outdoors for its hydrating and calming benefits.',
      featured: true
    },
    {
      id: 'ultraformer-mpt-hifu-elite',
      name: 'Ultraformer MPT HIFU Elite Full Face Rejuvenation (inc Hollywood Lift + Glow)',
      duration: '2 hrs',
      price: 'A$2,500',
      category: 'ULTRAFORMER MPT HIFU',
      description: 'The ULTRAFORMER MPT HIFU 2024 is the latest technology offering a completely painless and non-invasive Face lifting and tightening, Body tightening and contouring that provides customised treatment procedures for the entire Face, Neck and Body.',
      details: 'Utilising HIFU (High Intensity Focussed Ultrasound) technology with Micro and Macro Focussed Cartridges, the ULTRAFORMER MPT delivers uniform ultrasound energy that induces thermal coagulation in the Face and Body. The MPT also has the Ultra Booster Cartridge that creates a Synergy Effect with an Exclusive Ultraformer Ampoule for anti-aging, moisturising and brightening indicated for all skin types and ages containing 7 Hyaluronic Acids/10 Multi-Peptides/17 Amino Acids.',
      featured: true
    },
    {
      id: 'spa-massage',
      name: 'Spa Massage',
      duration: '1 hr - 1 hr, 30 mins',
      price: 'from A$190',
      category: 'MASSAGE',
      description: 'Relaxing spa massage therapy for complete body relaxation and stress relief.',
      featured: false
    },
    {
      id: 'therapeutic-massage-saila',
      name: 'Therapeutic Massage with Saila',
      duration: '1 hr - 1 hr, 30 mins',
      price: 'from A$250',
      category: 'MASSAGE',
      description: 'Professional therapeutic massage with Saila for deep tissue work and muscle recovery.',
      featured: false
    },
    {
      id: 'ultra-booster-rejuvenation-arms',
      name: 'Ultra Booster Rejuvenation Arms',
      duration: '30 mins',
      price: 'A$790',
      category: 'SKIN BOOSTERS',
      description: 'Advanced skin booster treatment specifically designed for arm rejuvenation and tightening.',
      featured: false
    }
  ];

  const filteredServices = selectedCategory === 'All Services' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleBooking = () => {
    const freshaUrl = 'https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true';
    window.open(freshaUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional beauty and wellness treatments. 
              From advanced skin boosters to therapeutic massages, we offer cutting-edge solutions for your beauty and wellness needs.
            </p>
            <button
              onClick={handleBooking}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      {selectedCategory === 'All Services' && (
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Featured Services
              </h2>
              <p className="text-lg text-gray-700">
                Our most popular and advanced treatments
              </p>
            </div>

            <div className="grid-responsive">
              {services.filter(service => service.featured).map((service, index) => (
                <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in-up card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-black mb-2">{service.name}</h3>
                        <p className="text-sm text-gray-600">{service.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-black">{service.price}</p>
                        <p className="text-sm text-gray-500">{service.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    
                    {service.benefits && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-black mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-700">
                              <Sparkles className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.details && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{service.details}</p>
                      </div>
                    )}
                    
                    {service.note && (
                      <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                        <p className="text-sm text-yellow-800">{service.note}</p>
                      </div>
                    )}
                    
                    <button
                      onClick={handleBooking}
                      className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid"
                    >
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-black">
              {selectedCategory === 'All Services' ? 'All Services' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-700">
              {selectedCategory === 'All Services' 
                ? 'Complete list of all our professional treatments' 
                : `All services in ${selectedCategory}`
              }
            </p>
          </div>

          <div className="space-y-6">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-gray-50 rounded-xl p-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{service.category}</p>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="text-right ml-6">
                    <p className="text-2xl font-bold text-black">{service.price}</p>
                    <p className="text-sm text-gray-500">{service.duration}</p>
                  </div>
                </div>
                
                {expandedService === service.id && (
                  <div className="mt-4 space-y-4">
                    {service.benefits && (
                      <div>
                        <h4 className="font-semibold text-black mb-2">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {service.details && (
                      <div>
                        <h4 className="font-semibold text-black mb-2">Treatment Details:</h4>
                        <p className="text-gray-700 leading-relaxed">{service.details}</p>
                      </div>
                    )}
                    
                    {service.note && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Important Note:</h4>
                        <p className="text-blue-800">{service.note}</p>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="text-black font-semibold hover:text-gray-700 transition-colors duration-300"
                  >
                    {expandedService === service.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button
                    onClick={handleBooking}
                    className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-700">
                Experience the difference with our professional team and advanced technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Expert Team</h3>
                <p className="text-gray-700">Highly trained professionals with years of experience in beauty and wellness</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Advanced Technology</h3>
                <p className="text-gray-700">State-of-the-art equipment and cutting-edge treatment technologies</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Personalized Care</h3>
                <p className="text-gray-700">Customized treatment plans tailored to your individual needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Beauty Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your consultation today and discover the perfect treatment for you
          </p>
          <button
            onClick={handleBooking}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;