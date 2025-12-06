import CheckoutForm from '../CheckoutForm';

export default function CheckoutFormExample() {
  return (
    <CheckoutForm
      total={9997}
      onSubmit={(data) => console.log('Order submitted:', data)}
      onCancel={() => console.log('Cancelled')}
    />
  );
}
