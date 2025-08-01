import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">FUTURE CLINIC</h3>
                <p className="text-xs text-gray-400">MODERN BEAUTY</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sydney's favourite destination for timeless beauty and rejuvenation. Let your skin tell the story in the hands of our experts.
            </p>
            <div className="space-y-2 text-sm">
              <p>4 Cross Street Double Bay NSW 2028</p>
              <p>0415 588 449</p>
              <p>welcome@future.clinic</p>
              <p>future.clinic</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Opening hours</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Mon:</span>
                <span>9am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Tue:</span>
                <span>9am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Wed:</span>
                <span>9am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Thu:</span>
                <span>9am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri:</span>
                <span>9am - 5pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sat:</span>
                <span>9am - 4pm</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/futureclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 max-w-2xl">
              <p>
                FUTURE CLINIC Modern Beauty acknowledges the Australian Aboriginal and Torres Strait Islander peoples as the first inhabitants of the nation and the traditional custodians of the lands where we live, learn and work. We respectfully acknowledges their Ancestors and Elders, past and present.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/appointments" className="btn-outline text-sm px-4 py-2">
                Book Now
              </Link>
              <Link to="/contact" className="btn-outline text-sm px-4 py-2">
                Get in Touch
              </Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Future Clinic. All rights reserved. | Solution by Click Click Media
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;