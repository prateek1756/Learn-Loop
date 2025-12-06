import SoftwareCategories from "@/components/SoftwareCategories";
import ProductCard from "@/components/ProductCard";
import { useLocation } from "wouter";
import { useCart } from "@/contexts/CartContext";

const softwareProducts = [
  {
    id: "s1",
    name: "Campus Management ERP",
    description: "Complete solution for admissions, fees, exams, and payroll management",
    price: 4999,
    category: "Admin & Management",
    inStock: true,
  },
  {
    id: "s2",
    name: "Learning Management System",
    description: "Advanced LMS with online classes, quizzes, and content management",
    price: 3499,
    category: "Teaching & Learning",
    inStock: true,
  },
  {
    id: "s3",
    name: "Student Information System",
    description: "Comprehensive SIS for tracking student records and performance",
    price: 3499,
    category: "Student Support",
    inStock: true,
  },
  {
    id: "s4",
    name: "HR & Payroll Software",
    description: "Streamlined HR management and automated payroll processing",
    price: 2999,
    category: "Faculty & Staff",
    inStock: true,
  },
  {
    id: "s5",
    name: "Virtual Lab Platform",
    description: "Interactive virtual labs for science and engineering courses",
    price: 2499,
    category: "Teaching & Learning",
    inStock: true,
  },
  {
    id: "s6",
    name: "Library Management System",
    description: "Digital cataloging, circulation, and resource management",
    price: 1999,
    category: "Campus Management",
    inStock: true,
  },
];

export default function Software() {
  const [, setLocation] = useLocation();
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = softwareProducts.find(p => p.id === productId);
    if (product) {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-background py-20">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              💻 Software Solutions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in-up" data-testid="text-page-heading" style={{animationDelay: '0.2s'}}>
            Powerful Software Platforms
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Streamline your educational operations with comprehensive software solutions built for modern institutions
          </p>
        </div>
      </div>

      <SoftwareCategories 
        onCategoryClick={(category) => console.log('Category clicked:', category)}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Featured Software Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore innovative software solutions that empower educational excellence and operational efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProducts.map((product, index) => (
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
    </>
  );
}
