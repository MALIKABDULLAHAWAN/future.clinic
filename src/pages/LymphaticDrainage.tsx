import { useState } from 'react';
import { ChevronDown, Star, CheckCircle, Heart, Zap, Shield, Clock } from 'lucide-react';

const LymphaticDrainage = () => {
  const [activeTab, setActiveTab] = useState('pre-treatment');
  const [expandedFAQ, setExpandedFAQ] = useState('safety');

  const benefits = [
    {
      title: "Recovery & Surgery",
      items: [
        "Speed up recovery with improved results after liposuction, blepharoplasty, face lifts, tummy tucks and other surgeries",
        "Reduced post-surgical swelling and scarring",
        "Anxiety relief",
        "Pain recovery"
      ]
    },
    {
      title: "Health & Wellness",
      items: [
        "Stronger immune system",
        "Joint and arthritis inflammation reduction",
        "Reduced chronic fatigue syndrome symptoms",
        "Irritable bowel syndrome symptoms"
      ]
    },
    {
      title: "Beauty & Appearance",
      items: [
        "Reduced appearance of cellulite",
        "Toned and tightened skin",
        "Posture improvement",
        "Maxima healing",
        "Reduced pressure on the extremities with healing varicose veins",
        "Constipation relief"
      ]
    }
  ];

  const preTreatmentSteps = [
    "Don't take ibuprofen and other blood thinner medications one week before the treatment to reduce the risk of bruising",
    "Wear loose, comfortable clothing to your appointment to avoid impeding natural lymph flow",
    "Drink plenty of water to encourage lymph flow",
    "Eat something light"
  ];

  const faqs = [
    {
      id: 'safety',
      question: 'Is manual lymphatic drainage massage safe?',
      answer: 'Manual lymphatic drainage massage is a safe treatment, however there are some conditions and circumstances where lymphatic drainage massage is not recommended:',
      contraindications: [
        'You have a heart condition',
        'You have kidney failure',
        'You have blood clots',
        'You have an infection'
      ],
      expanded: true
    },
    {
      id: 'results',
      question: 'When will I see results from lymphatic drainage massage?',
      answer: 'Most clients notice immediate improvements in swelling and fluid retention after their first session. For optimal results, we recommend a series of treatments.',
      contraindications: [],
      expanded: false
    },
    {
      id: 'pain',
      question: 'Is manual lymphatic drainage massage painful?',
      answer: 'No, manual lymphatic drainage massage is gentle and non-invasive. The technique uses light, rhythmic pressure that should feel relaxing and soothing.',
      contraindications: [],
      expanded: false
    },
    {
      id: 'how-it-works',
      question: 'How does manual lymphatic drainage massage work?',
      answer: 'The treatment uses gentle, rhythmic movements to stimulate the lymphatic system, helping to move lymph fluid through the body and remove toxins and waste products.',
      contraindications: [],
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Lymphatic Drainage
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK NOW
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
                GIFT CARDS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Manual Lymphatic Drainage Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                What is manual lymphatic drainage massage?
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Manual lymphatic drainage massage is a specialized form of medical massage that enhances the flow of lymph fluid. 
                  This gentle, therapeutic technique helps eliminate toxins and stimulates blood circulation and tissue regeneration.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 text-black">Conditions treated:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Lymphedema</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Buildup of lymphatic fluid in specific areas of the body</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Swelling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Water retention</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-lg font-semibold text-black">
                    The manual lymphatic drainage massage treatment is 1-2 hours and costs from $190-$220, depending on individual needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-center mb-8 text-black">
                What are the benefits of manual lymphatic drainage?
              </h2>
              
              <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed">
                Almost everyone can benefit from the detoxifying effects of manual lymphatic drainage massage. 
                Here are some of the benefits you may experience after this treatment:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((category, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                      <h3 className="text-xl font-bold mb-4 text-black">{category.title}</h3>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "I just had the best lymphatic massage of my life here - and trust me I've had many! I paired it with a colonic 
                and can already notice that my complexion is much brighter and clearer. Highly recommend!"
              </blockquote>
              <h4 className="text-xl font-bold text-black mb-2">Hannah S.</h4>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre/During/Post Treatment Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-center mb-12 text-black">
                Treatment Information
              </h2>
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center mb-8">
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'pre-treatment'
                      ? 'bg-black text-white'
                      : 'bg-white text-black border-2 border-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('pre-treatment')}
                >
                  Pre-treatment
                </button>
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mx-2 ${
                    activeTab === 'during'
                      ? 'bg-black text-white'
                      : 'bg-white text-black border-2 border-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('during')}
                >
                  During your session
                </button>
                <button
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'post-treatment'
                      ? 'bg-black text-white'
                      : 'bg-white text-black border-2 border-black hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveTab('post-treatment')}
                >
                  Post-treatment
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                {activeTab === 'pre-treatment' && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-black">Pre-treatment</h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      To get the best results from your manual lymphatic drainage massage, we recommend you to follow 4 simple steps prior your appointment:
                    </p>
                    <ul className="space-y-3">
                      {preTreatmentSteps.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {activeTab === 'during' && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-black">During your session</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      During your lymphatic drainage massage session, you'll experience gentle, rhythmic movements that stimulate 
                      your lymphatic system. The treatment is performed with light pressure and should feel relaxing and soothing. 
                      Your therapist will work systematically through different areas of your body to encourage proper lymph flow.
                    </p>
                  </div>
                )}
                
                {activeTab === 'post-treatment' && (
                  <div className="animate-fade-in-up">
                    <h3 className="text-2xl font-bold mb-6 text-black">Post-treatment</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      After your lymphatic drainage massage, it's important to stay hydrated and avoid strenuous exercise for 24 hours. 
                      You may notice immediate improvements in swelling and fluid retention. For optimal results, we recommend 
                      following up with additional sessions as recommended by your therapist.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Frequently Asked Questions
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
                    <div className="bg-gray-50 p-6 rounded-lg mt-2 animate-slide-down">
                      <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                      
                      {faq.contraindications.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-black mb-2">Contraindications:</h4>
                          <ul className="space-y-2">
                            {faq.contraindications.map((contraindication, contraIndex) => (
                              <li key={contraIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{contraindication}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
            Ready to experience the benefits?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your lymphatic drainage massage today
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR SESSION
          </button>
        </div>
      </section>
    </div>
  );
};

export default LymphaticDrainage; 