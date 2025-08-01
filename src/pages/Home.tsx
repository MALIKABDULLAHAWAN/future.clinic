import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Facials + Skin',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/facials'
    },
    {
      title: 'Lymphatic Drainage',
      description: 'Delve into a world of specialist massages that bring ultimate relief, enhance muscle relaxation, and rejuvenate the body.',
      image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/lymphatic-drainage'
    },
    {
      title: 'Skin Boosters',
      description: 'Explore our advanced facials prescribed to meet your individual results-driven needs delivered by the world\'s best therapists at Future Clinic.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/skin-boosters'
    },
    {
      title: 'Ultraformer MPT',
      description: 'The latest non-invasive HIFU technology to lift, tighten, and rejuvenate your skin, removing small fat pockets where desired. Painless with no downtime.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/ultraformer-mpt'
    },
    {
      title: 'INDIBA Therapy',
      description: 'Promotes the Biological response of tissue, achieving magnificent results in rejuvenation, revitalisation, lifting and skin hydration.',
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
      description: 'Our specialised Post operative treatment program is designed to address your unique needs.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/post-op'
    },
    {
      title: 'Women\'s Health',
      description: 'Meet your body and welcome to the conversation around pelvic floor, pregnancy, menopause and everything inbetween.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/services/womens-health'
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

  return (
    <div className="min-h-screen">
      {/* Hero Section - Perfect Match */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold mb-8 sm:mb-12 leading-none tracking-tight">
            Cutting-edge Science<br />
            for Refined Lasting<br />
            beauty
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-16 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed font-light px-4">
            With over 20 years of expertise in skincare and well-being, we understand that true beauty is a reflection of optimal skin health, balance, and natural refinement. Achieve your beauty and wellness goals with innovative, holistic protocols, products and services delivered by world class experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Link to="/appointments" className="border-2 border-white text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-none font-medium hover:bg-white hover:text-black transition-colors duration-300 text-lg sm:text-xl tracking-wide">
              BOOK A FREE CONSULTATION
            </Link>
            <Link to="/gift-certificates" className="border-2 border-amber-400 text-amber-400 px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-none font-medium hover:bg-amber-400 hover:text-black transition-colors duration-300 text-lg sm:text-xl tracking-wide">
              GIFT CERTIFICATES
            </Link>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Excellence proven</h2>
          <p className="text-xl text-gray-600 mb-8">With a 5-star rating from 141+ Google Reviews</p>
          <div className="flex justify-center items-center space-x-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Perfect Layout */}
      <section className="py-16 sm:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 sm:h-56 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">{service.title}</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-black font-semibold hover:underline text-base sm:text-lg">
                  Learn More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/services" className="btn-primary text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-5 tracking-wide">
              View all treatments
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We transform beauty and wellness with a personalised, science based touch.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our team of experts are equipped with many years of experience and professionalism. Working together in synergy, utilising state of the art technology in combination with protocols and products designed for maximum efficacy; enhancing your natural beauty whilst ensuring your skin is in optimal health, is our mission.
              </p>
              <Link to="/appointments" className="btn-primary text-lg px-8 py-4">
                BOOK A FREE CONSULTATION
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Future Clinic"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What others say about us</h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">EXCELLENT</div>
                <div className="text-sm text-gray-600">Based on <strong>141 reviews</strong></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                  )}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{testimonial.name}</span>
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