import { GraduationCap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">EduTech Store</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Your trusted partner for comprehensive educational technology solutions. 
              Empowering institutions with cutting-edge software and hardware.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/support" className="hover:text-foreground transition-colors">Support</a></li>
              <li><a href="/documentation" className="hover:text-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/software" className="hover:text-foreground transition-colors">Software</a></li>
              <li><a href="/hardware" className="hover:text-foreground transition-colors">Hardware</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="/training" className="hover:text-foreground transition-colors">Training</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 EduTech Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
