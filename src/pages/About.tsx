import { Star, Award, Users, Heart, Shield, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Claudia Fabiani',
      role: 'CLINICAL DIRECTOR, Cosmetologist, Cosmiatrist',
      description: 'Meet Claudia Fabiani, a luminary in the aesthetic field, with over 30 years experience as a leading international cosmetologist and cosmiatrist. Claudia offers a full spectrum of sophisticated beauty treatments including chemical peels, rosacea treatment, acne management, extractions, Vodder Manual Lymphatic Drainage, and Shiatsu. As an esthetician, she specialises in body techniques targeting cellulite, localised fat, and skin laxity. Additionally, Claudia is a celebrated celebrity makeup artist renowned for her ability to enhance the natural beauty of her clients.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['30+ years experience', 'International recognition', 'Celebrity makeup artist', 'Skincare line founder']
    },
    {
      name: 'Salia Insua Lopez',
      role: 'THERAPEUTIC DIRECTOR, Dermotofunctional Therapist (Spanish Physiotherapist)',
      description: 'Introducing Salia Insua Lopez, a Dermatofunctional therapist and Holistic Wellness Expert. Salia brings over 20 years expertise in women\'s health, specialising in pregnancy, postpartum recovery, menopause and pelvic floor health. She specialises in INDIBA Deep Beauty Radio Frequency Aesthetics and Activ care, as well as Leduc and Vodder Manual Lymphatic Drainage. Her expertise extends to Pre and Post Plastic Surgery recovery, Deep Tissue Massage and Therapeutic Pilates.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      achievements: ['20+ years experience', 'Women\'s health specialist', 'University lecturer', 'Holistic wellness expert']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We treat every client with the care and attention they deserve, creating a nurturing environment for transformation.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and wellbeing are our top priorities. We use only the highest quality products and safest procedures.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of beauty and wellness technology to provide you with the most effective treatments.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of specialists brings decades of combined experience and continuous education to every treatment.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '141+', label: '5-Star Reviews' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '50+', label: 'Treatment Options' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Future Clinic
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Sydney's favourite destination for timeless beauty and rejuvenation. Let your skin tell the story in the hands of our experts.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to transform beauty and wellness through personalized, science-driven care, Future Clinic has been at the forefront of aesthetic innovation for over two decades.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We understand that true beauty is a reflection of optimal skin health, balance, and natural refinement. Our mission is to enhance your natural beauty whilst ensuring your skin is in optimal health.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 20 years of expertise in skincare and well-being, we combine cutting-edge technology with holistic protocols to deliver results that exceed expectations.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Future Clinic"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform beauty and wellness with a personalised, science based touch.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering our clinicians to elevate beauty and wellness through personalised, science-driven care.
            </p>
          </div>
          
          <div className="space-y-16">
            {team.map((member, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{member.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-amber-500" />
                        <span className="text-sm font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Excellence Proven
            </h2>
            <p className="text-xl text-gray-600">
              With a 5-star rating from 141+ Google Reviews
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex justify-center items-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600 mb-2">EXCELLENT</p>
              <p className="text-gray-600">Based on <strong>141 reviews</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We utilise state-of-the-art technology in combination with protocols and products designed for maximum efficacy. Our advanced equipment includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <strong>Ultraformer MPT:</strong> Latest non-invasive HIFU technology for lifting and tightening
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <strong>INDIBA Therapy:</strong> Radio frequency technology for tissue regeneration
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <strong>truFlex Muscle:</strong> Advanced muscle stimulation technology
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <strong>Infrared Sauna:</strong> Detoxifying and wellness technology
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Advanced Technology"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience the Future of Beauty
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients who have transformed their beauty and wellness journey with our expert team and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/appointments" className="btn-outline text-lg px-8 py-4">
              BOOK A FREE CONSULTATION
            </a>
            <a href="/contact" className="btn-secondary text-lg px-8 py-4">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;