import FeaturedProducts from '../FeaturedProducts';

export default function FeaturedProductsExample() {
  return (
    <FeaturedProducts 
      onAddToCart={(id) => console.log('Add to cart:', id)}
      onViewDetails={(id) => console.log('View details:', id)}
    />
  );
}
