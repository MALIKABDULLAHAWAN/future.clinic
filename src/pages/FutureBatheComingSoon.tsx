import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle, Zap, Sparkles, Target, Thermometer } from 'lucide-react';

const FutureBatheComingSoon = () => {
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Thermometer,
      title: "Infrared Sauna Therapy",
      description: "Advanced infrared technology for deep tissue healing and detoxification"
    },
    {
      icon: Heart,
      title: "Wellness Sanctuary",
      description: "A serene space designed for complete relaxation and rejuvenation"
    },
    {
      icon: Shield,
      title: "Premium Experience",
      description: "Luxury amenities and professional wellness services"
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Contemporary spa facilities with state-of-the-art equipment"
    }
  ];

  const benefits = [
    "Deep tissue detoxification",
    "Improved circulation and blood flow",
    "Stress relief and relaxation",
    "Enhanced skin health and glow",
    "Muscle recovery and pain relief",
    "Boosted immune system",
    "Better sleep quality",
    "Natural energy enhancement"
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Coming Soon */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255, 255, 255, 0.1) 40px,
              rgba(255, 255, 255, 0.1) 42px
            )`,
            backgroundSize: '100% 42px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white">
              Future Bathe
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-12 font-light">
              Coming Soon
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of wellness with our state-of-the-art infrared sauna facility. 
              A sanctuary designed for complete relaxation, detoxification, and rejuvenation.
            </p>
            <button className="bg-white text-black px-10 py-5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-xl transform hover:scale-105 hover:-translate-y-1 liquid shadow-2xl">
              BOOK A FREE CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* Infrared Sauna Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sauna Image Placeholder */}
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl p-8 shadow-2xl">
                <div className="bg-gradient-to-br from-amber-300 to-orange-400 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                  {/* Sauna Interior Design */}
                  <div className="absolute inset-4 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-amber-400 rounded-lg mb-4 mx-auto shadow-lg"></div>
                      <p className="text-amber-800 font-bold text-lg">Infrared Sauna</p>
                      <p className="text-amber-700 text-sm">Premium Wellness Facility</p>
                    </div>
                  </div>
                  {/* Warm Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 animate-pulse"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 font-medium">Modern Infrared Sauna Facility</p>
                  <p className="text-gray-500 text-sm">State-of-the-art wellness technology</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in-up-delay">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Premium Infrared Sauna Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Future Bathe facility features cutting-edge infrared sauna technology designed to provide 
                deep tissue healing, detoxification, and complete relaxation. Experience the perfect blend of 
                modern wellness technology and serene ambiance.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-black mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Wellness Benefits
              </h2>
              <p className="text-lg text-gray-700">
                Discover the transformative benefits of our infrared sauna therapy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">
                Be the First to Know
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Sign up for early access and exclusive updates about Future Bathe
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full text-black font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid"
                >
                  NOTIFY ME
                </button>
              </form>
              
              <p className="text-sm text-gray-400 mt-4">
                We'll notify you as soon as Future Bathe opens its doors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Preview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Facility Preview
              </h2>
              <p className="text-lg text-gray-700">
                A glimpse into our state-of-the-art wellness facility
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Sauna Room */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-xl animate-fade-in-up">
                <div className="w-16 h-16 bg-amber-200 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Infrared Sauna Rooms</h3>
                <p className="text-gray-600">Private, temperature-controlled sauna rooms with advanced infrared technology</p>
              </div>

              {/* Relaxation Area */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Relaxation Lounge</h3>
                <p className="text-gray-600">Serene post-treatment area with comfortable seating and refreshments</p>
              </div>

              {/* Wellness Services */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-16 h-16 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Wellness Services</h3>
                <p className="text-gray-600">Comprehensive wellness treatments and professional guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to Experience Future Bathe?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up-delay">
            Join our waitlist and be among the first to experience this revolutionary wellness facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              JOIN WAITLIST
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureBatheComingSoon; 