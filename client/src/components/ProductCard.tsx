import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  onAddToCart: (id: string) => void;
  onViewDetails: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  category,
  inStock,
  onAddToCart,
  onViewDetails,
}: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary">{category}</Badge>
          <Badge variant={inStock ? "default" : "destructive"}>
            {inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>
        <CardTitle className="text-lg">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground text-sm">{description}</p>
        <p className="text-2xl font-bold mt-4">₹{price.toLocaleString()}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewDetails(id)}
          className="flex-1"
        >
          View Details
        </Button>
        <Button 
          size="sm" 
          onClick={() => onAddToCart(id)}
          disabled={!inStock}
          className="flex-1"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}