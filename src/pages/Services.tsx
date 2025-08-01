import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      name: 'Bespoke Face',
      services: [
        {
          title: 'Skin Boosters',
          description: 'Advanced skin rejuvenation treatments using cutting-edge technology to enhance your natural beauty.',
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $150',
          duration: '60-90 mins'
        },
        {
          title: 'Facials',
          description: 'Customized facial treatments designed to address your specific skin concerns and goals.',
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $120',
          duration: '45-75 mins'
        },
        {
          title: 'Post-Op Recovery',
          description: 'Specialized treatments to support your recovery journey after cosmetic procedures.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $200',
          duration: '90-120 mins'
        },
        {
          title: 'Synthesis Organics',
          description: 'Holistic skincare using pure, organic ingredients from Byron Bay for natural radiance.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $180',
          duration: '60-90 mins'
        }
      ]
    },
    {
      name: 'Bespoke Body',
      services: [
        {
          title: 'Body Contouring',
          description: 'Advanced body sculpting treatments to enhance your natural curves and definition.',
          image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $250',
          duration: '90-120 mins'
        },
        {
          title: 'Lymphatic Drainage',
          description: 'Therapeutic massage techniques to promote detoxification and reduce swelling.',
          image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $180',
          duration: '60-90 mins'
        },
        {
          title: 'Spa Massages',
          description: 'Relaxing and therapeutic massage treatments for ultimate stress relief and wellness.',
          image: 'https://images.unsplash.com/photo-1544161512-6ad2f9d19ca9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $160',
          duration: '60-90 mins'
        },
        {
          title: 'Infrared Sauna',
          description: 'Detoxifying infrared sauna sessions for deep relaxation and wellness benefits.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $80',
          duration: '30-45 mins'
        },
        {
          title: 'Pelvic Pain',
          description: 'Specialized treatments for pelvic health and pain management.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $200',
          duration: '60-90 mins'
        },
        {
          title: 'C Section Recovery',
          description: 'Gentle and effective treatments to support post-cesarean recovery and healing.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $220',
          duration: '75-90 mins'
        }
      ]
    },
    {
      name: 'Advanced Technology',
      services: [
        {
          title: 'Ultraformer MPT',
          description: 'The latest non-invasive HIFU technology to lift, tighten, and rejuvenate your skin, removing small fat pockets where desired. Painless with no downtime.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $500',
          duration: '60-90 mins'
        },
        {
          title: 'INDIBA Therapy',
          description: 'Promotes the Biological response of tissue, achieving magnificent results in rejuvenation, revitalisation, lifting and skin hydration.',
          image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $300',
          duration: '60-75 mins'
        },
        {
          title: 'truFlex Muscle',
          description: 'Cutera truFlex technology is designed to adapt to your fitness level, shape, and goals, delivering the equivalent of 54,000 crunches in just one session.',
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          price: 'From $400',
          duration: '30-45 mins'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Marcelle Mercado',
      date: '2024-03-16',
      rating: 5,
      text: 'Thank you Wonder and thank you Claudia for my treatment for Ultraformer MPT and my beautiful Hollywood Lift & Booster Glow. My face looks much brighter, with a natural plump and glow. After the session l did not have any redness, no pain and was ready to out and party. After 2 days my skin kept on improving with a youthful glow and tightening. My fine lines had disappeared after one session. Everybody at work was commenting on how healthy and good my skin looked. I would definitely recommend this treatment to all my friends. Thank you Claudia for making me feel special and my skin youthful again.',
      verified: true
    },
    {
      name: 'Anastasiia Zakharenkova',
      date: '2024-05-25',
      rating: 5,
      text: 'I love going there! Every time after my treatments I feel very relaxed and refreshed. Everyone there is super nice and friendly. I had body contouring with Indiba and TruFlex, lymphatic drainage massage and facials – everything was perfect! Last time I paired my treatments with Infrared sauna and it became a perfect spa day.',
      verified: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty and wellness treatments, designed to enhance your natural beauty and promote optimal health.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{category.name}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the latest in beauty and wellness technology with our expert team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold text-black">{service.price}</span>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                    <Link 
                      to="/appointments" 
                      className="inline-flex items-center text-black font-medium hover:underline"
                    >
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {testimonial.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Verified</span>
                  )}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium">{testimonial.name}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Beauty Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book your free consultation today and discover how our expert team can help you achieve your beauty and wellness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="btn-outline text-lg px-8 py-4">
              BOOK A FREE CONSULTATION
            </Link>
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;