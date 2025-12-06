import CategoryCard from "./CategoryCard";
import { Brain, Users, UserCog, BarChart, GraduationCap, Shield } from "lucide-react";

const softwareCategories = [
  { 
    title: "Admin & Management", 
    icon: BarChart, 
    count: 12,
    items: ["ERP for admissions, fees, exams, payroll", "Timetable and finance management", "Library and transport management"]
  },
  { 
    title: "Teaching & Learning", 
    icon: Brain, 
    count: 18,
    items: ["LMS for online classes and quizzes", "Content and assessment tools", "Virtual labs and e-learning platforms"]
  },
  { 
    title: "Student Support", 
    icon: Users, 
    count: 10,
    items: ["Student Information System (SIS)", "Counseling and communication apps", "Hostel management"]
  },
  { 
    title: "Faculty & Staff", 
    icon: UserCog, 
    count: 8,
    items: ["HR and payroll software", "Collaboration and training tools"]
  },
  { 
    title: "Campus Management", 
    icon: GraduationCap, 
    count: 14,
    items: ["Attendance and smart classroom software", "Lab and facilities management"]
  },
  { 
    title: "Security & Compliance", 
    icon: Shield, 
    count: 9,
    items: ["Data backup and exam security", "Accreditation and reporting tools"]
  },
];

interface SoftwareCategoriesProps {
  onCategoryClick?: (category: string) => void;
}

export default function SoftwareCategories({ onCategoryClick }: SoftwareCategoriesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-section-heading">
            Software Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software platforms for educational institution management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </section>
  );
}
