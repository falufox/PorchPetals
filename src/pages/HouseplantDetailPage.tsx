import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Heart, Leaf, Droplets, Sun } from 'lucide-react';
import { HouseplantImage } from '../components/HouseplantImage';
import type { Houseplant, OrderItem } from '../types';

// Houseplant data - same as HomePage
const houseplants: Houseplant[] = [
  {
    id: 'pothos-1',
    name: 'Pothos',
    description: 'Beautiful trailing vines that thrive in any light',
    care: 'Low maintenance, water when soil is dry',
    price: 2,
    image: '/images/houseplants/pothos/pothos-main.webp',
    available: 8,
    type: 'cutting'
  },
  {
    id: 'philodendron-birkin-1',
    name: 'Philodendron Birkin',
    description: 'Striking variegated leaves with elegant white stripes',
    care: 'Bright indirect light, weekly watering',
    price: 2,
    image: '/images/houseplants/philodendron-birkin/philodendron-birkin-main.webp',
    available: 5,
    type: 'cutting'
  },
  {
    id: 'rubber-plant-1',
    name: 'Rubber Plant',
    description: 'Glossy leaves and sturdy growth for statement corners',
    care: 'Bright light, water when top inch of soil is dry',
    price: 15,
    image: '/images/houseplants/rubber-plant/rubber-plant-main.webp',
    available: 3,
    type: 'plant'
  }
];

// Extended care information
const getCareInfo = (plantName: string) => {
  const careGuides: Record<string, any> = {
    'Pothos': {
      light: 'Low to bright indirect light',
      water: 'Water when top inch of soil is dry',
      humidity: 'Average home humidity (40-50%)',
      temperature: '65-75°F (18-24°C)',
      fertilizer: 'Monthly during growing season',
      difficulty: 'Beginner-friendly',
      benefits: ['Air purifying', 'Fast growing', 'Propagates easily']
    },
    'Philodendron Birkin': {
      light: 'Bright indirect light',
      water: 'Weekly watering, keep soil lightly moist',
      humidity: 'Higher humidity preferred (50-60%)',
      temperature: '68-78°F (20-25°C)',
      fertilizer: 'Every 2-4 weeks during growing season',
      difficulty: 'Easy to moderate',
      benefits: ['Stunning variegation', 'Compact growth', 'Air purifying']
    },
    'Rubber Plant': {
      light: 'Bright indirect to direct light',
      water: 'Water when top inch of soil is dry',
      humidity: 'Average to higher humidity',
      temperature: '65-80°F (18-27°C)',
      fertilizer: 'Monthly during growing season',
      difficulty: 'Easy',
      benefits: ['Statement plant', 'Air purifying', 'Long-lived']
    }
  };
  return careGuides[plantName] || careGuides['Pothos'];
};

export const HouseplantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<OrderItem[]>([]);

  const plant = houseplants.find(p => p.id === id);

  if (!plant) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-2xl text-sage-800 mb-4">Plant not found</h1>
        <Link to="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  const careInfo = getCareInfo(plant.name);

  const addToCart = () => {
    const existingItem = cart.find(item => item.houseplantId === plant.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.houseplantId === plant.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { houseplantId: plant.id, houseplant: plant, quantity }]);
    }
  };

  const totalPrice = plant.price * quantity;
  const cartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Cart indicator */}
      {cartItems > 0 && (
        <div className="fixed top-4 right-4 z-50 bg-petal-600 text-white rounded-full p-3 shadow-lg">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <span className="font-semibold">{cartItems}</span>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-sage-600 hover:text-sage-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image section */}
        <div className="space-y-6">
          <div className="card p-6">
            <HouseplantImage
              plantName={plant.name}
              alt={`${plant.name} - ${plant.description}`}
              size="large"
              className="w-full"
              loading="eager"
              fallbackEmoji={plant.name.includes('Pothos') ? '🌿' : plant.name.includes('Rubber') ? '🌳' : '🌱'}
            />
          </div>
          
          {/* Quick facts */}
          <div className="card p-6">
            <h3 className="text-lg font-heading text-sage-800 mb-4 flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-petal-600" />
              Quick Facts
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-sage-600">Type:</span>
                <span className="ml-2 capitalize">{plant.type}</span>
              </div>
              <div>
                <span className="text-sage-600">Difficulty:</span>
                <span className="ml-2">{careInfo.difficulty}</span>
              </div>
              <div>
                <span className="text-sage-600">Light:</span>
                <span className="ml-2">{careInfo.light}</span>
              </div>
              <div>
                <span className="text-sage-600">Water:</span>
                <span className="ml-2">When soil is dry</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl text-display text-sage-800 mb-4">{plant.name}</h1>
            <p className="text-lg text-body text-sage-600 leading-relaxed mb-6">
              {plant.description}
            </p>
            
            {/* Pricing */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-heading font-semibold text-petal-600">
                  ${plant.price}
                </span>
                <span className="text-sage-500">
                  {plant.type === 'cutting' ? 'per rooted cutting' : 'per plant'}
                </span>
              </div>
              <div className="text-sm text-sage-500">
                {plant.available} available for delivery
              </div>
            </div>

            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-sage-800 mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center hover:bg-sage-300 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-xl font-semibold text-sage-800 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(plant.available, quantity + 1))}
                  className="w-10 h-10 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center hover:bg-sage-300 transition-colors"
                  disabled={quantity >= plant.available}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mb-8">
              <button
                onClick={addToCart}
                disabled={plant.available === 0}
                className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-3 hover-bloom disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                Add ${totalPrice} to Cart
              </button>
              <p className="text-sm text-sage-500 mt-2 text-center">
                Same-day delivery available with flower orders
              </p>
            </div>
          </div>

          {/* Care guide */}
          <div className="card p-6">
            <h3 className="text-lg font-heading text-sage-800 mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-petal-600" />
              Care Guide
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-medium text-sage-800">Light</h4>
                  <p className="text-sm text-sage-600">{careInfo.light}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-medium text-sage-800">Water</h4>
                  <p className="text-sm text-sage-600">{careInfo.water}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium text-sage-800">Benefits</h4>
                  <ul className="text-sm text-sage-600">
                    {careInfo.benefits.map((benefit: string, index: number) => (
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related plants */}
      <div className="mt-16 mb-8">
        <h2 className="text-2xl text-display text-sage-800 mb-6 text-center">
          Other Plants You Might Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {houseplants
            .filter(p => p.id !== plant.id)
            .slice(0, 2)
            .map(relatedPlant => (
              <Link
                key={relatedPlant.id}
                to={`/houseplant/${relatedPlant.id}`}
                className="card p-6 hover-lift group text-center"
              >
                <HouseplantImage
                  plantName={relatedPlant.name}
                  alt={relatedPlant.description}
                  size="main"
                  className="mb-4"
                  fallbackEmoji={relatedPlant.name.includes('Pothos') ? '🌿' : relatedPlant.name.includes('Rubber') ? '🌳' : '🌱'}
                />
                <h3 className="text-lg font-heading text-sage-800 mb-2">{relatedPlant.name}</h3>
                <p className="text-sm text-sage-600 mb-3">{relatedPlant.description}</p>
                <div className="text-lg font-semibold text-petal-600">
                  ${relatedPlant.price} {relatedPlant.type === 'cutting' ? 'per cutting' : 'per plant'}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};