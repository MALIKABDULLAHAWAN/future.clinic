import { useState } from 'react';
import { ChevronDown, Star, CheckCircle, Play, Heart, Zap, Shield } from 'lucide-react';

const BodyContouring = () => {
  const [expandedTreatment, setExpandedTreatment] = useState('non-surgical-lifting');

  const treatments = [
    {
      id: 'non-surgical-lifting',
      title: 'Non-surgical body lifting',
      description: 'Treatment focusing on butt and thighs, using INDIBA Deep Care with monopolar radiofrequency at 448 kHz.',
      effects: [
        'Hyperactivation (hyperthermia)',
        'Vascularization (thermal)',
        'Biostimulation (sub-thermal)'
      ],
      price: 'The non-surgical butt lifting treatment is 30 minutes and costs $250-$400 per session.',
      expanded: true
    },
    {
      id: 'breast-lifting',
      title: 'Non-surgical breast lifting and firming',
      description: 'Advanced treatment for breast contouring and firming using innovative non-surgical techniques.',
      effects: [],
      price: '',
      expanded: false
    },
    {
      id: 'arm-contouring',
      title: 'Non-surgical arm contouring',
      description: 'Specialized treatment for arm sculpting and toning without surgery.',
      effects: [],
      price: '',
      expanded: false
    },
    {
      id: 'body-sculpting',
      title: 'Body sculpting and tightening',
      description: 'Comprehensive body sculpting treatment for overall body contouring and tightening.',
      effects: [],
      price: '',
      expanded: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="animate-fade-in-up">
              <p className="text-sm text-gray-500 mb-2">SCULPTING & SHAPING</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Body Contouring
              </h1>
            </div>
            <div className="animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK YOUR TREATMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Does Body Contouring Do Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Body Contouring Treatment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="animate-fade-in-up-delay">
              <h2 className="text-3xl font-bold mb-6 text-black">
                What does non-surgical body contouring do?
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Non-surgical body contouring treatments at FUTURE CLINIC Modern Beauty improve blood and lymphatic circulation, 
                  revitalize the nervous system, and stimulate the production of elastin, collagen, and vitamin E. These treatments 
                  work to improve muscle tone and overall body composition.
                </p>
                
                <p>
                  Our advanced techniques focus on tightening skin, reducing fluid retention, and combating cellulite. The treatments 
                  reduce fat and reshape the body while rejuvenating the skin, providing natural-looking results without the need for surgery.
                </p>
                
                <p>
                  We believe in enhancing your natural beauty, hence all our treatments are non-surgical. Our body contouring procedures 
                  are designed to help you achieve your desired body shape through safe, effective, and innovative techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Choose the body contouring treatment that works for you
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* INDIBA Body Contouring */}
            <div className="animate-fade-in-up">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="INDIBA Body Contouring"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">INDIBA Body Contouring</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    A super non-invasive treatment using INDIBA DeepBeauty system at 448 kHz frequency, leading to three different 
                    treatment effects for comprehensive body contouring.
                  </p>
                  <p className="text-lg font-semibold text-black">Price starts from $250-$400 per session.</p>
                </div>
              </div>
            </div>

            {/* InFlex Body Sculpting */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="InFlex Body Sculpting"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-black ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">InFlex Body Sculpting</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    InFlex technology for sculpting, toning, and gaining, delivering 54,000 muscle contractions in 30 minutes 
                    with 7 Tesla magnetic energy. Achieve 22% reduction in body fat and a staggering 20% increase in muscle mass.
                  </p>
                  <p className="text-lg font-semibold text-black">Price is $300-$500 per session.</p>
                </div>
              </div>
            </div>

            {/* Body Contouring */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Body Contouring"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-black">Body Contouring</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Innovative technique combining Manual Lymphatic Drainage with Modern Therapy, Japanese Blood Circulation 
                    and Lymphatic Drainage Massage. Improves blood circulation, reduces fluid retention, combats cellulite, 
                    and improves skin tone and firmness.
                  </p>
                  <p className="text-lg font-semibold text-black">Price starts from $200-$350 per session.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                "I've just finished my body contouring treatment with Trudee and couldn't be any happier with the results. 
                Not only my tummy and legs are firmer, but also smoother and better shaped. I immensely enjoyed the session. 
                Claudia is an outstanding professional who adapted each session and designed a specific protocol to my specific needs. 
                Highly recommended!"
              </p>
              <h4 className="text-xl font-bold text-black mb-2">A GR</h4>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <div className="animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">Not sure what treatment to choose?</p>
            <h2 className="text-3xl font-bold mb-8 text-black">Book a free body consultation</h2>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* How Body Contouring Can Help Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            How Body Contouring can help?
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
                      <p className="text-gray-700 leading-relaxed mb-4">{treatment.description}</p>
                      
                      {treatment.effects.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-black mb-2">Treatment Effects:</h4>
                          <ul className="space-y-2">
                            {treatment.effects.map((effect, effectIndex) => (
                              <li key={effectIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{effect}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {treatment.price && (
                        <p className="text-lg font-semibold text-black">{treatment.price}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to transform your body?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Buy more and save
          </p>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK A FREE CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default BodyContouring; 