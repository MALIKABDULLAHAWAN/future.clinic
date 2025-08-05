import { useState } from 'react';
import { Link } from 'react-router-dom';

const FutureBatheComingSoon = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Bath Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/bath.png" 
            alt="Luxury bathroom with freestanding bathtub"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-8" style={{ fontFamily: 'var(--font-monument)' }}>
            Future Bathe
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light" style={{ fontFamily: 'var(--font-monument)' }}>
            Coming Soon
          </p>
          <Link 
            to="/booking" 
            className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg transform hover:scale-105"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </section>

      {/* Mid-Page Section with Sauna Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 text-black" style={{ fontFamily: 'var(--font-monument)' }}>
                Premium Infrared Sauna Experience
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experience the future of wellness with our state-of-the-art infrared sauna facility. 
                A sanctuary designed for complete relaxation, detoxification, and rejuvenation.
              </p>
              <Link 
                to="/booking" 
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 text-lg transform hover:scale-105"
              >
                LEARN MORE
              </Link>
            </div>

            {/* Sauna Image with Person */}
            <div className="animate-fade-in-up-delay">
              <div className="relative">
                <div className="w-full h-96 relative overflow-hidden rounded-2xl">
                  {/* Infrared Sauna Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200">
                    {/* Wooden Sauna Panels */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          90deg,
                          transparent,
                          transparent 20px,
                          rgba(139, 69, 19, 0.1) 20px,
                          rgba(139, 69, 19, 0.1) 22px
                        )
                      `,
                      backgroundSize: '22px 100%'
                    }}></div>
                    
                    {/* Warm Lighting */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-orange-400 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-orange-400 to-transparent"></div>
                    
                    {/* Glass Door */}
                    <div className="absolute inset-4 border-2 border-white/30 rounded-lg"></div>
                    
                    {/* Bench */}
                    <div className="absolute bottom-8 left-8 right-8 h-4 bg-amber-200 rounded"></div>
                  </div>
                  
                  {/* Blurred Person Silhouette */}
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-24 h-32 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full blur-sm opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-black" style={{ fontFamily: 'var(--font-monument)' }}>
                Be the First to Know
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Sign up for early access and exclusive updates about Future Bathe
              </p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-black font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  NOTIFY ME
                </button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4">
                We'll notify you as soon as Future Bathe opens its doors
              </p>
            </div>
          </div>
        </div>
      </section>

      
      
    </div>
  );
};

export default FutureBatheComingSoon; 