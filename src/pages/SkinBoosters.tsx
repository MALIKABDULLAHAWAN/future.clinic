import { useState } from 'react';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Users, Award, Calendar, Clock, Heart } from 'lucide-react';

const SkinBoosters = () => {
  const [selectedFormula, setSelectedFormula] = useState('pn2');

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, text: "Intense hydration from within" },
    { icon: <Zap className="w-6 h-6" />, text: "Firms, plumps & smooths" },
    { icon: <Shield className="w-6 h-6" />, text: "Reduces fine lines & wrinkles" },
    { icon: <Star className="w-6 h-6" />, text: "Boosts collagen production" }
  ];

  const features = [
    { icon: <Clock className="w-6 h-6" />, text: "Minimal downtime" },
    { icon: <Star className="w-6 h-6" />, text: "Brightening" },
    { icon: <Users className="w-6 h-6" />, text: "Revitalizes Korean skin" },
    { icon: <Award className="w-6 h-6" />, text: "Visible after one session" }
  ];

  const idealFor = [
    "Dry or dehydrated skin",
    "Fine lines & loss of elasticity",
    "Dull or aging complexion",
    "A skin glow up before a big event"
  ];

  const testimonials = [
    {
      name: "David Robertson",
      rating: 5,
      text: "Amazing results with the skin booster treatment. My skin has never looked better!",
      avatar: "DR"
    },
    {
      name: "Ay Mingo",
      rating: 5,
      text: "The Rejurub treatment exceeded my expectations. Highly recommend!",
      avatar: "AM"
    },
    {
      name: "Rene Childs",
      rating: 5,
      text: "Professional service and incredible results. My skin is glowing!",
      avatar: "RC"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Rejurub Skin Boosters
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
              At Future Clinic Modern Beauty, we believe in the harmony of science and selfcare. That's why we're proud to introduce Rejurub our latest Korean imported skin booster, now available in clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg button-hover">
                Book your Rejurub Session
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg button-hover">
                Gift Vouchers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature/Benefit Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Why Rejurub */}
            <div className="animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6 text-black">Why Rejurub?</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NextGen Korean Skin Booster */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-6 text-black">NextGen Korean Skin Booster</h2>
              <p className="text-gray-700 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>Minimal downtime, longlasting result Rejurub is a NextGen Korean skin booster combining PCL (Polycaprolactone) and hyaluronic acid to regenerate, rehydrate, and restore youthful glow. Results are visible after one session, with ongoing improvements.</p>
            </div>

            {/* Ideal For */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-6 text-black">Ideal for</h2>
              <div className="space-y-3">
                {idealFor.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Skin Rejuvenation */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-teal-800 text-white">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            The Future of Skin Rejuvenation is Here
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="relative mb-8">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Revitalizing Skin at a Cellular Level"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-full p-3">
                  <div className="text-center">
                    <div className="text-black font-bold text-sm">FUTURE CLINIC</div>
                    <div className="text-gray-600 text-xs">MODERN BEAUTY</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Revitalising Skin at a Cellular Level</h3>
              <p className="text-lg leading-relaxed">
                Formulated with high purity Polynucleotide (PN) and Hyaluronic Acid (HA), Rejurub revitalises skin at a cellular level, restoring your natural 28 day regeneration cycle. Experience firmer, brighter, more hydrated skin in just 4 weeks.
              </p>
            </div>

            {/* Right Content */}
            <div className="animate-fade-in-up-delay">
              <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Available in Two Formulas</h3>
                <p className="mb-4">Rejurub is available in two formulas:</p>
                <div className="space-y-4">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PN 2% – For deep cellular repair</h4>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">PN 1% + HA 1% – For added plumpness and hydration</h4>
                  </div>
                </div>
                <div className="mt-6 space-y-2 text-sm">
                  <p>100 % Koreanmade. Available now at Future Clinic.</p>
                  <p>TGA and AICIS compliant. Cosmetic grade only – no therapeutic claims.</p>
                  <p>✓ TGA and ACCC compliant</p>
                  <p>✓ Cosmetic grade only - no therapeutic claims</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Rejuvenation Just in One Month */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black animate-fade-in-up">
              Skin Rejuvenation
            </h2>
            <h3 className="text-2xl font-bold mb-4 text-black animate-fade-in-up-delay">
              Just in One Month
            </h3>
            <p className="text-xl font-semibold text-blue-600 animate-fade-in-up-delay-2">
              Once a week! Just once!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left */}
            <div className="text-center animate-fade-in-up">
              <div className="bg-yellow-100 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-bold mb-2">Just Drop Rejurub</h3>
                <p className="text-gray-700">Softly Rub Rejurub Using Dermasona</p>
              </div>
            </div>

            {/* Center */}
            <div className="text-center animate-fade-in-up-delay">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="text-2xl font-bold">+</div>
                <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">Dermasona Device</p>
            </div>

            {/* Right */}
            <div className="text-center animate-fade-in-up-delay-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Radiant Skin"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 left-2 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-bold">
                  Rejurub Skin Booster
                </div>
                <div className="absolute bottom-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Powerful Anti-Aging
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biocompatible Material Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-black">
                Rejurub uses biocompatible material 'PN' to revive deteriorated skin.
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Rejurub delivers sodium DNA to improve physiological conditions of damaged skin 
                  and helps the skin regeneration cycle return to normal.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up-delay">
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="w-20 h-20 bg-yellow-400 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">Wrinkle Reduction</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold">Elasticity Improvement</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold">Skin Brightening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            The Key Ingredients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-black">Polynucleotide (PN)</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A DNA component extracted from salmon testes similar to human DNA, providing 
                skin regeneration, elasticity improvement, whitening, and moisturizing effects.
              </p>
            </div>

            <div className="animate-fade-in-up-delay">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-black">Hyaluronic Acid</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A polysaccharide present in the body, capable of holding 500-1000 times its weight 
                in moisture, preventing moisture evaporation, and assisting moisture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Significant Change Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-black animate-fade-in-up">
              Significant Change in Just 4 Weeks with{' '}
              <span className="text-blue-600">Rejurub</span>
            </h2>
            <p className="text-xl text-gray-700 animate-fade-in-up-delay">
              With high-purity PN + HA, the effective ingredients penetrate deep into the skin, lifting and enhancing it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <h3 className="font-bold text-gray-600">Dead Skin</h3>
                    <div className="w-32 h-32 bg-gray-200 rounded-lg mt-2 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-lg"></div>
                    </div>
                    <div className="mt-2">
                      <ArrowRight className="w-6 h-6 mx-auto text-blue-500" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-green-600">Healthy Skin</h3>
                    <div className="w-32 h-32 bg-green-100 rounded-lg mt-2 flex items-center justify-center relative">
                      <div className="w-16 h-16 bg-green-300 rounded-lg"></div>
                      <div className="absolute top-2 right-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="absolute bottom-2 left-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-700">
                  Rejurub: New Skin Boost is a skincare solution that helps improve skin by normalizing the 28-day skin regeneration cycle.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-up-delay">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-black">Treatment Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <span className="text-gray-700">Initial consultation and skin assessment</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <span className="text-gray-700">Customized treatment plan</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <span className="text-gray-700">Weekly treatment sessions</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <span className="text-gray-700">Visible results in 2-4 weeks</span>
                  </div>
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
            Not sure what treatment to choose?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book a free consultation with our expert team
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK NOW
          </button>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4 text-black">Skin needling</h3>
              <p className="text-gray-700 leading-relaxed">
                Minimally invasive and effective skin treatment that works well for all skin types. 
                A special device creates micro-channels in the skin to start healing itself, leading 
                to more elastic and collagen production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 text-black">Super Anti Ageing Facial</h3>
              <p className="text-gray-700 leading-relaxed">
                A non-surgical facelift that rejuvenates, plumps, and maximizes, providing a luxurious 
                solution to combat sagging skin, expression lines, and wrinkles. This is the ultimate 
                defense against skin aging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4 text-black">Osmosis Revita Pen Dermal Infusion</h3>
              <p className="text-gray-700 leading-relaxed">
                A gentle vitamin A peel and skin infusion treatment is perfect for all skin concerns 
                and conditions. It works in harmony with your skin to promote collagen creation and 
                skin renewal, leaving you with a radiant look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            WHAT OTHERS SAY ABOUT US
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Rating Summary */}
            <div className="animate-fade-in-up">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4 text-black">EXCELLENT</h3>
                  <div className="flex justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">Based on 99 reviews</p>
                  <div className="w-16 h-16 mx-auto">
                    <div className="w-full h-full bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="animate-fade-in-up-delay">
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-bold text-gray-600">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="w-4 h-4">
                            <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                              <span className="text-white text-xs font-bold">G</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{testimonial.text}</p>
                        <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkinBoosters; 