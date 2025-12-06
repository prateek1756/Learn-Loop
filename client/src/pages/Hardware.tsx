import HardwareCategories from "@/components/HardwareCategories";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import AuthDialog from "@/components/AuthDialog";

const hardwareProducts = [
  {
    id: "h1",
    name: "Smart Interactive Whiteboard",
    description: "4K resolution touch screen with wireless connectivity and collaboration tools",
    price: 2499,
    category: "Classroom Devices",
    inStock: true,
  },
  {
    id: "h2",
    name: "VR Learning Kit",
    description: "Immersive virtual reality headsets and controllers for interactive learning",
    price: 1299,
    category: "Learning Labs",
    inStock: true,
  },
  {
    id: "h3",
    name: "Enterprise Server Rack",
    description: "High-performance server infrastructure for campus-wide applications",
    price: 8999,
    category: "IT Infrastructure",
    inStock: true,
  },
  {
    id: "h4",
    name: "RFID Access Control System",
    description: "Complete biometric and card-based access control for campus security",
    price: 3499,
    category: "Security Systems",
    inStock: true,
  },
  {
    id: "h5",
    name: "3D Printer Pro",
    description: "Professional-grade 3D printer for STEM education and prototyping",
    price: 1899,
    category: "Learning Labs",
    inStock: true,
  },
  {
    id: "h6",
    name: "Solar Power System",
    description: "Complete solar panel installation with battery backup for campus buildings",
    price: 12999,
    category: "Power & Backup",
    inStock: true,
  },
  {
    id: "h7",
    name: "Smart Projector 4K",
    description: "Ultra HD wireless projector with interactive features",
    price: 1599,
    category: "Classroom Devices",
    inStock: true,
  },
  {
    id: "h8",
    name: "CCTV Security Package",
    description: "16-camera HD surveillance system with network video recorder",
    price: 2899,
    category: "Security Systems",
    inStock: true,
  },
];

export default function Hardware() {
  const [, setLocation] = useLocation();
  const { isAuthenticated } = useAuth();
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    if (!isAuthenticated) {
      setAuthDialogOpen(true);
      return;
    }

    const product = hardwareProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-background py-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              🖥️ Hardware Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in-up" data-testid="text-page-heading" style={{animationDelay: '0.2s'}}>
            Premium Hardware Equipment
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Transform your educational environment with cutting-edge hardware solutions designed for modern learning
          </p>
        </div>
      </div>

      <HardwareCategories 
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Featured Hardware Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover top-quality hardware solutions trusted by leading educational institutions worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hardwareProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{animationDelay: `${0.1 * index}s`}}>
                <ProductCard
                  {...product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={(id) => setLocation(`/product/${id}`)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
      />
    </>
  );
}
