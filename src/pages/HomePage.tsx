import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, MapPin, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/4 text-3xl text-lavender-300/40 animate-float">✨</div>
        <div className="absolute -top-8 right-1/3 text-2xl text-petal-300/40 animate-sway">🌿</div>
        
        <div className="mb-8">
          <div className="inline-block mb-4">
            <h1 className="text-5xl md:text-7xl text-display text-sage-800 mb-2 leading-none">
              Fresh blooms
            </h1>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-petal-400 to-transparent"></div>
              <span className="text-2xl md:text-3xl text-handwritten text-petal-600 italic">to your door</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-petal-400 to-transparent"></div>
            </div>
          </div>
          
          <p className="text-xl text-body text-sage-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Handcrafted bouquets delivered same-day to neighbors in our building. 
            Each arrangement is thoughtfully curated with seasonal blooms, wrapped in kraft paper, 
            and delivered with a touch of <span className="text-handwritten text-petal-600 text-2xl">magic</span>.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link to="/order" className="btn-primary text-xl px-10 py-5 hover-bloom">
            <Sparkles className="w-6 h-6 mr-3" />
            Browse Today's Garden
          </Link>
          <button className="btn-secondary text-xl px-10 py-5 hover-lift">
            Our Story
          </button>
        </div>
        
        {/* Trust indicators - enhanced */}
        <div className="card p-6 max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-base text-body text-sage-700">
            <div className="flex items-center group">
              <div className="bg-petal-100 p-2 rounded-full mr-3 group-hover:bg-petal-200 transition-colors duration-300">
                <Clock className="w-5 h-5 text-petal-600" />
              </div>
              <span className="font-medium">Same-day delivery</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-sage-100 p-2 rounded-full mr-3 group-hover:bg-sage-200 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-sage-600" />
              </div>
              <span className="font-medium">Building residents only</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-rosewood-100 p-2 rounded-full mr-3 group-hover:bg-rosewood-200 transition-colors duration-300">
                <Heart className="w-5 h-5 text-rosewood-600" />
              </div>
              <span className="font-medium">Grown with care</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Bouquets Preview */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-display text-sage-800 mb-3">Today's Fresh Collection</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-petal-400 to-lavender-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="card p-8 hover-lift group">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-petal-100 via-petal-50 to-rosewood-100 rounded-organic h-56 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl animate-gentle-bounce">🌻</span>
                {/* Decorative corner */}
                <div className="absolute top-3 right-3 text-lg text-petal-400/60">❦</div>
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 paper-texture opacity-20"></div>
              </div>
              {/* Vintage ribbon */}
              <div className="absolute -bottom-2 left-4 bg-kraft-200 px-3 py-1 rounded-full shadow-paper">
                <span className="text-xs font-accent text-kraft-800">Fresh Today</span>
              </div>
            </div>
            <h3 className="text-2xl text-display text-sage-800 mb-3">Minnie Zinnie</h3>
            <p className="text-body text-sage-600 mb-4 leading-relaxed">
              Cheerful zinnias in warm sunset colors, paired with delicate baby's breath for a touch of whimsy
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-heading font-semibold text-petal-600">$12</span>
              <div className="text-right">
                <span className="text-sm text-accent text-sage-500">3 available today</span>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-2 bg-petal-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-petal-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-petal-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-kraft-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-kraft-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-8 hover-lift group">
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-sage-100 via-sage-50 to-lavender-100 rounded-organic h-56 flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl animate-gentle-bounce">🌸</span>
                {/* Decorative corner */}
                <div className="absolute top-3 right-3 text-lg text-sage-400/60">❦</div>
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 linen-texture opacity-20"></div>
              </div>
              {/* Vintage ribbon */}
              <div className="absolute -bottom-2 left-4 bg-kraft-200 px-3 py-1 rounded-full shadow-paper">
                <span className="text-xs font-accent text-kraft-800">Seasonal Mix</span>
              </div>
            </div>
            <h3 className="text-2xl text-display text-sage-800 mb-3">Garden Mix</h3>
            <p className="text-body text-sage-600 mb-4 leading-relaxed">
              A romantic blend of seasonal blooms in soft pastels, featuring lisianthus and sweet peas
            </p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-heading font-semibold text-petal-600">$18</span>
              <div className="text-right">
                <span className="text-sm text-accent text-sage-500">2 available today</span>
                <div className="flex space-x-1 mt-1">
                  <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-kraft-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-kraft-200 rounded-full"></div>
                  <div className="w-2 h-2 bg-kraft-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="card p-12 mb-16 linen-texture relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-2xl text-petal-300/30">✨</div>
        <div className="absolute bottom-4 left-4 text-xl text-sage-300/30">🌿</div>
        
        <div className="text-center mb-12">
          <h2 className="text-4xl text-display text-sage-800 mb-4 flourish">
            How Porch Petals Works
          </h2>
          <p className="text-lg text-body text-sage-600 max-w-2xl mx-auto">
            A simple, thoughtful process designed to bring joy to your doorstep
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-petal-100 to-petal-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">🌺</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">Pick your blooms</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              Browse our carefully curated daily selection of fresh, locally-grown bouquets
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-sage-100 to-sage-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">🏠</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">Same-day delivery</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              We'll lovingly wrap your bouquet in kraft paper and hang it on your door
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">✨</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">Enjoy the magic</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              Fresh flowers to brighten your day, delivered with care and a touch of whimsy
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card p-12 bg-gradient-to-br from-petal-50 via-kraft-50 to-sage-50 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 paper-texture opacity-30"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <h2 className="text-4xl text-display text-sage-800 mb-4">
                Ready to brighten your day?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-petal-400 to-rosewood-400 mx-auto rounded-full mb-6"></div>
            </div>
            
            <p className="text-xl text-body text-sage-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Orders close at <span className="font-heading font-semibold text-petal-600">6:00 PM</span> for same-day delivery. 
              Each bouquet is freshly picked and thoughtfully arranged just for you.
            </p>
            
            <Link to="/order" className="btn-primary text-xl px-12 py-6 inline-flex items-center hover-bloom shadow-dreamy">
              <Sparkles className="w-6 h-6 mr-3" />
              Start Your Order
            </Link>
            
            <p className="text-sm text-accent text-sage-500 mt-4 italic">
              "Where every delivery feels like a gift from a dear friend"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};