import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="header-logo"></div>
              <div className="flex flex-col">
                <span className="text-black font-bold text-lg tracking-wide">FUTURE CLINIC</span>
                <span className="text-black font-medium text-sm tracking-wide">MODERN BEAUTY</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Sydney's favourite destination for timeless beauty and rejuvenation. Let your skin tell the story in the hands of our experts.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-700">4 Cross Street<br />Double Bay NSW 2028</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-gray-700">0415 588 449</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black flex-shrink-0" />
                <span className="text-gray-700">welcome@future.clinic</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-700">future.clinic</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-black font-bold mb-4 text-base">Opening hours</h4>
            <div className="border-t border-gray-300 pt-2">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-700">Mon:</span>
                  <span className="text-gray-700">9am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tue:</span>
                  <span className="text-gray-700">9am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Wed:</span>
                  <span className="text-gray-700">9am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Thu:</span>
                  <span className="text-gray-700">9am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Fri:</span>
                  <span className="text-gray-700">9am - 5pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sat:</span>
                  <span className="text-gray-700">9am - 4pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-black font-bold mb-4 text-base">Follow Us</h4>
            <div className="border-t border-gray-300 pt-2">
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/futureclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 rounded flex items-center justify-center hover:bg-pink-600 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://tiktok.com/@futureclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip - Copyright */}
      <div className="bg-black text-white py-3">
        <div className="container-custom">
          <div className="text-center text-sm">
            Solution by Click Click Media
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;