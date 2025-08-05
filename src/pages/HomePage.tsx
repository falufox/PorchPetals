import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, MapPin, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-sage-800 mb-3">
            Fresh blooms to your door
          </h1>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto leading-relaxed">
            Handcrafted bouquets delivered same-day to neighbors in our building. 
            Simple, beautiful, and made with love.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/order" className="btn-primary text-lg px-8 py-4">
            <Sparkles className="w-5 h-5 mr-2" />
            Browse Bouquets
          </Link>
          <button className="btn-secondary text-lg px-8 py-4">
            How It Works
          </button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-sage-600">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-petal-500" />
            Same-day delivery
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-petal-500" />
            Building residents only
          </div>
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-2 text-petal-500" />
            Grown with care
          </div>
        </div>
      </div>

      {/* Featured Bouquets Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="card p-6">
          <div className="bg-gradient-to-br from-petal-100 to-petal-200 rounded-2xl h-48 mb-4 flex items-center justify-center">
            <span className="text-5xl">🌻</span>
          </div>
          <h3 className="text-xl font-semibold text-sage-800 mb-2">Minnie Zinnie</h3>
          <p className="text-sage-600 mb-3">Cheerful zinnias in sunset colors</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-petal-600">$12</span>
            <span className="text-sm text-sage-500">3 available today</span>
          </div>
        </div>
        
        <div className="card p-6">
          <div className="bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl h-48 mb-4 flex items-center justify-center">
            <span className="text-5xl">🌸</span>
          </div>
          <h3 className="text-xl font-semibold text-sage-800 mb-2">Garden Mix</h3>
          <p className="text-sage-600 mb-3">Seasonal blooms in soft pastels</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-petal-600">$18</span>
            <span className="text-sm text-sage-500">2 available today</span>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="card p-8 mb-12">
        <h2 className="text-2xl font-handwritten font-semibold text-sage-800 mb-6 text-center">
          How Porch Petals Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-petal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🌺</span>
            </div>
            <h3 className="font-semibold text-sage-800 mb-2">1. Pick your blooms</h3>
            <p className="text-sm text-sage-600">Choose from our daily selection of fresh bouquets</p>
          </div>
          <div className="text-center">
            <div className="bg-petal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🏠</span>
            </div>
            <h3 className="font-semibold text-sage-800 mb-2">2. Same-day delivery</h3>
            <p className="text-sm text-sage-600">We'll hang them on your door in beautiful kraft wrap</p>
          </div>
          <div className="text-center">
            <div className="bg-petal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">✨</span>
            </div>
            <h3 className="font-semibold text-sage-800 mb-2">3. Enjoy the magic</h3>
            <p className="text-sm text-sage-600">Fresh flowers to brighten your day, delivered with love</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card p-8 bg-gradient-to-br from-petal-50 to-cream-50">
          <h2 className="text-2xl font-handwritten font-semibold text-sage-800 mb-3">
            Ready to brighten your day?
          </h2>
          <p className="text-sage-600 mb-6">
            Orders close at 6pm for same-day delivery. Fresh blooms, grown right here.
          </p>
          <Link to="/order" className="btn-primary text-lg px-8 py-4 inline-flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Start Your Order
          </Link>
        </div>
      </div>
    </div>
  );
};