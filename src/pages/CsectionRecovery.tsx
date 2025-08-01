import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const CsectionRecovery = () => {
  const recoveryBenefits = [
    {
      title: "Restoring abdominal and pelvic floor tone",
      description: "Specialized techniques to strengthen and restore the core muscles that were affected during pregnancy and delivery."
    },
    {
      title: "Improving skin firmness and elasticity",
      description: "Advanced treatments to help tighten and firm the skin around the abdominal area for a more toned appearance."
    },
    {
      title: "Reducing excess fat deposits",
      description: "Targeted treatments to help eliminate stubborn fat deposits that may have accumulated during pregnancy."
    },
    {
      title: "Addressing fluid retention and swelling",
      description: "Therapeutic techniques to reduce post-pregnancy fluid retention and promote proper lymphatic drainage."
    },
    {
      title: "Minimizing the appearance of stretch marks",
      description: "Specialized treatments to help reduce the visibility of stretch marks and improve skin texture."
    },
    {
      title: "Helping with urinary incontinence",
      description: "Pelvic floor strengthening exercises and treatments to improve bladder control and reduce incontinence issues."
    },
    {
      title: "Promoting tissue healing and scar reduction",
      description: "Advanced scar treatment techniques to help minimize C-section scars and promote optimal tissue healing."
    },
    {
      title: "Reducing stress and promoting relaxation",
      description: "Gentle therapeutic treatments to help new mothers relax, reduce stress, and improve overall wellbeing."
    }
  ];

  const testimonials = [
    {
      id: 1,
      initial: "M",
      name: "Manish",
      date: "2023-12-10",
      rating: 5,
      review: "Great massage, very professional team. Would highly recommend.",
      readMore: true
    },
    {
      id: 2,
      initial: "J",
      name: "Joy Edinger",
      date: "2023-12-08",
      rating: 5,
      review: "The postnatal recovery treatment exceeded my expectations. I feel so much stronger and more confident.",
      readMore: true
    },
    {
      id: 3,
      initial: "K",
      name: "Karen Childs",
      date: "2023-12-05",
      rating: 5,
      review: "Amazing care and attention to detail. The scar revision treatment has made such a difference.",
      readMore: true
    },
    {
      id: 4,
      initial: "A",
      name: "Annabella Zakkas",
      date: "2023-12-02",
      rating: 5,
      review: "Professional, caring, and effective. The postnatal treatments have helped me recover beautifully.",
      readMore: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">C-SECTION RECOVERY</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Postnatal Treatments
            </h1>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Helping your body recover after C-section Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Helping your body recover after C-section
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our specialized postpartum treatment program is designed to support your body's natural recovery process 
                after a C-section delivery. We understand the unique challenges that come with surgical delivery and 
                provide comprehensive care to help you regain strength, confidence, and wellbeing.
              </p>
              
              <div className="space-y-8">
                {recoveryBenefits.map((benefit, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-black">{benefit.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who can benefit from our postnatal treatments? Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Who can benefit from our postnatal treatments?
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Our postnatal treatments are tailored for mothers at any stage post-delivery, whether you're 
                  in the early weeks of recovery or several months postpartum. We understand that every woman's 
                  journey is unique, and our personalized approach ensures that your treatment plan addresses 
                  your specific needs and concerns.
                </p>
                <p>
                  Our dedicated team is committed to providing comprehensive treatments that not only help restore 
                  your physical state but also rejuvenate your sense of self. We focus on recovery, strength, 
                  confidence, and overall wellbeing, supporting you through this transformative period.
                </p>
                
                <div className="bg-white p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold mb-4 text-black">Treatment Options & Pricing</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-black">Postnatal Recovery treatment</h4>
                        <p className="text-sm text-gray-600">1-1.5 hour session</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">From $295</p>
                        <p className="text-sm text-gray-600">depending on your needs</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold text-black">Scar Revision treatment</h4>
                        <p className="text-sm text-gray-600">1 hour session</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-black">$350</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image Placeholder */}
            <div className="animate-fade-in-up-delay">
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 h-96 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-pink-600/20"></div>
                <div className="text-center text-gray-700 relative z-10">
                  <div className="w-32 h-32 bg-pink-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-pink-600" />
                  </div>
                  <p className="text-lg font-semibold">C-Section Recovery</p>
                  <p className="text-sm">Gentle scar treatment and healing</p>
                  <p className="text-sm">Postnatal care and support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a free consultation Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-black">
              Book a free consultation to find the right treatments for you
            </h2>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-black mb-8">
              WHAT OTHERS SAY ABOUT US
            </h2>
            
            {/* Overall Rating */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">EXCELLENT</div>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Based on 90 reviews</div>
              </div>
              <div className="text-gray-400">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white p-6 rounded-lg h-full shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mr-3">
                      {testimonial.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1 mr-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="w-4 h-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3" />
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {testimonial.review}
                  </p>
                  
                  {testimonial.readMore && (
                    <button className="text-black font-semibold text-sm hover:text-gray-600 transition-colors duration-300">
                      Read More
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Arrow */}
          <div className="text-center mt-8 animate-fade-in-up">
            <button className="text-black hover:text-gray-600 transition-colors duration-300">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Treatment Benefits Summary */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-black mb-4">
                Your Recovery Journey
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're here to support you every step of the way through your postnatal recovery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heart className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-black">Compassionate Care</h3>
                  <p className="text-gray-700">Understanding and supportive treatment approach tailored to your needs</p>
                </div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Shield className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-black">Safe & Effective</h3>
                  <p className="text-gray-700">Evidence-based treatments designed specifically for postnatal recovery</p>
                </div>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Users className="w-12 h-12 text-black mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-black">Expert Team</h3>
                  <p className="text-gray-700">Experienced professionals dedicated to your recovery and wellbeing</p>
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
            Ready to start your recovery journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your consultation today and take the first step towards renewed strength and confidence
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default CsectionRecovery; 