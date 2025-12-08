import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Smart Interactive Whiteboard",
    description: "4K resolution touch screen with wireless connectivity and collaboration tools",
    price: 2499,
    category: "Classroom Devices",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400",
    inStock: true,
  },
  {
    id: "2",
    name: "Campus Management ERP",
    description: "Complete solution for admissions, fees, exams, and payroll management",
    price: 4999,
    category: "Admin & Management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    inStock: true,
  },
  {
    id: "3",
    name: "VR Learning Kit",
    description: "Immersive virtual reality headsets and controllers for interactive learning",
    price: 1299,
    category: "Learning Labs",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400",
    inStock: true,
  },
  {
    id: "4",
    name: "Student Information System",
    description: "Comprehensive SIS for tracking student records, attendance, and performance",
    price: 3499,
    category: "Student Support",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    inStock: true,
  },
];

interface FeaturedProductsProps {
  onAddToCart: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export default function FeaturedProducts({ onAddToCart, onViewDetails }: FeaturedProductsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-section-heading">
            Featured Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular educational technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => onAddToCart(product.id)}
              onViewDetails={() => onViewDetails(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
