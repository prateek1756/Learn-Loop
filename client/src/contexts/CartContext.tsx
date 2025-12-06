import { createContext, useContext, useState, ReactNode } from 'react';
import { useLocation } from 'wouter';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

interface CartContextType {
  cartItems: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [, setLocation] = useLocation();

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    setCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const checkout = () => {
    setLocation('/checkout');
    setCartOpen(false);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartOpen,
      setCartOpen,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      getTotalItems,
      getTotalPrice,
      checkout
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}