import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-2xl">C</span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wide">FUTURE CLINIC</h3>
                <p className="text-sm text-gray-400">MODERN BEAUTY</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-base">
              Sydney's favourite destination for timeless beauty and rejuvenation. Let your skin tell the story in the hands of our experts.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">4 Cross Street Double Bay NSW 2028</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">0415 588 449</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">welcome@future.clinic</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">future.clinic</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold mb-8">Opening hours</h4>
            <div className="space-y-3 text-base text-gray-300">
              <div className="flex justify-between">
                <span>Mon:</span>
                <span>9am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Tue:</span>
                <span>9am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Wed:</span>
                <span>9am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Thu:</span>
                <span>9am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri:</span>
                <span>9am-5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sat:</span>
                <span>9am-4pm</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-bold mb-8">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://tiktok.com/@futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-black border border-white rounded flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              Solution by Click Click Media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;