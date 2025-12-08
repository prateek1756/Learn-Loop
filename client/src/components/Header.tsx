import { useState, useEffect, useRef } from "react";
import { GraduationCap, ShoppingCart, Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onSearchChange: (value: string) => void;
}

const allProducts = [
  { id: "h1", name: "Smart Interactive Whiteboard", category: "Classroom Devices" },
  { id: "h2", name: "VR Learning Kit", category: "Learning Labs" },
  { id: "h3", name: "Enterprise Server Rack", category: "IT Infrastructure" },
  { id: "h4", name: "RFID Access Control System", category: "Security Systems" },
  { id: "h5", name: "3D Printer Pro", category: "Learning Labs" },
  { id: "h6", name: "Solar Power System", category: "Power & Backup" },
  { id: "h7", name: "Smart Projector 4K", category: "Classroom Devices" },
  { id: "h8", name: "CCTV Security Package", category: "Security Systems" },
  { id: "s1", name: "Campus Management ERP", category: "Admin & Management" },
  { id: "s2", name: "Learning Management System", category: "Teaching & Learning" },
  { id: "s3", name: "Student Information System", category: "Student Support" },
  { id: "s4", name: "HR & Payroll Software", category: "Faculty & Staff" },
  { id: "s5", name: "Virtual Lab Platform", category: "Teaching & Learning" },
  { id: "s6", name: "Library Management System", category: "Campus Management" },
];

export default function Header({ cartCount, onCartClick, onSearchChange }: HeaderProps) {
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<typeof allProducts>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchInput = (value: string) => {
    setSearchValue(value);
    if (value.trim()) {
      const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase()) ||
        p.category.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = () => {
    if (searchValue.trim()) {
      onSearchChange(searchValue);
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleSuggestionClick = (productId: string) => {
    setLocation(`/product/${productId}`);
    setSearchValue("");
    setShowSuggestions(false);
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Software", href: "/software" },
    { name: "Hardware", href: "/hardware" },
    { name: "Services", href: "/services" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setLocation("/")}>
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">LearnLoop Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setLocation(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => handleSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-10 w-64"
              />
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-background border rounded-md shadow-lg z-50">
                  {suggestions.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.id)}
                      className="px-4 py-2 hover:bg-muted cursor-pointer border-b last:border-b-0"
                    >
                      <div className="font-medium text-sm">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.category}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Cart, Auth and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              onClick={() => setLocation("/login")}
              className="hidden md:inline-flex"
            >
              Login / Sign Up
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onCartClick}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10"
                />
              </div>
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setLocation(item.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                size="sm"
                onClick={() => {
                  setLocation("/login");
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2"
              >
                Login / Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}