
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white">Nyoko</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#explore" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                Explore Photographers
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                How It Works
              </a>
              <Link to="/quote-request">
                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a href="#explore" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                Explore Photographers
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                How It Works
              </a>
              <Link to="/quote-request">
                <button className="bg-white text-black block px-6 py-2 rounded-full text-base font-medium hover:bg-gray-200 transition-colors text-center mx-3 mt-4 w-full">
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
