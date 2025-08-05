import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, ArrowRight } from 'lucide-react';
import { Bouquet, OrderItem } from '../types';

// Mock data - this will be replaced with Notion API
const mockBouquets: Bouquet[] = [
  {
    id: '1',
    name: 'Minnie Zinnie',
    description: 'Bright and cheerful zinnias in warm sunset colors. Perfect for lifting spirits.',
    flowers: ['Zinnias', 'Baby\'s Breath'],
    colors: ['Orange', 'Pink', 'Yellow'],
    size: 'small',
    price: 12,
    image: '/api/placeholder/300/300',
    available: 3,
    totalCapacity: 5
  },
  {
    id: '2',
    name: 'Garden Mix',
    description: 'A delightful mix of seasonal blooms in soft, romantic pastels.',
    flowers: ['Lisianthus', 'Sweet Peas', 'Cosmos'],
    colors: ['Blush', 'Lavender', 'Cream'],
    size: 'full',
    price: 18,
    image: '/api/placeholder/300/300',
    available: 2,
    totalCapacity: 3
  },
  {
    id: '3',
    name: 'Sunshine Bundle',
    description: 'Bold sunflowers and cheerful marigolds to brighten any day.',
    flowers: ['Sunflowers', 'Marigolds', 'Solidago'],
    colors: ['Golden Yellow', 'Orange'],
    size: 'full',
    price: 22,
    image: '/api/placeholder/300/300',
    available: 1,
    totalCapacity: 2
  }
];

export const OrderPage: React.FC = () => {
  const [cart, setCart] = useState<OrderItem[]>([]);

  const addToCart = (bouquet: Bouquet) => {
    const existingItem = cart.find(item => item.bouquetId === bouquet.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.bouquetId === bouquet.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { bouquetId: bouquet.id, bouquet, quantity: 1 }]);
    }
  };

  const removeFromCart = (bouquetId: string) => {
    setCart(cart.filter(item => item.bouquetId !== bouquetId));
  };

  const updateQuantity = (bouquetId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(bouquetId);
    } else {
      setCart(cart.map(item => 
        item.bouquetId === bouquetId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.bouquet.price * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-handwritten font-bold text-sage-800 mb-2">
          Today's Fresh Bouquets
        </h1>
        <div className="flex items-center text-sage-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>Orders close at 6:00 PM for same-day delivery</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bouquet Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockBouquets.map((bouquet) => (
              <div key={bouquet.id} className="card p-6">
                {/* Placeholder for bouquet image */}
                <div className="bg-gradient-to-br from-petal-100 to-sage-100 rounded-2xl h-64 mb-4 flex items-center justify-center relative">
                  <span className="text-6xl">🌸</span>
                  {bouquet.available === 0 && (
                    <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-semibold">Sold Out</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">{bouquet.name}</h3>
                  <p className="text-sage-600 text-sm mb-3">{bouquet.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {bouquet.flowers.map((flower, index) => (
                      <span key={index} className="bg-sage-100 text-sage-700 px-2 py-1 rounded-full text-xs">
                        {flower}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-petal-600">${bouquet.price}</span>
                    <span className="text-sm text-sage-500">
                      {bouquet.available} of {bouquet.totalCapacity} available
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(bouquet)}
                  disabled={bouquet.available === 0}
                  className={`w-full ${
                    bouquet.available === 0 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'btn-primary'
                  } transition-all duration-200`}
                >
                  {bouquet.available === 0 ? 'Sold Out' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Sidebar */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <div className="flex items-center mb-4">
              <ShoppingCart className="w-5 h-5 mr-2 text-sage-700" />
              <h2 className="text-lg font-semibold text-sage-800">Your Order</h2>
            </div>
            
            {cart.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sage-500 mb-2">Your cart is empty</p>
                <p className="text-sm text-sage-400">Add some beautiful bouquets!</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-6">
                  {cart.map((item) => (
                    <div key={item.bouquetId} className="flex items-center justify-between p-3 bg-sage-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sage-800">{item.bouquet.name}</h4>
                        <p className="text-sm text-sage-600">${item.bouquet.price} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.bouquetId, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.bouquetId, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-sage-200 pt-4 mb-6">
                  <div className="flex justify-between items-center text-lg font-semibold text-sage-800">
                    <span>Total ({totalItems} items)</span>
                    <span>${totalPrice}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};