import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AuthDialog from '@/components/AuthDialog';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { useLocation } from 'wouter';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { cartItems, cartOpen, setCartOpen, getTotalItems, updateQuantity, removeItem, checkout } = useCart();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setLocation(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        cartCount={getTotalItems()}
        onCartClick={() => setCartOpen(true)}
        onSearchChange={handleSearch}
      />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={checkout}
      />

      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
      />
    </div>
  );
}