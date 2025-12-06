import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, FileText, Users, Building } from "lucide-react";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    institutionName: "",
    contactPerson: "",
    email: "",
    phone: "",
    institutionType: "",
    studentCount: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    requirements: ""
  });

  const serviceOptions = [
    "Installation Services",
    "Maintenance Support", 
    "Staff Training",
    "Custom Solutions",
    "24/7 Support",
    "Network Setup"
  ];

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, services: [...prev.services, service] }));
    } else {
      setFormData(prev => ({ ...prev, services: prev.services.filter(s => s !== service) }));
    }
  };

  return (
    <>
      <main className="flex-1">
        <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-background py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-6">
              <Calculator className="h-12 w-12 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Get Custom Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your institution's needs and get a personalized service quote
            </p>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="h-6 w-6 text-orange-600" />
                  Quote Request Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institutionName">Institution Name *</Label>
                    <Input 
                      id="institutionName"
                      placeholder="Enter your institution name"
                      value={formData.institutionName}
                      onChange={(e) => setFormData(prev => ({ ...prev, institutionName: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input 
                      id="contactPerson"
                      placeholder="Your full name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPerson: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="contact@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Institution Type *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, institutionType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select institution type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school">School (K-12)</SelectItem>
                        <SelectItem value="college">College</SelectItem>
                        <SelectItem value="university">University</SelectItem>
                        <SelectItem value="training">Training Center</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Student Count</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, studentCount: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Number of students" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-500">0 - 500</SelectItem>
                        <SelectItem value="500-1000">500 - 1,000</SelectItem>
                        <SelectItem value="1000-5000">1,000 - 5,000</SelectItem>
                        <SelectItem value="5000+">5,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Services Required *</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {serviceOptions.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox 
                          id={service}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm">{service}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                        <SelectItem value="50k-2l">₹50,000 - ₹2,00,000</SelectItem>
                        <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                        <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                        <SelectItem value="above-10l">Above ₹10,00,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                        <SelectItem value="quarter">This Quarter (1-3 months)</SelectItem>
                        <SelectItem value="semester">This Semester (3-6 months)</SelectItem>
                        <SelectItem value="year">This Academic Year</SelectItem>
                        <SelectItem value="planning">Just Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements</Label>
                  <Textarea 
                    id="requirements"
                    placeholder="Please describe your specific technology needs, current setup, and any special requirements..."
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                  />
                </div>

                <div className="flex gap-4 pt-6">
                  <Button size="lg" className="flex-1 bg-orange-600 hover:bg-orange-700">
                    Submit Quote Request
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="py-16 bg-gradient-to-r from-slate-50 to-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">What Happens Next?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Review & Analysis</h3>
                <p className="text-sm text-muted-foreground">Our experts review your requirements within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Custom Proposal</h3>
                <p className="text-sm text-muted-foreground">Receive a detailed quote tailored to your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Consultation Call</h3>
                <p className="text-sm text-muted-foreground">Schedule a call to discuss and finalize details</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}