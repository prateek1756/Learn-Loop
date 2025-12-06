import { useState } from 'react';
import CartDrawer from '../CartDrawer';
import { Button } from '@/components/ui/button';

export default function CartDrawerExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Smart Interactive Whiteboard",
      price: 2499,
      quantity: 2,
      category: "Classroom Devices"
    },
    {
      id: "2",
      name: "Campus Management ERP",
      price: 4999,
      quantity: 1,
      category: "Admin & Management"
    }
  ]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="relative h-screen">
      <div className="p-8">
        <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      </div>
      <CartDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => console.log('Checkout clicked')}
      />
    </div>
  );
}
