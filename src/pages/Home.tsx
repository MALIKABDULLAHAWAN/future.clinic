import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Facial + Skin',
      description: 'Explore our advanced facials prescribed to meet your individual needs, delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/facials'
    },
    {
      title: 'Lymphatic Drainage',
      description: 'Delve into a world of specialist massages that bring ultimate relief, relaxation muscle relaxation, and rejuvenate the body.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/lymphatic-drainage'
    },
    {
      title: 'Skin Boosters',
      description: 'Explore our advanced facials prescribed to meet your individual needs, delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/skin-boosters'
    },
    {
      title: 'Ultraformer MPT',
      description: 'The latest non-invasive MPT technology to lift, tighten, and rejuvenate your skin, removing small fat pockets where desired. Painless with no downtime.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ultraformer-mpt'
    },
    {
      title: 'INDIBA Therapy',
      description: 'Promotes the biological response of intense, achieving magnificent results in rejuvenation, revitalization, lifting and skin hydration.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/indiba-therapy'
    },
    {
      title: 'truFlex Muscle',
      description: 'Cutera truFlex technology is designed to adapt to your fitness level, shape, and goals, delivering the equivalent of 54,000 crunches in just one session.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/truflex-muscle'
    },
    {
      title: 'Post Op',
      description: 'Our specialized Post-operative treatment program is designed to address your unique needs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/post-op'
    },
    {
      title: 'Women\'s Health',
      description: 'Meet your body and enhance its connection around period flow, pregnancy, menopause and everything in between.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/womens-health'
    },
    {
      title: 'Future Spa',
      description: 'Body Scrubs, Cleansing Rituals and Dry Body Brushing exfoliate your skin, relieve your senses, reducing deep relaxation.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/future-spa'
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
      description: 'The aesthetic revolution is here! WISHpro is an innovative skin treatment device that combines four different proven technologies. Together with advanced cosmetic capsules, you can receive an effective, only 15 minutes of non-invasive treatment.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/brands/wishpro'
    },
    {
      title: 'Synthesia Organics',
      description: 'Synthesia Organics, a high-performance holistic skincare and aromatherapy range, made in Byron Bay with the purest natural and organic ingredients.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/brands/synthesia-organics'
    },
    {
      title: 'Janssen Cosmetics',
      description: 'Where luxury meets science to bring you incredible skincare solutions. Developed in Germany, Janssen Cosmetics products are created for their innovative active ingredient combinations of the highest possible quality.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/brands/janssen-cosmetics'
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
          className="absolute inset-0 w-full h-full object-cover"
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 sm:mb-12 leading-none tracking-tight animate-fade-in-up">
            Cutting-edge Science<br />
            for Refined Lasting<br />
            beauty
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed font-light animate-fade-in-up-delay">
            With over 20 years of expertise in skincare and well-being, we understand that true beauty is a reflection of optimal skin health, balance, and natural refinement. Achieve your beauty and wellness goals with innovative, holistic protocols, products and services delivered by world class experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-up-delay-2">
            <Link to="/appointments" className="border-2 border-white text-white px-8 py-4 rounded-none font-medium hover:bg-white hover:text-black transition-all duration-300 text-lg tracking-wide transform hover:scale-105 hover:rotate-1">
              BOOK A FREE CONSULTATION
            </Link>
            <Link to="/gift-certificates" className="border-2 border-amber-400 text-amber-400 px-8 py-4 rounded-none font-medium hover:bg-amber-400 hover:text-black transition-all duration-300 text-lg tracking-wide transform hover:scale-105 hover:-rotate-1">
              GIFT CERTIFICATES
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">Excellence proven</h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up-delay">With a 5-star rating from 141+ Google Reviews</p>
          <div className="flex justify-center items-center space-x-2 mb-8 animate-fade-in-up-delay-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400 animate-float" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - 3x3 Layout */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer animate-3d-hover" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden mb-4 sm:mb-6 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black transform group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="group cursor-pointer animate-3d-hover" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden mb-4 transform group-hover:scale-105 transition-all duration-500">
                  <img
                    src={brand.image}
                    alt={brand.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-black transform group-hover:translate-x-2 transition-transform duration-300">{brand.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-4 leading-relaxed text-sm">{brand.description}</p>
                <Link to={brand.link} className="inline-flex items-center text-black font-semibold hover:underline text-base transform group-hover:translate-x-2 transition-transform duration-300">
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
            <Link to="/services" className="btn-secondary text-lg px-8 py-4 animate-3d-hover">
              VIEW ALL TREATMENTS
            </Link>
            <Link to="/appointments" className="btn-primary text-lg px-8 py-4 animate-3d-hover">
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      {/* Company Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We transform beauty and wellness with a personalised, science based touch.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of experts are equipped with many years of experience and professionalism. Working together in synergy, utilising state of the art technology in combination with protocols and products designed for maximum efficacy, enhancing your natural beauty whilst ensuring your skin is in optimal health, is our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointments" className="btn-primary text-lg px-8 py-4 animate-3d-hover">
                  BOOK A CONSULTATION
                </Link>
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4 animate-3d-hover">
                  GET IN TOUCH
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in-up-delay">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Future Clinic Treatment"
                className="w-full h-96 object-cover rounded-lg shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in-up">What others say about us</h2>
            <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in-up-delay">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 animate-glow">EXCELLENT</div>
                <div className="text-sm text-gray-600">Based on <strong>141 reviews</strong></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 shadow-lg transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-bounce-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded animate-pulse-slow">Verified</span>
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
            <h2 className="text-4xl font-bold mb-4">
              Empowering our clinicians to elevate beauty and wellness through personalised, science-driven care.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/appointments" className="btn-primary text-lg px-8 py-4">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Achieve your beauty and wellness goals with cutting-edge science & technology
          </h2>
          <Link to="/appointments" className="btn-outline text-lg px-8 py-4">
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;