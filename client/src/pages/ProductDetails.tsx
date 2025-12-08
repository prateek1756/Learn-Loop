import { useRoute, useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useEffect } from "react";

export default function ProductDetails() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const productId = params?.id;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const products = {
    "1": { 
      id: "1", 
      name: "Smart Interactive Whiteboard", 
      price: 2499, 
      category: "Classroom Devices",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800",
      description: "Transform your classroom with this cutting-edge interactive whiteboard featuring multi-touch capabilities, 4K resolution, and seamless integration with educational software.",
      specifications: {
        "Display Size": "75 inches",
        "Resolution": "4K Ultra HD",
        "Touch Points": "20 simultaneous touches",
        "Connectivity": "WiFi, Bluetooth, USB, HDMI",
        "Software": "Compatible with all major educational platforms"
      },
      features: [
        "Multi-touch gesture recognition",
        "Built-in speakers and microphone",
        "Wireless screen sharing",
        "Cloud-based content library",
        "Easy installation and setup"
      ]
    },
    "2": { 
      id: "2", 
      name: "Campus Management ERP", 
      price: 4999, 
      category: "Admin & Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      description: "Comprehensive enterprise resource planning solution designed specifically for educational institutions to streamline operations and improve efficiency.",
      specifications: {
        "Users": "Unlimited",
        "Modules": "15+ integrated modules",
        "Deployment": "Cloud-based or On-premise",
        "Support": "24/7 technical support",
        "Updates": "Regular feature updates included"
      },
      features: [
        "Student information management",
        "Financial management and billing",
        "Academic planning and scheduling",
        "Communication portal",
        "Analytics and reporting dashboard"
      ]
    },
    "3": {
      id: "3",
      name: "VR Learning Kit",
      price: 1299,
      category: "Learning Labs",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
      description: "Immersive virtual reality headsets and controllers for interactive learning experiences.",
      specifications: {
        "Headsets": "10 units included",
        "Resolution": "2160 x 1200 per eye",
        "Tracking": "6DOF inside-out",
        "Battery Life": "4-6 hours",
        "Age Range": "13+ years"
      },
      features: [
        "Educational VR content library",
        "Classroom management software",
        "Wireless connectivity",
        "Adjustable headsets",
        "Teacher dashboard"
      ]
    },
    "4": {
      id: "4",
      name: "Student Information System",
      price: 3499,
      category: "Student Support",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      description: "Comprehensive SIS for tracking student records, attendance, and performance.",
      specifications: {
        "Students": "Unlimited records",
        "Reports": "50+ standard reports",
        "Integration": "LMS compatible",
        "Mobile Access": "iOS & Android apps",
        "Backup": "Automated daily backup"
      },
      features: [
        "Student enrollment management",
        "Grade tracking and transcripts",
        "Attendance monitoring",
        "Parent portal access",
        "Academic analytics"
      ]
    },
    "h1": {
      id: "h1",
      name: "Smart Interactive Whiteboard",
      price: 2499,
      category: "Classroom Devices",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800",
      description: "4K resolution touch screen with wireless connectivity and collaboration tools for modern classrooms.",
      specifications: {
        "Display Size": "75 inches",
        "Resolution": "4K Ultra HD",
        "Touch Points": "20 simultaneous",
        "Connectivity": "WiFi, Bluetooth, HDMI",
        "Warranty": "3 years"
      },
      features: [
        "Multi-touch gesture recognition",
        "Wireless screen sharing",
        "Built-in collaboration tools",
        "Cloud integration",
        "Easy installation"
      ]
    },
    "h2": {
      id: "h2",
      name: "VR Learning Kit",
      price: 1299,
      category: "Learning Labs",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800",
      description: "Immersive virtual reality headsets and controllers for interactive learning experiences.",
      specifications: {
        "Headsets": "10 units included",
        "Resolution": "2160 x 1200 per eye",
        "Tracking": "6DOF inside-out",
        "Battery Life": "4-6 hours",
        "Age Range": "13+ years"
      },
      features: [
        "Educational VR content library",
        "Classroom management software",
        "Wireless connectivity",
        "Adjustable headsets",
        "Teacher dashboard"
      ]
    },
    "s1": {
      id: "s1",
      name: "Campus Management ERP",
      price: 4999,
      category: "Admin & Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      description: "Complete solution for admissions, fees, exams, and payroll management.",
      specifications: {
        "Users": "Unlimited",
        "Modules": "15+ integrated",
        "Deployment": "Cloud/On-premise",
        "Support": "24/7 available",
        "Updates": "Regular releases"
      },
      features: [
        "Student admission management",
        "Fee collection and billing",
        "Examination management",
        "Payroll processing",
        "Analytics dashboard"
      ]
    },
    "s2": {
      id: "s2",
      name: "Learning Management System",
      price: 3499,
      category: "Teaching & Learning",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
      description: "Advanced LMS with online classes, quizzes, and content management.",
      specifications: {
        "Students": "Unlimited",
        "Storage": "1TB included",
        "Video Quality": "HD streaming",
        "Mobile App": "iOS & Android",
        "Integration": "Third-party tools"
      },
      features: [
        "Virtual classroom",
        "Assignment management",
        "Grade book",
        "Discussion forums",
        "Progress tracking"
      ]
    },
    "h3": {
      id: "h3",
      name: "Enterprise Server Rack",
      price: 8999,
      category: "IT Infrastructure",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      description: "High-performance server infrastructure for campus-wide applications.",
      specifications: {
        "CPU": "Intel Xeon processors",
        "RAM": "128GB DDR4",
        "Storage": "10TB SSD RAID",
        "Network": "Gigabit Ethernet",
        "Power": "Redundant PSU"
      },
      features: [
        "24/7 operation capability",
        "Hot-swappable components",
        "Remote management",
        "Scalable architecture",
        "Enterprise warranty"
      ]
    },
    "h4": {
      id: "h4",
      name: "RFID Access Control System",
      price: 3499,
      category: "Security Systems",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
      description: "Complete biometric and card-based access control for campus security.",
      specifications: {
        "Readers": "20 RFID readers",
        "Cards": "500 access cards",
        "Database": "10,000 user capacity",
        "Connectivity": "Ethernet/WiFi",
        "Power": "PoE supported"
      },
      features: [
        "Biometric fingerprint scanner",
        "RFID card access",
        "Real-time monitoring",
        "Access logs and reports",
        "Mobile app control"
      ]
    },
    "h5": {
      id: "h5",
      name: "3D Printer Pro",
      price: 1899,
      category: "Learning Labs",
      image: "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=800",
      description: "Professional-grade 3D printer for STEM education and prototyping.",
      specifications: {
        "Build Volume": "300x300x400mm",
        "Layer Resolution": "0.1-0.3mm",
        "Filament": "PLA, ABS, PETG",
        "Connectivity": "USB, WiFi, SD card",
        "Software": "Educational suite included"
      },
      features: [
        "Auto-leveling bed",
        "Enclosed chamber",
        "Educational curriculum",
        "Safety features",
        "Multi-material support"
      ]
    },
    "h6": {
      id: "h6",
      name: "Solar Power System",
      price: 12999,
      category: "Power & Backup",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
      description: "Complete solar panel installation with battery backup for campus buildings.",
      specifications: {
        "Capacity": "50kW system",
        "Panels": "200 x 250W panels",
        "Battery": "100kWh storage",
        "Inverter": "Grid-tie with backup",
        "Monitoring": "Real-time analytics"
      },
      features: [
        "Grid-tie capability",
        "Battery backup system",
        "Weather monitoring",
        "Remote diagnostics",
        "25-year warranty"
      ]
    },
    "h7": {
      id: "h7",
      name: "Smart Projector 4K",
      price: 1599,
      category: "Classroom Devices",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
      description: "Ultra HD wireless projector with interactive features.",
      specifications: {
        "Resolution": "4K UHD (3840x2160)",
        "Brightness": "4000 lumens",
        "Connectivity": "WiFi, Bluetooth, HDMI",
        "Lamp Life": "20,000 hours",
        "Throw Ratio": "Short throw 0.5:1"
      },
      features: [
        "Wireless screen mirroring",
        "Interactive touch capability",
        "Built-in Android OS",
        "Voice control",
        "Auto keystone correction"
      ]
    },
    "h8": {
      id: "h8",
      name: "CCTV Security Package",
      price: 2899,
      category: "Security Systems",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
      description: "16-camera HD surveillance system with network video recorder.",
      specifications: {
        "Cameras": "16 x 1080p HD cameras",
        "Storage": "8TB NVR included",
        "Night Vision": "30m IR range",
        "Remote Access": "Mobile app included",
        "Weather Rating": "IP66 outdoor rated"
      },
      features: [
        "Motion detection alerts",
        "24/7 recording capability",
        "Remote monitoring",
        "Facial recognition",
        "Cloud backup option"
      ]
    },
    "s3": {
      id: "s3",
      name: "Student Information System",
      price: 3499,
      category: "Student Support",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      description: "Comprehensive SIS for tracking student records and performance.",
      specifications: {
        "Students": "Unlimited records",
        "Reports": "50+ standard reports",
        "Integration": "LMS compatible",
        "Mobile Access": "iOS & Android apps",
        "Backup": "Automated daily backup"
      },
      features: [
        "Student enrollment management",
        "Grade tracking and transcripts",
        "Attendance monitoring",
        "Parent portal access",
        "Academic analytics"
      ]
    },
    "s4": {
      id: "s4",
      name: "HR & Payroll Software",
      price: 2999,
      category: "Faculty & Staff",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
      description: "Streamlined HR management and automated payroll processing.",
      specifications: {
        "Employees": "Unlimited records",
        "Payroll": "Multi-currency support",
        "Compliance": "Tax law updates",
        "Reports": "Customizable reports",
        "Integration": "Banking systems"
      },
      features: [
        "Employee self-service portal",
        "Automated payroll calculation",
        "Leave management",
        "Performance evaluation",
        "Compliance reporting"
      ]
    },
    "s5": {
      id: "s5",
      name: "Virtual Lab Platform",
      price: 2499,
      category: "Teaching & Learning",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
      description: "Interactive virtual labs for science and engineering courses.",
      specifications: {
        "Simulations": "500+ lab experiments",
        "Subjects": "Physics, Chemistry, Biology",
        "Concurrent Users": "1000+ students",
        "Platforms": "Web, mobile, VR",
        "Languages": "Multi-language support"
      },
      features: [
        "3D interactive simulations",
        "Real-time collaboration",
        "Assessment tools",
        "Progress tracking",
        "Curriculum alignment"
      ]
    },
    "s6": {
      id: "s6",
      name: "Library Management System",
      price: 1999,
      category: "Campus Management",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800",
      description: "Digital cataloging, circulation, and resource management.",
      specifications: {
        "Books": "Unlimited catalog",
        "Users": "Unlimited members",
        "Barcode": "Scanner included",
        "OPAC": "Online public access",
        "Reports": "Circulation analytics"
      },
      features: [
        "Digital catalog management",
        "Automated circulation",
        "Fine calculation",
        "Member management",
        "Inventory tracking"
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (!product) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => setLocation("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="animate-fade-in-up">
        <Button 
          variant="ghost" 
          className="mb-8 hover:bg-primary/10"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <div>
          <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-6">
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-center text-muted-foreground">
                <div>
                  <div className="text-6xl mb-4">📱</div>
                  <p>Product Image</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <Badge variant="secondary" className="mb-4">{product.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="text-3xl font-bold text-primary mb-6">₹{product.price.toLocaleString()}</div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 mb-8">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Specifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}