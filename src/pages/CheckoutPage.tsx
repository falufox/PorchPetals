import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, MapPin, Clock } from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    unitNumber: '',
    email: '',
    phone: '',
    specialInstructions: ''
  });

  const [selectedDeliveryWindow, setSelectedDeliveryWindow] = useState('');

  const deliveryWindows = [
    { id: '1', label: 'Before 2:00 PM', time: '2:00 PM', available: true },
    { id: '2', label: 'Before 5:00 PM', time: '5:00 PM', available: true },
    { id: '3', label: 'Before 7:00 PM', time: '7:00 PM', available: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will integrate with Stripe for payment processing
    console.log('Order submitted:', { customerInfo, selectedDeliveryWindow });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/order" className="btn-secondary mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Order
        </Link>
        <h1 className="text-3xl font-handwritten font-bold text-sage-800">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div className="space-y-6">
          {/* Customer Information */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 mr-2 text-sage-700" />
              <h2 className="text-lg font-semibold text-sage-800">Delivery Information</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    Unit Number *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.unitNumber}
                    onChange={(e) => setCustomerInfo({...customerInfo, unitNumber: e.target.value})}
                    className="input-field"
                    placeholder="e.g., 3B"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="input-field"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Special Instructions (optional)
                </label>
                <textarea
                  value={customerInfo.specialInstructions}
                  onChange={(e) => setCustomerInfo({...customerInfo, specialInstructions: e.target.value})}
                  className="input-field"
                  rows={3}
                  placeholder="Any special delivery instructions..."
                />
              </div>
            </form>
          </div>

          {/* Delivery Window */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 mr-2 text-sage-700" />
              <h2 className="text-lg font-semibold text-sage-800">Delivery Window</h2>
            </div>
            
            <div className="space-y-3">
              {deliveryWindows.map((window) => (
                <label key={window.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value={window.id}
                    checked={selectedDeliveryWindow === window.id}
                    onChange={(e) => setSelectedDeliveryWindow(e.target.value)}
                    className="text-petal-500 focus:ring-petal-400"
                  />
                  <span className="text-sage-800">{window.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="card p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 mr-2 text-sage-700" />
              <h2 className="text-lg font-semibold text-sage-800">Payment</h2>
            </div>
            
            <div className="bg-cream-50 border border-cream-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-sage-600">
                💳 Secure payment processing with Stripe
              </p>
            </div>
            
            {/* Stripe payment form will go here */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    Expiry
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sage-700 mb-1">
                    CVC
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            <h2 className="text-lg font-semibold text-sage-800 mb-4">Order Summary</h2>
            
            {/* Mock order items */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="font-medium text-sage-800">Minnie Zinnie</span>
                  <span className="text-sage-600 text-sm block">Qty: 1</span>
                </div>
                <span className="font-semibold text-sage-800">$12</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <span className="font-medium text-sage-800">Garden Mix</span>
                  <span className="text-sage-600 text-sm block">Qty: 1</span>
                </div>
                <span className="font-semibold text-sage-800">$18</span>
              </div>
            </div>
            
            <div className="border-t border-sage-200 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-semibold text-sage-800 mb-2">
                <span>Subtotal</span>
                <span>$30</span>
              </div>
              <div className="flex justify-between items-center text-sm text-sage-600 mb-2">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-sage-800 border-t border-sage-200 pt-2">
                <span>Total</span>
                <span>$30</span>
              </div>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full text-lg py-4"
            >
              Complete Order
            </button>
            
            <p className="text-xs text-sage-500 text-center mt-3">
              By placing this order, you agree to our simple terms: fresh flowers, same-day delivery, and lots of joy!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};