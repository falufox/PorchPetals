import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, MapPin, Sparkles } from 'lucide-react';
import porchPetalsOwner from '../assets/porchpetalsowner.PNG';

export const HomePage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 left-1/4 text-3xl text-lavender-300/40 animate-float">✨</div>
        <div className="absolute -top-8 right-1/3 text-2xl text-petal-300/40 animate-sway">🌿</div>
        
        <div className="mb-8">
          {/* Character Image with Personal Introduction */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-soft hover:shadow-dreamy transition-all duration-300 hover:scale-105 border-4 border-petal-200/50">
                <img 
                  src={porchPetalsOwner} 
                  alt="Porch Petals Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-petal-300/20 animate-pulse"></div>
            </div>
            
            <div className="max-w-md">
              <div className="inline-block mb-4">
                <h1 className="text-4xl md:text-6xl text-display text-sage-800 mb-2 leading-none">
                  Fresh blooms
                </h1>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-petal-400 to-transparent"></div>
                  <span className="text-xl md:text-2xl text-handwritten text-petal-600 italic">to your door</span>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-petal-400 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-body text-sage-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Hi! I'm growing flowers with love in my container garden and sharing them with neighbors like you. 
            Order before midnight and I'll cut your blooms fresh the next morning for same-day, 
            no-contact delivery that spreads the <span className="text-handwritten text-petal-600 text-2xl">joy</span> flowers bring me.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link to="/order" className="btn-primary text-xl px-10 py-5 hover-bloom">
            <Sparkles className="w-6 h-6 mr-3" />
            Browse Today's Garden
          </Link>
          <button className="btn-secondary text-xl px-10 py-5 hover-lift">
            My Story
          </button>
        </div>
        
        {/* Trust indicators - enhanced */}
        <div className="card p-6 max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-base text-body text-sage-700">
            <div className="flex items-center group">
              <div className="bg-petal-100 p-2 rounded-full mr-3 group-hover:bg-petal-200 transition-colors duration-300">
                <Clock className="w-5 h-5 text-petal-600" />
              </div>
              <span className="font-medium">Cut fresh daily</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-sage-100 p-2 rounded-full mr-3 group-hover:bg-sage-200 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-sage-600" />
              </div>
              <span className="font-medium">No-contact delivery</span>
            </div>
            <div className="flex items-center group">
              <div className="bg-rosewood-100 p-2 rounded-full mr-3 group-hover:bg-rosewood-200 transition-colors duration-300">
                <Heart className="w-5 h-5 text-rosewood-600" />
              </div>
              <span className="font-medium">Container garden grown</span>
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

      {/* Houseplant Section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl text-display text-sage-800 mb-3">Add a Houseplant Friend</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-lavender-400 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-body text-sage-600 max-w-2xl mx-auto">
            Adopt a green companion to pair with your bouquet delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card p-6 hover-lift group text-center">
            <div className="bg-gradient-to-br from-sage-100 via-sage-50 to-kraft-100 rounded-organic h-48 flex items-center justify-center relative overflow-hidden mb-4">
              <span className="text-6xl animate-gentle-bounce">🌱</span>
              <div className="absolute inset-0 paper-texture opacity-20"></div>
            </div>
            <h3 className="text-lg text-display text-sage-800 mb-2">Pothos Varieties</h3>
            <p className="text-body text-sage-600 text-sm">
              Easy-care trailing plants perfect for beginners
            </p>
          </div>
          
          <div className="card p-6 hover-lift group text-center">
            <div className="bg-gradient-to-br from-lavender-100 via-lavender-50 to-sage-100 rounded-organic h-48 flex items-center justify-center relative overflow-hidden mb-4">
              <span className="text-6xl animate-gentle-bounce">🪴</span>
              <div className="absolute inset-0 linen-texture opacity-20"></div>
            </div>
            <h3 className="text-lg text-display text-sage-800 mb-2">Succulents</h3>
            <p className="text-body text-sage-600 text-sm">
              Low-maintenance beauties in decorative pots
            </p>
          </div>
          
          <div className="card p-6 hover-lift group text-center">
            <div className="bg-gradient-to-br from-petal-100 via-kraft-50 to-sage-100 rounded-organic h-48 flex items-center justify-center relative overflow-hidden mb-4">
              <span className="text-6xl animate-gentle-bounce">🍃</span>
              <div className="absolute inset-0 paper-texture opacity-20"></div>
            </div>
            <h3 className="text-lg text-display text-sage-800 mb-2">Seasonal Surprises</h3>
            <p className="text-body text-sage-600 text-sm">
              Ask about what's thriving in my collection
            </p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-body text-sage-600 italic">
            Each houseplant can be added to your flower order for convenient same-day delivery
          </p>
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
            From my container garden to your door - sharing the joy that flowers bring
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-petal-100 to-petal-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">🌺</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">Order before midnight</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              Browse what's blooming in my container garden and place your order by midnight
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-sage-100 to-sage-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">✂️</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">Fresh morning cut</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              I'll cut your blooms fresh the next morning when they're at their peak
            </p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-lavender-100 to-lavender-200 w-20 h-20 rounded-organic flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:shadow-dreamy transition-all duration-300 group-hover:scale-105">
              <span className="text-3xl animate-gentle-bounce">🚪</span>
            </div>
            <h3 className="text-xl text-display text-sage-800 mb-3">No-contact delivery</h3>
            <p className="text-body text-sage-600 leading-relaxed max-w-xs mx-auto">
              Same-day delivery right to your door, spreading joy one bouquet at a time
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
              Order before <span className="font-heading font-semibold text-petal-600">midnight</span> and I'll cut your blooms fresh the next morning. 
              More varieties coming as different flowers bloom in my container garden!
            </p>
            
            <Link to="/order" className="btn-primary text-xl px-12 py-6 inline-flex items-center hover-bloom shadow-dreamy">
              <Sparkles className="w-6 h-6 mr-3" />
              Browse Garden
            </Link>
            
            <p className="text-sm text-accent text-sage-500 mt-4 italic">
              "Sharing the joy that flowers bring me, one doorstep at a time"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};