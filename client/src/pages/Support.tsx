
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Package, MessageCircle, Clock, Shield } from "lucide-react";

export default function Support() {
  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Support Center</h1>
              <p className="text-xl text-muted-foreground">
                We're here to help you succeed with our educational technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Wrench className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Get help with product installation, configuration, and troubleshooting</p>
                  <Button variant="outline" className="w-full">Get Technical Help</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Package className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Order Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Track orders, manage purchases, and handle returns or exchanges</p>
                  <Button variant="outline" className="w-full">Track My Order</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <MessageCircle className="h-12 w-12 text-primary mx-auto mb-2" />
                  <CardTitle>Live Chat</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4">Chat with our support team for immediate assistance</p>
                  <Button variant="outline" className="w-full">Start Chat</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <CardTitle>Support Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">Emergency Only</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <CardTitle>Priority Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Get faster response times and dedicated support for your institution</p>
                  <Button className="w-full">Upgrade to Priority</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}