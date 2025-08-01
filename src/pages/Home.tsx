import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Zap, Users, Award, CheckCircle, Play, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Particle effect component
  const ParticleEffect = () => (
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );

  const services = [
    {
      title: 'Facials + Skin',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/facials'
    },
    {
      title: 'Lymphatic Drainage',
      description: 'Delve into a world of specialist massages that bring ultimate relief, enhance muscle relaxation, and rejuvenate the body.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/spa-massages/lymphatic-drainage'
    },
    {
      title: 'Skin Boosters',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/concerns/skin-boosters'
    },
    {
      title: 'Ultraformer MPT',
      description: 'The latest non-invasive HIFU technology to lift, tighten, and rejuvenate your skin, removing small fat pockets where desired. Painless with no downtime.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/ultraformer-mpt'
    },
    {
      title: 'INDIBA Therapy',
      description: 'Promotes the Biological response of tissue, achieving magnificent results in rejuvenation, revitalisation, lifting and skin hydration.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'truFlex Muscle',
      description: 'Cutera truFlex technology is designed to adapt to your fitness level, shape, and goals, delivering the equivalent of 54,000 crunches in just one session.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'Post Op',
      description: 'Our specialised Post operative treatment program is designed to address your unique needs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/post-op-recovery'
    },
    {
      title: 'Women\'s Health',
      description: 'Meet your body and welcome to the conversation around pelvic floor, pregnancy, menopause and everything inbetween.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/pelvic-pain'
    },
    {
      title: 'Future Spa',
      description: 'Body Scrubs, Cocooning Wraps and Dry Body Brushing exfoliate your skin, enliven your senses, inducing deep relaxation.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/spa-massages'
    }
  ];

  const testimonials = [
    {
      name: 'Hamish Robertson',
      date: '2024-09-11',
      rating: 5,
      text: 'Great massage, very professional team. Would highly recommend.',
      verified: true
    },
    {
      name: 'Ivy Erlinger',
      date: '2024-09-11',
      rating: 5,
      text: 'Future is exactly what it\'s name says… a true look into the future for beauty! I personally always go for the amazing treatments— unreal massages from Saila and a fantastic infrared sauna. Claudia also does incredible skin treatments, and have been going to her for my pre-wedding glow up! Thanks so much to Adie + the team',
      verified: true
    },
    {
      name: 'Renee Childs',
      date: '2024-09-09',
      rating: 5,
      text: 'Wonderful Therapeutic Massage with Saila Insua Lopez. She tailored my treatment to suit my needs. I left feeling relaxed and wanting to book my next appointment. Thanks ladies.',
      verified: true
    }
  ];

  const team = [
    {
      name: 'Claudia Fabiani',
      role: 'CLINICAL DIRECTOR, Cosmetologist, Cosmiatrist',
      description: 'Meet Claudia Fabiani, a luminary in the aesthetic field, with over 30 years experience as a leading international cosmetologist and cosmiatrist.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Salia Insua Lopez',
      role: 'THERAPEUTIC DIRECTOR, Dermotofunctional Therapist (Spanish Physiotherapist)',
      description: 'Introducing Salia Insua Lopez, a Dermatofunctional therapist and Holistic Wellness Expert. Salia brings over 20 years expertise in women\'s health, specialising in pregnancy, postpartum recovery, menopause and pelvic floor health.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const brands = [
    {
      title: 'WISHpro',
      description: 'The aesthetic revolution is here! WISHpro is an innovative skin treatment device that combines four different proven technologies. Together with advanced cosmetic capsules, you can see results in only 15 minutes of non-invasive treatment.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/advanced-technology'
    },
    {
      title: 'Synthesis Organics',
      description: 'Synthesis Organics, a high-performance holistic skincare and aromatherapy range, made in Byron Bay with the purest nutrient-rich organic ingredients.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/facials/synthesis-organics'
    },
    {
      title: 'Janssen Cosmetics',
      description: 'Where luxury meets science to bring you transformative skincare solutions. Developed in Germany, Janssen Cosmetic products are revered for their innovative active ingredient combinations of the highest possible quality.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/treatments/advanced-technology'
    }
  ];

  const blogPosts = [
    {
      title: 'Creatures of Habit',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 25, 2025',
      category: 'Wellbeing',
      description: 'The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life.'
    },
    {
      title: 'An Antidote to the Modern World',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 25, 2025',
      category: 'Wellbeing',
      description: 'Stress is a contemporary endemic; a dangerous by-product of overstimulation, disconnection and fast-paced lifestyles. But there\'s a simple recipe to bring back balance – and it all starts inside.'
    },
    {
      title: 'Understanding and Enhancing Pelvic Mobility for Childbirth',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'Mar 25, 2025',
      category: 'Women\'s Health',
      description: 'The secret to longevity is to live well. By gradually adopting good habits, you will amplify a sense of structure in your day and a sense of achievement within your life.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden video-container">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-video-fade-in-3d"
          poster="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <img 
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Future Clinic Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 animate-fade-in-up-3d"></div>
        
        {/* Particle Effect */}
        <ParticleEffect />
        
        {/* Content */}
                  <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 sm:mb-12 leading-none tracking-tight animate-fade-in-up">
            Cutting-edge Science<br />
            for Refined Lasting<br />
            beauty
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed font-light animate-fade-in-up">
            With over 20 years of expertise in skincare and well-being, we understand that true beauty is a reflection of optimal skin health, balance, and natural refinement. Achieve your beauty and wellness goals with innovative, holistic protocols, products and services delivered by world class experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up">
                          <Link to="/appointments" className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wide button-hover">
                BOOK A FREE CONSULTATION
              </Link>
              <Link to="/gift-certificates" className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-full font-medium hover:bg-amber-400 hover:text-black transition-all duration-300 text-lg tracking-wide button-hover">
              GIFT CERTIFICATES
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up-3d">Excellence proven</h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up-delay">With a 5-star rating from 141+ Google Reviews</p>
          <div className="flex justify-center items-center space-x-2 mb-8 animate-fade-in-up-delay-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-float-3d" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - 3x3 Layout */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in-up-3d gradient-text-3d">
            Our Premium Services
          </h2>
                      <div className="grid-responsive">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer card-hover glass animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden mb-4 sm:mb-6 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black transform group-hover:translate-x-2 transition-transform duration-300 text-hover-3d">{service.title}</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-black font-semibold hover:underline text-base sm:text-lg transform group-hover:translate-x-2 transition-transform duration-300">
                  Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section - 1x3 Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in-up-3d text-glow-3d">
            Premium Brands
          </h2>
          <div className="grid-responsive">
            {brands.map((brand, index) => (
              <div key={index} className="group cursor-pointer card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden mb-4 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black transform group-hover:translate-x-2 transition-transform duration-300 text-hover-3d">{brand.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-4 leading-relaxed text-sm">{brand.description}</p>
                <Link to={brand.link} className="inline-flex items-center text-black font-semibold hover:underline text-base transform group-hover:translate-x-2 transition-transform duration-300 neon-glow">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
              VIEW ALL TREATMENTS
            </Link>
            <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d">
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up-3d">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-responsive">
                We transform beauty and wellness with a personalised, science based touch.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed text-responsive">
                Our team of experts are equipped with many years of experience and professionalism. Working together in synergy, utilising state of the art technology in combination with protocols and products designed for maximum efficacy, enhancing your natural beauty whilst ensuring your skin is in optimal health, is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d">
                  BOOK A CONSULTATION
                </Link>
                <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up-delay">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Future Clinic Treatment"
                className="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up-3d">What others say about us</h2>
            <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in-up-delay">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 animate-glow">EXCELLENT</div>
                <div className="text-sm text-gray-600">Based on <strong>141 reviews</strong></div>
              </div>
            </div>
          </div>
          
          <div className="grid-responsive">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 shadow-lg animate-fade-in-up card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-bounce-3d" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded animate-pulse-3d">Verified</span>
                  )}
                </div>
                <p className="text-gray-700 mb-6 line-clamp-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{testimonial.name}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 heading-responsive">
              Empowering our clinicians to elevate beauty and wellness through personalised, science-driven care.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4 img-responsive"
                  />
                  <h3 className="text-2xl font-bold mb-2 text-hover">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed text-responsive">{member.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 heading-responsive animate-fade-in-up">
            Achieve your beauty and wellness goals with cutting-edge science & technology
          </h2>
          <Link to="/appointments" className="btn-responsive border-2 border-white text-white hover:bg-white hover:text-black button-hover">
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </section>

      {/* Health & Beauty Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-6 text-center animate-fade-in-up">
            Health & Beauty Blog
          </h2>
          <div className="grid-responsive">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 shadow-lg animate-fade-in-up card-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden mb-4 sm:mb-6 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110 img-responsive"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-xs font-semibold text-black backdrop-blur-sm">
                    {post.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-full text-xs font-semibold text-white backdrop-blur-sm">
                    {post.date}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black text-hover">{post.title}</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">{post.description}</p>
                <Link to={`/blog/${post.category.toLowerCase().replace(/\s+/g, '-')}/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-black font-semibold hover:underline text-base sm:text-lg text-hover">
                  Read More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;