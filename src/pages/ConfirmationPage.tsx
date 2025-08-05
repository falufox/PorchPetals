import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Music, Instagram, Home } from 'lucide-react';

export const ConfirmationPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Success Animation */}
      <div className="mb-8">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-handwritten font-bold text-sage-800 mb-3">
          Your blooms are on the way! 🌸
        </h1>
        <p className="text-lg text-sage-600">
          Thank you for your order! We're preparing your beautiful bouquets right now.
        </p>
      </div>

      {/* Order Details */}
      <div className="card p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 className="font-semibold text-sage-800 mb-2">Order Details</h3>
            <p className="text-sage-600 text-sm mb-1">Order #: PF-2024-0001</p>
            <p className="text-sage-600 text-sm mb-1">Delivery to: Unit 3B</p>
            <p className="text-sage-600 text-sm">Expected: Before 5:00 PM today</p>
          </div>
          <div>
            <h3 className="font-semibold text-sage-800 mb-2">What You Ordered</h3>
            <p className="text-sage-600 text-sm mb-1">• Minnie Zinnie ($12)</p>
            <p className="text-sage-600 text-sm mb-1">• Garden Mix ($18)</p>
            <p className="text-sage-600 text-sm font-semibold">Total: $30</p>
          </div>
        </div>
      </div>

      {/* Delightful Extras */}
      <div className="space-y-6 mb-8">
        {/* Spotify Playlist */}
        <div className="card p-6">
          <div className="flex items-center justify-center mb-4">
            <Music className="w-6 h-6 text-petal-500 mr-3" />
            <h2 className="text-xl font-handwritten font-semibold text-sage-800">
              Flowers & Vibes Playlist
            </h2>
          </div>
          <p className="text-sage-600 mb-4">
            While you wait, enjoy this curated playlist that pairs perfectly with fresh blooms!
          </p>
          <a 
            href="https://open.spotify.com/playlist/example" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <Music className="w-4 h-4 mr-2" />
            Listen on Spotify
          </a>
        </div>

        {/* Instagram Sharing */}
        <div className="card p-6">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-6 h-6 text-petal-500 mr-3" />
            <h2 className="text-xl font-handwritten font-semibold text-sage-800">
              Share the Joy
            </h2>
          </div>
          <p className="text-sage-600 mb-4">
            Got your bouquet? Tag us @porchpetals for a chance to be featured!
          </p>
          <button className="btn-secondary">
            <Instagram className="w-4 h-4 mr-2" />
            Share on Instagram
          </button>
        </div>
      </div>

      {/* Next Steps */}
      <div className="card p-6 bg-gradient-to-br from-petal-50 to-cream-50">
        <h2 className="text-xl font-handwritten font-semibold text-sage-800 mb-4">
          What happens next?
        </h2>
        <div className="space-y-3 text-sm text-sage-600 mb-6">
          <div className="flex items-center">
            <span className="w-6 h-6 bg-petal-100 rounded-full flex items-center justify-center text-xs font-semibold text-petal-600 mr-3">1</span>
            <span>We're handpicking and arranging your bouquets right now</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 bg-petal-100 rounded-full flex items-center justify-center text-xs font-semibold text-petal-600 mr-3">2</span>
            <span>Your flowers will be wrapped in beautiful kraft paper</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 bg-petal-100 rounded-full flex items-center justify-center text-xs font-semibold text-petal-600 mr-3">3</span>
            <span>We'll hang them on your door with a special flower tag</span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 bg-petal-100 rounded-full flex items-center justify-center text-xs font-semibold text-petal-600 mr-3">4</span>
            <span>You'll get a text when they're delivered!</span>
          </div>
        </div>
        
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};