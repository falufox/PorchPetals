import React from 'react';
import { Link } from 'react-router-dom';
import { Flower } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-kraft-50/95 via-white/90 to-sage-50/95 backdrop-blur-md border-b-2 border-kraft-200/30 sticky top-0 z-50 shadow-paper">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-petal-100 to-petal-200 p-3 rounded-vintage shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <Flower className="w-7 h-7 text-petal-600 group-hover:text-petal-700 transition-colors duration-300" />
            </div>
            <div className="relative">
              <h1 className="text-2xl font-handwritten font-semibold text-sage-800 group-hover:text-sage-900 transition-colors duration-300">
                Porch Petals
              </h1>
              <p className="text-sm text-sage-600 leading-none font-body italic">
                from my porch to yours
              </p>
              {/* Decorative flourish */}
              <div className="absolute -right-8 top-1 text-lg text-petal-300/60 group-hover:text-petal-400/80 transition-colors duration-300">
                ❦
              </div>
            </div>
          </Link>
          
          <nav className="hidden sm:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-sage-700 hover:text-petal-600 transition-all duration-300 font-body font-medium text-base relative group"
            >
              Browse
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-petal-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/order" 
              className="btn-primary text-base px-6 py-3 hover-bloom"
            >
              Order Now
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Link 
              to="/order" 
              className="btn-primary text-sm px-4 py-2"
            >
              Order
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kraft-300/50 to-transparent"></div>
    </header>
  );
};