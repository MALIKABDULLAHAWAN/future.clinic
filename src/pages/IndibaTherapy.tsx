import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const IndibaTherapy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              INDIBA Therapy
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced radio frequency technology for tissue regeneration and healing.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Coming Soon
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We're working on creating a comprehensive page for INDIBA Therapy treatments. 
                This advanced radio frequency technology promotes tissue regeneration and healing.
              </p>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-black">INDIBA Therapy Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2 text-black">Tissue Regeneration</h4>
                    <p className="text-gray-700">Promotes natural healing and regeneration</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2 text-black">Accelerated Healing</h4>
                    <p className="text-gray-700">Speeds up recovery and healing processes</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-12 h-12 text-black mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2 text-black">Pain Relief</h4>
                    <p className="text-gray-700">Reduces pain and inflammation</p>
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
            Interested in INDIBA Therapy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Contact us for more information about this advanced treatment
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
};

export default IndibaTherapy; 