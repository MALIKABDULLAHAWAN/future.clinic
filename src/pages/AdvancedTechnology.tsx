import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle, Zap, Sparkles, Target } from 'lucide-react';

const AdvancedTechnology = () => {
  const [activeTab, setActiveTab] = useState('ultraformer');

  const technologies = [
    {
      id: 'ultraformer',
      name: 'Ultraformer MPT',
      subtitle: 'Advanced Ultrasound Technology',
      description: 'Non-surgical lifting and tightening using advanced ultrasound technology for natural, long-lasting results.',
      benefits: [
        'Non-surgical face and body lifting',
        'Stimulates natural collagen production',
        'Tightens and firms skin',
        'Reduces fine lines and wrinkles',
        'Improves skin texture and tone',
        'Long-lasting results'
      ],
      features: [
        'Advanced ultrasound technology',
        'Precise targeting of treatment areas',
        'Minimal downtime',
        'Natural-looking results',
        'Suitable for face and body',
        'FDA-approved technology'
      ],
      pricing: 'From $300-$500 per session',
      duration: '30-60 minutes',
      image: 'ultraformer-treatment.jpg'
    },
    {
      id: 'indiba',
      name: 'INDIBA Therapy',
      subtitle: 'Radio Frequency Regeneration',
      description: 'Advanced radio frequency technology that promotes tissue regeneration, accelerates healing, and reduces pain and inflammation.',
      benefits: [
        'Tissue regeneration and healing',
        'Accelerated recovery process',
        'Pain and inflammation reduction',
        'Improved blood circulation',
        'Enhanced skin elasticity',
        'Post-operative care support'
      ],
      features: [
        'Radio frequency technology',
        'Deep tissue penetration',
        'Non-invasive treatment',
        'Suitable for all skin types',
        'Post-surgical recovery support',
        'Professional medical-grade technology'
      ],
      pricing: 'From $200-$350 per session',
      duration: '30-90 minutes',
      image: 'indiba-therapy.jpg'
    },
    {
      id: 'truflex',
      name: 'truFlex Muscle',
      subtitle: 'Muscle Stimulation Technology',
      description: 'Advanced muscle stimulation technology that provides strength training and muscle toning without traditional exercise.',
      benefits: [
        'Muscle strengthening and toning',
        'Equivalent to thousands of sit-ups',
        'Improved muscle definition',
        'Enhanced strength and endurance',
        'Non-invasive muscle building',
        'Time-efficient workouts'
      ],
      features: [
        'Electrical muscle stimulation',
        'Targeted muscle groups',
        'Customizable intensity levels',
        'No physical exertion required',
        'Suitable for all fitness levels',
        'Professional-grade equipment'
      ],
      pricing: 'From $200-$250 per session',
      duration: '20-40 minutes',
      image: 'truflex-muscle.jpg'
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "The Ultraformer MPT treatment exceeded my expectations. My skin is noticeably tighter and more youthful. Highly recommend!",
      treatment: "Ultraformer MPT"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "INDIBA therapy helped me recover much faster after my surgery. The pain reduction was incredible and the healing process was accelerated.",
      treatment: "INDIBA Therapy"
    },
    {
      name: "Emma L.",
      rating: 5,
      text: "truFlex Muscle sessions have transformed my body. I've gained muscle tone and strength without spending hours at the gym.",
      treatment: "truFlex Muscle"
    }
  ];

  const faqs = [
    {
      question: "How long do the results last?",
      answer: "Results vary by treatment and individual, but most advanced technology treatments provide long-lasting results when combined with proper maintenance and follow-up sessions."
    },
    {
      question: "Are these treatments safe?",
      answer: "Yes, all our advanced technology treatments use FDA-approved equipment and are performed by trained professionals. We prioritize safety and effectiveness in all our procedures."
    },
    {
      question: "How many sessions do I need?",
      answer: "The number of sessions depends on your goals and the specific treatment. We'll create a personalized treatment plan during your consultation."
    },
    {
      question: "Is there any downtime?",
      answer: "Most advanced technology treatments have minimal to no downtime, allowing you to return to your daily activities immediately after treatment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">ADVANCED TECHNOLOGY</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Advanced Technology
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of beauty and wellness with our cutting-edge technologies. 
              From non-surgical lifting to muscle stimulation, we offer the latest innovations in aesthetic treatments.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK YOUR CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Technology Tabs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Our Advanced Technologies
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Discover our range of cutting-edge treatments designed to enhance your natural beauty and wellness
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTab(tech.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tech.id
                      ? 'bg-black text-white shadow-lg'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className={`animate-fade-in-up ${
                  activeTab === tech.id ? 'block' : 'hidden'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-black">
                      {tech.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {tech.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {tech.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-black">Key Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tech.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold mb-4 text-black">Treatment Features</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tech.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Sparkles className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Duration */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-bold text-black mb-2">Treatment Duration</h5>
                          <p className="text-gray-700">{tech.duration}</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-black mb-2">Investment</h5>
                          <p className="text-gray-700">{tech.pricing}</p>
                        </div>
                      </div>
                    </div>

                    <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                      BOOK {tech.name.toUpperCase()}
                    </button>
                  </div>

                  {/* Image Placeholder */}
                  <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                      <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 font-semibold">{tech.name}</p>
                      <p className="text-gray-400 text-sm">Treatment Image</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-700">
                Real results from real clients using our advanced technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-black">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.treatment}</p>
                    </div>
                    <Heart className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700">
                Everything you need to know about our advanced technology treatments
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold text-black mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to Experience Advanced Technology?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your free consultation to discover which advanced treatment is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK FREE CONSULTATION
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              VIEW ALL TREATMENTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedTechnology; 