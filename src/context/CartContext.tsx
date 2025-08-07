import React, { createContext, useContext, useState, useEffect } from 'react';
import type { OrderItem, Bouquet, Houseplant } from '../types';

interface CartContextType {
  cart: OrderItem[];
  addBouquetToCart: (bouquet: Bouquet, quantity?: number) => void;
  addHouseplantToCart: (houseplant: Houseplant, quantity?: number) => void;
  removeFromCart: (itemId: string, itemType: 'bouquet' | 'houseplant') => void;
  updateQuantity: (itemId: string, itemType: 'bouquet' | 'houseplant', quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<OrderItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('porch-petals-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('porch-petals-cart', JSON.stringify(cart));
  }, [cart]);

  const addBouquetToCart = (bouquet: Bouquet, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.bouquetId === bouquet.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.bouquetId === bouquet.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentCart, { bouquetId: bouquet.id, bouquet, quantity }];
      }
    });
  };

  const addHouseplantToCart = (houseplant: Houseplant, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.houseplantId === houseplant.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.houseplantId === houseplant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentCart, { houseplantId: houseplant.id, houseplant, quantity }];
      }
    });
  };

  const removeFromCart = (itemId: string, itemType: 'bouquet' | 'houseplant') => {
    setCart(currentCart => {
      if (itemType === 'bouquet') {
        return currentCart.filter(item => item.bouquetId !== itemId);
      } else {
        return currentCart.filter(item => item.houseplantId !== itemId);
      }
    });
  };

  const updateQuantity = (itemId: string, itemType: 'bouquet' | 'houseplant', quantity: number) => {
    if (quantity === 0) {
      removeFromCart(itemId, itemType);
      return;
    }

    setCart(currentCart => {
      if (itemType === 'bouquet') {
        return currentCart.map(item =>
          item.bouquetId === itemId
            ? { ...item, quantity }
            : item
        );
      } else {
        return currentCart.map(item =>
          item.houseplantId === itemId
            ? { ...item, quantity }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => {
      if (item.bouquet) {
        return sum + (item.bouquet.price * item.quantity);
      }
      if (item.houseplant) {
        return sum + (item.houseplant.price * item.quantity);
      }
      return sum;
    }, 0);
  };

  const value: CartContextType = {
    cart,
    addBouquetToCart,
    addHouseplantToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};