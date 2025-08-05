import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Company Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Circular Logo */}
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
              </div>
              {/* Company Name */}
              <div className="text-black font-bold text-sm leading-tight">
                <div>FUTURE CLINIC</div>
                <div className="ml-2">MODERN BEAUTY</div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Sydney's favourite destination for timeless beauty and rejuvenation. Let your skin tell the story in the hands of our experts.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
              <div className="text-gray-700 text-sm">
                <div>4 Cross Street</div>
                <div>Double Bay NSW 2028</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-black flex-shrink-0" />
              <span className="text-gray-700 text-sm">0415 588 449</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-black flex-shrink-0" />
              <span className="text-gray-700 text-sm">welcome@future.clinic</span>
            </div>
            <div className="text-gray-700 text-sm">
              future.clinic
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <div className="border-t border-gray-300 pt-2">
              <h4 className="text-gray-800 font-semibold text-sm">Opening hours</h4>
            </div>
            <div className="space-y-1 text-sm">
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

          {/* Social Media */}
          <div className="space-y-3">
            <div className="border-t border-gray-300 pt-2">
              <h4 className="text-gray-800 font-semibold text-sm">Follow Us</h4>
            </div>
            <div className="flex space-x-3">
              {/* Instagram */}
              <a
                href="https://instagram.com/futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-500 rounded flex items-center justify-center hover:opacity-80 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok */}
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

      {/* Bottom Strip */}
      <div className="bg-gray-800 py-2">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-sm text-white">
            Solution by Click Click Media
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;