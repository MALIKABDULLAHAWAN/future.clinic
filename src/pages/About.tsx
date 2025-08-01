import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Shield, Users, Award, Clock, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our treatments and services.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Safety',
      description: 'Your safety and well-being are our top priorities in every treatment.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalization',
      description: 'Every treatment is tailored to your unique needs and goals.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We use the latest technology and techniques for optimal results.'
    }
  ];

  const team = [
    {
      name: 'Claudia Fabiani',
      role: 'CLINICAL DIRECTOR, Cosmetologist, Cosmiatrist',
      description: 'Meet Claudia Fabiani, a luminary in the aesthetic field, with over 30 years experience as a leading international cosmetologist and cosmiatrist. Her expertise spans across multiple continents, bringing world-class techniques and treatments to Future Clinic.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialties: ['Advanced Skin Treatments', 'Anti-Aging Protocols', 'Clinical Cosmetology']
    },
    {
      name: 'Salia Insua Lopez',
      role: 'THERAPEUTIC DIRECTOR, Dermotofunctional Therapist (Spanish Physiotherapist)',
      description: 'Introducing Salia Insua Lopez, a Dermatofunctional therapist and Holistic Wellness Expert. Salia brings over 20 years expertise in women\'s health, specialising in pregnancy, postpartum recovery, menopause and pelvic floor health.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      specialties: ['Women\'s Health', 'Postpartum Recovery', 'Pelvic Floor Therapy']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The team at Future Clinic is absolutely amazing. Their expertise and attention to detail is unmatched. I\'ve never felt more confident in my skin.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Professional, caring, and results-driven. Future Clinic has transformed my approach to skincare and wellness.',
      avatar: 'MC'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      text: 'The personalized approach and cutting-edge technology make every visit exceptional. Highly recommend!',
      avatar: 'ED'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center animate-fade-in-up-3d">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black heading-responsive">
              About Future Clinic
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-600 text-responsive">
              Sydney's favourite destination for timeless beauty and rejuvenation. 
              We transform beauty and wellness with a personalised, science-based touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay">
              <Link to="/appointments" className="btn-responsive bg-black text-white hover:bg-gray-800 button-hover-3d">
                BOOK A CONSULTATION
              </Link>
              <Link to="/contact" className="btn-responsive border-2 border-black text-black hover:bg-black hover:text-white button-hover-3d">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'mission', label: 'Our Mission' },
              { id: 'values', label: 'Our Values' },
              { id: 'team', label: 'Our Team' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 button-hover-3d ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in-up-3d">
            {activeTab === 'story' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black heading-responsive">
                    Our Story
                  </h2>
                  <p className="text-lg text-gray-700 mb-6 text-responsive">
                    Founded with a vision to revolutionize beauty and wellness, Future Clinic has been at the forefront of aesthetic innovation for over two decades. Our journey began with a simple belief: that true beauty is a reflection of optimal health, balance, and natural refinement.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 text-responsive">
                    From our humble beginnings in Double Bay, we've grown into Sydney's premier destination for cutting-edge beauty treatments, combining advanced technology with personalized care to deliver exceptional results.
                  </p>
                  <p className="text-lg text-gray-700 text-responsive">
                    Today, we continue to push boundaries, embracing the latest scientific advancements while maintaining the warm, personal touch that our clients have come to love and trust.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Future Clinic Story"
                    className="w-full h-96 object-cover rounded-lg shadow-xl img-responsive"
                  />
                </div>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black heading-responsive">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-700 mb-8 text-responsive">
                  To empower individuals to achieve their beauty and wellness goals through innovative, science-based treatments delivered by world-class experts in a nurturing, personalized environment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center animate-fade-in-up-3d" style={{ animationDelay: '0.1s' }}>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black">Excellence</h3>
                    <p className="text-gray-700">Delivering the highest quality treatments with exceptional results</p>
                  </div>
                  <div className="text-center animate-fade-in-up-3d" style={{ animationDelay: '0.2s' }}>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black">Care</h3>
                    <p className="text-gray-700">Providing personalized attention and compassionate service</p>
                  </div>
                  <div className="text-center animate-fade-in-up-3d" style={{ animationDelay: '0.3s' }}>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-black">Safety</h3>
                    <p className="text-gray-700">Ensuring the highest standards of safety and well-being</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black heading-responsive">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-gray-50 rounded-lg card-hover animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-black">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black heading-responsive">
                  Meet Our Expert Team
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-lg shadow-lg card-hover animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover img-responsive"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-2 text-black">{member.name}</h3>
                          <p className="text-sm text-gray-600 mb-4">{member.role}</p>
                          <p className="text-gray-700 mb-4 text-responsive">{member.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {member.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black heading-responsive">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <span className="font-semibold text-black">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-responsive text-glow-3d">
            Ready to Start Your Beauty Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto text-responsive">
            Join thousands of satisfied clients who have transformed their beauty and wellness with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="btn-responsive bg-white text-black hover:bg-gray-100 button-hover-3d">
              BOOK A CONSULTATION
            </Link>
            <Link to="/contact" className="btn-responsive border-2 border-white text-white hover:bg-white hover:text-black button-hover-3d">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;