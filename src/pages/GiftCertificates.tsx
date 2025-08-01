import { useState } from 'react';
import { Gift, Star, Heart, Users, Award, CheckCircle, ArrowRight, Calendar, DollarSign } from 'lucide-react';

const GiftCertificates = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('classic');

  const giftAmounts = [
    { value: '100', label: '$100', description: 'Perfect for a facial treatment' },
    { value: '200', label: '$200', description: 'Great for anti-aging treatments' },
    { value: '300', label: '$300', description: 'Ideal for comprehensive treatments' },
    { value: '500', label: '$500', description: 'Premium spa experience' },
    { value: 'custom', label: 'Custom Amount', description: 'Choose your own amount' }
  ];

  const giftDesigns = [
    { id: 'classic', name: 'Classic Elegance', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'modern', name: 'Modern Luxury', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 'spa', name: 'Spa Retreat', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  const popularGifts = [
    {
      title: 'Luxury Facial Experience',
      price: '$150',
      description: 'Perfect gift for someone who deserves a pampering session',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['60-minute treatment', 'Premium products', 'Relaxing environment', 'Expert care']
    },
    {
      title: 'Anti-Aging Package',
      price: '$300',
      description: 'Comprehensive anti-aging treatment for youthful radiance',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Chemical peel', 'Botox treatment', 'Skin analysis', 'Follow-up care']
    },
    {
      title: 'Wellness Retreat',
      price: '$400',
      description: 'Complete mind and body wellness experience',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Multiple treatments', 'Spa experience', 'Wellness consultation', 'Luxury amenities']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Gift Certificates
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Give the gift of beauty and wellness. Our gift certificates are perfect for any occasion and make thoughtful presents for your loved ones.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up-delay">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Gift className="w-5 h-5" />
                <span>Perfect Gifts</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Heart className="w-5 h-5" />
                <span>Thoughtful Presents</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5" />
                <span>Premium Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Gift Options */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Popular Gift Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularGifts.map((gift, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-500" />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-black backdrop-blur-sm">
                    {gift.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">{gift.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{gift.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Includes:</h4>
                    <div className="space-y-1">
                      {gift.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid flex items-center justify-center space-x-2">
                    <span>Purchase Gift Certificate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Gift Certificate */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Create Custom Gift Certificate</h2>
              <form className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-lg font-semibold mb-4">Select Amount</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {giftAmounts.map((amount, index) => (
                      <div
                        key={amount.value}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 card-hover ${
                          selectedAmount === amount.value
                            ? 'border-black bg-black text-white'
                            : 'border-gray-200 bg-white hover:border-black'
                        }`}
                        onClick={() => setSelectedAmount(amount.value)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <h3 className="font-semibold text-lg">{amount.label}</h3>
                        <p className="text-sm opacity-75 mt-1">{amount.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Design Selection */}
                <div>
                  <label className="block text-lg font-semibold mb-4">Choose Design</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {giftDesigns.map((design, index) => (
                      <div
                        key={design.id}
                        className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                          selectedDesign === design.id
                            ? 'ring-4 ring-black'
                            : 'ring-2 ring-gray-200'
                        }`}
                        onClick={() => setSelectedDesign(design.id)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <img
                          src={design.image}
                          alt={design.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2">
                          <p className="text-sm font-semibold text-black text-center">{design.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personalization */}
                <div>
                  <label className="block text-lg font-semibold mb-3">Recipient Name</label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300"
                    placeholder="Enter recipient's name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold mb-3">Personal Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Add a personal message (optional)"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 liquid flex items-center justify-center space-x-2"
                >
                  <Gift className="w-5 h-5" />
                  <span>Purchase Gift Certificate</span>
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in-up-delay">
              <h2 className="text-3xl font-bold mb-8 gradient-text">Why Choose Our Gift Certificates?</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">No Expiration</h3>
                      <p className="text-gray-600">Gift certificates never expire, giving recipients flexibility to use them when convenient.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Flexible Use</h3>
                      <p className="text-gray-600">Can be used for any service or treatment, allowing recipients to choose what they prefer.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Premium Quality</h3>
                      <p className="text-gray-600">Beautifully designed certificates that reflect the premium quality of our services.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Expert Care</h3>
                      <p className="text-gray-600">Recipients receive the same expert care and attention as all our valued clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-fade-in-up">
            Perfect for Every Occasion
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Birthdays</h3>
              <p className="text-gray-600">Make their special day even more memorable with a beauty and wellness gift.</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Holidays</h3>
              <p className="text-gray-600">Perfect holiday gift for friends and family who deserve some self-care.</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Anniversaries</h3>
              <p className="text-gray-600">Celebrate love and commitment with a luxurious beauty experience.</p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <p className="text-gray-600">Reward accomplishments and milestones with a premium wellness experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GiftCertificates; 