import CategoryCard from "./CategoryCard";
import { 
  Server, 
  Monitor, 
  Microscope, 
  Printer, 
  BookOpen, 
  Shield, 
  Building2, 
  Battery,
  Brain,
  Users,
  UserCog,
  BarChart
} from "lucide-react";

const categories = [
  { title: "IT Infrastructure", icon: Server, count: 18 },
  { title: "Classroom Devices", icon: Monitor, count: 24 },
  { title: "Learning Labs", icon: Microscope, count: 15 },
  { title: "Office Equipment", icon: Printer, count: 22 },
  { title: "Library Equipment", icon: BookOpen, count: 12 },
  { title: "Security Systems", icon: Shield, count: 16 },
  { title: "Campus Facilities", icon: Building2, count: 14 },
  { title: "Power & Backup", icon: Battery, count: 10 },
];

const softwareCategories = [
  { title: "Admin & Management", icon: BarChart, count: 12 },
  { title: "Teaching & Learning", icon: Brain, count: 18 },
  { title: "Student Support", icon: Users, count: 10 },
  { title: "Faculty & Staff", icon: UserCog, count: 8 },
];

interface CategorySectionProps {
  onCategoryClick?: (category: string) => void;
}

export default function CategorySection({ onCategoryClick }: CategorySectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-section-heading">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of educational technology solutions
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide text-sm text-muted-foreground">
            Hardware Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
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

        <div>
          <h3 className="text-xl font-semibold mb-6 uppercase tracking-wide text-sm text-muted-foreground">
            Software Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softwareCategories.map((category) => (
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
      </div>
    </section>
  );
}
