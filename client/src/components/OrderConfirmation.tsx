import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderConfirmationProps {
  orderNumber: string;
  customerEmail: string;
  total: number;
  onContinueShopping: () => void;
}

export default function OrderConfirmation({
  orderNumber,
  customerEmail,
  total,
  onContinueShopping,
}: OrderConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <Card>
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Thank you for your order. We've sent a confirmation email to{" "}
            <span className="font-medium">{customerEmail}</span>
          </p>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="font-mono font-bold text-lg">{orderNumber}</p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="font-bold text-xl">₹{total.toLocaleString()}</p>
          </div>
          
          <Button onClick={onContinueShopping} className="w-full">
            Continue Shopping
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}