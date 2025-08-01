import { useState } from 'react';
import { ChevronDown, Star, Heart, Zap, Shield, Users, Award, Clock, Thermometer } from 'lucide-react';

const InfraredSauna = () => {
  const [expandedFAQ, setExpandedFAQ] = useState('difference');

  const benefits = [
    {
      title: "Detoxification",
      description: "Boosts blood circulation and stimulates the sweat glands to release toxins more quickly and efficiently.",
      icon: Shield
    },
    {
      title: "Weight loss",
      description: "You can burn from 300 to 600 calories during a 40-minute session, which is comparable to a 2-3 mile run.",
      icon: Zap
    },
    {
      title: "Clear skin",
      description: "Infrared sauna helps you to sweat more and assists in clearing clogged pores and acne-prone skin.",
      icon: Heart
    }
  ];

  const detailedBenefits = [
    {
      title: "Detoxification",
      description: "Infrared saunas help your body eliminate toxins, heavy metals, and other harmful substances through increased sweating and improved circulation."
    },
    {
      title: "Pain Relief",
      description: "The deep penetrating heat helps relax muscles, reduce inflammation, and alleviate chronic pain conditions."
    },
    {
      title: "Immune System Support",
      description: "Regular sessions can boost your immune system by increasing white blood cell production and improving overall health."
    },
    {
      title: "Relaxation and Stress Relief",
      description: "The gentle heat promotes deep relaxation, reduces stress hormones, and helps you unwind from daily pressures."
    },
    {
      title: "Skin Health",
      description: "Infrared therapy promotes collagen production, improves skin elasticity, and helps with various skin conditions."
    },
    {
      title: "Weight Loss and Metabolism Boost",
      description: "Sessions can increase your metabolic rate and help burn calories, supporting your weight loss goals."
    },
    {
      title: "Aids in Relaxation and Sleep",
      description: "The calming effects help improve sleep quality and can be beneficial for those with sleep disorders."
    },
    {
      title: "Improved Circulation",
      description: "Infrared heat dilates blood vessels, improving circulation and oxygen delivery throughout your body."
    },
    {
      title: "Cardiovascular Benefits",
      description: "Regular use can help lower blood pressure and improve overall cardiovascular health."
    }
  ];

  const faqs = [
    {
      id: 'difference',
      question: 'What is the difference between infrared and traditional saunas?',
      answer: 'Infrared saunas use infrared light to heat your body directly, while traditional saunas heat the air around you. Infrared saunas operate at lower temperatures (120-140°F vs 180-220°F) but provide deeper tissue penetration and more efficient detoxification. They are also more energy-efficient and easier to tolerate for longer sessions.',
      expanded: true
    },
    {
      id: 'calories',
      question: 'How many calories do you burn in infrared sauna?',
      answer: 'You can burn between 300-600 calories during a 40-minute infrared sauna session, which is comparable to a 2-3 mile run. The exact number depends on your body composition, session duration, and individual metabolism.',
      expanded: false
    },
    {
      id: 'frequency',
      question: 'How often should I have infrared sauna sessions?',
      answer: 'For optimal benefits, we recommend 3-4 sessions per week. Beginners should start with 1-2 sessions per week and gradually increase frequency. Each session typically lasts 20-40 minutes, depending on your comfort level and goals.',
      expanded: false
    },
    {
      id: 'friends',
      question: 'Can I enjoy my infrared sauna session with a friend or a partner?',
      answer: 'Yes! Our infrared saunas are designed to accommodate multiple people comfortably. Sharing a session with a friend or partner can enhance the experience and provide mutual motivation for regular use.',
      expanded: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">INFRARED SAUNA</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Holistic approach to your health
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK NOW
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
                GIFT VOUCHERS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <benefit.icon className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4 text-black">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Block - Restore in an infrared sauna */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Sauna Image */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-red-100 to-red-200 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-600/20"></div>
                <div className="text-center text-gray-700 relative z-10">
                  <div className="w-32 h-32 bg-red-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Thermometer className="w-16 h-16 text-red-600" />
                  </div>
                  <p className="text-lg font-semibold">Infrared Sauna</p>
                  <p className="text-sm">Light-colored wood with infrared heaters</p>
                  <p className="text-sm">Warm, therapeutic environment</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="animate-fade-in-up-delay">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Restore in an infrared sauna at
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
                <p>
                  Experience the transformative power of infrared sauna therapy at Future Clinic Modern Beauty. 
                  Our state-of-the-art infrared saunas provide a holistic approach to wellness, promoting vitality, 
                  balance, and deep relaxation.
                </p>
                <p>
                  Unlike traditional saunas, infrared technology penetrates deeper into your tissues, providing 
                  more effective detoxification and rejuvenation. The gentle heat allows you to enjoy longer sessions 
                  while achieving maximum benefits.
                </p>
                <p>
                  During your session, you can relax with your favorite media - podcasts, movies, music, or books. 
                  Our comfortable saunas are designed for your complete relaxation and wellness journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                  BOOK YOUR SESSION
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-black mb-4">
              Infrared sauna has lots of benefits for you
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover the comprehensive health benefits of regular infrared sauna sessions. 
              Our advanced technology provides numerous advantages for your overall wellbeing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailedBenefits.map((benefit, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-50 p-6 rounded-lg h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Frequently Asked Questions about infrared sauna
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    className="w-full bg-black text-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? '' : faq.id)}
                  >
                    <span className="text-left font-medium">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedFAQ === faq.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {expandedFAQ === faq.id && (
                    <div className="bg-white p-6 rounded-lg mt-2 animate-slide-down">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Session Information Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in-up">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Clock className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-black">Session Duration</h3>
                  <p className="text-gray-700">20-40 minutes per session</p>
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Thermometer className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-black">Temperature</h3>
                  <p className="text-gray-700">120-140°F (comfortable heat)</p>
                </div>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Zap className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-black">Calories Burned</h3>
                  <p className="text-gray-700">300-600 calories per session</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to experience the benefits?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your infrared sauna session today
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR SESSION
          </button>
        </div>
      </section>
    </div>
  );
};

export default InfraredSauna; 