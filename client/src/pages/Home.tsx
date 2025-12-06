import { useLocation } from "wouter";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ValuePropositions from "@/components/ValuePropositions";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (productId: string) => {
    const products = {
      "1": { id: "1", name: "Smart Interactive Whiteboard", price: 2499, category: "Classroom Devices" },
      "2": { id: "2", name: "Campus Management ERP", price: 4999, category: "Admin & Management" },
      "3": { id: "3", name: "VR Learning Kit", price: 1299, category: "Learning Labs" },
      "4": { id: "4", name: "Student Information System", price: 3499, category: "Student Support" },
    };

    const product = products[productId as keyof typeof products];
    if (product) {
      addToCart(product);
    }
  };

  const handleViewDetails = (id: string) => {
    setLocation(`/product/${id}`);
  };

  return (
    <>
      <Hero 
        onBrowseSoftware={() => setLocation('/software')}
        onBrowseHardware={() => setLocation('/hardware')}
      />
      <CategorySection 
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />
      <FeaturedProducts 
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      <ValuePropositions />
    </>
  );
}
