import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  icon: LucideIcon;
  productCount: number;
  onClick?: () => void;
}

export default function CategoryCard({ title, icon: Icon, productCount, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex flex-col items-center text-center gap-3">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-semibold text-sm" data-testid="text-category-name">{title}</h3>
        <p className="text-xs text-muted-foreground" data-testid="text-product-count">
          {productCount} products
        </p>
      </div>
    </Card>
  );
}
