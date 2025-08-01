import { useState } from 'react';
import { ChevronDown, Star, Heart, Zap, Shield, Users, Award, Clock } from 'lucide-react';

const SpaMassages = () => {
  const [expandedFAQ, setExpandedFAQ] = useState('neck-pain');

  const benefits = [
    {
      title: "Relax",
      description: "Unwind and restore your mind and body with our soothing massage. Let the stress melt away.",
      icon: Heart
    },
    {
      title: "Release pain",
      description: "Say goodbye to pain and hello to a world of relaxation and wellbeing with our expert touch.",
      icon: Zap
    },
    {
      title: "Flush toxins",
      description: "Rejuvenate your body's natural flow of fluids and leave that anxiety in flushing away harmful substances.",
      icon: Shield
    }
  ];

  const massages = [
    {
      title: "Manual Lymphatic Drainage",
      description: "This is a gentle massage technique designed to stimulate the flow of lymph, a fluid that helps remove waste and toxins from the body tissues.",
      link: "/lymphatic-drainage"
    },
    {
      title: "Body Contouring",
      description: "With combined extensive years of experience our team has developed expert protocols in the area of body contouring. We utilize the latest technology to achieve outstanding results.",
      link: "/body-contouring"
    },
    {
      title: "Bespoke Massage",
      description: "Massage with deep tissue technique realign fascia, supporting muscles, organs, nerves, and bones, and targets the body's deepest accessible muscle layers.",
      link: "/bespoke-massage"
    },
    {
      title: "Therapeutic Massage",
      description: "Customized treatment by our Spanish therapist Bella, incorporating different specialized techniques to address pain, muscular-skeletal, neuro-muscular and other disorders.",
      link: "/therapeutic-massage"
    },
    {
      title: "Couples Massage",
      description: "Escape from the hustle and bustle of everyday life and indulge in the World experience of a couples massage.",
      link: "/couples-massage"
    },
    {
      title: "Pregnancy Massage",
      description: "Indulge in the soothing touch of our trained therapist who understands the unique needs of pregnancy.",
      link: "/pregnancy-massage"
    }
  ];

  const spaTreatments = [
    {
      title: "Infrared Saunas",
      description: "Experience rejuvenation with our Clearlight Infrared Sauna in Double Bay, designed to expel toxins from your body. The infrared rays aid in cellular healing, enhancing your well-being right down to the molecular level.",
      link: "/infrared-saunas"
    },
    {
      title: "Detox Body Wrap",
      description: "Our premium Bentonite clay, sourced from the depths of the earth in the USA, France, and Italy, effectively draws out toxins and pollutants that surround us every day.",
      link: "/detox-body-wrap"
    },
    {
      title: "Detox Body Scrub",
      description: "Indulge in the luxury of a detox body scrub and massage. Experience deep relaxation during the several layers of bliss treatment as your skin is gently exfoliated and nourished.",
      link: "/detox-body-scrub"
    }
  ];

  const pressLogos = [
    "BUSINESS MAGAZINE",
    "VOGUE",
    "a-beauty",
    "BEAUTICARE",
    "Women's Weekly",
    "Daily Mail",
    "BODY",
    "au"
  ];

  const faqs = [
    {
      id: 'neck-pain',
      question: 'What type of massage is best for neck pain?',
      answer: 'Massage may provide you some relief and help loosen your neck so that you can move your head without pain. If you think that there\'s more to your neck pain than stress, you may find more benefit from deep tissue massage. We can evaluate your needs to identify trigger points that may be the source of your chronic pain.',
      expanded: true
    },
    {
      id: 'nerve-entrapment',
      question: 'Can massage help nerve entrapment?',
      answer: 'Yes, massage therapy can help with nerve entrapment by reducing muscle tension and inflammation that may be compressing the nerve. Our therapists use specific techniques to release pressure and improve nerve function.',
      expanded: false
    },
    {
      id: 'migraines',
      question: 'How can massage help to treat migraines and headaches?',
      answer: 'Massage therapy can help reduce the frequency and intensity of migraines and headaches by relieving muscle tension, improving blood circulation, and reducing stress levels that often trigger these conditions.',
      expanded: false
    },
    {
      id: 'pregnancy',
      question: 'Is it safe to get a massage while pregnant?',
      answer: 'Yes, pregnancy massage is safe when performed by a trained therapist. Our pregnancy massage specialists understand the unique needs of expectant mothers and use appropriate techniques and positioning.',
      expanded: false
    },
    {
      id: 'weight-loss',
      question: 'Can massage help me lose weight?',
      answer: 'While massage doesn\'t directly cause weight loss, it can support your weight loss journey by reducing stress, improving circulation, and helping with muscle recovery after exercise.',
      expanded: false
    },
    {
      id: 'first-visit',
      question: 'What should I expect during my first massage therapy visit?',
      answer: 'During your first visit, we\'ll discuss your health history, current concerns, and preferences. Your therapist will explain the treatment plan and ensure you\'re comfortable throughout the session.',
      expanded: false
    },
    {
      id: 'undressed',
      question: 'Do I have to be completely undressed?',
      answer: 'You should undress to your comfort level. Most people undress completely, but you can leave on underwear if you prefer. You\'ll be properly draped throughout the session for privacy.',
      expanded: false
    },
    {
      id: 'pain',
      question: 'Will the massage hurt?',
      answer: 'Massage should not be painful. While some techniques may cause mild discomfort, especially for deep tissue work, it should never be unbearable. Always communicate with your therapist about pressure levels.',
      expanded: false
    },
    {
      id: 'frequency',
      question: 'How often should I get a massage?',
      answer: 'The frequency depends on your individual needs and goals. For general wellness, monthly sessions are often sufficient. For specific conditions or stress relief, weekly or bi-weekly sessions may be recommended.',
      expanded: false
    },
    {
      id: 'benefits',
      question: 'What are the benefits of bodywork?',
      answer: 'Bodywork offers numerous benefits including stress reduction, pain relief, improved circulation, better sleep, enhanced immune function, increased flexibility, and overall relaxation and wellbeing.',
      expanded: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Relax in our hands
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

      {/* Benefits Section */}
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

      {/* Explore Our Massages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">DAY SPA & MASSAGE IN SYDNEY</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Explore our Massages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {massages.map((massage, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-4 text-black">{massage.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{massage.description}</p>
                  <button className="text-black font-semibold hover:text-gray-600 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="bg-gray-50 p-8 rounded-lg">
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "I am an active athlete and after years of trying different massage therapists, I managed to find the great place. 
                Highly recommended and the quality of high level services. Special mention for Bella, a great professional who has 
                managed to improve my performance and overcome injuries."
              </blockquote>
              <h4 className="text-xl font-bold text-black mb-2">Francisco B.</h4>
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK YOUR TREATMENT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Treatments Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">LOOKING FOR SOMETHING EXTRA?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Pamper yourself with a spa treatment
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaTreatments.map((treatment, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white p-6 rounded-lg shadow-lg h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-bold mb-4 text-black">{treatment.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{treatment.description}</p>
                  <button className="text-black font-semibold hover:text-gray-600 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Logos Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 animate-fade-in-up">
            {pressLogos.map((logo, index) => (
              <div key={index} className="text-gray-400 font-semibold text-sm hover:text-black transition-colors duration-300">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image Placeholder */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-lg font-semibold">Spa Treatment Room</p>
                  <p className="text-sm">Relaxing atmosphere with candles and oils</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="animate-fade-in-up-delay">
              <h2 className="text-4xl font-bold mb-6 text-black">
                What type of massage is right for me?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Discover the perfect massage technique tailored to your needs at Future Clinic Modern Beauty in Double Bay, Sydney. 
                  Our skilled therapists engage in meaningful conversations to understand your current health and physical condition 
                  as well as consider your preference for light or deep pressure.
                </p>
                <p>
                  With our diverse range of massages, you can choose from therapeutic sessions addressing specific concerns, 
                  bespoke experiences customized to your unique requirements, body contouring treatments for a rejuvenated appearance, 
                  soothing hot stone massages, lymphatic drainage sessions promoting wellness, nurturing pregnancy massages or 
                  intimate couples massages. Experience the transformative power of our massages today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Frequently Asked Questions about massages and spa treatments
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
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
            Ready to experience ultimate relaxation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your massage or spa treatment today
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR SESSION
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpaMassages; 