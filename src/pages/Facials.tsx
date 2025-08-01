import { useState } from 'react';
import { ChevronDown, Star, CheckCircle, Zap, Shield, Users, Award, Clock, Heart, Sparkles } from 'lucide-react';

const Facials = () => {
  const [expandedTreatment, setExpandedTreatment] = useState('synthesis-organics');

  const benefits = [
    {
      title: "Cleansing",
      description: "Removes traces of makeup, sweat, dirt, and dead skin cells from your skin, allowing it to breathe freely.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Lifting",
      description: "Restore the lost volume and tighten loose skin while reducing expression lines and wrinkles.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Rejuvenate",
      description: "Combat the visible effects of aging skin, pigmentation, sun damage, and dull-looking skin.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const treatments = [
    {
      id: 'synthesis-organics',
      title: 'Synthesis Organics - Elevate Holistic Buccal Lift & Sculpt Facial Alchemy - 90 minutes',
      description: 'A non-surgical "facelift" treatment that combines lymphatic massage with certified organic ingredients for collagen boosting and skin rejuvenation. This comprehensive facial includes deep tissue sculpting and optional RedLight Therapy for enhanced results.',
      expanded: true
    },
    {
      id: 'acne-recovery',
      title: 'Acne recovery peel',
      description: 'Specialized treatment for acne-prone skin that helps reduce inflammation and promote healing.',
      expanded: false
    },
    {
      id: 'anti-aging',
      title: 'Anti-aging peel',
      description: 'Advanced peel treatment designed to reduce fine lines, wrinkles, and age spots.',
      expanded: false
    },
    {
      id: 'cosmelan',
      title: 'Cosmelan facial',
      description: 'Professional depigmentation treatment for melasma and hyperpigmentation.',
      expanded: false
    },
    {
      id: 'dna-peel',
      title: 'DNA peel',
      description: 'Revolutionary treatment that targets cellular damage and promotes skin regeneration.',
      expanded: false
    },
    {
      id: 'intraoral',
      title: 'IntraOral facial massage',
      description: 'Internal and external massage technique for facial muscle toning and lymphatic drainage.',
      expanded: false
    },
    {
      id: 'seasonal',
      title: 'Intense seasonal recovery treatment',
      description: 'Comprehensive treatment designed to repair seasonal skin damage and restore vitality.',
      expanded: false
    },
    {
      id: 'acne-management',
      title: 'Acne management treatment',
      description: 'Ongoing treatment program for managing and preventing acne breakouts.',
      expanded: false
    },
    {
      id: 'red-carpet',
      title: 'Red carpet facial',
      description: 'Luxury treatment for special occasions, providing immediate radiance and glow.',
      expanded: false
    },
    {
      id: 'skin-lifting',
      title: 'Skin lifting facial',
      description: 'Advanced lifting treatment that targets sagging skin and improves facial contours.',
      expanded: false
    },
    {
      id: 'skin-needling',
      title: 'Skin needling',
      description: 'Minimally invasive treatment that stimulates collagen production for skin rejuvenation.',
      expanded: false
    },
    {
      id: 'triple-anti-aging',
      title: 'Triple anti-aging facial',
      description: 'Comprehensive anti-aging treatment combining multiple techniques for maximum results.',
      expanded: false
    },
    {
      id: 'mini-facial',
      title: 'Mini facial',
      description: 'Quick treatment for busy schedules, providing essential skin care in a shorter time.',
      expanded: false
    },
    {
      id: 'sculpting',
      title: 'Sculpting face lift massage',
      description: 'Specialized massage technique that lifts and sculpts facial muscles for a more defined appearance.',
      expanded: false
    }
  ];

  const ultraformerBenefits = [
    "Skin tightening",
    "Lifting effect",
    "Wrinkle reduction",
    "Long-lasting results",
    "Customizable treatments",
    "Minimal downtime",
    "Minimal discomfort",
    "No downtime",
    "Suitable for all skin types"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="animate-fade-in-up">
              <p className="text-sm text-gray-500 mb-2">FACIALS</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Advanced Facials
              </h1>
            </div>
            <div className="animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sm text-gray-500 mb-2">YOUR SKIN DESERVES THE BEST TREATMENTS</p>
            <h2 className="text-4xl font-bold mb-8 text-black">What are the benefits of facials?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up-delay">
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              BOOK YOUR CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Focused Treatments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Facials focussed on your needs
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Anti-wrinkle Treatments */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Anti-wrinkle facial treatments"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-black">Anti-wrinkle facial treatments</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our non-surgical facial treatments combine advanced dermalinfusion techniques with LED therapy 
                    to boost collagen and elastin production. Each treatment includes personalized sculpting massage 
                    to target specific areas of concern and promote natural skin rejuvenation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    These treatments are designed to address fine lines, wrinkles, and loss of skin elasticity 
                    through a combination of deep cleansing, exfoliation, and targeted therapies that stimulate 
                    your skin's natural healing processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Acne Treatments */}
            <div className="animate-fade-in-up-delay">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Acne treatments"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-black">Acne treatments</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Break free from the cycle of acne with our comprehensive approach to skin clearing. 
                    Our treatments begin with a deep cleanse to remove impurities, followed by high frequency 
                    technology to target bacteria and reduce inflammation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We combine red and LED light therapy to accelerate healing and prevent future breakouts, 
                    leaving you with clearer, smoother skin and enlarged pores. Our acne treatments are 
                    customized to your specific skin type and concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "Beautiful place, professional staff, my facial experience was amazing! The salon has everything 
                you need from waxing, to hair, shower, massage to facial treatments and many more! Wonderful 
                hours of Double Bay! Thank you Ada and Poppy!"
              </p>
              <h4 className="text-xl font-bold text-black mb-2">Layla K.</h4>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK YOUR TREATMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ultraformer MPT Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Introducing Facials with Ultraformer MPT
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ultraformer MPT represents the latest advancement in facial rejuvenation, utilizing 
                micro-focused ultrasound technology to provide lifting and tightening effects without surgery. 
                This innovative treatment targets multiple layers of the skin for comprehensive results.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-black">Benefits of Ultraformer MPT facials:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {ultraformerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                Book Consultation
              </button>
            </div>
            
            <div className="animate-fade-in-up-delay">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Ultraformer MPT treatment"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Range Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Explore our wide range of facials
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
              {treatments.map((treatment, index) => (
                <div key={treatment.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    className="w-full bg-black text-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    onClick={() => setExpandedTreatment(expandedTreatment === treatment.id ? '' : treatment.id)}
                  >
                    <span className="text-left font-medium">{treatment.title}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedTreatment === treatment.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedTreatment === treatment.id && (
                    <div className="bg-gray-50 p-6 rounded-lg mt-2 animate-slide-down">
                      <p className="text-gray-700 leading-relaxed">{treatment.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to transform your skin?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your consultation with our expert facial specialists
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default Facials; 