import CategoryCard from "./CategoryCard";
import { Server, Monitor, Microscope, Printer, BookOpen, Shield, Building2, Battery } from "lucide-react";

const hardwareCategories = [
  { 
    title: "IT Infrastructure", 
    icon: Server, 
    count: 18,
    items: ["Servers, routers, firewalls", "Backup and cloud storage"]
  },
  { 
    title: "Classroom Devices", 
    icon: Monitor, 
    count: 24,
    items: ["Smart boards, projectors, computers, tablets"]
  },
  { 
    title: "Learning Labs", 
    icon: Microscope, 
    count: 15,
    items: ["Computer and language labs", "VR/AR kits, 3D printers, robotics"]
  },
  { 
    title: "Office Equipment", 
    icon: Printer, 
    count: 22,
    items: ["Laptops, printers, scanners, RFID devices"]
  },
  { 
    title: "Library Equipment", 
    icon: BookOpen, 
    count: 12,
    items: ["RFID readers, e-book kiosks"]
  },
  { 
    title: "Security Systems", 
    icon: Shield, 
    count: 16,
    items: ["CCTV, access control, cybersecurity firewalls"]
  },
  { 
    title: "Campus Facilities", 
    icon: Building2, 
    count: 14,
    items: ["Smart ID cards, GPS buses, hostel entry systems"]
  },
  { 
    title: "Power & Backup", 
    icon: Battery, 
    count: 10,
    items: ["UPS, solar panels, generators"]
  },
];

interface HardwareCategoriesProps {
  onCategoryClick?: (category: string) => void;
}

export default function HardwareCategories({ onCategoryClick }: HardwareCategoriesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-section-heading">
            Hardware Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium hardware equipment for modern educational environments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {hardwareCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              productCount={category.count}
              onClick={() => onCategoryClick?.(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
