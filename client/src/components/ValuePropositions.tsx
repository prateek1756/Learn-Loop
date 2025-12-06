import { Card, CardContent } from "@/components/ui/card";
import { Award, DollarSign, Headphones } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Certified for Education",
    description: "All products meet educational standards and compliance requirements",
  },
  {
    icon: DollarSign,
    title: "Bulk Pricing Available",
    description: "Special institutional pricing and volume discounts for schools and colleges",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated technical support and training for seamless implementation",
  },
];

export default function ValuePropositions() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center text-center p-6 gap-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" data-testid={`text-value-title-${index}`}>
                  {value.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-value-description-${index}`}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
