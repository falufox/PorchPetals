import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flower, ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const { cart, getTotalItems, getTotalPrice, updateQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

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
            
            {/* Cart Button */}
            <div className="relative">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative flex items-center gap-2 text-sage-700 hover:text-petal-600 transition-all duration-300 font-body font-medium text-base group"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>My Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-petal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-petal-400 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-sage-200 z-50">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-heading text-sage-800">My Cart</h3>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-sage-500 hover:text-sage-700 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {cart.length === 0 ? (
                      <p className="text-sage-500 text-center py-8">Your cart is empty</p>
                    ) : (
                      <>
                        <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                          {cart.map((item) => {
                            const product = item.bouquet || item.houseplant;
                            const itemId = item.bouquetId || item.houseplantId!;
                            const itemType = item.bouquet ? 'bouquet' : 'houseplant';
                            
                            return (
                              <div key={`${itemType}-${itemId}`} className="flex items-center gap-3 p-3 bg-sage-50 rounded-lg">
                                <div className="flex-1">
                                  <h4 className="font-medium text-sage-800">{product?.name}</h4>
                                  <p className="text-sm text-sage-600">${product?.price} each</p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => updateQuantity(itemId, itemType, item.quantity - 1)}
                                    className="w-6 h-6 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center text-sm hover:bg-sage-300 transition-colors"
                                  >
                                    <Minus className="w-3 h-3" />
                                  </button>
                                  <span className="w-8 text-center text-sm">{item.quantity}</span>
                                  <button
                                    onClick={() => updateQuantity(itemId, itemType, item.quantity + 1)}
                                    className="w-6 h-6 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center text-sm hover:bg-sage-300 transition-colors"
                                  >
                                    <Plus className="w-3 h-3" />
                                  </button>
                                </div>
                                <button
                                  onClick={() => removeFromCart(itemId, itemType)}
                                  className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            );
                          })}
                        </div>

                        <div className="border-t border-sage-200 pt-4">
                          <div className="flex items-center justify-between text-lg font-semibold text-sage-800 mb-4">
                            <span>Total: ${totalPrice}</span>
                          </div>
                          <Link
                            to="/checkout"
                            onClick={() => setIsCartOpen(false)}
                            className="btn-primary w-full text-center block py-3"
                          >
                            Checkout
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              to="/order" 
              className="btn-primary text-base px-6 py-3 hover-bloom"
            >
              Order Now
            </Link>
          </nav>
          
          {/* Mobile menu */}
          <div className="sm:hidden flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative text-sage-700"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-petal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
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