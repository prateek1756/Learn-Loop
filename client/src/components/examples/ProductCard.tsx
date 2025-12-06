import ProductCard from '../ProductCard';

export default function ProductCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
      <ProductCard 
        id="1"
        name="Smart Interactive Whiteboard"
        description="4K resolution touch screen with wireless connectivity"
        price={2499}
        category="Classroom Devices"
        inStock={true}
        onAddToCart={(id) => console.log('Add to cart:', id)}
        onViewDetails={(id) => console.log('View details:', id)}
      />
    </div>
  );
}
