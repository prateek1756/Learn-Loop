import OrderConfirmation from '../OrderConfirmation';

export default function OrderConfirmationExample() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <OrderConfirmation
        orderNumber="ORD-2025-001234"
        customerEmail="john.doe@school.edu"
        total={10997}
        onContinueShopping={() => console.log('Continue shopping')}
      />
    </div>
  );
}
