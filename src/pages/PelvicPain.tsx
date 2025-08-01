import { useState } from 'react';
import { Star, Heart, Shield, Users, Award, Clock, ArrowRight } from 'lucide-react';

const PelvicPain = () => {
  const pelvicFloorFunctions = [
    {
      title: "Sphincter continence",
      description: "Responsible for containing urine, feces, and gases."
    },
    {
      title: "Support function",
      description: "Maintains the bladder, uterus, and rectum in the appropriate position."
    },
    {
      title: "Reproductive function",
      description: "Adequate muscle tone helps with the rotation of a baby's head for exit."
    },
    {
      title: "Sexual function",
      description: "Good muscle condition ensures pleasurable sexual relations."
    },
    {
      title: "Pump function",
      description: "Works in conjunction with the spine, diaphragm, and abdominals."
    }
  ];

  const symptoms = [
    {
      title: "Vaginal Bleeding, Spotting, or Discharge",
      description: "Abnormal bleeding patterns or unusual discharge that may indicate underlying health issues."
    },
    {
      title: "Menstrual Pain",
      description: "Severe cramping or discomfort during menstrual cycles that affects daily activities."
    },
    {
      title: "Dysuria (Painful Urination)",
      description: "Pain or burning sensation during urination that may indicate urinary tract issues."
    },
    {
      title: "Constipation or Diarrhea",
      description: "Changes in bowel habits that may be related to pelvic floor dysfunction."
    },
    {
      title: "Bloating or Gas",
      description: "Persistent abdominal bloating or excessive gas that may indicate digestive issues."
    },
    {
      title: "Rectal Bleeding",
      description: "Blood in stool or rectal bleeding that requires immediate medical attention."
    },
    {
      title: "Pain during Intercourse",
      description: "Discomfort or pain during sexual activity that may affect relationships and quality of life."
    },
    {
      title: "Fever or Chills",
      description: "Systemic symptoms that may indicate infection or inflammation in the pelvic area."
    },
    {
      title: "Hip Pain",
      description: "Pain in the hip region that may be related to pelvic floor muscle tension or dysfunction."
    },
    {
      title: "Pain in the Groin Area",
      description: "Discomfort in the groin region that may indicate various pelvic health issues."
    }
  ];

  const testimonials = [
    {
      id: 1,
      initial: "M",
      name: "Michelle Miranda",
      date: "2023-03-19",
      rating: 5,
      review: "The pelvic floor therapy has completely transformed my quality of life. The therapists are incredibly knowledgeable and caring.",
      readMore: true
    },
    {
      id: 2,
      initial: "N",
      name: "Natasha Lee-Mays",
      date: "2023-03-15",
      rating: 5,
      review: "After struggling with pelvic pain for years, I finally found relief here. The treatment approach is comprehensive and effective.",
      readMore: true
    },
    {
      id: 3,
      initial: "H",
      name: "Hamish Robertson",
      date: "2023-03-12",
      rating: 5,
      review: "Professional and compassionate care. The pelvic floor therapy has helped me regain control and confidence.",
      readMore: true
    },
    {
      id: 4,
      initial: "I",
      name: "Ivy Bringer",
      date: "2023-03-08",
      rating: 5,
      review: "Excellent treatment for pelvic pain. The therapists take time to understand your specific needs and concerns.",
      readMore: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <p className="text-sm text-gray-500 mb-2">PELVIC PAIN</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
              Women's Health Care
            </h1>
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* What is pelvic pain? Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                What is pelvic pain?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pelvic pain is a complex signal from the body that can affect anyone, regardless of age or gender. 
                It can manifest as acute or chronic discomfort in the lower abdominal region and may be related to 
                various underlying conditions. Consulting with healthcare experts is essential for proper diagnosis 
                and treatment of pelvic pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why is pelvic floor care so important? Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                Why is pelvic floor care so important?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                The pelvic floor is a complex group of muscles that play a crucial role in various bodily functions. 
                Proper pelvic floor care is essential for maintaining overall health and quality of life.
              </p>
              
              <div className="space-y-6">
                {pelvicFloorFunctions.map((function_, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-3 text-black">{function_.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{function_.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How do we help with the pelvic floor health? Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                How do we help with the pelvic floor health?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pelvic floor muscles need to be exercised and properly cared for, focusing on strengthening, balance, and elasticity. 
                Our specialized approach addresses the unique needs of each individual. Sometimes the focus is on strengthening 
                weak muscles, and other times on relaxation and release of overly tense muscles. Our comprehensive treatment 
                plans are tailored to your specific condition and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a free consultation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-8 text-black">
              Book a free consultation
            </h2>
            <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              BOOK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
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
                <div className="bg-gray-50 p-6 rounded-lg h-full">
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
                    <svg className="w-4 h-4 text-gray-400 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
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

      {/* Symptoms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                What are the symptoms related to pelvic pain?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Pelvic pain is a complex signal that can manifest in various ways. Understanding these symptoms 
                is crucial for identifying potential health issues and taking proactive steps to care for your health.
              </p>
              
              <div className="space-y-4">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-1">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-black">{symptom.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{symptom.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg animate-fade-in-up">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Understanding these symptoms is essential for identifying potential health issues and taking 
                  proactive steps to care for your health. If you experience any of these symptoms, it's important 
                  to consult with healthcare professionals for proper evaluation and treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in-up">
            Ready to take control of your pelvic health?
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Book your consultation today and start your journey to better pelvic health
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid animate-fade-in-up-delay-2">
            BOOK YOUR CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};

export default PelvicPain; 