import { useState } from 'react';
import { Heart, Leaf, Star, Sparkles, Award, Shield, Zap, CheckCircle } from 'lucide-react';

const SynthesisOrganics = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Certified Organic",
      description: "Highest quality, cruelty free ingredients, Certified Organic and sustainably wild harvested"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transformative Results",
      description: "Focus on transformative results and beautiful skin with harmony and ageless radiance"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Artisan Crafted",
      description: "Made in Byron Bay with clearest extraction methods to honour the nurturing life-force energy of plants"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity & Transparency",
      description: "Integrity, transparency, sustainability, and love in every product"
    }
  ];

  const products = [
    {
      name: "Skincare Range",
      description: "High performance holistic skincare for radiant conscious beauty",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Aromatherapy",
      description: "Energy imbued aromatherapy for a harmonious state of being",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Elixirs",
      description: "Alchemy of Nature, Science and Spirit for transformative beauty",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                Synthesis Organics
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay">
              <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
                BOOK NOW
              </button>
              <button className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
                VIEW SYNTHESIS ORGANICS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="relative animate-fade-in-up">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Synthesis Organics - Woman applying skincare product"
                className="w-full h-96 md:h-[600px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black text-center">
                Synthesis Energy Imbued Organics<br />
                Naturally Transformative Beauty
              </h2>
              
              <div className="text-center mb-12">
                <blockquote className="text-xl italic text-gray-600">
                  "Everything flourishes in the presence of love." - Thelma Rains
                </blockquote>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  Synthesis Organics is a high performance holistic skincare and aromatherapy range, made in Byron Bay. 
                  Our philosophy centers on transformative results and beautiful skin, focusing on harmony and a subtle 
                  glow of ageless, heartfelt radiance.
                </p>
                
                <p>
                  We use the highest quality, cruelty free ingredients, Certified Organic and sustainably wild harvested, 
                  with the clearest extraction methods to honour the nurturing life-force energy of plants. Every product 
                  is crafted with integrity, transparency, sustainability, and love.
                </p>
                
                <p>
                  Welcome to Synthesis Organics as our artisan partner. Try us – your skin, heart and soul will thank you for it!
                </p>
                
                <p className="text-xl font-semibold text-black">
                  Synthesis Organics: energy imbued skincare, aromatherapy and elixirs for radiant conscious beauty 
                  and a harmonious state of being, an alchemy of Nature, Science and Spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Our Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-gray-50 p-8 rounded-lg h-full">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
            Our Product Range
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-black">{product.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-black animate-fade-in-up">
              Why Choose Synthesis Organics?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-bold mb-6 text-black">Natural & Organic</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certified Organic ingredients</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cruelty-free formulations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Sustainably wild harvested</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Made in Byron Bay</span>
                  </li>
                </ul>
              </div>
              
              <div className="animate-fade-in-up-delay">
                <h3 className="text-2xl font-bold mb-6 text-black">Transformative Results</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">High performance skincare</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Energy imbued formulations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ageless, heartfelt radiance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Harmonious state of being</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-8 text-black">
                The Alchemy of Nature, Science and Spirit
              </h2>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  At Synthesis Organics, we believe in the power of natural transformation. Our products are more than 
                  just skincare – they are a journey towards radiant conscious beauty and inner harmony.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Nature</h3>
                    <p className="text-gray-600">Pure, organic ingredients from the earth</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Science</h3>
                    <p className="text-gray-600">Advanced extraction and formulation methods</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Spirit</h3>
                    <p className="text-gray-600">Energy imbued with love and intention</p>
                  </div>
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
            Experience the Transformation
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up-delay">
            Your skin, heart and soul will thank you for it!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105 hover:-translate-y-1 liquid">
              BOOK CONSULTATION
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-lg transform hover:scale-105 hover:rotate-1 liquid">
              VIEW PRODUCTS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SynthesisOrganics; 