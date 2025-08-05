import React from 'react';
import { Link } from 'react-router-dom';
import { Flower } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-sage-200/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-petal-100 p-2 rounded-full">
              <Flower className="w-6 h-6 text-petal-600" />
            </div>
            <div>
              <h1 className="text-xl font-handwritten font-semibold text-sage-800">
                Porch Petals
              </h1>
              <p className="text-xs text-sage-600 leading-none">
                Neighbor-to-neighbor blooms
              </p>
            </div>
          </Link>
          
          <nav className="hidden sm:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-sage-700 hover:text-petal-600 transition-colors duration-200 font-medium text-sm"
            >
              Browse
            </Link>
            <Link 
              to="/order" 
              className="btn-primary text-sm"
            >
              Order Now
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <Link 
              to="/order" 
              className="btn-primary text-sm"
            >
              Order
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};