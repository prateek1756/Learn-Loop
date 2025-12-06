import { useState } from "react";
import CheckoutForm, { CheckoutData } from "@/components/CheckoutForm";
import OrderConfirmation from "@/components/OrderConfirmation";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderData, setOrderData] = useState<{ orderNumber: string; email: string; total: number } | null>(null);
  const { getTotalPrice, clearCart } = useCart();

  const handleSubmit = (data: CheckoutData) => {
    const orderNumber = `ORD-2025-${Math.floor(Math.random() * 999999).toString().padStart(6, '0')}`;
    const total = getTotalPrice();
    
    console.log('Order submitted:', { ...data, orderNumber, total });
    
    setOrderData({
      orderNumber,
      email: data.customerEmail,
      total
    });
    setOrderPlaced(true);
    clearCart();
  };

  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  return (
    <div className="py-8">
      {orderPlaced && orderData ? (
        <OrderConfirmation
          orderNumber={orderData.orderNumber}
          customerEmail={orderData.email}
          total={orderData.total}
          onContinueShopping={handleContinueShopping}
        />
      ) : (
        <CheckoutForm
          total={getTotalPrice()}
          onSubmit={handleSubmit}
          onCancel={() => window.location.href = '/'}
        />
      )}
    </div>
  );
}
