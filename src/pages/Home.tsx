import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: 'Facials + Skin',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: '/images/facials-skin-img.png.webp',
      link: '/facials'
    },
    {
      title: 'Lymphatic Drainage',
      description: 'Delve into a world of specialist massages that bring ultimate relief, enhance muscle relaxation, and rejuvenate the body.',
      image: '/images/Lymphatic Drainage.png',
      link: '/treatments/spa-massages/lymphatic-drainage'
    },
    {
      title: 'Skin Boosters',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: '/images/skinboosters.png',
      link: '/concerns/skin-boosters'
    },
    {
      title: 'Ultraformer MPT',
      description: 'The latest non-invasive HIFU technology to lift, tighten, and rejuvenate your skin, removing small fat pockets where desired. Painless with no downtime.',
      image: '/images/ultraformer-mpt-img.png.webp',
      link: '/ultraformer-mpt'
    },
    {
      title: 'INDIBA Therapy',
      description: 'Promotes the Biological response of tissue, achieving magnificent results in rejuvenation, revitalisation, lifting and skin hydration.',
      image: '/images/indiba-therapy-img.png.webp',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'truFlex Muscle',
      description: 'Cutera truFlex technology is designed to adapt to your fitness level, shape, and goals, delivering the equivalent of 54,000 crunches in just one session.',
      image: '/images/trueFLEX-image-e1744780890387.jpg.webp',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'Post Op',
      description: 'Our specialised Post operative treatment program is designed to address your unique needs.',
      image: '/images/Post OP.png',
      link: '/post-op-recovery'
    },
    {
      title: 'Women\'s Health',
      description: 'Meet your body and welcome to the conversation around pelvic floor, pregnancy, menopause and everything inbetween.',
      image: '/images/womens-health-img.png.webp',
      link: '/pelvic-pain'
    },
    {
      title: 'Future Spa',
      description: 'Body Scrubs, Cocooning Wraps and Dry Body Brushing exfoliate your skin, enliven your senses, inducing deep relaxation.',
      image: '/images/future-spa-img.png.webp',
      link: '/treatments/spa-massages'
    },
    {
      title: 'WISHpro',
      description: 'The aesthetic revolution is here! WISHpro is an innovative skin treatment device that combines four different proven technologies. Together with advanced cosmetic capsules, you can see results in only 15 minutes of non-invasive treatment.',
      image: '/images/Wish-pro.jpg.webp',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'Synthesis Organics',
      description: 'Synthesis Organics, a high-performance holistic skincare and aromatherapy range, made in Byron Bay with the purest nutrient-rich organic ingredients.',
      image: '/images/synthesis-organics-img.png.webp',
      link: '/facials/synthesis-organics'
    },
    {
      title: 'Janssen Cosmetics',
      description: 'Where luxury meets science to bring you transformative skincare solutions. Developed in Germany, Janssen Cosmetic products are revered for their innovative active ingredient combinations of the highest possible quality.',
      image: '/images/Janssen-Cosmetics.jpg.webp',
      link: '/treatments/advanced-technology'
    }
  ];

  const testimonials = [
    {
      name: "Ivy Erlinger",
      image: "/images/ivy-icon.png.webp",
      date: "2024-09-11",
      rating: 5,
      text: "Future is exactly what it's name says... a true look into the future for beauty! I personally always g..."
    },
    {
      name: "Renee Childs",
      image: "/images/Claudia.png.webp",
      date: "2024-09-09",
      rating: 5,
      text: "Wonderful Therapeutic Massage with Saila Insua Lopez. She tailored my treatment to suit my needs. I ..."
    },
    {
      name: "Anastasiia Zakharenkova",
      image: "/images/anastasia-icon.png.webp",
      date: "2024-05-25",
      rating: 5,
      text: "I love going there! Every time after my treatments I feel very relaxed and refreshed. Everyone there..."
    },
    {
      name: "Marcelle Mercado",
      image: "/images/Salia.png.webp",
      date: "2024-03-16",
      rating: 5,
      text: "Thank you Wonder and thank you Claudia for my treatment for Ultraformer MPT and my beautiful Hollywo..."
    }
  ];

  const team = [
    {
      name: "Claudia Fabiani",
      role: "CLINICAL DIRECTOR, Cosmetologist, Cosmiatra",
      image: "/images/Claudia.png.webp",
      description: "With over 30 years of experience in aesthetics, Claudia specializes in chemical peels, rosacea, acne, extractions, lymphatic drainage, and Shiatsu. She is renowned for her expertise in body techniques including cellulite, localized fat, and skin laxity treatments. As a celebrity makeup artist, Claudia operates three clinics and has developed her own skincare line, 'Claudia Fabiani Skincare'. She collaborates closely with dermatologists and plastic surgeons, bringing 47 years of passion for aesthetics and global teaching to Future Clinic."
    },
    {
      name: "Salia Insua Lopez",
      role: "THERAPEUTIC DIRECTOR, Dermatofunctional Therapist (Spanish Physiotherapist)",
      image: "/images/Salia.png.webp",
      description: "Salia is a Dermatofunctional therapist and Holistic Wellness Expert with over 20 years of experience specializing in women's health including pregnancy, postpartum recovery, menopause, and pelvic floor health. Her expertise includes INDIBA Deep Beauty Radio Frequency Aesthetics, Activ care, Leduc and Vodder Manual Lymphatic Drainage, pre and post-plastic surgery recovery, deep tissue massage, and therapeutic Pilates. Having operated a clinic in Madrid for 12 years and lectured at Francisco de Victoria University, Salia now practices in Australia, offering comprehensive therapeutic approaches that enhance clients' quality of life through holistic care."
    }
  ];

  const blogPosts = [
    {
      title: "Creatures of Habit",
      date: "Mar 25, 2025",
      category: "Wellbeing",
      image: "/images/creatures-habit-image.png.webp",
      description: "The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life."
    },
    {
      title: "An Antidote to the Modern World",
      date: "Mar 25, 2025",
      category: "Wellbeing",
      image: "/images/antidote-modern-img.png.webp",
      description: "Stress is a contemporary endemic; a dangerous by-product of overstimulation, disconnection and fast-paced lifestyles. But there's a simple recipe to bring back balance - and it all starts inside."
    },
    {
      title: "Understanding and Enhancing Pelvic Mobility for Childbirth",
      date: "Mar 25, 2025",
      category: "Women's Health",
      image: "/images/pelvic-mobility-img.png.webp",
      description: "The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-video-fade-in-3d"
          poster="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="/videos/home.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Future Clinic Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade3d">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-3d hover-scale3d" style={{ fontFamily: 'var(--font-monument)' }}>
            Cutting-edge Science for Refined Lasting beauty
              </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="btn-responsive bg-white text-black hover:bg-gray-100 btn-3d animate-float3d">
              BOOK A FREE CONSULTATION
            </Link>
            <Link to="/gift-certificates" className="btn-responsive border-2 border-white text-white hover:bg-white hover:text-black btn-3d animate-float3d" style={{ animationDelay: '0.5s' }}>
              GIFT CERTIFICATES
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6 heading-responsive text-3d hover-scale3d" style={{ fontFamily: 'var(--font-monument)' }}>
              Excellence proven
            </h2>
            <p className="text-xl text-gray-600 animate-fade3d">
              With a 5-star rating from 141+ Google Reviews
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-slide3d card-3d" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 img-3d"
                  />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold mb-6 text-black text-3d">{service.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white btn-3d animate-float3d">
              VIEW ALL TREATMENTS
            </Link>
            <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 btn-3d animate-float3d" style={{ animationDelay: '0.3s' }}>
              BOOK A FREE CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section - Two Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade3d">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 heading-responsive text-3d hover-scale3d" style={{ fontFamily: 'var(--font-monument)' }}>
                We transform beauty and wellness with a personalised, science based touch.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Future Clinic, we believe in the power of personalized care combined with cutting-edge science. Our team of expert clinicians delivers results-driven treatments tailored to your unique needs, ensuring you achieve your beauty and wellness goals with confidence and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 btn-3d animate-float3d">
                  BOOK A FREE CONSULTATION
                </Link>
                <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white btn-3d animate-float3d" style={{ animationDelay: '0.3s' }}>
                  GET IN TOUCH
                </Link>
              </div>
            </div>
            <div className="relative animate-fade3d" style={{ animationDelay: '0.5s' }}>
              <img
                src="/images/facials-skin-img.png.webp"
                alt="Facial Treatment"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 img-3d"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Media Mentions Section */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full">
            {/* Container to center the slider */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-3xl overflow-hidden">
                {/* First set of logos */}
                <div className="flex items-center gap-8 md:gap-16 opacity-80 animate-scroll-left">
                  <img 
                    src="/images/marie-claire-logo.png.webp" 
                    alt="Marie Claire" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/nomade-logo.png.webp" 
                    alt="NOMADE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/Vogue-logo.png.webp" 
                    alt="VOGUE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/A-Beauty-logo.png.webp" 
                    alt="A Beauty" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/beauticate-logo.png.webp" 
                    alt="BEAUTICATE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/womens-weekly-logo.png.webp" 
                    alt="Women's Weekly" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/daily-mail-logo.png.webp" 
                    alt="Daily Mail" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-8 md:gap-16 opacity-80 animate-scroll-left-2 absolute top-0 left-full">
                  <img 
                    src="/images/marie-claire-logo.png.webp" 
                    alt="Marie Claire" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/nomade-logo.png.webp" 
                    alt="NOMADE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/Vogue-logo.png.webp" 
                    alt="VOGUE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/A-Beauty-logo.png.webp" 
                    alt="A Beauty" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/beauticate-logo.png.webp" 
                    alt="BEAUTICATE" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/womens-weekly-logo.png.webp" 
                    alt="Women's Weekly" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                  <img 
                    src="/images/daily-mail-logo.png.webp" 
                    alt="Daily Mail" 
                    className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center animate-fade-in-up" style={{ fontFamily: 'var(--font-monument)' }}>
            WHAT OTHERS SAY ABOUT US
            </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            {/* Google Reviews Summary */}
            <div className="lg:col-span-1 text-center lg:text-left animate-fade-in-up">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-gray-800 mb-2">EXCELLENT</div>
                <div className="flex justify-center lg:justify-start mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 mb-4">Based on 141 reviews</div>
                <div className="text-2xl font-bold text-blue-600">G</div>
              </div>
            </div>
            
            {/* Testimonial Cards */}
            <div className="lg:col-span-4 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-black">{testimonial.name}</div>
                          <div className="text-blue-600 text-sm">G</div>
                        </div>
                        <div className="text-gray-500 text-xs">{testimonial.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <div className="ml-2 text-blue-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3 line-clamp-3">
                      {testimonial.text}
                    </p>
                    <button className="text-gray-600 font-semibold hover:underline text-sm">
                      Read More
                    </button>
                </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Two Column Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up-3d">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-responsive" style={{ fontFamily: 'var(--font-monument)' }}>
                Achieve your beauty and wellness goals with cutting-edge science & technology
              </h2>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                FUTURE CLINIC Modern Beauty acknowledges the Australian Aboriginal and Torres Strait Islander peoples as the first inhabitants of the nation and the traditional custodians of the lands where we live, learn and work. We respectfully acknowledges their Ancestors and Elders, past and present.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
                  className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d"
                >
                  BOOK NOW
                </button>
                <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
                  GET IN TOUCH
                </Link>
            </div>
            </div>
            <div className="relative animate-fade-in-up-delay">
              <img
                src="/images/Post OP.png"
                alt="Future Clinic Treatment"
                className="w-full h-48 object-cover rounded-lg shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 heading-responsive" style={{ fontFamily: 'var(--font-monument)' }}>
              Empowering our clinicians to elevate beauty and wellness through personalised, science-driven care
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Claudia Fabiani */}
            <div className="flex items-start space-x-6 animate-fade-in-up">
              <div className="flex-shrink-0">
                <img
                  src="/images/Claudia.png.webp"
                  alt="Claudia Fabiani"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-black">Claudia Fabiani</h3>
                <p className="text-lg text-gray-600 mb-3">CLINICAL DIRECTOR, Cosmetologist, Cosmiatrist</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With over 30 years of experience in aesthetics, Claudia specializes in chemical peels, rosacea, acne, extractions, lymphatic drainage, and Shiatsu. She is renowned for her expertise in body techniques including cellulite, localized fat, and skin laxity treatments. As a celebrity makeup artist, Claudia operates three clinics and has developed her own skincare line, 'Claudia Fabiani Skincare'. She collaborates closely with dermatologists and plastic surgeons, bringing 47 years of passion for aesthetics and global teaching to Future Clinic.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
                    className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d"
                  >
                    BOOK NOW
                  </button>
                  <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>

            {/* Salia Insua Lopez */}
            <div className="flex items-start space-x-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex-shrink-0">
                <img
                  src="/images/Salia.png.webp"
                  alt="Salia Insua Lopez"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-black">Salia Insua Lopez</h3>
                <p className="text-lg text-gray-600 mb-3">THERAPEUTIC DIRECTOR, Dermotofunctional Therapist (Spanish Physiotherapist)</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Salia is a Dermatofunctional therapist and Holistic Wellness Expert with over 20 years of experience specializing in women's health including pregnancy, postpartum recovery, menopause, and pelvic floor health. Her expertise includes INDIBA Deep Beauty Radio Frequency Aesthetics, Activ care, Leduc and Vodder Manual Lymphatic Drainage, pre and post-plastic surgery recovery, deep tissue massage, and therapeutic Pilates. Having operated a clinic in Madrid for 12 years and lectured at Francisco de Victoria University, Salia now practices in Australia, offering comprehensive therapeutic approaches that enhance clients' quality of life through holistic care.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => window.open('https://www.fresha.com/a/future-clinic-modern-beauty-double-bay-4-cross-st-apd6jatz/booking?menu=true&dppub=true&_gl=1*tbuzlm*_gcl_au*MjAzNTM3MzA0MS4xNzU0MDQ4MTUz*_ga*MTM1NTUwNTQ2Ni4xNzU0MDQ4MTU0*_ga_Z9WC20429Y*czE3NTQzMTI3OTAkbzEzJGcxJHQxNzU0MzEzMjMwJGo0NyRsMCRoMA..', '_blank')}
                    className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d"
                  >
                    BOOK NOW
                  </button>
                  <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Beauty Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 heading-responsive" style={{ fontFamily: 'var(--font-monument)' }}>
              HEALTH & BEAUTY BLOG
          </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-fade-in-up card-hover">
              <div className="relative overflow-hidden">
                <img
                  src="/images/creatures-habit-image.png.webp"
                  alt="Creatures of Habit"
                  className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Creatures of Habit</h3>
                <p className="text-gray-500 text-sm mb-3">Mar 25, 2025 | Wellbeing</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-fade-in-up card-hover" style={{ animationDelay: '0.1s' }}>
              <div className="relative overflow-hidden">
                <img
                  src="/images/antidote-modern-img.png.webp"
                  alt="An Antidote to the Modern World"
                  className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">An Antidote to the Modern World</h3>
                <p className="text-gray-500 text-sm mb-3">Mar 25, 2025 | Wellbeing</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Stress is a contemporary endemic; a dangerous by-product of overstimulation, disconnection and fast-paced lifestyles. But there's a simple recipe to bring back balance - and it all starts inside.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-fade-in-up card-hover" style={{ animationDelay: '0.2s' }}>
              <div className="relative overflow-hidden">
                <img
                  src="/images/pelvic-mobility-img.png.webp"
                  alt="Understanding and Enhancing Pelvic Mobility for Childbirth"
                  className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Understanding and Enhancing Pelvic Mobility for Childbirth</h3>
                <p className="text-gray-500 text-sm mb-3">Mar 25, 2025 | Women's Health</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;