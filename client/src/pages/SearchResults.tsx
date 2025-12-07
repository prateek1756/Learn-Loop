import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/contexts/CartContext";

const allProducts = [
  { id: "h1", name: "Smart Interactive Whiteboard", description: "4K resolution touch screen with wireless connectivity", price: 2499, category: "Classroom Devices", inStock: true },
  { id: "h2", name: "VR Learning Kit", description: "Immersive virtual reality headsets and controllers", price: 1299, category: "Learning Labs", inStock: true },
  { id: "h3", name: "Enterprise Server Rack", description: "High-performance server infrastructure", price: 8999, category: "IT Infrastructure", inStock: true },
  { id: "h4", name: "RFID Access Control System", description: "Biometric and card-based access control", price: 3499, category: "Security Systems", inStock: true },
  { id: "h5", name: "3D Printer Pro", description: "Professional-grade 3D printer for STEM education", price: 1899, category: "Learning Labs", inStock: true },
  { id: "h6", name: "Solar Power System", description: "Complete solar panel installation with battery backup", price: 12999, category: "Power & Backup", inStock: true },
  { id: "h7", name: "Smart Projector 4K", description: "Ultra HD wireless projector with interactive features", price: 1599, category: "Classroom Devices", inStock: true },
  { id: "h8", name: "CCTV Security Package", description: "16-camera HD surveillance system", price: 2899, category: "Security Systems", inStock: true },
  { id: "s1", name: "Campus Management ERP", description: "Complete solution for admissions, fees, exams, and payroll", price: 4999, category: "Admin & Management", inStock: true },
  { id: "s2", name: "Learning Management System", description: "Advanced LMS with online classes, quizzes, and content management", price: 3499, category: "Teaching & Learning", inStock: true },
  { id: "s3", name: "Student Information System", description: "Comprehensive SIS for tracking student records", price: 3499, category: "Student Support", inStock: true },
  { id: "s4", name: "HR & Payroll Software", description: "Streamlined HR management and automated payroll", price: 2999, category: "Faculty & Staff", inStock: true },
  { id: "s5", name: "Virtual Lab Platform", description: "Interactive virtual labs for science and engineering", price: 2499, category: "Teaching & Learning", inStock: true },
  { id: "s6", name: "Library Management System", description: "Digital cataloging, circulation, and resource management", price: 1999, category: "Campus Management", inStock: true },
];

export default function SearchResults() {
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);

    if (query.trim()) {
      const filtered = allProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [window.location.search]);

  const handleAddToCart = (productId: string) => {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Search Results</h1>
          {searchQuery && (
            <p className="text-muted-foreground">
              Found {filteredProducts.length} results for "{searchQuery}"
            </p>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
                onViewDetails={(id) => setLocation(`/product/${id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
